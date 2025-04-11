# backend/routes/consent.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime
from database import get_db
from database.models import Consent
from auth import get_current_user

router = APIRouter()

@router.post("/api/consent")
def submit_consent(
    consented: bool,
    version: str = "v1.0",
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    if not consented:
        raise HTTPException(status_code=400, detail="Consent not provided.")

    consent_record = Consent(
        user_id=current_user.id,
        consented=True,
        timestamp=datetime.utcnow(),
        version=version
    )
    db.add(consent_record)
    db.commit()
    return {"message": "Consent recorded."}
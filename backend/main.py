from fastapi import FastAPI
from azure.identity import DefaultAzureCredential
from azure.keyvault.secrets import SecretClient
import os
import logging
from config import settings
from routes import auth
app.include_router(auth.router)

# Logging Configuration
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# FastAPI App
app = FastAPI(
    title="VitalPath API",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

# Root route
@app.get("/")
def read_root():
    logger.info("Root endpoint hit.")
    return {"message": "Welcome to the VitalPath API 🚀"}

# Health Check
@app.get("/health")
def health_check():
    logger.info("Health check passed.")
    return {"status": "✅ API is healthy"}

# Secret Retrieval Endpoint
@app.get("/check-secret")
async def check_secret(name: str):
    try:
        logger.info(f"Attempting to retrieve secret: {name}")
        keyvault_url = settings.AZURE_KEY_VAULT_URL
        if not keyvault_url:
            return {"error": "AZURE_KEY_VAULT_URL not set in environment."}

        credential = DefaultAzureCredential()
        client = SecretClient(vault_url=keyvault_url, credential=credential)
        secret = client.get_secret(name)
        logger.info(f"Secret {name} retrieved successfully.")
        return {"name": name, "value": secret.value[:8] + "••••••••"}  # Partially masked
    except Exception as e:
        logger.error(f"Error retrieving secret {name}: {e}")
        return {"error": str(e)}


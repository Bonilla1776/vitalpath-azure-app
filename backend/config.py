# backend/config.py

from pydantic_settings import BaseSettings  # ✅ updated for Pydantic v2

class Settings(BaseSettings):
    DB_HOST: str = ""
    DB_PORT: int = 5432
    DB_NAME: str = ""
    DB_USER: str = ""
    DB_PASSWORD: str = ""

    AZURE_KEY_VAULT_URL: str = ""

    AZURE_SPEECH_KEY: str = ""
    AZURE_SPEECH_REGION: str = ""

    AZURE_OPENAI_KEY: str = ""
    AZURE_OPENAI_ENDPOINT: str = ""

    AZURE_COMMUNICATION_KEY: str = ""

    FRONTEND_ORIGIN: str = ""

    class Config:
        env_file = ".env"

settings = Settings()





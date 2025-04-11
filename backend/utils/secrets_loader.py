# /backend/utils/secrets_loader.py

from azure.identity import DefaultAzureCredential
from azure.keyvault.secrets import SecretClient
import os

# Key Vault name and URI
KEY_VAULT_NAME = "vitalpath-keyvault"
KV_URI = f"https://{KEY_VAULT_NAME}.vault.azure.net/"

# Authenticate and connect
credential = DefaultAzureCredential()
client = SecretClient(vault_url=KV_URI, credential=credential)

def get_secret(secret_name: str) -> str:
    try:
        retrieved_secret = client.get_secret(secret_name)
        return retrieved_secret.value
    except Exception as e:
        print(f"Error retrieving secret {secret_name}: {e}")
        return ""

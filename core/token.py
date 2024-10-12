import requests

from secretniy import base
from core.headers import headers


def get_token(data, proxies=None):
    url = (
        "https://user-domain.blum.codes/api/v1/auth/provider/PROVIDER_TELEGRAM_MINI_APP"
    )
    payload = {"query": data}

    try:
        response = requests.post(
            url=url, headers=headers(), json=payload, proxies=proxies, timeout=20
        )
        data = response.json()
        token = data["token"]["access"]
        return token
    except:
        return None

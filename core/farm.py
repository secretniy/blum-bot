import requests

from secretniy import base
from core.headers import headers


def start_farming(token, proxies=None):
    url = "https://game-domain.blum.codes/api/v1/farming/start"

    try:
        response = requests.post(
            url=url, headers=headers(token=token), proxies=proxies, timeout=20
        )
        data = response.json()
        return data
    except:
        return None


def claim_farming(token, proxies=None):
    url = "https://game-domain.blum.codes/api/v1/farming/claim"

    try:
        response = requests.post(
            url=url, headers=headers(token=token), proxies=proxies, timeout=20
        )
        data = response.json()
        return data
    except:
        return None


def process_farming(token, proxies=None):
    process_claim = claim_farming(token=token, proxies=proxies)
    try:
        balance = float(process_claim["availableBalance"])
        base.log(
            f"{base.white}Auto Farm: {base.green}Claim Success | New balance: {balance:,} points"
        )
    except:
        message = process_claim["message"]
        base.log(f"{base.white}Auto Farm: {base.red}Claim Error | {message}")

    process_start = start_farming(token=token, proxies=proxies)
    farmed = float(process_start["balance"])
    if farmed > 0:
        base.log(
            f"{base.white}Auto Farm: {base.yellow}Farming | Farmed point: {farmed:,} points"
        )
    else:
        base.log(f"{base.white}Auto Farm: {base.green}Start Farming Success")

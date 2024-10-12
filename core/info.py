import requests

from secretniy import base
from core.headers import headers


def get_info(token, proxies=None):
    url = "https://game-domain.blum.codes/api/v1/user/balance"

    try:
        response = requests.get(
            url=url, headers=headers(token=token), proxies=proxies, timeout=20
        )
        data = response.json()
        balance = float(data["availableBalance"])
        ticket = data["playPasses"]

        base.log(f"{base.green}Balance: {base.white}{balance:,}")
        return ticket
    except:
        return None

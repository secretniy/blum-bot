# English
# Blum - Auto Claim Bot

🔗 **Referral Link**: [Blum](https://t.me/blum/app?startapp=ref_9yV9Sg3ZGl)

## 📢 Telegram Group

Join our Telegram group to stay updated and get instructions on how to use this tool:

- [Secretniy Channel](https://t.me/secretniy)
- [Secretniy Chat](https://t.me/+eTYhicQb1KczYTYy)

## 🌟 Features

| Feature        | Status | Description                                |
| -------------- | ------ | ------------------------------------------ |
| Auto Check-in  | On/Off | Daily login to get points and game tickets |
| Auto Do Task   | On/Off | Complete tasks                             |
| Auto Claim Ref | On/Off | Claim point from ref                       |
| Auto Farm      | On/Off | Claim and Start farming points             |
| Auto Play Game | On/Off | Play drop game to get more points          |

## 🧑‍🔧 How to install in Linux
#Linux
```shell
apt install -y git python3 python3-pip
git clone https://github.com/secretniy/blum-bot.git
cd blum-bot/
python3 -m pip install -r requirements.txt --break-system-packages
```
Enter you (`query_id=... /user=...`) in file data.txt. Each new token from a new line.

How to find [query_id=... /user=..](https://t.me/secretniy)

To change a file in bash use the command `nano data.txt`

`ctrl+o` `enter` -  save file.

`ctrl+x` -  exit editor.


Modify the config.json file as desired.

To enable functions set `true`
To disable functions `false`

To change a config file in bash use the command `nano config.json`

## 👩‍🔧 How to install in Windows
#Windows
1. Make sure you computer was installed python and git.
   
   python site : [https://python.org](https://python.org)
   
   git site : [https://git-scm.com/](https://git-scm.com/)

2. Clone this repository
   ```shell
   git clone https://github.com/secretniy/blum-bot.git
   ```

3. goto blum-bot directory
   ```
   cd blum-bot
   ```

4. install the require library
   ```
   python -m pip install -r requirements.txt
   ```

5. Edit `data.txt`, input you data token in `data.txt`, find you token in How to find [query_id=... /user=..](https://t.me/secretniy). One line for one data account, if you want add you second account add in new line!

6. execute the main program 
   ```
   python bot.py
   ```


## 🌎 About Proxy

Register on this site to get free proxy : [Here](https://t.me/secretniy)

You can add your proxy list in `proxies.txt` and proxy format is like example below :

Format :

```
http://host:port
http://user:pass@host:port
```

Example :

```
http://127.0.0.1:6969
http://user:pass@127.0.0.1:6969
socks5://127.0.0.1:6969
socks5://user:pass@127.0.0.1:6969
```

## 🚀 Run File

| Run with Proxy                   | Run without Proxy   |
| -------------------------------- | ------------------- |
| `python3 bot-proxy.py`          |  `python3 bot.py`    |

## ⚠️ Note

- Get auth data (`query_id=... /user=...`) in the `Application` tab in DevTools.
- Auto features: Change `false` to `true` in the `config.json` file.
- Supported commands: `/run_bot` `/query_id` `/proxy` `/proxy_web` (Join group to use these commands).

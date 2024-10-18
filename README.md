# Table of Languages
- [English](#English)
- [Русский](#Русский)
# English
# Blum - Auto Claim Bot
# AUTO GAME WORKS APIv2!! with claim DOGS

🔗 **Referral Link**: [Blum](https://t.me/blum/app?startapp=ref_9yV9Sg3ZGl)

## 📢 Telegram Group

Join our Telegram group to stay updated and get instructions on how to use this tool:

- [Secretniy Channel](https://t.me/secretniy)
- [Secretniy Chat](https://t.me/+eTYhicQb1KczYTYy)

## 🌟 Features

| Feature        | Description                                |
| -------------- | ------------------------------------------ |
| Auto Check-in  |Daily login to get points and game tickets |
| Auto Do Task   | Complete tasks                             |
| Auto Claim Ref | Claim point from ref                       |
| Auto Farm      | Claim and Start farming points             |
| Auto Play Game |Works!!         |

## 🧑‍🔧 How to install in Linux
#Linux
```shell
apt install -y git python3 python3-pip nodejs npm
git clone https://github.com/secretniy/blum-bot.git
cd blum-bot/
npm install
```

Enter you (`query_id=... /user=...`) in file `blum-bot/src/data/users.txt`. Each new token from a new line.

How to find [query_id=... /user=..](https://t.me/secretniy)

To change a file in bash use the command `nano users.txt`

`ctrl+o` `enter` -  save file.

`ctrl+x` -  exit editor.


Modify the `blum-bot/src/run/index.js` file as desired.

| Values        | Description                                |
| -------------- | ------------------------------------------ |
| `const DELAY_ACC = 10;`       |Adjust the first loop time interval between threads to avoid spam requests (in seconds) |
| `const MAX_RETRY_PROXY = 20;`         | Set the maximum number of reconnection attempts when the proxy fails. If the retry exceeds the set number of times, it will stop running that account and $     |
| `const MAX_RETRY_LOGIN = 20;`      | Set the maximum number of login attempts when logging in with an error. If the retry exceeds the set number of times, the account will stop running and wr$   |
| `const TIME_PLAY_GAME = [];`          | Set time NOT to play games to avoid server error periods. For example, entering [1, 2, 3, 8, 20] will not play the game in the time frames 1, 2, 3, 8, 20 $            |
| `const IS_SHOW_COUNTDOWN = true;`       |Set countdown to next run        |


To change a config file in bash use the command `nano index.js`

## 👩‍🔧 How to install in Windows
#Windows
1. Make sure you computer was installed Node.js and git.
   
   node.js site : [https://nodejs.org](https://nodejs.org/en/download/package-manager)
   
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
   npm install
   ```

5. Edit `blum-bot/src/data/users.txt`, input you data token in `blum-bot/src/data/users.txt`, find you token in How to find [query_id=... /user=..](https://t.me/secretniy). One line for one data account, if you want add you second account add in new line!

6. execute the main program 
   ```
   npm run start
   ```


## 🌎 About Proxy

Register on this site to get free proxy : [Here](https://t.me/secretniy)

You can add your proxy list in `blum-bot/src/data/proxy.txt` and proxy format is like example below :

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

| Run                   |
| -------------------------------- |
| `npm run start`          | 

## ⚠️ Note

- Automatic attendance every day
- Automatically join the tribe to receive 10% bonus points
- automatically do the task
- Automatically farm/claim when the time comes
- automatically play games
- claim invite points
- Automatically identify proxy, automatically reconnect proxy when error occurs. Anyone who runs a proxy should add it to the proxy.txt file in the line corresponding to the line containing the account that wants to run that proxy. If the account does not want to run a proxy, leave it blank or type skip.
- Multi-threading can run as many accounts as possible, without blocking each other
- Set the game time, by default the game will always be played. If you select peak hours, you can find the variable TIME_PLAY_GAME = [] enter the hours you don't want to play the game to skip playing the game, for example enter [ 1, 2, 3, 8, 20] will not play games during the hours 1, 2, 3, 8, 20 o'clock


For proxy connection errors, the system will try again every 30 seconds. You can set the limit on the number of retries by finding the variable MAX_RETRY_PROXY = 20 in the index.js file to adjust accordingly (default is 20). When the number of reconnection attempts exceeds, the system will automatically stop that account and record errors in the log.error.txt file.

For failed login errors, the system will try again every 60 seconds. You can set the limit on the number of retries by finding the variable MAX_RETRY_LOGIN = 20 in the index.js file to adjust accordingly (default). is 20). When the number of re-login attempts exceeds, the system will automatically stop that account and record errors in the log.error.txt file.


# Русский
# Blum - Автоматический бот - авто игра работает!!

🔗 **Реферальная ссылка**: [Blum](https://t.me/blum/app?startapp=ref_9yV9Sg3ZGl)

## 📢 Группа в Telegram

Присоединяйтесь к нашей группе в Telegram, чтобы быть в курсе событий и получать инструкции по использованию этого инструмента:

- [Секретный канал](https://t.me/secretniy)
- [Секретный чат](https://t.me/+eTYhicQb1KczYTYy)

## 🌟 Особенности

| Характеристика | Описание |
| -------------- | ------------------------------------------ |
| Автоматическая chek-in | Ежедневный вход в систему для получения очков и билетов на игру |
| Автоматическое выполнение заданий | Завершает задания автоматически |
| Автоматическое получение ссылки | Забирайте очки из ссылки |
| Автоматическая ферма | Забирайте и начинайте собирать очки |
| Автоматическая игра |Работает!!         |

## 🧑‍🔧 Как установить в Linux
#Linux

```shell
apt install -y git python3 python3-pip nodejs npm
git clone https://github.com/secretniy/blum-bot.git
cd blum-bot/
install npm
```

Введите свой (`query_id=... /user=...`) в файл `blum-bot/src/data/users.txt`. Каждый новый токен с новой строки.

Как найти [query_id=... /user=..](https://t.me/secretniy)

Чтобы изменить файл в bash, используйте команду "nano" users.txt

"ctrl+o" "enter" - сохранить файл.

"ctrl+x" - выйти из редактора.


Измените файл `blum-bot/src/run/index.js" по своему усмотрению.

| Значения | Описание |
| -------------- | ------------------------------------------ |
| `const DELAY_ACC = 10;` |Отрегулируйте временной интервал первого цикла между потоками, чтобы избежать нежелательных запросов (в секундах) |
| `const MAX_RETRY_PROXY = 20;` | Задает максимальное количество попыток повторного подключения при сбое прокси-сервера. Если повторная попытка превысит установленное количество раз, запуск этой учетной записи будет остановлен и $ |
| `const MAX_RETRY_LOGIN = 20;` | Задает максимальное количество попыток входа в систему при выходе из системы с ошибкой. Если повторная попытка превысит установленное количество раз, учетная запись перестанет работать и wr$ |
| `const TIME_PLAY_GAME = [];` | Установите время, когда вы НЕ будете играть в игры, чтобы избежать периодов ошибок сервера. Например, введя [1, 2, 3, 8, 20], вы не сможете играть в игру в указанные временные рамки 1, 2, 3, 8, 20 $ |
| `const IS_SHOW_COUNTDOWN = true;` |Установите обратный отсчет до следующего запуска |


Чтобы изменить конфигурационный файл, используйте команду `nano index.js`

## 👩‍🔧 Как установить в Windows
#Windows
1. Убедитесь, что на вашем компьютере был установлен Node.js и git.
   
   node.js сайт : [https://nodejs.org](https://nodejs.org/en/download/package-manager)
   
   сайт git : [https://git-scm.com/](https://git-scm.com/)

2. Клонируем этот репозиторий
     ```
     git clone https://github.com/secretniy/blum-bot.git
    ```

3. cd blum-каталог ботов
   ```
   cd blum-bot
   ```

4. установите требуемую библиотеку
   ```
   install npm
   ```

5. Отредактируйте `blum-bot/src/data/users.txt", введите свой токен данных в поле "blum-bot/src/data/users.txt", найдите свой токен в разделе "Как найти [query_id=... /user=..](https://t.me/secretniy). Одна строка для одной учетной записи данных, если вы хотите добавить вторую учетную запись, добавьте в новую строку!

6. запустите основную программу 
   ```
   npm run start
   ```


## 🌎 О прокси-сервере

Зарегистрируйтесь на этом сайте, чтобы получить бесплатный прокси-сервер: [Здесь](https://t.me/secretniy)

Вы можете добавить свой список прокси-серверов в "blum-bot/src/data/proxy.txt", и формат прокси будет таким, как в примере ниже :

Формат :

```
http://host:port
http://user:pass@host:port
```

Пример :

```
http://127.0.0.1:6969
http://user:pass@127.0.0.1:6969
носки 5://127.0.0.1:6969
socks5://user:pass@127.0.0.1:6969
```

## 🚀 Запустить файл

| Запустить |
| -------------------------------- |
| `npm run start` | 

## ⚠️ Примечание

- Автоматическое посещение каждый день
- Автоматически присоединяйтесь к племени и получайте 10% бонусных баллов
- автоматически выполняйте задание
- Автоматически занимайтесь фермерством / оформляйте заявку, когда придет время
- автоматически играйте в игры
- получайте очки за приглашение
- Автоматически определяйте прокси, автоматически подключайте прокси при возникновении ошибки. Любой, кто использует прокси-сервер, должен добавить его в файл proxy.txt в строке, соответствующей строке, содержащей учетную запись, которая хочет использовать этот прокси-сервер. Если учетная запись не хочет запускать прокси-сервер, оставьте поле пустым или введите "пропустить".
- Многопоточность позволяет запускать как можно больше учетных записей, не блокируя друг друга
- Установите время игры, по умолчанию игра будет продолжаться всегда. Если вы выберете часы пиковой нагрузки, вы можете найти переменную TIME_PLAY_GAME = [] введите часы, в которые вы не хотите играть в игру, чтобы пропустить игру, например, введите [ 1, 2, 3, 8, 20] не будете играть в игры в течение 1, 2, 3, 8 часов, 20 часов


В случае ошибок подключения к прокси-серверу система будет повторять попытку каждые 30 секунд. Вы можете установить ограничение на количество повторных попыток, найдя переменную MAX_RETRY_PROXY = 20 в файле index.js для соответствующей настройки (значение по умолчанию - 20). Когда количество попыток переподключения превысит допустимое, система автоматически заблокирует эту учетную запись и запишет ошибки в файл log.error.txt.

В случае ошибок при входе в систему система будет повторять попытку каждые 60 секунд. Вы можете установить ограничение на количество повторных попыток, найдя переменную MAX_RETRY_LOGIN = 20 в файле index.js для соответствующей настройки (по умолчанию). равно 20). Когда количество попыток повторного входа в систему превысит допустимое, система автоматически заблокирует эту учетную запись и запишет ошибки в файл log.error.txt.

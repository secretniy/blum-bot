import sys

sys.dont_write_bytecode = True

from secretniy import base
from core.token import get_token
from core.info import get_info
from core.task import process_check_in, process_do_task, process_claim_ref
from core.farm import process_farming
from core.game import process_play_game

import time


class Blum:
    def __init__(self):
        # Get file directory
        self.data_file = base.file_path(file_name="data.txt")
        self.config_file = base.file_path(file_name="config.json")
        self.keyword_file = base.file_path(file_name="keyword.txt")

        # Initialize line
        self.line = base.create_line(length=50)

        # Initialize banner
        self.banner = base.create_banner(game_name="Blum")

        # Get config
        self.auto_check_in = base.get_config(
            config_file=self.config_file, config_name="auto-check-in"
        )

        self.auto_do_task = base.get_config(
            config_file=self.config_file, config_name="auto-do-task"
        )

        self.auto_claim_ref = base.get_config(
            config_file=self.config_file, config_name="auto-claim-ref"
        )

        self.auto_farm = base.get_config(
            config_file=self.config_file, config_name="auto-farm"
        )

        self.auto_play_game = base.get_config(
            config_file=self.config_file, config_name="auto-play-game"
        )

    def main(self):
        while True:
            base.clear_terminal()
            print(self.banner)
            data = open(self.data_file, "r").read().splitlines()
            num_acc = len(data)
            base.log(self.line)
            base.log(f"{base.green}Number of accounts: {base.white}{num_acc}")

            for no, data in enumerate(data):
                base.log(self.line)
                base.log(f"{base.green}Account number: {base.white}{no+1}/{num_acc}")

                try:
                    token = get_token(data=data)

                    if token:

                        get_info(token=token)

                        # Check in
                        if self.auto_check_in:
                            base.log(f"{base.yellow}Auto Check-in: {base.green}ON")
                            process_check_in(token=token)
                        else:
                            base.log(f"{base.yellow}Auto Check-in: {base.red}OFF")

                        # Do task
                        if self.auto_do_task:
                            base.log(f"{base.yellow}Auto Do Task: {base.green}ON")
                            process_do_task(token=token, keyword_file=self.keyword_file)
                        else:
                            base.log(f"{base.yellow}Auto Do Task: {base.red}OFF")

                        # Claim ref
                        if self.auto_claim_ref:
                            base.log(f"{base.yellow}Auto Claim Ref: {base.green}ON")
                            process_claim_ref(token=token)
                        else:
                            base.log(f"{base.yellow}Auto Claim Ref: {base.red}OFF")

                        # Farm
                        if self.auto_farm:
                            base.log(f"{base.yellow}Auto Farm: {base.green}ON")
                            process_farming(token=token)
                        else:
                            base.log(f"{base.yellow}Auto Farm: {base.red}OFF")

                        # Play game
                        if self.auto_play_game:
                            base.log(f"{base.yellow}Auto Play Game: {base.green}ON")
                            process_play_game(data=data)
                        else:
                            base.log(f"{base.yellow}Auto Play Game: {base.red}OFF")

                    else:
                        base.log(f"{base.red}Token not found! Please get new query id")
                except Exception as e:
                    base.log(f"{base.red}Error: {base.white}{e}")

            print()
            wait_time = 60 * 60
            base.log(f"{base.yellow}Wait for {int(wait_time/60)} minutes!")
            time.sleep(wait_time)


if __name__ == "__main__":
    try:
        blum = Blum()
        blum.main()
    except KeyboardInterrupt:
        sys.exit()

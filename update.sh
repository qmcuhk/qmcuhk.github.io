#!/bin/bash
cd "$(dirname "$0")"  # Move to the script's directory
ssh-add ~/.ssh/id_rsa_github_qmcuhk
git add .
git commit -m "auto update"
git push


#!/bin/bash
git add . && \
git add -u && \
read -r -p "Commit description: " desc
git commit -m "gupl: $desc" && \
git push origin HEAD
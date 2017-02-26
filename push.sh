#!/bin/bash
git add . && \
git add -u && \
read -r -p "Commit description: " desc
git commit -m "webpack: $desc" && \
git push origin HEAD

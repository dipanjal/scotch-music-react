#!/bin/bash

# Remove the commit-msg hook if it exists
if [ -L ".git/hooks/commit-msg" ] || [ -e ".git/hooks/commit-msg" ]; then
    echo "Removing existing commit-msg hook in .git/hooks..."
    rm -f .git/hooks/commit-msg
    echo "commit-msg hook disabled."
else
    echo "No commit-msg hook found in .git/hooks."
fi

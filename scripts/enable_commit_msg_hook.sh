#!/bin/bash

# Function to symlink the Makefile in .git/hooks
symlink_makefile() {
    if [ -L ".git/hooks/Makefile" ] || [ -e ".git/hooks/Makefile" ]; then
        echo "Removing existing Makefile in .git/hooks..."
        rm -f .git/hooks/Makefile
    fi
    echo "Symlinking Makefile to .git/hooks..."
    ln -s ../../Makefile .git/hooks/Makefile
    echo "Makefile symlinked."
}

# Function to enable the commit-msg hook
enable_commit_msg_hook() {
    if [ -L ".git/hooks/commit-msg" ] || [ -e ".git/hooks/commit-msg" ]; then
        echo "Removing existing commit-msg hook in .git/hooks..."
        rm -f .git/hooks/commit-msg
    fi
    echo "Enabling commit-msg hook..."
    cp .git-hooks/commit-msg .git/hooks/commit-msg
    chmod +x .git/hooks/commit-msg
    echo "Commit-msg hook enabled. Type 'git commit -m \"Your message\"' to test."
}

# Main function to orchestrate the setup
main() {
    if [ -d ".git" ]; then
        symlink_makefile
        enable_commit_msg_hook
    else
        echo "Not a git repository, try git init first."
    fi
}

# Invoke the main function
main

#!/bin/bash

# Directory containing the hooks
hooks_dir=".git/hooks"

# Check if the hooks directory exists
if [ ! -d "$hooks_dir" ]; then
    echo "Error: Git hooks directory not found."
    exit 1
fi

# Initialize an array to store enabled hooks
enabled_hooks=()

# List of files to ignore
ignore_list=("Makefile")

# Scan the hooks directory
for hook in "$hooks_dir"/*; do
    # Extract the filename without the path
    hook_name=$(basename "$hook")
    
    # Check if the file is a regular file and doesn't have a .sample extension
    if [ -f "$hook" ] && \
    [[ ! "$hook" == *.sample ]] && \
    [[ ! "${ignore_list[@]}" =~ "$hook_name" ]]; then
        enabled_hooks+=("$hook_name")
    fi
done

# Display the results
if [ ${#enabled_hooks[@]} -eq 0 ]; then
    echo "No hooks are currently enabled."
else
    echo "Enabled hooks:"
    for hook in "${enabled_hooks[@]}"; do
        echo "- $hook"
    done
fi

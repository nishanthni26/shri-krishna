#!/bin/bash
# A simple script to add, commit, and push all changes to your Git repository.

# Add all new and modified files to the staging area
git add .

# Commit the changes with a default message
git commit -m "Deploying changes from Firebase Studio"

# Push the changes to the remote repository
git push

echo "Changes have been pushed to the remote repository."

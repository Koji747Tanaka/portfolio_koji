#!/bin/bash

# Run npm ci when needed
mkdir -p node_modules && touch node_modules/.package-lock-sha1;
PACKAGE_LOCK_SHA1=`sha1sum package-lock.json | echo $(head -c40)`;
if [ "$(cat node_modules/.package-lock-sha1)" = "$PACKAGE_LOCK_SHA1" ]; then 
    echo "Skipped Running npm ci since no changes to package-lock.json found"
else
    echo "Running npm ci.."
    npm ci
fi

if [ $COMMAND == "dev" ]; then
    npm run dev-host
elif [ $COMMAND == "deploy-dry-run" ]; then
    npm run build && npm run deploy-dry-run
elif [ $COMMAND == "deploy" ]; then
    npm run build && npm run deploy
fi

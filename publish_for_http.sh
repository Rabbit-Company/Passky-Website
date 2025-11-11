#!/usr/bin/env bash

check_dependencies () {
  for cmd in "$@"; do
    if ! command -v $cmd >/dev/null 2>&1; then
      echo "This script requires \"${cmd}\" to be installed"
      exit 1
    fi
  done
}

check_dependencies rm mkdir cp for in do done sed mv echo

rm -rf dist

mkdir -p dist/http

cp -r website/* dist/http

echo "Export files..."

for file in dist/http/*.html; do
	echo "$file"
	sed 's/\localhost\:\*\ https\:/localhost\:\*\ http\:/g' $file > "$file.tmp"
	mv "$file.tmp" $file
done

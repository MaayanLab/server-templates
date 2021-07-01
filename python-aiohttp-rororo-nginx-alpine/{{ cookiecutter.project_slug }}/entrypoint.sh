#!/bin/bash

for file in *.j2; do
  jinja2 --format=env "${file}" <(env) > "$(basename ${file} .j2)";
done

$@

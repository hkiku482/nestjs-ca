#!/bin/bash

su -c "$@ ; chown $DUID:$DGID ./ -R"

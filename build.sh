#!/bin/sh

cat js/*.js jszlib/js/inflate.js >dalliance-all.js
java -jar compiler.jar --js dalliance-all.js >dalliance-compiled.js

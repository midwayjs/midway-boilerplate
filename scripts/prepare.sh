#!/bin/bash
set -e

cli=`pwd`/node_modules/.bin/mw
tmpdir=`pwd`/tmp

rm -rf $tmpdir
mkdir -p $tmpdir

pkgs=`find v2 -maxdepth 1 -mindepth 1`
cwd=`pwd`
for pkg in $pkgs
do
  cd $tmpdir
  echo $cwd/$pkg
  $cli new ${pkg#*/} --template=$cwd/$pkg
  cd ${pkg#*/}
  npm run lint || exit 1
  npm run test || exit 1
done

echo 'complete'
#!/bin/bash
set -e

echo $1
generator_script=`pwd`/scripts/generator.js
tmpdir=`pwd`/tmp

rm -rf $tmpdir
mkdir -p $tmpdir

if [ -z "$1" ]
then
  pkgs=`find v2 -maxdepth 1 -mindepth 1`
  cwd=`pwd`
  for pkg in $pkgs
  do
    cd $tmpdir
    echo $cwd/$pkg
    node $generator_script $tmpdir/${pkg#*/} $cwd/$pkg
    cd ${pkg#*/}
    npm install
    npm run lint --if-present || exit 1
    npm run test || exit 1
    echo $tmpdir/${pkg#*/}
  done
else
  cwd=`pwd`
  cd $tmpdir
  pkg=$1
  echo $cwd/$pkg
  node $generator_script $tmpdir/${pkg#*/} $cwd/$pkg
  cd ${pkg#*/}
  npm install
  npm run lint --if-present || exit 1
  npm run test || exit 1
fi

echo 'complete'

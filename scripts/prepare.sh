#!/bin/bash
set -e

echo $1
origin_cwd=`pwd`
generator_script=$origin_cwd/scripts/generator.js
tmpdir=$origin_cwd/tmp

rm -rf $tmpdir
mkdir -p $tmpdir

if [ -z "$1" ]
then
  # v3
  cwd=$origin_cwd
  cd $origin_cwd

  rm -rf $tmpdir
  mkdir -p $tmpdir

  pkgs=`find v3 -maxdepth 1 -mindepth 1`

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
  cwd=$origin_cwd
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

#!/bin/bash
set -e

generator_script=`pwd`/scripts/generator.js
tmpdir=`pwd`/tmp

rm -rf $tmpdir
mkdir -p $tmpdir

pkgs=`find v2 -maxdepth 1 -mindepth 1`
cwd=`pwd`
for pkg in $pkgs
do
  cd $tmpdir
  echo $cwd/$pkg
  node $generator_script $tmpdir/${pkg#*/} $cwd/$pkg
  cd ${pkg#*/}
  npm install
  npm run lint || exit 1
  npm run test || exit 1
done

echo 'complete'
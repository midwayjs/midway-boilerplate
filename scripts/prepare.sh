#!/bin/bash
set -e

echo $1
origin_cwd=`pwd`
generator_script=$origin_cwd/scripts/generator.js
tmpdir=$origin_cwd/tmp

rm -rf $tmpdir
mkdir -p $tmpdir

run_for_pkg() {
  pkg_path=$1
  pkg_name=${pkg_path#*/}
  cd $tmpdir
  echo $origin_cwd/$pkg_path
  node $generator_script $tmpdir/$pkg_name $origin_cwd/$pkg_path
  cd $pkg_name
  pnpm install
  pnpm run lint --if-present || exit 1
  pnpm run test || exit 1
  echo $tmpdir/$pkg_name
}

if [ -z "$1" ]
then
  # v3 & v4
  cwd=$origin_cwd
  cd $origin_cwd

  rm -rf $tmpdir
  mkdir -p $tmpdir

  for ver in v3 v4
  do
    if [ -d "$ver" ]; then
      pkgs=`find $ver -maxdepth 1 -mindepth 1`
      for pkg in $pkgs
      do
        run_for_pkg $pkg
      done
    fi
  done
else
  cwd=$origin_cwd
  cd $tmpdir
  pkg=$1
  run_for_pkg $pkg
fi

echo 'complete'

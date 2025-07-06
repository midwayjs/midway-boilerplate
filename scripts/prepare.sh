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
  npm install
  npm run lint --if-present || exit 1
  npm run test || exit 1
  echo $tmpdir/$pkg_name
}

if [ ! -z "$PKG_ROOT" ] && { [ "$PKG_ROOT" = "v3" ] || [ "$PKG_ROOT" = "v4" ]; }
then
  cwd=$origin_cwd
  cd $origin_cwd
  rm -rf $tmpdir
  mkdir -p $tmpdir
  pkgs=`find $PKG_ROOT -maxdepth 1 -mindepth 1`
  for pkg in $pkgs
  do
    run_for_pkg $pkg
  done
elif [ -z "$1" ]
then
  # 兼容老逻辑，默认不处理
  echo "请通过 PKG_ROOT 指定目录或传入具体包路径"
  exit 1
else
  cwd=$origin_cwd
  cd $tmpdir
  pkg=$1
  run_for_pkg $pkg
fi

echo 'complete'

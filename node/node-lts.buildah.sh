#!/bin/bash

set -euo pipefail

node=$(buildah from scratch)
mnt=$(buildah mount $node) 

buildah config \
  --cmd "node dist/main.js" \
  --env NODE_ENV=production \
  --arch x86_64 \
  --label name=node-lts \
  --workingdir='/app' \
  $node

dnf install -y --installroot $mnt \
  --release 39 \
  --setopt=install_weak_depts=False \
  coreutils \
  bash \
  nodejs

buildah copy $node 'package.json' 'package-lock.json' 'esbuild.mjs' 'src/' '/app'

buildah run $node npm ci
# buildah run $node npm run build

# Vagrant Galleria

A collection of vagrant files for various development environnments.

## Overview

This repository hosts Vagrant files for common development environments I find
myself needing often.

## Getting Started

To use this repo, install the requisite software and copy the desired template.

### Software

|Software|Version|
|--------|-------|
|Vagrant |2.4.0  |
|Podman  |4.8.3  |
|Buildah |1.33.2 |

### Environments

- [c](./c)
- [go](./go)
- [Node](./node)
- [Rust](./rust)
- [OCaml](./ocaml)
- [Julia](./julia)
- [Python](./python)

Each environment contains a minimal Vagrantfile and template project structure.
Buildah scripts included whenever possible.

## Creating the Environments

In the same directory as the `Vagrantfile`, run:

```bash
vagrant up
```

This will spin up the vagrant VM and perform any provisioning necessary for the
development environment.

Use `vagrant ssh` to login to the VM in order to manage the environment.

## Buildah Images

The buildah scripts should be self-contained, requiring only:

```bash
buildah unshare <path/to/script>
```

in order to build the image.

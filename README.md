# Personal Development Setup

This repository contains configurations and convenience scripts optimized for my development environment.

## Usage

Node 16 is needed. To use this setup, clone the repository somewhere and add the directory `bin` to `PATH` like

```sh
# .zshrc
export PATH = /home/personal-dev-setup/bin:$PATH
```

Navigate to the directory install the dependencies and build the project

```sh
npm install
npm run build
```

Then copy a script for your operating system from `scripts` folder to `bin` e.g.

```
cp scripts/windows.ps1 bin/denv.ps1
```

You can replace `denv` with a name you like to use.

## Commands


| Name      | Arguments | Description                      |
|-----------|-----------|----------------------------------|
| `ssh`     |           | Opens `~/.ssh/config` in VSCode. |

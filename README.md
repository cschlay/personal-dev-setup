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

Then you can run the scripts using `devctl`.

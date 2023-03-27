oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g cli
$ green-cloud COMMAND
running command...
$ green-cloud (--version)
cli/0.0.0 darwin-arm64 node-v16.13.1
$ green-cloud --help [COMMAND]
USAGE
  $ green-cloud COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`green-cloud hello PERSON`](#green-cloud-hello-person)
* [`green-cloud hello world`](#green-cloud-hello-world)
* [`green-cloud help [COMMAND]`](#green-cloud-help-command)
* [`green-cloud plugins`](#green-cloud-plugins)
* [`green-cloud plugins:install PLUGIN...`](#green-cloud-pluginsinstall-plugin)
* [`green-cloud plugins:inspect PLUGIN...`](#green-cloud-pluginsinspect-plugin)
* [`green-cloud plugins:install PLUGIN...`](#green-cloud-pluginsinstall-plugin-1)
* [`green-cloud plugins:link PLUGIN`](#green-cloud-pluginslink-plugin)
* [`green-cloud plugins:uninstall PLUGIN...`](#green-cloud-pluginsuninstall-plugin)
* [`green-cloud plugins:uninstall PLUGIN...`](#green-cloud-pluginsuninstall-plugin-1)
* [`green-cloud plugins:uninstall PLUGIN...`](#green-cloud-pluginsuninstall-plugin-2)
* [`green-cloud plugins update`](#green-cloud-plugins-update)

## `green-cloud hello PERSON`

Say hello

```
USAGE
  $ green-cloud hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/jolo-dev/mondaydotcom-green-cloud/blob/v0.0.0/dist/commands/hello/index.ts)_

## `green-cloud hello world`

Say hello world

```
USAGE
  $ green-cloud hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `green-cloud help [COMMAND]`

Display help for green-cloud.

```
USAGE
  $ green-cloud help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for green-cloud.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `green-cloud plugins`

List installed plugins.

```
USAGE
  $ green-cloud plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ green-cloud plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `green-cloud plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ green-cloud plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ green-cloud plugins add

EXAMPLES
  $ green-cloud plugins:install myplugin 

  $ green-cloud plugins:install https://github.com/someuser/someplugin

  $ green-cloud plugins:install someuser/someplugin
```

## `green-cloud plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ green-cloud plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ green-cloud plugins:inspect myplugin
```

## `green-cloud plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ green-cloud plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ green-cloud plugins add

EXAMPLES
  $ green-cloud plugins:install myplugin 

  $ green-cloud plugins:install https://github.com/someuser/someplugin

  $ green-cloud plugins:install someuser/someplugin
```

## `green-cloud plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ green-cloud plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ green-cloud plugins:link myplugin
```

## `green-cloud plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ green-cloud plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ green-cloud plugins unlink
  $ green-cloud plugins remove
```

## `green-cloud plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ green-cloud plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ green-cloud plugins unlink
  $ green-cloud plugins remove
```

## `green-cloud plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ green-cloud plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ green-cloud plugins unlink
  $ green-cloud plugins remove
```

## `green-cloud plugins update`

Update installed plugins.

```
USAGE
  $ green-cloud plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->

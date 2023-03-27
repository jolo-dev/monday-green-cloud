import { Command } from '@oclif/core';

export default class Role extends Command {
  static description = 'It creates a role which assumes the green cloud to inspect the AWS account'

  static examples = [
    `$ create-role new
    Start creating new assume-role! (./src/commands/create-role/index.ts)
`,
  ]

  static flags = {}

  static args = []

  async run(): Promise<void> {
    this.log('Start creating new assume-role! (./src/commands/create-role/index.ts)');
    this.run();
  }
}

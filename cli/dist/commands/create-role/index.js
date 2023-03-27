"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@oclif/core");
class Role extends core_1.Command {
    async run() {
        this.log('Start creating new assume-role! (./src/commands/create-role/index.ts)');
    }
}
exports.default = Role;
Role.description = 'It creates a role which assumes the green cloud to inspect the AWS account';
Role.examples = [
    `$ create-role new
    Start creating new assume-role! (./src/commands/create-role/index.ts)
`,
];
Role.flags = {};
Role.args = [];

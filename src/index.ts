import { openSshConfigFile } from "./ssh/openSshConfigFile";
import { CommandHandler } from "./types";

const commands: Record<string, CommandHandler> = {
  help: () => console.error("Not Implemented"),
  ssh: () => openSshConfigFile(),
};

const [commandName, ...args] = process.argv.slice(2);

try {
  const handler = commands[commandName];
  handler(args);
} catch (e) {
  console.error(`Command ${commandName} is not defined! See "help".`);
}

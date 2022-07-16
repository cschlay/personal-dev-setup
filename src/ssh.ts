import { config, executeCommand } from "./utils";
import { VsCode } from "./vscode";

export const handleSsh = (args: string[]) => {
  switch (args[0]) {
    case "config":
      return openSshConfigFile();
    case "new-key":
      return generateSshKey(args[1]);
  }
};

export const openSshConfigFile = () => {
  const path = `${config.userHome}/.ssh/config`;
  VsCode.openFile(path);
};

export const generateSshKey = (name: string) => {
  const path = `${config.userHome}/.ssh/${name}`;
  console.log("Generating an SSH key to:", path);
  executeCommand("ssh-keygen", ["-t", "ed25519", "-f", path]);
  VsCode.openFile(`${path}.pub`);
};

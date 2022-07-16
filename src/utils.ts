import * as os from "os";
import { spawnSync } from "child_process";

export const config = {
  userHome: os.homedir(),
};

export const executeCommand = (program: string, args: string[]) => {
  const { error } = spawnSync(program, args, { stdio: "inherit" });
  if (error) {
    console.error(error);
  }
};

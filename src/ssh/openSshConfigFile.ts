import * as os from "os";
import { exec } from "child_process";

export const openSshConfigFile = () => {
  const path = `${os.homedir()}/.ssh/config`;
  exec(`code "${path}"`);
};

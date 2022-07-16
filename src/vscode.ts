import { exec } from "child_process";

const openFile = (path: string) => {
  console.log(`Open file "${path}" in VS Code.`);
  exec(`code "${path}"`);
};

export const VsCode = { openFile };

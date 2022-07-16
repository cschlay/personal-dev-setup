import * as childProcess from "child_process";
import { VsCode } from "./vscode";

describe("vscode", () => {
  it("opens the file using a quoted path", () => {
    jest.spyOn(childProcess, "exec").mockImplementation();
    VsCode.openFile("/test path/password");
    expect(childProcess.exec).toBeCalledWith(`code "/test path/password"`);
  });
});

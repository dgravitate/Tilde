import shell from "shelljs";
import { CLONE_PATH } from "../../env.mjs";
import { STATUS_OK, STATUS_ERROR } from "../../consts.mjs";
import { Action } from "../index.mjs";

export default class PutKataFilesIntoPerfectProjectStructure extends Action {
  name = "put java kata files into gradle directory structure";

  action = async function ({ perfectProjectPath, destinationPath }) {
    const scriptPath =
      "./actions/java/put-kata-files-into-perfect-project-structure.sh";

    const command = `DESTINATION_PATH=${destinationPath} PERFECT_PROJECT_PATH=${perfectProjectPath}  /bin/bash -c '${scriptPath}'`;

    await shell.exec(command).stdout;

    return {
      status: STATUS_OK,
    };
  };
}

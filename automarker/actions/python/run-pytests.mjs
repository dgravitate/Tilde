import { Action } from "../index.mjs";
import shell from "shelljs";
import { STATUS_OK } from "../../consts.mjs";

export default class RunPytests extends Action {
  name = "running pytest";
  action = async function ({ destinationPath }) {
    // const scriptPath = "./actions/javascript/do-npm-install.sh";
    // const command = `DESTINATION_PATH=${destinationPath} /bin/sh -c ${scriptPath}`;
    // await shell.exec(command);
    // return {
    //   status: STATUS_OK,
    // };
  };
}

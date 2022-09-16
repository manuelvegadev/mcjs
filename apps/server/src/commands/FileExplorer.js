import {readdirSync} from "fs";

export class FileExplorer {

  static listFiles(path) {

    return readdirSync(path)

  }

}

export default FileExplorer

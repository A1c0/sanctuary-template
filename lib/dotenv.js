import path from 'path';
import {fileURLToPath} from 'url';

import dotenv from 'dotenv';

const __filename = fileURLToPath (import.meta.url);
const __dirname = path.dirname (__filename);

export const APP_DIR_NAME = path.dirname (__dirname);

let alreadyLoadDotEnv = false;

export const loadDotEnv = () => {
  if (alreadyLoadDotEnv) {
    return;
  }
  dotenv.config ({path: `${APP_DIR_NAME}/.env`});
  process.env.APP_DIR_NAME = APP_DIR_NAME;
  alreadyLoadDotEnv = true;
};

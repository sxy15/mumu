import fs from 'node:fs';
import { URL, fileURLToPath } from 'node:url';
import { logger } from 'rslog';

const pkgPath = fileURLToPath(new URL('../package.json', import.meta.url));
const pkgJson = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

export const cliVersion: string = pkgJson.version;

logger.greet(`mumu cli v${cliVersion}`);

process.env.MUMU_CLI_VERSION = cliVersion;

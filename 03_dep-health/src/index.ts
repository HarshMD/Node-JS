// src/index.ts
import _ from 'lodash';
import dayjs from 'dayjs';
import chalk from 'chalk';
import axios from 'axios';
import lodashPkg from 'lodash/package.json' with { type: 'json' };

console.log('lodash:', lodashPkg.version);
console.log('dayjs:', (dayjs as any).version ?? 'see package.json');
console.log("dayjs:", "installed");
console.log("chalk:", "installed");
console.log("axios:", axios.VERSION);
import path from 'path';
import HexletFs from '../js_errors_HexletFs';
/*eslint-disable*/

const files = new HexletFs;
const child = files.mkdirSync('/etc');
files.mkdirSync('/etc/nginx');


console.log(files);
console.log(child);
// console.log(path.sep);
// console.log(path.parse('/etc'));
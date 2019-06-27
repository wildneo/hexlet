import path from 'path';
import HexletFs from '../js_errors_HexletFs';
/*eslint-disable*/

const files = new HexletFs;

console.table(files);
console.log(files.getPathParts('\\var\\etc\\'));
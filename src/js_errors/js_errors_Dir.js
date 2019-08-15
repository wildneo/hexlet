import Node from './js_errors_Node';

export default class extends Node {
  isDirectory() {
    return true;
  }

  isFile() {
    return false;
  }
}

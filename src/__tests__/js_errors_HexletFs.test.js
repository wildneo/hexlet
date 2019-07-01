import HexletFs from '../js_errors_HexletFs';
/*eslint-disable*/

describe ('FS', () => {
  let files;

  beforeEach(() => {
    files = new HexletFs();
  });

  test ('mkdirSync', () => {
    expect(files.isDirectory('/etc')).toBe(false);

    files.mkdirSync('/etc');
    expect(files.isDirectory('/etc')).toBe(true);

    files.mkdirSync('/etc/nginx/unknown');
    expect(files.isDirectory('/etc/nginx/unknown')).toBe(false);

    files.mkdirSync('/etc/nginx');
    expect(files.isDirectory('/etc/nginx')).toBe(true);
  });

  test ('mkdirSync2', () => {
    expect(files.isDirectory('/var//')).toBe(false);

    files.mkdirSync('/var/');
    expect(files.isDirectory('/var////')).toBe(true);
    expect(files.isDirectory('/var')).toBe(true);

    files.mkdirSync('/var//log//////');
    expect(files.isDirectory('/var/log')).toBe(true);
    expect(files.isDirectory('/var///log')).toBe(true);
  });
  
  test ('mkdirSync3', () => {
    expect(files.isFile('/file.txt')).toBe(false);

    files.touchSync('/file.txt');
    expect(files.isFile('/file.txt')).toBe(true);

    expect(files.isDirectory('/file.txt/unknown')).toBe(false);

    files.mkdirSync('/file.txt/unknown');
    expect(files.isDirectory('/file.txt/unknown')).toBe(false);
  });

  test('#touchSync', () => {
    expect(files.isFile('/file.txt')).toBe(false);

    files.touchSync('/unknown1/file.txt');
    expect(files.isFile('/unkown1/file.txt')).toBe(false);

    files.touchSync('/file.txt');
    expect(files.isFile('/file.txt')).toBe(true);

    files.mkdirSync('/etc');
    files.touchSync('/etc/bashrc');
    expect(files.isFile('/etc/bashrc')).toBe(true);
  });

  test('#touchSync2', () => {
    expect(!files.isFile('/file.txt')).toBe(true);

    files.touchSync('/file.txt');
    expect(files.isFile('/file.txt')).toBe(true);

    expect(files.isFile('/file.txt/another.txt')).toBe(false);

    files.touchSync('/file.txt/another.txt');
    expect(files.isFile('/file.txt/another.txt')).toBe(false);
  });

  
  // it('#mkdirSync', () => {
  //   files.mkdirSync('/etc');
  //   expect(files.statSync('/etc').isDirectory()).toBeTruthy();

  //   files.mkdirSync('/etc/nginx');
  //   expect(files.statSync('/etc/nginx').isDirectory()).toBeTruthy();
  // });

  // it('#mkdirSync2', () => {
  //   files.mkdirSync('/var/');
  //   expect(files.statSync('/var////').isDirectory()).toBeTruthy();
  //   expect(files.statSync('/var').isDirectory()).toBeTruthy();

  //   files.mkdirSync('/var//log//////');
  //   expect(files.statSync('/var/log').isDirectory()).toBeTruthy();
  //   expect(files.statSync('/var///log').isDirectory()).toBeTruthy();
  // });

  // it('#touchSync', () => {
  //   files.touchSync('/file.txt');
  //   expect(files.statSync('/file.txt').isFile()).toBeTruthy();

  //   files.mkdirSync('/etc');
  //   files.touchSync('/etc/bashrc');
  //   expect(files.statSync('/etc/bashrc').isFile()).toBeTruthy();
  // });
});
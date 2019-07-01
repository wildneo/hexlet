import HexletFs from '../js_errors_HexletFs';
/*eslint-disable*/

describe('FS', () => {
  let files;

  beforeEach(() => {
    files = new HexletFs();
    files.mkdirSync('/etc');
    files.mkdirSync('/opt');
    files.mkdirSync('/etc/nginx');
  });

  it('hexletFs', () => {
    expect(files.mkdirSync('/opt/folder/inner')).toBe(false);
    expect(files.statSync('/opt').isDirectory()).toBe(true);
    expect(files.statSync('/etc/unknown')).toBe(null);

    files.touchSync('/opt/file.txt');
    files.touchSync('/etc/nginx/nginx.conf');
    expect(files.statSync('/etc/nginx').isDirectory()).toBe(true);
    expect(files.statSync('/etc/nginx').isFile()).toBe(false);
    expect(files.statSync('/etc/nginx/nginx.conf').isDirectory()).toBe(false);
    expect(files.statSync('/etc/nginx/nginx.conf').isFile()).toBe(true);
    expect(files.mkdirSync('/etc/nginx/nginx.conf/wrong')).toBe(false);

    expect(files.touchSync('/etc/nginx/nginx.conf/wrong')).toBe(false);
    expect(files.touchSync('/opt/folder/inner')).toBe(false);
    expect(files.statSync('/opt/file.txt').isFile()).toBe(true);

    files.mkdirpSync('/etc/nginx/conf.d');
    files.mkdirpSync('/usr/admin/docs');
    expect(files.readdirSync('/usr/admin/docs')).toEqual([]);
    expect(files.statSync('/etc/nginx/conf.d').isDirectory()).toBe(true);
    expect(files.mkdirpSync('/etc/nginx/nginx.conf/wrong')).toBe(false);

    expect(files.readdirSync('/etc/nginx')).toEqual(['nginx.conf', 'conf.d']);
    expect(files.readdirSync('/')).toEqual(['etc', 'opt', 'usr']);
    expect(files.readdirSync('/etc/nginx/undefined')).toBe(false);
    expect(files.readdirSync('/etc/nginx/nginx.conf')).toBe(false);

    files.rmdirSync('/etc/nginx/conf.d');
    expect(files.readdirSync('/etc/nginx')).toEqual(['nginx.conf']);

    expect(files.rmdirSync('/etc/unknown')).toBe(false);
    expect(files.rmdirSync('/etc/nginx')).toBe(false);

    expect(files.rmdirSync('/etc/nginx/nginx.conf')).toBe(false);

    files.rmdirSync('/usr/admin/docs');
    expect(files.readdirSync('/usr/admin/docs')).toBe(false);
  });
});

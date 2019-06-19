const fs = require('fs');

const moduleName = process.argv[2];
const modules = [
  {
    path: './src',
    ext: 'js',
    data: `const ${moduleName} = (params) => {\n\t\n};\n\nexport default ${moduleName};\n`,
  },
  {
    path: './src/__tests__',
    ext: 'test.js',
    data: `import ${moduleName} from '../${moduleName}';\n/*eslint-disable*/`,
  },
];

// eslint-disable-next-line no-console
const print = msg => console.log(msg);

/**
 * Проверяет сушествует файл/директория
 * @param   {string}  path  путь к файлу или директории
 * @return  {boolean} boolean
 */
const fileExist = (path) => {
  try {
    fs.statSync(path);

    return true;
  } catch (err) {
    return !(err && err.code === 'ENOENT');
  }
};

const makeFile = (name, options) => {
  const { path, ext, data } = options;
  const filePath = `${path}/${name}.${ext}`;

  if (!fileExist(filePath)) {
    fs.writeFile(filePath, data, err => (
      err
        ? print(`Не удалось создать файл: ${err}`)
        : print(`Файл успешно создан: ${filePath}`)
    ));
  } else {
    print(`Файл уже существует: ${filePath}`);
  }
};

modules.forEach(item => makeFile(moduleName, item));

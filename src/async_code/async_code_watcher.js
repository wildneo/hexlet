import fs from 'fs';

const watcher = (filepath, period, cb) => {
  const id = setInterval(() => {
    fs.stat(filepath, (err, stats) => {
      if (err) {
        clearInterval(id);
        cb(err);
        return;
      }
      const now = Date.now();
      const mtime = stats.mtimeMs;
      if (now - mtime < period) {
        cb(null);
      }
    });
  }, period);

  return id;
};

export default watcher;

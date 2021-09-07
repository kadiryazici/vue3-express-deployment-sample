const fs = require('fs-extra');
const path = require('path');

const root = process.cwd();
const dist = path.join(root, 'dist');
const target = path.join(process.cwd(), '..', 'server', 'static');

fs.copySync(dist, target, {
   overwrite: true,
   recursive: true
});

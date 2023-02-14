const path = require('path');
console.log(path.sep);

const join = path.join('/content/', 'inside', 'text.txt');
console.log(join);

const filePath = path.basename(join);
console.log(filePath)
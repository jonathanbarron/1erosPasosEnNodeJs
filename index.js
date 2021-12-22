const { tblmulti, tblMsi } = require('./dependencias/crear-tbl');
const argv = require('./config/yargs');

// const [,,arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');
// // console.log(base);
const base = argv.b;
const listar = argv.l;
const limite = argv.h;
tblmulti(base, listar, limite)
.then(filename => console.log('File crado en: ', filename.magenta))
.catch(err => console.log(err));

// tblMsi(12400,"Laptop DELL")
// .then(filename => console.log(filename, 'creado'))
// .catch(err => console.log(err));

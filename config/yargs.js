const argv = require('yargs')
            .option('b',{
                alias:'base',
                type: 'number',
                describe:'Base para Tbl de Multiplicar',
                demandOption: true
            })
            .option('l',{
                alias:'listar',
                describe:'Listar tbl de Multiplicar',
                type: 'boolean'
            })
            .option('h',{
                alias:'hasta',
                describe:'Limite de multiplicacion',
                type: 'number'
            })
            .check(( argv, option ) =>{
                if (isNaN(argv.b)) {
                    throw 'La base tiene que ser un numero';
                }
                return true;
            })
            .argv;

// console.log(process.argv);

// console.log(argv);

module.exports = argv;
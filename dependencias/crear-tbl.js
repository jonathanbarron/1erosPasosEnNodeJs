
const fs     = require('fs');
const colors = require('colors');

/// imprimir la tabla del 5
const tblmulti = async(n,l,h) =>{
    try {
         // let n = 5 ;
        let salida = "";
        let consola = "";
        for (let i = 1; i <= h; i++) {
            
        let result = n*i;
        salida += `${n} x ${i} = ${result}\n`;    
        consola += `${colors.blue(n)} ${'x'.magenta} ${colors.green(i)} ${'='.gray} ${colors.yellow(result)}\n`;    
        
        }
        let path = `extracto/tabla-del-${n}.txt`;
        if (l == true) {
            console.log('================'.green);
            console.log('Tabla del'.green, colors.yellow(n));
            console.log('================'.green);

            console.log(consola);  
        }
        // console.log(salida);

        //guarda el file con el path seleccionado
        // fs.writeFile(pathpath, salida, (err) => {
        //     if(err) throw err;

        //     console.log(`${path} Creado!!`);
        // });

        //version sync
        fs.writeFileSync(path, salida);

        return path;
    } catch (error) {

        throw error;
        
    }
}

const tblMsi = async(n,p) =>{
    try {
         // let n = 5 ;
        let salida = "";
        for (let i = 1; i <= 18; i++) {
            
            let result = n/i;
        if(i== 3){
            salida += `Pago a 3 MSI de $${n} / ${i} = ${Math.round(result)}\n`;    
        }

        if(i== 6){
            salida += `Pago a 6 MSI de $${n} / ${i} = ${Math.round(result)}\n`;    
        }

        if(i== 9){
            salida += `Pago a 9 MSI de $${n} / ${i} = ${Math.round(result)}\n`;    
        }

        if(i== 12){
            salida += `Pago a 12 MSI de $${n} / ${i} = ${Math.round(result)}\n`;    
        }

        if(i== 18){
            salida += `Pago a 18 MSI de $${n} / ${i} = ${Math.round(result)}\n`;    
        }
        
        }
        let path = `tabla a pagos Msi de ${p} $${n}`;
        if (listar == true) {
            console.log(salida);  
        }

        //guarda el file con el path seleccionado
        // fs.writeFile(pathpath, salida, (err) => {
        //     if(err) throw err;

        //     console.log(`${path} Creado!!`);
        // });

        //version sync
        fs.writeFileSync(path, salida);

        return path;
    } catch (error) {

        throw error;
        
    }
}

module.exports = {
     tblmulti,
     tblMsi
}







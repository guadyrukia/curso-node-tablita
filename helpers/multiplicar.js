const fs = require('fs');

const CrearTablaMultiplicar = async(base, listar, hasta) => 
{
    try
    {
    console.log(`=============================`)
    console.log(`    Tabla del ${ base }`   )
    console.log(`=============================`)

    let salida = '';

    for(var i = 0; i < hasta + 1; i++) 
    {
        salida += `${ base } * ${i} = ${ base * i }\n`;
    }

    if(listar == true)
    {
        console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-del-${ base }.txt`, salida);

    return `tabla-del-${ base }.txt`
    }
    catch (err)
    {
        throw err;
    }
}

module.exports = 
{
    CrearTablaMultiplicar
}
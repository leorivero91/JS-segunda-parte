var fs= require ('fs');


 try{
    let data= fs.readFileSync('./manual.txt' , 'utf-8')
    console.log(data);
 } catch(err){
    console.log('No se encuentra el archivo')
 }
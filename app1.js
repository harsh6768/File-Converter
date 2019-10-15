const express=require('express');
const jsonToCsv=require('json2csv').parse;
const csvToJson=require('csvtojson');
const fs=require('fs');


const app=express();

//to change the csv to json
csvToJson().fromFile('./source.csv')
.then(source=>{

    console.log(source);

    //insert the object into the array of object
    source.push({
        "sku":"56789",
        "title":"Fortnite",
        "hardware":"Nintendo Switch",
        "price":"00.00"
    })

    //convert json to csv and write onto to file
    const csv=jsonToCsv(source,{fields:['sku','title','hardware','price']});
    //write into the file
    fs.writeFileSync("./destination.csv",csv)

})

app.use('/',routes);

const PORT=process.env.PORT||3001;
app.listen(PORT,()=>console.log(`Server is up on port ${PORT}...`));

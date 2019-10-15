const csvToJson=require('csvtojson');
const fs=require('fs');

let csvToJsonConvert=(req,res)=>{
    
    const {file}=req.files;

    console.log(file);

    csvToJson().fromFile(file.path)
    .then(result=>{
        
        const jsonData=JSON.stringify(Object.assign({},result));

        //write the json data to json file
        fs.writeFile('./response.json',jsonData,(err)=>{

            console.log(jsonData);
            
            if(err) throw err;
            res.send({
                status:200,
                data:result,
                message:'Successfully Converted CSV to JSON'
            })

        });
    })
    .catch(err=>{
        res.send({
            status:400,
            data:err,
            message:'Error occured!!!'
        })
    })


}
module.exports={
    csvToJsonConvert
}
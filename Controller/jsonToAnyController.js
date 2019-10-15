const jsonToCsv=require('json2csv').parse;
const fs=require('fs');

let jsonToCsvConvert=(req,res)=>{

    // const {file}=req.files;

    fs.readFile('./response.json','utf-8',(err,data)=>{

        // console.log(data);
        if(err) throw err;

        console.log(JSON.parse(data))
        //Need to be implement proper
        //convert jsonToCsv
        const csv=jsonToCsv(data['0'],{fields:['response_id','class','response_text']});

        fs.writeFile('./destination.csv',csv,(err)=>{

            if(err) throw err;
            res.send({
                status:200,
                message:'Successfully converted JSON TO CSV'
            });

        })

    })

}

module.exports={
    jsonToCsvConvert
}
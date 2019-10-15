const express=require('express');
const routes=require('./Routes/routes');
const app=express();

app.use('/',routes);

const PORT=process.env.PORT||3001;
app.listen(PORT,()=>console.log(`Server is up on port ${PORT}...`));

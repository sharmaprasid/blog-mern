const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config();

const Db=async()=>{try{
    await mongoose.connect(process.env.MONGO_URl,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
    }).then(console.log("connected to mongo"));
}catch(err){
    console.log(err);
}
}
module.exports=Db;
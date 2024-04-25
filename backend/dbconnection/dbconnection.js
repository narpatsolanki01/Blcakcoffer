import mongoose from "mongoose";
const connect=async(databse)=>{
    try{
       await mongoose.connect(databse)
        console.log("Connection Successfull");
    }
    catch(err){
        console.log(err);
    }
}
export default connect;

import Data from "../modles/DataModel.js";
const get_data=async(req,res)=>{
    try{
        const data=await Data.find();
        if(data.length==0){
            res.json({message:"No Data Found"});
        }
        res.json(data);
    }
    catch(err){
        res.json({message:err});
    }
}
export {
    get_data
} 
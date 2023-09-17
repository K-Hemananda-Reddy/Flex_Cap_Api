import mongoose,{Schema} from "mongoose";

const accidentSchema=new Schema(
    {
        latitude:String,
        longitude:String,
        email:String
    },
    {
        timestamps:true
    }
)

const Accidents=mongoose.models.Accidents||mongoose.model("Accidents",accidentSchema)

export default Accidents
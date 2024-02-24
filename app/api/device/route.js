import Device from "@/Models/Device"
import connectMongo from "@/libs/mongodb"
import { NextResponse } from "next/server"


export async function POST(request){
    const {Phone,MacAddress}=await request.json()
    await connectMongo()
    await Device.create({Phone,MacAddress})
    return NextResponse.json({message:"Device Registered"},{status:201})
}

export async function GET(){
    await connectMongo()
    const res=await Device.find()
    return NextResponse.json({res})
    
}
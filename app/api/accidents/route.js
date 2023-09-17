import Accidents from "@/Models/Accidents"
import connectMongo from "@/libs/mongodb"
import { NextResponse } from "next/server"

export async function POST(request){
    const {latitude,longitude,email}=await request.json()
    await connectMongo()
    await Accidents.create({latitude,longitude,email})
    return NextResponse.json({message:"Accident occured"},{status:201})
}
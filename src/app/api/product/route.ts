import { NextResponse } from "next/server";

export async function GET() {
    
    try{
        return NextResponse.json({message:"hi"})
    }catch(error){
        return NextResponse.json({message:"failed"})
    }
    
    
}
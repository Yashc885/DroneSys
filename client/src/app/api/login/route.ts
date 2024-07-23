import { NextResponse} from "next/server";


export async function POST(red:Request)  {
    return NextResponse.json({msg : "ok"})
}
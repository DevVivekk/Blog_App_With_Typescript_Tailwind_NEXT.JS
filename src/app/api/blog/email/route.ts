import { NextResponse,NextRequest } from "next/server";
import { writeFile } from "fs/promises";
import { connectDb } from '@/db/datacon'
import { BlogModel } from "../../../../models/blogMode";
export async function GET(req: NextRequest) {
    try {
        await connectDb();  // Ensure the database is connected before querying

        const data = await BlogModel.find({});
        return NextResponse.json({ success: true, msg: data });
    } catch (e) {
        console.log("e ", e);
        return NextResponse.json({ success: false, msg: "Error occurred" });
    }
}
export async function POST(req:NextRequest){
    await connectDb();
    const formdata = await req.formData();
    const timeStamp = Date.now();
    const image:any = formdata.get("image");
    const imageByteData = await image?.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timeStamp}_${image?.name}`;
    await writeFile(path,buffer);
    const imageUrl = `/${timeStamp}_${image?.name}`
    const blogdata = {
        title:`${formdata.get("title")}`,
        description:`${formdata.get("description")}`,
        image:imageUrl,
        category:`${formdata.get("category")}`,
        author:`${formdata.get("author")}`,
        author_img:`${formdata.get("authorImg")}`
    }
    const ans = await BlogModel.create(blogdata);
    console.log(ans);
    return NextResponse.json({success:true,msg:"Blog Added"});
}
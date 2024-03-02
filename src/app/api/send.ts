import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
    message: string
}
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
){

    const {  }

    try{

    } catch (err){
        res.status(500).send({ message: 'Failed to save Data' })
    }
}
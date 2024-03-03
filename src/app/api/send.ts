// import { NextApiRequest } from "next";
// import { PrismaClient } from '@prisma/client';
//
//
// const prisma = new PrismaClient();
//
// type ResponseData = {
//     message: string;
// }
//
// export async function GET (
//     req: NextApiRequest,
// ) {
//     // const { to, from, amount, blockchain, type, username, firstName, lastName } = req.body;
//
//     try {
//         // let user = await prisma.user.findUnique({
//         //     where: { username: username }
//         // });
//         //
//         // if (!user) {
//         //     user = await prisma.user.create({
//         //         data: {
//         //             username: username,
//         //             firstName: firstName,
//         //             lastName: lastName
//         //         }
//         //     });
//         // }
//         //
//         // await prisma.transaction.create({
//         //     data: {
//         //         to: to,
//         //         from: from,
//         //         amount: amount,
//         //         blockchain: blockchain,
//         //         type: type,
//         //         transactionType: 'send',
//         //         userId: user.id
//         //     }
//         // });
//
//         Response.json({Msg:"your message"}, {status:200});
//     } catch (err) {
//         console.error(err);
//         Response.json({Msg:"your message"}, {status:500});
//     } finally {
//         await prisma.$disconnect();
//     }
// }

import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    return NextResponse.json({ msg: 'Hello from server' })
}
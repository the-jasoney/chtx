import { serialize } from 'cookie';
import { setCookies } from 'cookies-next';
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const raw_name = req.query.name;
    if (raw_name != undefined) {
        let name = raw_name;
        await prisma.user.create({
            data: {
                name: name,
                lastUsed: new Date()
            }
        });

        const currentUser = await prisma.user.findFirst({
            where: {
                name: name
            }
        });
        setCookies('chtx-uid', currentUser.id, {req: req, res: res, maxAge: 2**31})
        res.status(200).json(currentUser)
    } else {
        res.status(500).json({error: 'bad request'})
        return;
    }
}

export default handler;
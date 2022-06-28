import { GetServerSideProps } from 'next';
import Head from 'next/head';
import prisma from '../../lib/prisma';
import { NextCompWithTitle } from '../../types/types';

const Server: NextCompWithTitle = () => {
    return (
        <>
            <Head>
                <title>server</title>
            </Head>
        </>
    )
}

Server.title = '';

// @ts-ignore
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const server = await prisma.server.findUnique({
        where: {
            id: String(params?.id)
        },
        include: {
            members: {
                select: {
                    name: true
                }
            },
            messages: {
                select: {
                    content: true
                }
            }
        }
    });
    return {
        props: server
    }
}

Server

export default Server

import { GetServerSideProps } from 'next';
import Message from '../../components/message';
import prisma from '../../lib/prisma';
import { FCWithTitle, NextCompWithTitle } from '../../types/types';

type user = {
    name: string;
    id?: string;
}

type message = {
    author: user;
    content: string;
    id?: string;
}

type ServerProps = {
    id: string;
    name: string;
    members: user[];
    messages: message[];
};

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
                    content: true,
                    author: {
                        select: {
                            name: true
                        }
                    }
                }
            }
        }
    });
    return {
        props: server
    }
}

const Server: FCWithTitle<ServerProps> = ({ id, name, members, messages }) => {
    return (
        <>  
            {messages.map((value) => <Message author={value.author.name} content={value.content} />)}  
        </>
    )
}

Server.title = '';

export default Server

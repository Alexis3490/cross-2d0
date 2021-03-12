import Head from 'next/head';
import { PrismaClient, Utilisateur, Prisma } from '@prisma/client';
import {useState} from "react";
import AddUserForm from "../components/addUser";

const prisma = new PrismaClient();

export async function getServerSideProps() {
    const user: Utilisateur[] = await prisma.utilisateur.findMany();
    return {
        props: {
            initialContacts: user
        }
    };
}

interface addUser {
    onSubmit: any;
}

async function addUser(user: any) {
    const reponse = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify(user)
    })

    if (!reponse.ok)
    {
        throw  new Error(reponse.statusText)
    }
    return await reponse.json()
}


export default function Index({ initialContacts }) {
   const [user, setUser] = useState<Utilisateur[]>(initialContacts);

    return (
        <>
            <Head>
                <title>Contacts App</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link
                    href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
                    rel="stylesheet"
                />
            </Head>
            {user}
            <AddUserForm
                onSubmit={async (data: any, e: { target: { reset: () => void; }; }) => {
                    try {
                        await addUser(data);
                        setUser([...user, data]);
                        e.target.reset();
                    } catch (err) {
                        console.log(err);
                    }
                }}
            />

        </>
    );
}
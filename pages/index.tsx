import Head from 'next/head';


//import { PrismaClient, Contact, Prisma } from '@prisma/client';

//const prisma = new PrismaClient();

export async function getServerSideProps() {
    //const contacts: Contact[] = await prisma.contact.findMany();
    return {
        props: {
            initialContacts: ""
        }
    };
}


export default function Index() {
   // const [contacts, setContacts] = useState<Contact[]>(initialContacts);
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
            <div style={{textAlign: "center"}}>

                <h1 style={{fontSize: "20px"}}> Registrer </h1>
            <br/>
                <form>
                    <label> Email </label>
                    <br/>
                    <input type="text" name="name" style={{border: "2px solid black", borderRadius: "20px"}} />
                    <br/><br/>
                    <label> Firstname </label>
                        <br/>
                    <input type="text" name="name" style={{border: "2px solid black", borderRadius: "20px"}} />
                    <br/><br/>
                    <label> Lastname </label>
                        <br/>
                    <input type="text" name="name" style={{border: "2px solid black", borderRadius: "20px"}} />
                    <br/><br/>
                    <label> Birthdate </label>
                        <br/>
                    <input type="date" name="name" style={{border: "2px solid black", borderRadius: "20px"}} />
                    <br/><br/>
                    <label> Gender</label>
                    <br/>
                    <input type="radio" id="male" name="gender" value="male"/>
                        <label htmlFor="male">Male</label><br/>
                        <input type="radio" id="female" name="gender" value="female"/>
                            <label htmlFor="female">Female</label><br/>
                            <input type="radio" id="other" name="gender" value="other"/>
                                <label htmlFor="other">Other</label>
                <br/><br/>
                    <input type="text" name="name" style={{border: "2px solid black", borderRadius: "20px"}} />
                    <br/><br/>
                    <input type="submit" value="Submit" style={{border: "2px solid black", borderRadius: "20px", width: 200}} />
        </form>
            </div>

        </>
    );
}
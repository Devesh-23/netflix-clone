import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new PrismaClient();
//done this as on every hot reload it will create a prismaclient file but on creating 
//so many file it will give error, so to aoid it we are storing it on a global page so that it 
// it wont give any error.
if (process.env.NODE_ENV === 'production') global.prismadb = client;

export default client;
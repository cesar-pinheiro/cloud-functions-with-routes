import { createConnections } from 'typeorm';

const dev = (process.env.NODE_ENV === 'development')

const user: string | undefined = process.env.MONGO_USER
const password: string | undefined = process.env.MONGO_PASSWORD
const host: string = process.env.MONGO_HOST || ''
const port: number = Number(process.env.MONGO_PORT)
const database: string = process.env.MONGO_DATABASE || ''
const ssl: boolean = process.env.MONGO_SSL?.toLowerCase() === 'true'
const authMechanism: string = user ? 'SCRAM-SHA-1' : ''

createConnections([
  {
    name: "mongo-sistema",
    type: "mongodb",
    url: `mongodb://${user ? user + ":" + password + "@" : ''}${host}:${port}/${database}`,
    ssl,
    authMechanism,
    useUnifiedTopology: true,
    entities: [`${dev ? "./src" : "."}/**/modules/**/schemas/*.${dev ? "ts" : "js"}`]
  }
])
  .then(() => console.log('Typeorm successfully initialized'))
  .catch(err => console.log(`Failed initialization on typeorm: ${err}`))
  
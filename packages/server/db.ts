import { Client } from 'pg'

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB } = process.env

export const createClientAndConnect = async (): Promise<Client | null> => {
  try {
    const client = new Client({
      user: POSTGRES_USER,
      host: 'postgres',
      database: POSTGRES_DB,
      password: POSTGRES_PASSWORD,
      port: 5432,
    })
    await client.connect()

    const res = await client.query('SELECT NOW()')
    console.log('  ➜ 🎸 Connected to the database at:', res?.rows?.[0].now)
    client.end()

    return client
  } catch (e) {
    console.error(e)
  }

  return null
}

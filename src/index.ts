import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()
const port: number = +process.env.PORT! || 4000
export const app: Express = express()
app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({ message: `Hello World!` })
})
app.listen(4000, (): void => {
    console.log(`Server listening on http://localhost:${port}`)
})
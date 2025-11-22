import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ExpressAuth } from "@auth/express"
import NeonAdapter from "@auth/neon-adapter"
import Credentials from "@auth/express/providers/credentials"
import { Pool } from "@neondatabase/serverless"
import bcrypt from "bcryptjs"

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

const app = express();

app.use(express.json());
app.use(cookieParser());

// Allow cookies from frontend
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

app.use("/auth/*", ExpressAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null
          }

          const result = await pool.query("SELECT * FROM users WHERE email = $1", [
            credentials.email,
          ])
          const user = result.rows[0]

          if (!user || !user.password) {
            return null
          }

          const isValid = await bcrypt.compare(
            credentials.password as string,
            user.password
          )

          if (!isValid) {
            return null
          }

          return {
            id: user.id.toString(),
            email: user.email,
            name: user.name,
            image: user.image,
          }
        } catch (error) {
          console.error("Auth error:", error)
          return null
        }
      },
    }),
  ],
  adapter: NeonAdapter(pool),
  session: { strategy: "jwt" }, // Use JWT for session strategy with Credentials provider
}));

app.listen(5000, () => console.log("Backend running on 5000"));

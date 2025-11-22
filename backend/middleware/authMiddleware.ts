import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.js";

export default function auth(req: { cookies: { token: any; }; user: string | JwtPayload; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error: string; }): any; new(): any; }; }; }, next: () => void) {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: "No token" });

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
}

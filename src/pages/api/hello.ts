import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
  ok: boolean;
  message: string;
  method: string;
  secret?: string;
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("CLIENT_KEY ", process.env.CLIENT_KEY);

  res.status(200).json({
    ok: true,
    message: "Todo correcto",
    method: req.method || "no hay método",
    secret: process.env.SECRET_KEY,
  });
}

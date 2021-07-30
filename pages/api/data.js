// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const data = require("../../Data.json");
export default function handler(req, res) {
  res.status(200).send(JSON.stringify(data));
}

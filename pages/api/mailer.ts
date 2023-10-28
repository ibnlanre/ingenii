// import { NextApiRequest, NextApiResponse } from "next";
// import sgMail from "@sendgrid/mail";

// const SENDGRID_KEY = process.env.SENDGRID_API_KEY ?? "";
// sgMail.setApiKey(SENDGRID_KEY);

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const body = JSON.parse(req.body);

//   sgMail
//     .send(body)
//     .then(function (response) {
//       res.status(200).json({
//         message: "Email sent successfully",
//       });
//     })
//     .catch(function (err) {
//       res.status(400).json({
//         message: "Unable to send email",
//       });
//     });
// }

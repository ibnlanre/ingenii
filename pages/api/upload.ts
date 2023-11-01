import { NextApiRequest, NextApiResponse } from "next";

type UploadEmail = {
  /**
   * ApiKey that gives you access to our SMTP and HTTP API's.
   */
  apikey: string;
  /**
   * If a file exists with the same name do not upload and override the file.
   */
  enforceUniqueFileName?: boolean;
  /**
   * Number of days the file should be stored for.
   */
  expiresAfterDays?: number;
  /**
   * Filename
   */
  name?: string;
};

const apikey = process.env.ELASTIC_EMAIL_API_KEY ?? "";
const base = process.env.ELASTIC_EMAIL_BASE_URL ?? "";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const url = new URL("v4/files", base);
  const headers = new Headers(Object.entries(req.headers) as []);
  const emailData = {
    apikey,
    // enforceUniqueFileName: false,
    expiresAfterDays: 60,
    name: headers.get("filename") ?? "",
  } satisfies UploadEmail;

  Object.entries(emailData).forEach(([key, value]) => {
    url.searchParams.set(key, value.toString());
  });

  return fetch(url, {
    body: req.body,
    method: "POST",
  })
    .then(async (response: Response) => {
      const payload = await response.text();
      // as {
      //   success: true;
      //   data: {
      //     transactionid: string;
      //     messageid: string;
      //   };
      // };

      return res.status(200).json({
        message: `Uploaded successfully`,
      });
    })
    .catch((error) => {
      if (process.env.NODE_ENV === "development") {
        console.error("Upload failed", error);
      }

      return res.status(400).json({
        message: "Unable to upload file",
      });
    });
}

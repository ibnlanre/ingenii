import { NextApiRequest, NextApiResponse } from "next";

/**
 * @link https://elasticemail.com/developers/api-documentation/web-api-v2#Email_Send
 */
type SendEmail = {
  /**
   * ApiKey that gives you access to our SMTP and HTTP API's.
   */
  apikey: string;
  /**
   * Names or IDs of attachments previously uploaded to your account (via the File/Upload request) that should be sent with this e-mail.
   */
  attachments?: string;
  /**
   * From email address
   */
  from?: string;
  /**
   * Display name for from email address
   */
  fromName?: string;
  /**
   * Email subject
   */
  subject?: string;
  /**
   * True, if email is transactional (non-bulk, non-marketing, non-commercial). Otherwise, false
   */
  isTransactional?: boolean;
  /**
   * Email address of the sender
   */
  sender?: string;
  /**
   * Display name sender
   */
  senderName?: string;
  /**
   * Sets FROM MIME header.
   */
  messageFrom?: string;
  /**
   * Sets FROM name of MIME header.
   */
  messageFromName?: string;
  /**
   * Email address to reply to
   */
  replyTo?: string;
  /**
   * Display name of the reply to address
   */
  replyToName?: string;
  /**
   * Should the clicks be tracked? If no value has been provided, Account's default setting will be used.
   */
  trackClicks?: boolean;
} & (
  | {
      /**
       * Html email body
       */
      bodyHtml?: string;
      /**
       * Sets charset for body html MIME part (overrides default value from charset parameter)
       */
      charsetBodyHtml?: string;
    }
  | {
      /**
       * Text email body
       */
      bodyText?: string;
      /**
       * Sets charset for body text MIME part (overrides default value from charset parameter)
       */
      charsetBodyText?: string;
    }
  | {
      /**
       * AMP email body
       */
      bodyAmp?: string;
      /**
       * Sets charset for body AMP MIME part (overrides default value from charset parameter)
       */
      charsetBodyAmp?: string;
    }
) &
  (
    | {
        /**
         * List of email recipients (visible to all other recipients of the message as TO MIME header). Separated by comma or semicolon.
         */
        msgTo?: string;
        /**
         * List of email recipients (visible to all other recipients of the message as CC MIME header). Separated by comma or semicolon.
         */
        msgCC?: string;
        /**
         * List of email recipients (each email is treated seperately). Separated by comma or semicolon.
         */
        msgBcc?: string;
      }
    | {
        /**
         * List of email recipients (each email is treated separately, like a BCC). Separated by comma or semicolon.
         */
        to?: string;
      }
  );

const apikey = process.env.ELASTIC_EMAIL_API_KEY ?? "";
const recipient = process.env.ELASTIC_EMAIL_USERNAME ?? "";
const base = process.env.ELASTIC_EMAIL_BASE_URL ?? "";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const emailData = {
    from: recipient,
    fromName: "Ingenii HQ",
    subject: "Get In Touch",
    isTransactional: true,
    bodyHtml: req.body,
    to: recipient,
    apikey,
  } satisfies SendEmail;

  const url = new URL("v2/email/send", base);
  Object.entries(emailData).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  fetch(url)
    .then(async (response: Response) => {
      const payload = (await response.json()) as {
        success: true;
        data: {
          transactionid: string;
          messageid: string;
        };
      };

      res.status(200).json({
        message: `Email sent successfully with transaction id: ${payload.data.transactionid}`,
      });
    })
    .catch(() => {
      res.status(400).json({
        message: "Unable to send email",
      });
    });
}

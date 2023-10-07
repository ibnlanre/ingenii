import { Stack, Text } from "@mantine/core";

import { Footer, Header, Subtext } from "../src/components";

export default function PrivacyPolicy() {
  return (
    <main>
      <Header />
      <div className="py-14 px-2 relative clump:px-[clamp(8px,5vw,5rem)] max-w-8xl mx-auto gap-16 flex flex-col">
        <Stack spacing={48}>
          <Stack>
            <Text
              component="h1"
              className="text-5xl clump:text-[clamp(2.05rem,4vw,3.75rem)] font-semibold"
            >
              Privacy Policy for Ingenii
            </Text>

            <Stack>
              <p>
                At Ingenii, accessible from{" "}
                <Text
                  component="a"
                  href="https://www.ingeniihq.com"
                  color="#8F00FF"
                >
                  https://www.ingeniihq.com
                </Text>
                , one of our main priorities is the privacy of our visitors.
                This Privacy Policy document contains the types of information
                that is collected and recorded by Ingenii and how we use it.
              </p>

              <p>
                If you have additional questions or require more information
                about our Privacy Policy, do not hesitate to contact us at{" "}
                <Text
                  component="a"
                  href="mailto:contact@ingeniihq.com"
                  color="#8F00FF"
                >
                  contact@ingeniihq.com
                </Text>
                .
              </p>
            </Stack>
          </Stack>

          <Stack>
            <Subtext>Log Files</Subtext>

            <p>
              Ingenii follows a standard procedure of using log files. These
              files log visitors when they visit websites. All hosting companies
              do this and are a part of hosting services' analytics. The
              information collected by log files includes internet protocol (IP)
              addresses, browser type, Internet Service Provider (ISP), date and
              time stamp, referring/exit pages, and possibly the number of
              clicks. These are not linked to any information that is personally
              identifiable. The purpose of the information is to analyze trends,
              administer the site, track users' movement on the website, and
              gather demographic information.
            </p>
          </Stack>

          <Stack>
            <Subtext>Cookies and Web Beacons</Subtext>
            <p>
              Like any other website, Ingenii uses "cookies". These cookies are
              used to store information including visitors' preferences, and the
              pages on the website that the visitor accessed or visited. The
              information is used to optimize the users' experience by
              customizing our web page content based on visitors' browser type
              and/or other information.
            </p>
          </Stack>

          <Stack>
            <Subtext>Privacy Policies</Subtext>
            <Stack>
              <p>
                You may consult this list to find the Privacy Policy for each of
                the advertising partners of Ingenii.
              </p>

              <p>
                Third-party ad servers or ad networks uses technologies like
                cookies, JavaScript, or Web Beacons that are used in their
                respective advertisements and links that appear on Ingenii,
                which are sent directly to users' browser. They automatically
                receive your IP address when this occurs. These technologies are
                used to measure the effectiveness of their advertising campaigns
                and/or to personalize the advertising content that you see on
                websites that you visit.
              </p>

              <p>
                Note that Ingenii has no access to or control over these cookies
                that are used by third-party advertisers.
              </p>
            </Stack>
          </Stack>

          <Stack>
            <Subtext>Third Party Privacy Policies</Subtext>
            <Stack>
              <p>
                Ingenii's Privacy Policy does not apply to other advertisers or
                websites. Thus, we are advising you to consult the respective
                Privacy Policies of these third-party ad servers for more
                detailed information. It may include their practices and
                instructions about how to opt out of certain options.
              </p>
              <p>
                You can choose to disable cookies through your individual
                browser options. More detailed information about cookie
                management with specific web browsers can be found on the
                browsers' respective websites. What Are Cookies?
              </p>
            </Stack>
          </Stack>

          <Stack>
            <Subtext>Children's Information</Subtext>
            <Stack>
              <p>
                Another part of our priority is adding protection for children
                while using the internet. We encourage parents and guardians to
                observe, participate in, and/or monitor and guide their online
                activity.
              </p>
              <p>
                Ingenii does not knowingly collect any Personal Identifiable
                Information from children under the age of 13. If you think that
                your child provided this kind of information on our website, we
                strongly encourage you to contact us immediately and we will do
                our best efforts to promptly remove such information from our
                records.
              </p>
            </Stack>
          </Stack>

          <Stack>
            <Subtext>Online Privacy Policy Only</Subtext>
            <p>
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regard to the information
              that they share and/or collect in Ingenii. This policy is not
              applicable to any information collected offline or via channels
              other than this website.
            </p>
          </Stack>

          <Stack>
            <Subtext>Consent</Subtext>
            <p>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its Terms and Conditions.
            </p>
          </Stack>

          <Text component="time" align="right">
            <span className="font-semibold">Last Updated:</span> 1/10/2023
          </Text>
        </Stack>
      </div>
      <Footer
        className="text-chinese-black"
        socials="text-white hover:text-white hover:bg-smoky-black"
      />
    </main>
  );
}

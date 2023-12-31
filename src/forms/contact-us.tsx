import {
  Button,
  Checkbox,
  Select,
  Stack,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { countries } from "@aerapass/country-data";
import { useMemo } from "react";

import { PhoneNumber } from "../components";
import { REASONS } from "./options";

import Link from "next/link";
import clsx from "clsx";

import * as yup from "yup";
import { useHandleSubmit } from "./use-handle-submit";
interface FormProps {
  reason: string;
  first_name: string;
  last_name: string;
  email: string;
  company: string;
  position: string;
  country_code: string;
  phone_number: string;
  zip_code: string;
  location: string;
  message: string;
}

const schema = yup.object().shape({
  reason: yup.string().required("Kindly state a reason"),
  first_name: yup.string().required("Kindly provide your first name"),
  last_name: yup.string().required("Kindly provide your last name"),
  email: yup.string().email().required("Kindly provide your email address"),
  company: yup.string().required("Kindly provide your company name"),
  position: yup.string().optional(),
  country_code: yup.string().notRequired(),
  phone_number: yup.string().optional(),
  zip_code: yup.string().optional(),
  location: yup.string().required("Kindly provide your location"),
  message: yup.string().required("Kindly input your message"),
  terms_and_conditions: yup.boolean().notRequired(),
});

export function ContactUs() {
  const form = useForm<FormProps>({
    initialValues: {
      reason: "",
      first_name: "",
      last_name: "",
      email: "",
      company: "",
      position: "",
      country_code: "+234",
      phone_number: "",
      zip_code: "",
      location: "Nigeria",
      message: "",
    },
    validate: yupResolver(schema),
    validateInputOnBlur: true,
  });

  const countriesOptions = useMemo(() => {
    return countries.all.map((props) => props.name);
  }, []);

  const handle = useHandleSubmit<FormProps>(form);

  return (
    <div>
      <Stack>
        <h2 className="text-5xl clump:text-[clamp(2.05rem,4vw,3.75rem)] font-bold">
          How can we help?
        </h2>
        <p className="text-2xl clump:text-[clamp(1.15rem,3vw,1.5rem) text-davys-grey">
          Please submit your inquiry here and we will respond as quickly as
          possible.
        </p>

        <Stack>
          <Text c="#B0B0B0" component="p">
            Fields marked with an asterisk (*) are required.
          </Text>

          <form
            onSubmit={form.onSubmit(handle.submit)}
            className="flex flex-col gap-5 text-dark-puce max-w-[54rem] bg-white p-5"
            id="contact-us"
            style={{
              boxShadow: "12px 12px 24px 0px rgba(0, 0, 0, 0.10)",
            }}
          >
            <fieldset
              className="grid gap-5 min-[550px]:grid-cols-2 min-[850px]:grid-cols-3 items-baseline"
              form="contact-us"
            >
              <Select
                searchable
                data={REASONS}
                withAsterisk
                label="Reason for contacting igenii"
                placeholder="Consumer"
                rightSection={<CaretDownIcon color="#B0B0B0" />}
                {...form.getInputProps("reason")}
              />
            </fieldset>
            <fieldset
              className="grid gap-5 min-[550px]:grid-cols-2 min-[850px]:grid-cols-3 items-baseline"
              form="contact-us"
            >
              <TextInput
                withAsterisk
                label="First name"
                placeholder="John"
                {...form.getInputProps("first_name")}
              />
              <TextInput
                withAsterisk
                label="Last name"
                placeholder="Doe"
                {...form.getInputProps("last_name")}
              />
            </fieldset>
            <fieldset
              className="grid gap-5 min-[550px]:grid-cols-2 min-[850px]:grid-cols-3 items-baseline"
              form="contact-us"
            >
              <TextInput
                type="email"
                withAsterisk
                label="Email"
                placeholder="johndoe@gmail.com"
                {...form.getInputProps("email")}
              />

              <TextInput
                withAsterisk
                label="Company"
                placeholder="Apple"
                {...form.getInputProps("company")}
              />

              <TextInput
                label="Position / Job title"
                placeholder="Product Lead"
                {...form.getInputProps("position")}
              />

              <PhoneNumber
                withAsterisk
                label="Phone Number"
                selectProps={{ ...form.getInputProps("country_code") }}
                inputProps={{ ...form.getInputProps("phone_number") }}
              />

              <TextInput
                label="Zipcode / Postal Code"
                placeholder="100123"
                {...form.getInputProps("zip_code")}
              />

              <Select
                searchable
                withAsterisk
                data={countriesOptions}
                label="Location"
                placeholder="Nigeria"
                rightSection={<CaretDownIcon color="#B0B0B0" />}
                {...form.getInputProps("location")}
              />

              <Textarea
                autosize
                minRows={2}
                maxRows={4}
                className="col-span-2"
                label="Message"
                placeholder="I'd like to collaborate with Ingenii on a project or enterprise"
                {...form.getInputProps("message")}
              />
            </fieldset>
            <Checkbox
              w={685}
              classNames={{
                input: "checked:bg-violet checked:border-violet",
              }}
              label={
                <span>
                  I have read and accepted the{" "}
                  <Link
                    href="/terms-of-use"
                    className="underline underline-offset-4"
                  >
                    Terms of Use
                  </Link>
                  . Please read our{" "}
                  <Link
                    href="/privacy-policy"
                    className="underline underline-offset-4"
                  >
                    Privacy Policy
                  </Link>{" "}
                  to understand how we plan to use your personal{" "}
                  <span className="whitespace-nowrap">information. *</span>
                </span>
              }
              {...form.getInputProps("terms_and_conditions", {
                type: "checkbox",
              })}
            />

            <Button
              h="auto"
              w="max-content"
              type="submit"
              disabled={handle.loading}
              loading={handle.loading}
              classNames={{
                root: "bg-chinese-black",
                inner: "py-7 px-9",
                label: "text-white",
              }}
            >
              Submit
            </Button>
          </form>
        </Stack>
      </Stack>

      <svg
        width="852"
        height="582"
        viewBox="0 0 852 582"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx(
          "absolute bottom-0 -left-16 sm:left-auto sm:right-0 h-2/3 -z-10"
        )}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M582 0C260.57 0 0 260.57 0 582H0.874929C16.9381 298.191 252.171 73 540 73H1079V0H582Z"
          fill="#8F00FF"
        />
      </svg>
    </div>
  );
}

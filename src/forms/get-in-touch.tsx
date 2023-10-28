import { countries } from "@aerapass/country-data";
import { Button, Checkbox, FileInput, Select, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { useMemo } from "react";
import { CaretDownIcon } from "@radix-ui/react-icons";

import { INDUSTRY, REVENUE } from "./options";
import { PhoneNumber } from "../components";

import toHtml from "json2htable";
import Link from "next/link";
import * as yup from "yup";

interface FormProps {
  title: string;
  first_name: string;
  last_name: string;
  position: string;
  email: string;
  country_code: string;
  phone_number: string;
  company_name: string;
  company_location: string;
  industry: string;
  revenue: string;
  files: [];
  terms_and_conditions: boolean;
}

const schema = yup.object().shape({
  title: yup.string().optional(),
  first_name: yup.string().required("Kindly provide your first name"),
  last_name: yup.string().required("Kindly provide your last name"),
  position: yup.string().optional(),
  email: yup.string().email().required("Kindly provide your email address"),
  country_code: yup.string().notRequired(),
  phone_number: yup.string().optional(),
  company_name: yup.string().required("Kindly provide your company name"),
  industry: yup
    .string()
    .required()
    .oneOf(INDUSTRY, "Kindly select an industry"),
  revenue: yup.string().optional().oneOf(REVENUE),
  term_and_conditions: yup.boolean().notRequired(),
});

export function GetInTouch() {
  const form = useForm<FormProps>({
    initialValues: {
      title: "",
      first_name: "",
      last_name: "",
      position: "",
      email: "",
      country_code: "",
      phone_number: "",
      company_name: "",
      company_location: "",
      industry: "",
      revenue: "Unknown / None",
      files: [],
      terms_and_conditions: false,
    },
    validate: yupResolver(schema),
  });

  const countriesOptions = useMemo(() => {
    return countries.all.map((props) => props.name);
  }, []);

  const handleSubmit = (values: FormProps) => {
    const data = toHtml([values]);
    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: "username",
      Password: "password",
      To: "them@website.com",
      From: "you@isp.com",
      Subject: "Get in Touch",
      Body: data,
    });
  };

  return (
    <section
      id="get-in-touch"
      className="flex flex-col gap-20 pt-16 pb-20 bg-smoky-black"
    >
      <div className="flex flex-col max-w-8xl gap-4 px-2 mx-auto clump:px-[clamp(8px,5vw,5rem)]">
        <header className="flex flex-col gap-1 text-white">
          <h2 className="text-5xl clump:text-[clamp(2.05rem,4vw,3.75rem)] font-bold">
            Get in Touch
          </h2>
          <p>
            Please take a few moments to complete this form. Documents can be
            uploaded if needed to clarify your request. All other inquiries
            should be directed to our Contact Us page.
          </p>
        </header>
        <form
          onSubmit={form.onSubmit(handleSubmit)}
          className="flex flex-col gap-5 p-5 bg-white text-dark-puce max-w-[54rem]"
          id="get-in-touch"
        >
          <fieldset
            className="grid gap-5 min-[550px]:grid-cols-2 min-[850px]:grid-cols-3"
            form="get-in-touch"
          >
            <TextInput
              label="Title"
              placeholder="Mr"
              {...form.getInputProps("title")}
            />
          </fieldset>
          <fieldset
            className="grid gap-5 min-[550px]:grid-cols-2 min-[850px]:grid-cols-3 items-baseline"
            form="get-in-touch"
          >
            <TextInput
              withAsterisk
              label="Firstname"
              placeholder="John"
              {...form.getInputProps("first_name")}
            />
            <TextInput
              withAsterisk
              label="Lastname"
              placeholder="Doe"
              {...form.getInputProps("last_name")}
            />
          </fieldset>
          <fieldset
            className="grid gap-5 min-[550px]:grid-cols-2 min-[850px]:grid-cols-3 items-baseline"
            form="get-in-touch"
          >
            <TextInput
              label="Position"
              placeholder="CTO"
              {...form.getInputProps("position")}
            />
            <TextInput
              withAsterisk
              label="Email"
              placeholder="johndoe@gmail.com"
              {...form.getInputProps("email")}
            />

            <PhoneNumber
              label="Phone Number"
              selectProps={{ ...form.getInputProps("country_code") }}
              inputProps={{ ...form.getInputProps("phone_number") }}
            />

            <TextInput
              withAsterisk
              label="Company Name"
              placeholder="Apple"
              {...form.getInputProps("company_name")}
            />
            <Select
              withAsterisk
              data={countriesOptions}
              label="Company Location"
              placeholder="Nigeria"
              rightSection={<CaretDownIcon color="#B0B0B0" />}
              {...form.getInputProps("company_location")}
            />
            <Select
              withAsterisk
              label="Industry"
              placeholder="Retail"
              rightSection={<CaretDownIcon color="#B0B0B0" />}
              data={INDUSTRY}
              {...form.getInputProps("industry")}
            />
            <Select
              data={REVENUE}
              label="Yearly Revenue"
              placeholder="Less than $10k"
              rightSection={<CaretDownIcon color="#B0B0B0" />}
              {...form.getInputProps("revenue")}
            />
            <FileInput
              multiple
              label="Upload File"
              placeholder="Proposals.pdf"
              {...form.getInputProps("files")}
            />
          </fieldset>
          <Checkbox
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
            {...form.getInputProps("terms_and_conditions")}
          />

          <Button
            h="auto"
            w="max-content"
            type="submit"
            disabled={!form.values.terms_and_conditions}
            classNames={{
              root: "bg-chinese-black",
              inner: "py-7 px-9",
              label: "text-white",
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}

import { countries } from "@aerapass/country-data";
import { parsePhone } from "../utilities";

import { Button, Checkbox, FileInput, Select, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMemo } from "react";
import { CaretDownIcon } from "@radix-ui/react-icons";

import Link from "next/link";

interface Inputs {
  title: string;
  first_name: string;
  last_name: string;
  position: string;
  email: string;
  phone_number: string;
  company_name: string;
  company_location: string;
  industry: string;
  revenue: string;
  files: [];
  terms_and_conditions: boolean;
}

const SALE = [
  "Home / Office",
  "Furniture",
  "Consumer",
  "Electronics",
  "Fashion",
  "Automotive",
  "Lifestyle",
  "Product",
  "Others",
];

const WEBSITE = ["Yes", "No"];

const REVENUE = [
  "Unknown / None",
  "Less than $10k",
  "$11k - $100K",
  "$101k - $200k",
  "$201k - $500k",
  "$501k - $1M",
  "$1M - $3M",
  "$3M +",
  "I prefer not to say",
];

const ESTIMATE = [
  "Less than 100k",
  "100k - 1k",
  "1k - 10k",
  "10k - 100k",
  "Greater than 100k",
];

const INDUSTRY = [
  "Advanced Manufacturing & Services",
  "Aerospace, Defense, & Government Services",
  "Agribusiness",
  "Automotive & Mobility",
  "Aviation",
  "Chemicals",
  "Consumer Products",
  "Energy & Natural Resources",
  "Financial Services",
  "Forest Products, Paper & Packaging",
  "Healthcare & Life Sciences",
  "Infrastructure, Construction & Building Products",
  "Machinery & Equipment",
  "Media & Entertainment",
  "Metals",
  "Oil & Gas",
  "Private Equity",
  "Retail",
  "Real Estate",
  "Technology",
  "Social & Public Sector",
  "Telecommunications",
  "Transportation",
  "Utilities & Renewables",
  "Others",
];

export function GetInTouch() {
  const form = useForm<Inputs>({
    initialValues: {
      title: "",
      first_name: "",
      last_name: "",
      position: "",
      email: "",
      phone_number: "",
      company_name: "",
      company_location: "",
      industry: "",
      revenue: "",
      files: [],
      terms_and_conditions: false,
    },
  });

  const callingCodes = countries.all.flatMap(
    ({ countryCallingCodes }) => countryCallingCodes
  );

  const countriesOptions = useMemo(() => {
    return countries.all;
  }, []);

  return (
    <section className="flex flex-col gap-20 pt-16 pb-20 bg-smoky-black">
      <div className="flex flex-col max-w-screen-xl gap-4 px-2 mx-auto clump:px-[clamp(8px,5vw,5rem)]">
        <header className="flex flex-col gap-1 text-white">
          <h2 className="text-5xl font-bold">Get in Touch</h2>
          <p>
            Please take a few moments to complete this form. Documents can be
            uploaded if needed to clarify your request. All other inquiries
            should be directed to our Contact Us page.
          </p>
        </header>
        <form
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
              classNames={{
                label: "text-dark-puce font-normal",
              }}
            />
          </fieldset>
          <fieldset
            className="grid gap-5 min-[550px]:grid-cols-2 min-[850px]:grid-cols-3"
            form="get-in-touch"
          >
            <TextInput
              withAsterisk
              label="Firstname"
              placeholder="John"
              classNames={{
                required: "text-violet",
                label: "text-dark-puce font-normal",
              }}
              {...form.getInputProps("first_name")}
            />
            <TextInput
              withAsterisk
              label="Lastname"
              placeholder="Doe"
              classNames={{
                required: "text-violet",
                label: "text-dark-puce font-normal",
              }}
              {...form.getInputProps("last_name")}
            />
          </fieldset>
          <fieldset
            className="grid gap-5 min-[550px]:grid-cols-2 min-[850px]:grid-cols-3"
            form="get-in-touch"
          >
            <TextInput
              label="Position"
              placeholder="CTO"
              classNames={{
                label: "text-dark-puce font-normal",
              }}
              {...form.getInputProps("position")}
            />
            <TextInput
              withAsterisk
              label="Email"
              classNames={{
                required: "text-violet",
                label: "text-dark-puce font-normal",
              }}
              placeholder="johndoe@gmail.com"
              {...form.getInputProps("email")}
            />
            <TextInput
              classNames={{
                label: "text-dark-puce font-normal",
                icon: "pointer-events-auto w-20 relative",
                wrapper: "flex gap-2",
                input: "pl-0",
              }}
              icon={
                <Select
                  size="xs"
                  rightSection={<></>}
                  aria-labelledby="phone_number"
                  data={callingCodes}
                  classNames={{
                    input: "pr-0 pl-0 border-none",
                  }}
                />
              }
              id="phone_number"
              label="Phone Number"
              placeholder="809345335"
            />

            <TextInput
              withAsterisk
              label="Company Name"
              placeholder="Apple"
              classNames={{
                required: "text-violet",
                label: "text-dark-puce font-normal",
              }}
              {...form.getInputProps("company_name")}
            />
            <Select
              withAsterisk
              data={countriesOptions.map((props) => props.name)}
              label="Company Location"
              placeholder="Nigeria"
              rightSection={<CaretDownIcon color="#B0B0B0" />}
              classNames={{
                required: "text-violet",
                label: "text-dark-puce font-normal",
                rightSection: "pointer-events-none",
              }}
              {...form.getInputProps("company_location")}
            />
            <Select
              data={INDUSTRY}
              label="Industry"
              placeholder="Retail"
              rightSection={<CaretDownIcon color="#B0B0B0" />}
              classNames={{
                label: "text-dark-puce font-normal",
                rightSection: "pointer-events-none",
              }}
              {...form.getInputProps("industry")}
            />
            <Select
              data={REVENUE}
              label="Yearly Revenue"
              placeholder="Less than $10k"
              rightSection={<CaretDownIcon color="#B0B0B0" />}
              classNames={{
                label: "text-dark-puce font-normal",
                rightSection: "pointer-events-none",
              }}
              {...form.getInputProps("revenue")}
            />
            <FileInput
              multiple
              label="Upload Files"
              placeholder="Proposals.pdf"
              classNames={{
                label: "text-dark-puce font-normal",
              }}
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
                <Link href="" className="underline underline-offset-4">
                  Terms of Use
                </Link>
                . Please read our{" "}
                <Link href="" className="underline underline-offset-4">
                  Privacy Statement
                </Link>{" "}
                to understand how we plan to use your personal information. *
              </span>
            }
            {...form.getInputProps("terms_and_conditions")}
          />

          <Button
            h="auto"
            w="max-content"
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

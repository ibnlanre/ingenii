import {
  Button,
  NumberInput,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { countries } from "@aerapass/country-data";
import { modals } from "@mantine/modals";
import { useMemo, useState } from "react";

import { useHandleSubmit } from "../use-handle-submit";
import { PhoneNumber } from "../../components";
import { GetQuoteAugmentedReality } from "../get-quote";
import { REVENUE, SALE } from "../options";

import * as yup from "yup";

interface FormProps {
  sale: string;
  revenue: string;
  full_name: string;
  email: string;
  country_code: string;
  phone_number: string;
  company_name: string;
  company_location: string;
  stores: string;
}

const schema = yup.object().shape({
  sale: yup.string().required().oneOf(SALE, "Kindly select a type of sale"),
  revenue: yup.string().optional().oneOf(REVENUE),
  full_name: yup.string().required("Kindly provide your full name"),
  email: yup.string().email().required("Kindly provide your email address"),
  country_code: yup.string().notRequired(),
  phone_number: yup.string().optional(),
  company_name: yup.string().required("Kindly provide your company name"),
  company_location: yup
    .string()
    .required("Kindly provide your company location"),
  stores: yup.number().required("Kindly provide your store count"),
});

export function RequestDemoAugmentedReality() {
  const form = useForm<FormProps>({
    initialValues: {
      sale: "",
      revenue: "",
      full_name: "",
      email: "",
      country_code: "+234",
      phone_number: "",
      company_name: "",
      company_location: "Nigeria",
      stores: "",
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
      <Stack className="p-1 clump:p-[clamp(0.3125rem,2vw,1rem)]">
        <h2 className="text-5xl clump:text-[clamp(2.05rem,4vw,3.75rem)] font-bold">
          Request Demo
        </h2>
        <p className="text-2xl clump:text-[clamp(1.15rem,3vw,1.5rem) text-davys-grey">
          Request your free custom quote today. An expert will reach out to you
          shortly.
        </p>
        <Stack>
          <Text c="#B0B0B0" component="p">
            Fields marked with an asterisk (*) are required.
          </Text>

          <form
            onSubmit={form.onSubmit(handle.submit)}
            className="flex flex-col gap-5 bg-white text-dark-puce max-w-[54rem]"
            id="request-demo_augmented-reality"
          >
            <fieldset
              className="grid gap-5 min-[550px]:grid-cols-2"
              form="request-demo_augmented-reality"
            >
              <Select
                searchable
                data={SALE}
                withAsterisk
                label="What do you sell"
                placeholder="Consumer"
                rightSection={<CaretDownIcon color="#B0B0B0" />}
                {...form.getInputProps("sale")}
              />
            </fieldset>
            <fieldset
              className="grid gap-5 min-[550px]:grid-cols-2 items-baseline"
              form="request-demo_augmented-reality"
            >
              <Select
                searchable
                data={REVENUE}
                label="What's your annual revenue in USD"
                placeholder="Less than $10k"
                rightSection={<CaretDownIcon color="#B0B0B0" />}
                {...form.getInputProps("revenue")}
              />
            </fieldset>
            <fieldset
              className="grid gap-5 min-[550px]:grid-cols-2 items-baseline"
              form="request-demo_augmented-reality"
            >
              <TextInput
                withAsterisk
                label="Full name"
                placeholder="John Doe"
                {...form.getInputProps("full_name")}
              />

              <TextInput
                type="email"
                withAsterisk
                label="Email"
                placeholder="johndoe@gmail.com"
                {...form.getInputProps("email")}
              />

              <PhoneNumber
                withAsterisk
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
                searchable
                withAsterisk
                data={countriesOptions}
                label="Company Location"
                placeholder="Nigeria"
                rightSection={<CaretDownIcon color="#B0B0B0" />}
                {...form.getInputProps("company_location")}
              />

              <NumberInput
                withAsterisk
                hideControls
                precision={0}
                placeholder="Nil"
                label="No of stores / showrooms"
                {...form.getInputProps("stores")}
              />
            </fieldset>

            <Text component="p" fz={24} fw={500}>
              You can{" "}
              <Text
                c="#8300EB"
                component="button"
                onClick={() => {
                  modals.closeAll();
                  modals.open({
                    withCloseButton: false,
                    children: <GetQuoteAugmentedReality />,
                  });
                }}
              >
                get quote
              </Text>
            </Text>

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
    </div>
  );
}

import {
  Button,
  NumberInput,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { countries } from "@aerapass/country-data";
import { useMemo } from "react";

import { PhoneNumber } from "../../components";
import { ESTIMATE, REVENUE, SALE, WEBSITE } from "../options";

interface FormProps {
  sale: string;
  website: string;
  estimate: string;
  revenue: string;
  full_name: string;
  email: string;
  company_name: string;
  company_location: string;
  stores: string;
}

export function GetQuoteAugmentedReality() {
  const form = useForm<FormProps>({
    initialValues: {
      sale: "",
      website: "",
      estimate: "",
      revenue: "",
      full_name: "",
      email: "",
      company_name: "",
      company_location: "",
      stores: "",
    },
  });

  const countriesOptions = useMemo(() => {
    return countries.all.map((props) => props.name);
  }, []);

  const handleSubmit = (values: FormProps) => {};

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack className="p-1 clump:p-[clamp(0.3125rem,2vw,1rem)]">
        <h2 className="text-5xl clump:text-[clamp(2.05rem,4vw,3.75rem)] font-bold">
          Get Quote
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
            className="flex flex-col gap-5 bg-white text-dark-puce max-w-[54rem]"
            id="get-quote_augmented-reality"
          >
            <fieldset
              className="grid gap-5 min-[550px]:grid-cols-2"
              form="get-quote_augmented-reality"
            >
              <Select
                data={SALE}
                withAsterisk
                label="What do you sell"
                placeholder="Consumer"
                rightSection={<CaretDownIcon color="#B0B0B0" />}
                {...form.getInputProps("sale")}
              />
            </fieldset>
            <fieldset
              className="grid gap-5 min-[550px]:grid-cols-2"
              form="get-quote_augmented-reality"
            >
              <Select
                data={WEBSITE}
                label="Do you have a functional Mobile App or Website"
                placeholder="No"
                rightSection={<CaretDownIcon color="#B0B0B0" />}
                {...form.getInputProps("website")}
              />
              <Select
                data={ESTIMATE}
                label="Give an estimation of your displayed merchandise"
                placeholder="Less than $10k"
                rightSection={<CaretDownIcon color="#B0B0B0" />}
                {...form.getInputProps("estimate")}
              />
              <Select
                data={REVENUE}
                label="What's your annual revenue in USD"
                placeholder="Less than $10k"
                rightSection={<CaretDownIcon color="#B0B0B0" />}
                {...form.getInputProps("revenue")}
              />
            </fieldset>
            <fieldset
              className="grid gap-5 min-[550px]:grid-cols-2"
              form="get-quote_augmented-reality"
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
              <Text span c="#8300EB">
                get quote
              </Text>
            </Text>

            <Button
              h="auto"
              w="max-content"
              type="submit"
              classNames={{
                root: "bg-chinese-black",
                inner: "py-7 px-9",
                label: "text-white",
              }}
            >
              Get Quote
            </Button>
          </form>
        </Stack>
      </Stack>
    </form>
  );
}

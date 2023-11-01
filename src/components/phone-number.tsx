import { countries } from "@aerapass/country-data";
import { Flex, Select, TextInput, Input, TextInputProps } from "@mantine/core";
import { Dispatch, FocusEventHandler, SetStateAction } from "react";
import { useUncontrolled } from "@mantine/hooks";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { PhoneNumberPossibility } from "awesome-phonenumber";

import { parseNumber } from "../utilities";

const callingCodes = Array.from(
  new Set(
    countries.all
      .flatMap(({ countryCallingCodes }) => countryCallingCodes)
      .sort((a, b) => a.localeCompare(b))
  )
);

export type InputProp<T = HTMLInputElement> = {
  onChange: Dispatch<SetStateAction<any>>;
  checked?: boolean;
  error?: React.ReactNode;
  value?: string | ReadonlyArray<string> | number;
  onFocus?: FocusEventHandler<T>;
  onBlur?: FocusEventHandler<T>;
};

export type SelectProp = InputProp & {
  value?: string;
};

interface PhoneNumberProps extends TextInputProps {
  inputProps: InputProp;
  selectProps: SelectProp;
}

type Possible = PhoneNumberPossibility | "unknown";

export function PhoneNumber({
  inputProps,
  selectProps,
  ...props
}: PhoneNumberProps) {
  const [selected, handleSelected] = useUncontrolled({
    value: selectProps.value,
    onChange: selectProps.onChange,
  });

  const [number, handleNumber] = useUncontrolled({
    value: inputProps.value,
    onChange: (value: string) => {
      const { possibility, phone, code } = parseNumber(value, selected);
      const possible = possibility as Possible;

      if (possible === "unknown") inputProps.onChange(value);
      else if (possibility !== "too-long") {
        inputProps.onChange(phone);
        handleSelected(code);
      }
    },
  });

  return (
    <Input.Wrapper {...props}>
      <Flex
        gap={4}
        align="center"
        className="focus-within:!border-violet"
        style={{
          overflow: "auto",
          paddingInlineStart: 4,
          border: "1px solid #D8D2CE",
          borderRadius: 10,
        }}
      >
        <Select
          {...selectProps}
          onSelect={handleSelected}
          value={selected}
          defaultValue="+234"
          placeholder="+234"
          rightSection={<CaretDownIcon />}
          aria-labelledby="phone_number"
          data={callingCodes}
          styles={{
            wrapper: {
              display: "flex",
            },
            rightSection: {
              color: "#AA9D94",
              position: "relative",
              pointerEvents: "none",
              width: "max-content",
            },
            dropdown: {
              width: "max-content !important",
            },
            input: {
              padding: 0,
              paddingBlock: 20,
              textAlign: "right",
              width: "6ch",
              border: "none",
            },
          }}
        />
        <TextInput
          onChange={(e) => handleNumber(e.target.value)}
          value={number}
          styles={{
            root: {
              width: "100%",
            },
            input: {
              border: "none",
              borderInlineStart: "1px solid #D8D2CE",
              backgroundColor: "transparent",
              borderRadius: 0,
            },
          }}
          id="phone_number"
          placeholder="809345335"
        />
      </Flex>
    </Input.Wrapper>
  );
}

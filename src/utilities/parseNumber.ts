import {
  getRegionCodeForCountryCode,
  parsePhoneNumber as parser,
} from "awesome-phonenumber";

export function parsePhone(phone_number: string = "", code: string | null) {
  const regionCode = getRegionCodeForCountryCode(+(code ?? "+234"));
  const phone = parser(phone_number, { regionCode });
  return {
    code: `+${phone.countryCode ?? 234}`,
    phone: phone.number?.significant,
    intl: phone.number?.e164,
    region: phone.regionCode,
    isValid: phone.valid,
    possibility: phone.possibility,
  };
}

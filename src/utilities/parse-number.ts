import {
  getRegionCodeForCountryCode,
  parsePhoneNumber,
} from "awesome-phonenumber";

export function parseNumber(phone_number: string = "", code: string | null) {
  const regionCode = getRegionCodeForCountryCode(+(code ?? "+234"));
  const phone = parsePhoneNumber(phone_number, { regionCode });
  return {
    code: `+${phone.countryCode ?? 234}`,
    phone: phone.number?.significant,
    intl: phone.number?.e164,
    region: phone.regionCode,
    isValid: phone.valid,
    possibility: phone.possibility,
  };
}

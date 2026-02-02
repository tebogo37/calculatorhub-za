
export const VAT_RATE = 0.15;

export const INCOME_TAX_BRACKETS_2026 = [
  { limit: 237100, rate: 0.18, base: 0 },
  { limit: 370500, rate: 0.26, base: 42678 },
  { limit: 512800, rate: 0.31, base: 77362 },
  { limit: 673000, rate: 0.36, base: 121475 },
  { limit: 857900, rate: 0.39, base: 179147 },
  { limit: 1817000, rate: 0.41, base: 251258 },
  { limit: Infinity, rate: 0.45, base: 644489 },
];

export const TAX_REBATES_2026 = {
  primary: 17235,
  secondary: 9444, // 65+
  tertiary: 3145,   // 75+
};

export const TRANSFER_DUTY_RATES_2026 = [
  { limit: 1100000, rate: 0, base: 0 },
  { limit: 1512500, rate: 0.03, base: 0 },
  { limit: 2117500, rate: 0.06, base: 12375 },
  { limit: 2722500, rate: 0.08, base: 48675 },
  { limit: 12100000, rate: 0.11, base: 97075 },
  { limit: Infinity, rate: 0.13, base: 1128600 },
];

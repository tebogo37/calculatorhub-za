
import { INCOME_TAX_BRACKETS_2026, TAX_REBATES_2026, TRANSFER_DUTY_RATES_2026 } from './constants';

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
  }).format(amount);
};

export const calculateIncomeTax = (annualSalary: number, age: number = 25) => {
  let tax = 0;
  let prevLimit = 0;

  for (const bracket of INCOME_TAX_BRACKETS_2026) {
    if (annualSalary > bracket.limit) {
      prevLimit = bracket.limit;
      continue;
    }
    const taxableAmount = annualSalary - prevLimit;
    tax = bracket.base + (taxableAmount * bracket.rate);
    break;
  }

  // Apply Rebates
  tax -= TAX_REBATES_2026.primary;
  if (age >= 65) tax -= TAX_REBATES_2026.secondary;
  if (age >= 75) tax -= TAX_REBATES_2026.tertiary;

  return Math.max(0, tax);
};

export const calculateTaxRefund = (params: {
  annualSalary: number;
  payePaid: number;
  raContributions: number;
  medicalDependents: number; // 0 = just self, 1 = self + 1, etc.
  age: number;
}) => {
  const { annualSalary, payePaid, raContributions, medicalDependents, age } = params;

  // 1. Calculate Taxable Income after RA (Section 11F - capped at 27.5% of gross or R350k)
  const raCapped = Math.min(raContributions, annualSalary * 0.275, 350000);
  const taxableIncome = Math.max(0, annualSalary - raCapped);

  // 2. Calculate Base Tax on revised income
  let baseTax = calculateIncomeTax(taxableIncome, age);

  // 3. Apply Medical Scheme Fees Tax Credits (Section 6A - 2025/26 rates)
  // Main: R364, First Dep: R364, Addit: R246 per month
  const monthlyMedicalCredit = 364 + (medicalDependents >= 1 ? 364 : 0) + (Math.max(0, medicalDependents - 1) * 246);
  const annualMedicalCredit = monthlyMedicalCredit * 12;

  const finalTaxLiability = Math.max(0, baseTax - annualMedicalCredit);

  // 4. Refund = Paye Paid - Final Liability
  const refundAmount = payePaid - finalTaxLiability;

  return {
    finalTaxLiability,
    refundAmount,
    savingsFromRA: calculateIncomeTax(annualSalary, age) - calculateIncomeTax(taxableIncome, age),
    medicalCreditTotal: annualMedicalCredit
  };
};

export const calculateTransferDuty = (propertyValue: number) => {
  let duty = 0;
  let prevLimit = 0;

  for (const bracket of TRANSFER_DUTY_RATES_2026) {
    if (propertyValue > bracket.limit) {
      prevLimit = bracket.limit;
      continue;
    }
    const taxableAmount = propertyValue - prevLimit;
    duty = bracket.base + (taxableAmount * bracket.rate);
    break;
  }
  return Math.max(0, duty);
};

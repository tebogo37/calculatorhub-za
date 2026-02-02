
import { INCOME_TAX_BRACKETS_2026, TAX_REBATES_2026, TRANSFER_DUTY_RATES_2026 } from './constants';

export const formatCurrency = (amount: number | undefined | null) => {
  const cleanAmount = typeof amount === 'number' && !isNaN(amount) ? amount : 0;
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
  }).format(cleanAmount);
};

export const calculateIncomeTax = (annualSalary: number, age: number = 25) => {
  const salary = typeof annualSalary === 'number' && !isNaN(annualSalary) ? annualSalary : 0;
  if (salary <= 0) return 0;
  
  let tax = 0;
  let prevLimit = 0;

  for (const bracket of INCOME_TAX_BRACKETS_2026) {
    if (salary > bracket.limit) {
      prevLimit = bracket.limit;
      continue;
    }
    const taxableAmount = salary - prevLimit;
    tax = bracket.base + (taxableAmount * bracket.rate);
    break;
  }

  tax -= TAX_REBATES_2026.primary;
  if (age >= 65) tax -= TAX_REBATES_2026.secondary;
  if (age >= 75) tax -= TAX_REBATES_2026.tertiary;

  return Math.max(0, tax);
};

export const calculateTwoPotTax = (annualIncome: number, withdrawalAmount: number) => {
  const inc = isNaN(annualIncome) ? 0 : annualIncome;
  const withdr = isNaN(withdrawalAmount) ? 0 : withdrawalAmount;
  
  const currentTax = calculateIncomeTax(inc, 30);
  const totalIncomeWithWithdrawal = inc + withdr;
  const newTax = calculateIncomeTax(totalIncomeWithWithdrawal, 30);
  
  const taxOnWithdrawal = Math.max(0, newTax - currentTax);
  const adminFee = Math.min(withdr * 0.01, 500);
  
  return {
    taxOnWithdrawal,
    adminFee,
    netAmount: Math.max(0, withdr - taxOnWithdrawal - adminFee),
    effectiveRate: withdr > 0 ? (taxOnWithdrawal / withdr) * 100 : 0
  };
};

export const calculateTaxRefund = (params: {
  annualSalary: number;
  payePaid: number;
  raContributions: number;
  medicalDependents: number; 
  age: number;
}) => {
  const salary = isNaN(params.annualSalary) ? 0 : params.annualSalary;
  const paye = isNaN(params.payePaid) ? 0 : params.payePaid;
  const ra = isNaN(params.raContributions) ? 0 : params.raContributions;
  const deps = isNaN(params.medicalDependents) ? 0 : params.medicalDependents;
  const age = isNaN(params.age) ? 30 : params.age;

  const raCapped = Math.min(ra, salary * 0.275, 350000);
  const taxableIncome = Math.max(0, salary - raCapped);
  
  const taxBeforeRA = calculateIncomeTax(salary, age);
  const taxAfterRA = calculateIncomeTax(taxableIncome, age);
  
  const monthlyMedicalCredit = 364 + (deps >= 1 ? 364 : 0) + (Math.max(0, deps - 1) * 246);
  const annualMedicalCredit = monthlyMedicalCredit * 12;
  
  const finalTaxLiability = Math.max(0, taxAfterRA - annualMedicalCredit);
  const refundAmount = paye - finalTaxLiability;
  
  return {
    finalTaxLiability,
    refundAmount,
    savingsFromRetirementAnnuity: Math.max(0, taxBeforeRA - taxAfterRA),
    medicalCreditTotal: annualMedicalCredit
  };
};

export const calculateTransferDuty = (propertyValue: number) => {
  const val = isNaN(propertyValue) ? 0 : propertyValue;
  let duty = 0;
  let prevLimit = 0;
  for (const bracket of TRANSFER_DUTY_RATES_2026) {
    if (val > bracket.limit) {
      prevLimit = bracket.limit;
      continue;
    }
    const taxableAmount = val - prevLimit;
    duty = bracket.base + (taxableAmount * bracket.rate);
    break;
  }
  return Math.max(0, duty);
};

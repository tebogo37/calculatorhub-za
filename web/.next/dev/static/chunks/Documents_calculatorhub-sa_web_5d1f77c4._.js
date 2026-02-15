(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/calculatorhub-sa/web/components/ui/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Card = ({ children, title, className = "" })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`,
        children: [
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 border-b border-slate-100 bg-slate-50/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-semibold text-slate-800",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/Documents/calculatorhub-sa/web/components/ui/Card.tsx",
                    lineNumber: 15,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/calculatorhub-sa/web/components/ui/Card.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: children
            }, void 0, false, {
                fileName: "[project]/Documents/calculatorhub-sa/web/components/ui/Card.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/calculatorhub-sa/web/components/ui/Card.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/calculatorhub-sa/web/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INCOME_TAX_BRACKETS_2026",
    ()=>INCOME_TAX_BRACKETS_2026,
    "TAX_REBATES_2026",
    ()=>TAX_REBATES_2026,
    "TRANSFER_DUTY_RATES_2026",
    ()=>TRANSFER_DUTY_RATES_2026,
    "VAT_RATE",
    ()=>VAT_RATE
]);
const VAT_RATE = 0.15;
const INCOME_TAX_BRACKETS_2026 = [
    {
        limit: 237100,
        rate: 0.18,
        base: 0
    },
    {
        limit: 370500,
        rate: 0.26,
        base: 42678
    },
    {
        limit: 512800,
        rate: 0.31,
        base: 77362
    },
    {
        limit: 673000,
        rate: 0.36,
        base: 121475
    },
    {
        limit: 857900,
        rate: 0.39,
        base: 179147
    },
    {
        limit: 1817000,
        rate: 0.41,
        base: 251258
    },
    {
        limit: Infinity,
        rate: 0.45,
        base: 644489
    }
];
const TAX_REBATES_2026 = {
    primary: 17235,
    secondary: 9444,
    tertiary: 3145
};
const TRANSFER_DUTY_RATES_2026 = [
    {
        limit: 1100000,
        rate: 0,
        base: 0
    },
    {
        limit: 1512500,
        rate: 0.03,
        base: 0
    },
    {
        limit: 2117500,
        rate: 0.06,
        base: 12375
    },
    {
        limit: 2722500,
        rate: 0.08,
        base: 48675
    },
    {
        limit: 12100000,
        rate: 0.11,
        base: 97075
    },
    {
        limit: Infinity,
        rate: 0.13,
        base: 1128600
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/calculatorhub-sa/web/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateIncomeTax",
    ()=>calculateIncomeTax,
    "calculateTaxRefund",
    ()=>calculateTaxRefund,
    "calculateTransferDuty",
    ()=>calculateTransferDuty,
    "calculateTwoPotTax",
    ()=>calculateTwoPotTax,
    "formatCurrency",
    ()=>formatCurrency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/lib/constants.ts [app-client] (ecmascript)");
;
const formatCurrency = (amount)=>{
    const cleanAmount = typeof amount === 'number' && !isNaN(amount) ? amount : 0;
    return new Intl.NumberFormat('en-ZA', {
        style: 'currency',
        currency: 'ZAR'
    }).format(cleanAmount);
};
const calculateIncomeTax = (annualSalary, age = 25)=>{
    const salary = typeof annualSalary === 'number' && !isNaN(annualSalary) ? annualSalary : 0;
    if (salary <= 0) return 0;
    let tax = 0;
    let prevLimit = 0;
    for (const bracket of __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INCOME_TAX_BRACKETS_2026"]){
        if (salary > bracket.limit) {
            prevLimit = bracket.limit;
            continue;
        }
        const taxableAmount = salary - prevLimit;
        tax = bracket.base + taxableAmount * bracket.rate;
        break;
    }
    // Primary Rebate is available to all individuals
    tax -= __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TAX_REBATES_2026"].primary;
    if (age >= 65) tax -= __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TAX_REBATES_2026"].secondary;
    if (age >= 75) tax -= __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TAX_REBATES_2026"].tertiary;
    return Math.max(0, tax);
};
const calculateTwoPotTax = (annualIncome, withdrawalAmount)=>{
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
        effectiveRate: withdr > 0 ? taxOnWithdrawal / withdr * 100 : 0
    };
};
const calculateTaxRefund = (params)=>{
    const salary = isNaN(params.annualSalary) ? 0 : params.annualSalary;
    const paye = isNaN(params.payePaid) ? 0 : params.payePaid;
    const ra = isNaN(params.raContributions) ? 0 : params.raContributions;
    const deps = isNaN(params.medicalDependents) ? 0 : params.medicalDependents;
    const age = isNaN(params.age) ? 30 : params.age;
    const raCapped = Math.min(ra, salary * 0.275, 350000);
    const taxableIncome = Math.max(0, salary - raCapped);
    const taxBeforeRA = calculateIncomeTax(salary, age);
    const taxAfterRA = calculateIncomeTax(taxableIncome, age);
    const monthlyMedicalCredit = 364 + (deps >= 1 ? 364 : 0) + Math.max(0, deps - 1) * 246;
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
const calculateTransferDuty = (propertyValue)=>{
    const val = isNaN(propertyValue) ? 0 : propertyValue;
    let duty = 0;
    let prevLimit = 0;
    for (const bracket of __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRANSFER_DUTY_RATES_2026"]){
        if (val > bracket.limit) {
            prevLimit = bracket.limit;
            continue;
        }
        const taxableAmount = val - prevLimit;
        duty = bracket.base + taxableAmount * bracket.rate;
        break;
    }
    return Math.max(0, duty);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/calculatorhub-sa/web/lib/sanity.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_FAQS",
    ()=>MOCK_FAQS,
    "MOCK_FINANCIAL_LINKS",
    ()=>MOCK_FINANCIAL_LINKS,
    "MOCK_GUIDES",
    ()=>MOCK_GUIDES,
    "MOCK_POSTS",
    ()=>MOCK_POSTS,
    "MOCK_SITE_CONTENT",
    ()=>MOCK_SITE_CONTENT,
    "SITE_CONTENT",
    ()=>SITE_CONTENT,
    "client",
    ()=>client,
    "queries",
    ()=>queries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/@sanity/client/dist/index.browser.js [app-client] (ecmascript) <locals>");
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
    projectId: ("TURBOPACK compile-time value", "pvj13q77"),
    dataset: ("TURBOPACK compile-time value", "production") || 'production',
    useCdn: true,
    apiVersion: '2024-03-01'
});
const queries = {
    postBySlug: `*[_type == "post" && slug.current == $slug][0] { ..., "slug": slug.current }`,
    recentPosts: `*[_type == "post" && targetSite == $site] | order(publishedAt desc)[0...5]`,
    siteContent: `*[_type == "siteContent" && siteKey == $site][0]`
};
const MOCK_SITE_CONTENT = {
    home: {
        heroTitle: "SA Financial Precision.",
        heroSubtitle: "The unified engine for South African Tax, VAT, and Property Duty. Built for the 2026 Budget cycle.",
        heroBg: "https://images.unsplash.com/photo-1454165833767-027ff33027ff?auto=format&fit=crop&q=80&w=2400"
    },
    vat: {
        title: "SA VAT Compliance Hub 2026",
        summary: "Standard 15% VAT calculations for South African vendors.",
        deepFooter: "VAT is the cornerstone of the SA revenue system. Mandatory for turnovers exceeding R1 million.",
        faqs: [
            {
                q: "What is the VAT registration threshold for 2026?",
                a: "Mandatory registration is required if your taxable supplies exceed R1 million in a 12-month period."
            },
            {
                q: "Can I claim VAT back on a car purchase?",
                a: "Generally, VAT cannot be claimed on passenger vehicles unless the business is a car dealer or rental company."
            }
        ]
    },
    tax: {
        title: "Income Tax Master Calculator 2026",
        summary: "Accurate PAYE modeling for the latest SARS progressive tax brackets.",
        deepFooter: "Personal Income Tax accounts for 38% of SA revenue. Maximize your Retirement Annuity deductions.",
        faqs: [
            {
                q: "What are the 2026 tax brackets?",
                a: "Rates start at 18% for income over R95,750 and go up to 45% for income over R1.817 million."
            },
            {
                q: "How much is the primary tax rebate?",
                a: "For 2026, the primary rebate is R17,235, providing relief to all individual taxpayers."
            }
        ]
    },
    property: {
        title: "Property Transfer Duty Estimator 2026",
        summary: "SARS thresholds for property acquisition tax.",
        deepFooter: "Exempt threshold remains R1.1 million for 2026.",
        faqs: [
            {
                q: "Do I pay Transfer Duty on new developments?",
                a: "No, you usually pay 15% VAT instead of Transfer Duty when buying directly from a developer."
            },
            {
                q: "Is the solar credit available for home buyers?",
                a: "Yes, if you install panels after purchase, you can claim 25% of the cost back from SARS (max R15,000)."
            }
        ]
    },
    twopot: {
        title: "Two-Pot Retirement Withdrawal Tax Tool",
        summary: "Calculate the tax impact of withdrawing from your Savings Pot.",
        deepFooter: "Withdrawals are taxed as gross income at your marginal rate.",
        faqs: [
            {
                q: "Is the first withdrawal tax-free?",
                a: "No. Every cent withdrawn from your Savings Pot is taxed as income at your marginal rate."
            },
            {
                q: "How often can I withdraw from the Savings Pot?",
                a: "You are allowed one withdrawal per tax year (March to February)."
            }
        ]
    }
};
const MOCK_FINANCIAL_LINKS = [
    {
        title: "SARS eFiling",
        url: "https://www.sars.gov.za",
        category: "Government"
    },
    {
        title: "National Treasury",
        url: "https://www.treasury.gov.za",
        category: "Policy"
    },
    {
        title: "Financial Sector Conduct Authority (FSCA)",
        url: "https://www.fsca.co.za",
        category: "Regulation"
    },
    {
        title: "JSE Limited",
        url: "https://www.jse.co.za",
        category: "Markets"
    },
    {
        title: "Reserve Bank (SARB)",
        url: "https://www.resbank.co.za",
        category: "Monetary"
    },
    {
        title: "Department of Finance",
        url: "http://www.finance.gov.za",
        category: "Government"
    }
];
const MOCK_GUIDES = [
    {
        title: "2026 Personal Tax Pocket Guide",
        slug: "tax-pocket-guide",
        description: "Downloadable PDF including all 2026 Tax Brackets and Medical Scheme Credits.",
        checklist: [
            "SARS Tax Table 2026",
            "Medical Credit Rates",
            "Travel Allowance Rules"
        ]
    },
    {
        title: "Property Cost Checklist",
        slug: "property-checklist",
        description: "Avoid R50k+ in hidden fees when buying property.",
        checklist: [
            "Transfer Duty Scale",
            "Conveyancing Fees",
            "Bond Registration Estimates"
        ]
    },
    {
        title: "Retirement Annuity Pro Tips",
        slug: "ra-pro-tips",
        description: "Master the 27.5% deduction rule for Retirement Annuities.",
        checklist: [
            "Section 11F Deduction Limits",
            "Retirement Annuity vs TFSA",
            "Tax Refund Maximization"
        ]
    },
    {
        title: "TFSA Master Checklist",
        slug: "tfsa-guide",
        description: "Maximize your R36,000 annual allowance.",
        checklist: [
            "R36,000 Annual Limit",
            "40% Penalty Clause",
            "Compounding Visualization"
        ]
    }
];
const MOCK_POSTS = [
    {
        title: "Two-Pot: Is a Withdrawal Worth the Tax?",
        slug: "two-pot-tax-worth-it",
        targetSite: "twopot",
        publishedAt: "2026-02-20T08:00:00Z",
        excerpt: "We calculate the high cost of early retirement pot access.",
        body: [
            {
                _type: 'block',
                children: [
                    {
                        text: 'The tax on two-pot withdrawals is based on your marginal rate...'
                    }
                ]
            }
        ]
    },
    {
        title: "5 Things to Know Before Withdrawing from your Savings Pot",
        slug: "savings-pot-essentials",
        targetSite: "twopot",
        publishedAt: "2026-02-19T08:00:00Z",
        excerpt: "Avoid the R500 admin fee and 45% tax trap.",
        body: [
            {
                _type: 'block',
                children: [
                    {
                        text: 'SARS takes a significant cut of two-pot withdrawals...'
                    }
                ]
            }
        ]
    },
    {
        title: "SARS Budget 2026: Key Changes",
        slug: "sars-budget-2026-changes",
        targetSite: "tax",
        publishedAt: "2026-02-18T08:00:00Z",
        excerpt: "The 2026 budget speech has implications for middle-income earners.",
        body: [
            {
                _type: 'block',
                children: [
                    {
                        text: 'Detailed budget analysis...'
                    }
                ]
            }
        ]
    }
];
const MOCK_FAQS = [
    {
        q: "Why did the top tax rate increase in 2017?",
        a: "The 2017 Budget introduced a new top marginal income tax bracket of 45% for individuals with taxable income above R1.5 million to increase revenue."
    },
    {
        q: "What is 'Fiscal Drag' or 'Bracket Creep'?",
        a: "Fiscal drag occurs when inflation pushes taxpayers into higher tax brackets, effectively increasing their tax burden even if their real income hasn't increased, because tax thresholds are not adjusted fully for inflation."
    },
    {
        q: "How has the VAT rate changed recently?",
        a: "The standard VAT rate in South Africa was increased from 14% to 15% effective from 1 April 2018, which was the first increase in VAT since 1993."
    }
];
const SITE_CONTENT = MOCK_SITE_CONTENT;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaxHistory",
    ()=>TaxHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/lucide-react/dist/esm/icons/share-2.js [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/lucide-react/dist/esm/icons/circle-help.js [app-client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$lib$2f$sanity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/lib/sanity.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const TaxHistory = ({ onBack })=>{
    const data = [
        {
            year: '2016',
            rate: 41,
            threshold: 181900
        },
        {
            year: '2017',
            rate: 45,
            threshold: 189880,
            event: '45% Bracket Intro'
        },
        {
            year: '2018',
            rate: 45,
            threshold: 189880,
            event: 'VAT Hike to 15%'
        },
        {
            year: '2019',
            rate: 45,
            threshold: 195850
        },
        {
            year: '2020',
            rate: 45,
            threshold: 205900
        },
        {
            year: '2021',
            rate: 45,
            threshold: 216200
        },
        {
            year: '2022',
            rate: 45,
            threshold: 226000
        },
        {
            year: '2023',
            rate: 45,
            threshold: 237100
        },
        {
            year: '2024',
            rate: 45,
            threshold: 237100,
            event: 'Two-Pot Launch'
        },
        {
            year: '2025',
            rate: 45,
            threshold: 237100
        },
        {
            year: '2026',
            rate: 45,
            threshold: 237100
        }
    ];
    const handleShare = async ()=>{
        try {
            await navigator.share({
                title: 'SA Tax History 2016-2026',
                text: 'Visualizing 10 years of South African tax policy shifts.',
                url: ("TURBOPACK compile-time truthy", 1) ? window.location.href : "TURBOPACK unreachable"
            });
        } catch (err) {
            if (typeof navigator !== 'undefined' && navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
            }
        }
    };
    const chartHeight = 300;
    const chartWidth = 800;
    const padding = 40;
    const maxRate = 50;
    const points = data.map((d, i)=>{
        const x = padding + i * (chartWidth - 2 * padding) / (data.length - 1);
        const y = chartHeight - padding - d.rate / maxRate * (chartHeight - 2 * padding);
        return `${x},${y}`;
    }).join(' ');
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$lib$2f$sanity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_FAQS"].map((f)=>({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.a
                }
            }))
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto px-4 py-12 space-y-20 animate-in fade-in duration-700 pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(faqSchema)
                }
            }, void 0, false, {
                fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-emerald-600 transition-colors uppercase tracking-widest",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Back to Hub"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleShare,
                        className: "px-6 py-3 bg-slate-900 text-white rounded-xl flex items-center gap-2 font-black uppercase text-xs hover:bg-slate-800 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Share Analysis"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "space-y-4 max-w-4xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-6xl font-black text-slate-900 leading-tight",
                        children: [
                            "SA Tax Trajectory ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-emerald-500",
                                children: "2016 - 2026"
                            }, void 0, false, {
                                fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                lineNumber: 74,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-500 text-2xl leading-relaxed font-medium",
                        children: "Tracking a decade of fiscal evolution: significant marginal rate shifts and the stagnation of tax brackets against inflation."
                    }, void 0, false, {
                        fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-4 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: "lg:col-span-3 space-y-10 overflow-hidden p-12 rounded-[4rem] border-slate-100 shadow-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-black flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                className: "text-emerald-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                                lineNumber: 84,
                                                columnNumber: 73
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " Marginal Tax Rate shifts"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-black text-slate-400 uppercase tracking-widest",
                                        children: "Validated SARS Statistics"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full h-[400px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: `0 0 ${chartWidth} ${chartHeight}`,
                                    className: "w-full h-full",
                                    children: [
                                        [
                                            0,
                                            10,
                                            20,
                                            30,
                                            40,
                                            50
                                        ].map((v)=>{
                                            const y = chartHeight - padding - v / maxRate * (chartHeight - 2 * padding);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: padding,
                                                        y1: y,
                                                        x2: chartWidth - padding,
                                                        y2: y,
                                                        stroke: "#f1f5f9",
                                                        strokeWidth: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                        x: padding - 10,
                                                        y: y + 4,
                                                        textAnchor: "end",
                                                        className: "text-[10px] fill-slate-300 font-bold",
                                                        children: [
                                                            v,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, v, true, {
                                                fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0));
                                        }),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: `M ${padding},${chartHeight - padding} L ${points} L ${chartWidth - padding},${chartHeight - padding} Z`,
                                            className: "fill-emerald-500/5 transition-all duration-1000"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                            fill: "none",
                                            stroke: "#10b981",
                                            strokeWidth: "4",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            points: points
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        data.map((d, i)=>{
                                            const x = padding + i * (chartWidth - 2 * padding) / (data.length - 1);
                                            const y = chartHeight - padding - d.rate / maxRate * (chartHeight - 2 * padding);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: x,
                                                        cy: y,
                                                        r: "6",
                                                        className: "fill-white stroke-emerald-500 stroke-[3] transition-all cursor-crosshair"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    d.event && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("foreignObject", {
                                                        x: x - 50,
                                                        y: y - 60,
                                                        width: "100",
                                                        height: "50",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "bg-slate-900 text-white text-[8px] font-black uppercase p-2 rounded-lg text-center shadow-lg transform -rotate-3",
                                                            children: d.event
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xl font-black text-slate-900 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                        className: "text-blue-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 91
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Policy Shift: 2017"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                                lineNumber: 130,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-500 leading-relaxed",
                                                children: "The 2017 Budget introduced the 45% top marginal income tax rate for taxable income above R1.5 million."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                                lineNumber: 131,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                        lineNumber: 129,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xl font-black text-slate-900 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "text-emerald-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 91
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Bracket Stagnation"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-500 leading-relaxed",
                                                children: "Tax thresholds have remained relatively flat in 2025/2026 to increase revenue, causing 'Fiscal Drag'."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                        lineNumber: 133,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                title: "Threshold Tracker",
                                className: "border-slate-100 rounded-[2.5rem] p-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 uppercase font-black tracking-widest text-center",
                                            children: "Annual Entry Point"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                            lineNumber: 143,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: data.slice(-5).reverse().map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-transparent hover:border-slate-200 transition-all cursor-default",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-bold",
                                                            children: d.year
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-black text-slate-900",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(d.threshold)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, d.year, true, {
                                                    fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 24
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                            lineNumber: 144,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                    lineNumber: 142,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                lineNumber: 141,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-10 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-[3rem] text-white space-y-4 shadow-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$help$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                        className: "text-emerald-200",
                                        size: 32
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-2xl font-black leading-tight",
                                        children: "Professional Insights"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-emerald-100 text-sm leading-relaxed italic",
                                        children: "Download the full historical whitepaper from the Resource Center for deep policy analysis."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                lineNumber: 155,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "max-w-4xl mx-auto space-y-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl font-black text-slate-900 text-center",
                        children: "Historical Context FAQ"
                    }, void 0, false, {
                        fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                        lineNumber: 164,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-6",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$lib$2f$sanity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOCK_FAQS"].map((faq, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                className: "p-10 rounded-[2.5rem] border-slate-100 shadow-sm hover:shadow-xl transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-2xl font-black text-slate-900 mb-4",
                                        children: faq.q
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                        lineNumber: 168,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 text-lg leading-relaxed",
                                        children: faq.a
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                        lineNumber: 169,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, i, true, {
                                fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                                lineNumber: 167,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                        lineNumber: 165,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/calculatorhub-sa/web/sites/resources/TaxHistory.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TaxHistory;
var _c;
__turbopack_context__.k.register(_c, "TaxHistory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Layout",
    ()=>Layout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/lucide-react/dist/esm/icons/phone-call.js [app-client] (ecmascript) <export default as PhoneCall>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const Layout = ({ children, activeSite, currentPage, onOpenCallback })=>{
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const metrics = [
        {
            label: 'ZAR / USD',
            value: 'R18.42',
            change: '-0.12%',
            positive: true
        },
        {
            label: 'BRENT CRUDE',
            value: '$82.40',
            change: '+1.45%',
            positive: false
        },
        {
            label: 'JSE TOP 40',
            value: '74,210',
            change: '+0.88%',
            positive: true
        },
        {
            label: 'REPO RATE',
            value: '8.25%',
            change: '0.00%',
            positive: true
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-2506a4e746316f82" + " " + "min-h-screen flex flex-col font-inter selection:bg-emerald-100 selection:text-emerald-900",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-2506a4e746316f82" + " " + "sticky top-0 z-[60]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "jsx-2506a4e746316f82" + " " + "bg-slate-900 text-white border-b border-slate-800",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-2506a4e746316f82" + " " + "max-w-7xl mx-auto px-4 h-20 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center gap-2 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-2506a4e746316f82" + " " + "bg-emerald-500 p-2 rounded-xl group-hover:rotate-12 transition-transform",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                                size: 22,
                                                className: "text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                                lineNumber: 34,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-2506a4e746316f82" + " " + "font-black text-2xl tracking-tighter",
                                            children: [
                                                "Calculator",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-2506a4e746316f82" + " " + "text-emerald-400",
                                                    children: "Hub"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 80
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-2506a4e746316f82" + " " + "hidden lg:flex items-center gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/vat",
                                            className: `text-sm font-bold transition-colors ${activeSite === 'vat' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'}`,
                                            children: "VAT"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/tax",
                                            className: `text-sm font-bold transition-colors ${activeSite === 'tax' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'}`,
                                            children: "Income Tax"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/property",
                                            className: `text-sm font-bold transition-colors ${activeSite === 'property' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'}`,
                                            children: "Property"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/twopot",
                                            className: `text-sm font-bold transition-colors ${activeSite === 'twopot' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'} flex items-center gap-1.5`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                    size: 14,
                                                    className: "text-orange-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 18
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Two-Pot"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-2506a4e746316f82" + " " + "h-6 w-px bg-slate-800 mx-2"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                            lineNumber: 46,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/refund-estimator",
                                            className: `text-sm font-bold flex items-center gap-2 transition-colors ${currentPage === 'refund-estimator' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Refund Tool"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                            lineNumber: 47,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/resources",
                                            className: `text-sm font-bold flex items-center gap-2 transition-colors ${currentPage === 'resources' ? 'text-emerald-400' : 'text-slate-400 hover:text-white'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Resources"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-2506a4e746316f82" + " " + "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: onOpenCallback,
                                            className: "jsx-2506a4e746316f82" + " " + "hidden sm:flex bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-black px-6 py-3 rounded-xl text-sm transition-all items-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneCall$3e$__["PhoneCall"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " Compliance Help"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                            className: "jsx-2506a4e746316f82" + " " + "lg:hidden p-3 bg-slate-800 rounded-xl text-white",
                                            children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                                lineNumber: 60,
                                                columnNumber: 31
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                                lineNumber: 60,
                                                columnNumber: 49
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-2506a4e746316f82" + " " + "bg-slate-900 border-b border-slate-800 py-2.5 overflow-hidden flex items-center relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-2506a4e746316f82" + " " + "flex animate-marquee whitespace-nowrap gap-12 flex-grow",
                            children: [
                                ...metrics,
                                ...metrics,
                                ...metrics
                            ].map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-2506a4e746316f82" + " " + "flex items-center gap-3 px-6 border-r border-slate-800 last:border-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-2506a4e746316f82" + " " + "text-[10px] font-black text-slate-500 uppercase tracking-widest",
                                            children: m.label
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                            lineNumber: 70,
                                            columnNumber: 20
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-2506a4e746316f82" + " " + "text-sm font-bold text-white",
                                            children: m.value
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                            lineNumber: 71,
                                            columnNumber: 20
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-2506a4e746316f82" + " " + `text-[10px] font-bold ${m.positive ? 'text-emerald-400' : 'text-red-400'}`,
                                            children: m.change
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                            lineNumber: 72,
                                            columnNumber: 20
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, i, true, {
                                    fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                    lineNumber: 69,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                            lineNumber: 67,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-2506a4e746316f82" + " " + "lg:hidden bg-slate-900 border-b border-slate-800 p-6 space-y-4 animate-in slide-in-from-top duration-300 shadow-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/vat",
                                className: "block w-full text-left py-4 text-lg font-bold border-b border-slate-800 text-white",
                                children: "VAT Hub"
                            }, void 0, false, {
                                fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/tax",
                                className: "block w-full text-left py-4 text-lg font-bold border-b border-slate-800 text-white",
                                children: "Income Tax"
                            }, void 0, false, {
                                fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/property",
                                className: "block w-full text-left py-4 text-lg font-bold border-b border-slate-800 text-white",
                                children: "Property Duty"
                            }, void 0, false, {
                                fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/twopot",
                                className: "block w-full text-left py-4 text-lg font-bold border-b border-slate-800 text-orange-400",
                                children: "Two-Pot System"
                            }, void 0, false, {
                                fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/refund-estimator",
                                className: "block w-full text-left py-4 text-lg font-bold border-b border-slate-800 text-emerald-400",
                                children: "Refund Estimator"
                            }, void 0, false, {
                                fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    onOpenCallback?.();
                                    setIsMenuOpen(false);
                                },
                                className: "jsx-2506a4e746316f82" + " " + "w-full py-5 bg-emerald-500 text-slate-900 font-black rounded-2xl text-center",
                                children: "Compliance Help"
                            }, void 0, false, {
                                fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "jsx-2506a4e746316f82" + " " + "flex-grow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-2506a4e746316f82" + " " + "bg-white border-b border-slate-100 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-2506a4e746316f82" + " " + "max-w-7xl mx-auto px-4 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-slate-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-2506a4e746316f82" + " " + "flex gap-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-2506a4e746316f82" + " " + "flex items-center gap-1.5 text-slate-500 italic",
                                        children: "SARS Reference: 2026 Budget cycle"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-2506a4e746316f82" + " " + "text-slate-300",
                                    children: "Updated: February 2026"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                            lineNumber: 92,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-2506a4e746316f82",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "jsx-2506a4e746316f82" + " " + "bg-slate-900 text-slate-400 py-20 mt-20 border-t border-slate-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-2506a4e746316f82" + " " + "max-w-7xl mx-auto px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-2506a4e746316f82" + " " + "grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-2506a4e746316f82" + " " + "col-span-1 md:col-span-2 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-2506a4e746316f82" + " " + "flex items-center justify-center md:justify-start gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                                size: 32,
                                                className: "text-emerald-500"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-2506a4e746316f82" + " " + "font-black text-2xl text-white tracking-tighter",
                                                children: "CalculatorHub"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-2506a4e746316f82" + " " + "text-lg text-slate-400 max-w-sm mx-auto md:mx-0 leading-relaxed",
                                        children: "South Africa's premium utility engine for professional tax modeling. Accurate for the 2026 fiscal year."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-2506a4e746316f82",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "jsx-2506a4e746316f82" + " " + "font-black text-white mb-6 uppercase text-xs tracking-[0.2em]",
                                        children: "Ecosystem"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "jsx-2506a4e746316f82" + " " + "space-y-4 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-2506a4e746316f82",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/vat",
                                                    className: "hover:text-emerald-400",
                                                    children: "VAT Hub"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-2506a4e746316f82",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/tax",
                                                    className: "hover:text-emerald-400",
                                                    children: "Income Tax (PAYE)"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-2506a4e746316f82",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/property",
                                                    className: "hover:text-emerald-400",
                                                    children: "Transfer Duty"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-2506a4e746316f82",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/twopot",
                                                    className: "hover:text-emerald-400",
                                                    children: "Two-Pot System"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                lineNumber: 114,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-2506a4e746316f82",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "jsx-2506a4e746316f82" + " " + "font-black text-white mb-6 uppercase text-xs tracking-[0.2em]",
                                        children: "Tools"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "jsx-2506a4e746316f82" + " " + "space-y-4 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-2506a4e746316f82",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/refund-estimator",
                                                    className: "hover:text-emerald-400",
                                                    children: "Refund Estimator"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-2506a4e746316f82",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/resources",
                                                    className: "hover:text-emerald-400",
                                                    children: "Education Center"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "jsx-2506a4e746316f82",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/links",
                                                    className: "hover:text-emerald-400 flex items-center justify-center md:justify-start gap-1",
                                                    children: [
                                                        "Financial Directory ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 152
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "2506a4e746316f82",
                children: "@keyframes marquee{0%{transform:translate(0)}to{transform:translate(-50%)}}.animate-marquee.jsx-2506a4e746316f82{animation:40s linear infinite marquee;display:inline-flex}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/calculatorhub-sa/web/components/shared/Layout.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Layout, "vK10R+uCyHfZ4DZVnxbYkMWJB8g=");
_c = Layout;
var _c;
__turbopack_context__.k.register(_c, "Layout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_calculatorhub-sa_web_5d1f77c4._.js.map
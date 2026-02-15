module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Documents/calculatorhub-sa/web/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Documents/calculatorhub-sa/web/lib/sanity.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/@sanity/client/dist/index.browser.js [app-rsc] (ecmascript) <locals>");
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
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
}),
"[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DynamicPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/lib/sanity.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/lucide-react/dist/esm/icons/calendar.js [app-rsc] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-rsc] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/lucide-react/dist/esm/icons/file-text.js [app-rsc] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
// Helper to find data in either Mock Posts or Mock Guides
async function getData(slug) {
    // 1. Try Real Sanity (if connected)
    try {
        const post = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["client"].fetch(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["queries"].postBySlug, {
            slug
        });
        if (post) return {
            type: 'post',
            data: post
        };
    } catch (e) {
    // Sanity not connected, ignore
    }
    // 2. Check Mock Posts
    const mockPost = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MOCK_POSTS"].find((p)=>p.slug === slug);
    if (mockPost) return {
        type: 'post',
        data: mockPost
    };
    // 3. Check Mock Guides
    const mockGuide = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$lib$2f$sanity$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MOCK_GUIDES"].find((g)=>g.slug === slug);
    if (mockGuide) return {
        type: 'guide',
        data: mockGuide
    };
    return null;
}
async function DynamicPage({ params }) {
    const { slug } = await params;
    const result = await getData(slug);
    if (!result) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const { type, data } = result;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50 py-12 md:py-20 animate-in fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "inline-flex items-center text-slate-500 hover:text-emerald-600 mb-8 transition-colors font-medium group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            size: 18,
                            className: "mr-2 group-hover:-translate-x-1 transition-transform"
                        }, void 0, false, {
                            fileName: "[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        "Back to Hub"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest ${type === 'guide' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}`,
                                    children: type === 'guide' ? 'Resource Guide' : data.targetSite || 'Blog'
                                }, void 0, false, {
                                    fileName: "[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                data.publishedAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center text-slate-400 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            size: 14,
                                            className: "mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, this),
                                        new Date(data.publishedAt).toLocaleDateString('en-ZA')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6",
                            children: data.title
                        }, void 0, false, {
                            fileName: "[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        data.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-slate-500 leading-relaxed border-l-4 border-emerald-500 pl-4",
                            children: data.description
                        }, void 0, false, {
                            fileName: "[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                    className: "bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100",
                    children: [
                        type === 'guide' && data.checklist && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold text-slate-800 flex items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "mr-2 text-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this),
                                        "Action Checklist"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-4",
                                    children: data.checklist.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start p-4 bg-slate-50 rounded-xl border border-slate-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    className: "text-emerald-500 mt-1 mr-4 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg text-slate-700 font-medium",
                                                    children: item
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx",
                                            lineNumber: 85,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-50 p-6 rounded-xl text-blue-800 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Pro Tip:"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this),
                                        " This guide is updated for the 2026/2027 tax year."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this),
                        type === 'post' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "prose prose-lg prose-slate max-w-none",
                            children: Array.isArray(data.body) ? data.body.map((block, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-600 leading-relaxed mb-6",
                                    children: block.children?.[0]?.text || ''
                                }, i, false, {
                                    fileName: "[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 20
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$calculatorhub$2d$sa$2f$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-600 italic",
                                children: "No content details available."
                            }, void 0, false, {
                                fileName: "[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx",
                                lineNumber: 107,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/calculatorhub-sa/web/app/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8f79894d._.js.map
'use client';

import React, { useState } from 'react';
import { PortableText } from '@portabletext/react';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { formatCurrency } from '../../lib/utils';
import { Fuel, MapPin, Car, Info, ChevronDown, RefreshCw } from 'lucide-react';
import { MOCK_ESSENTIALS } from '../../lib/sanity';
import { useLiveRates } from '../../hooks/useLiveRates';
import { useRouter } from 'next/navigation';
import { RecentPosts } from '../../components/shared/RecentPosts';

const SITE_URL = 'https://www.calculatorhub.co.za';

type FuelType = 'unleaded_95' | 'unleaded_93' | 'diesel_50ppm';

const FUEL_LABELS: Record<FuelType, string> = {
  unleaded_95: 'Unleaded 95 (Inland)',
  unleaded_93: 'Unleaded 93 (Coastal)',
  diesel_50ppm: 'Diesel 50ppm',
};

interface FuelCalculatorProps {
  siteContent?: any;
  recentPosts?: any[];
}

export const FuelCalculator: React.FC<FuelCalculatorProps> = ({ siteContent,
  recentPosts = [], }) => {
  const router = useRouter();
  const mock = MOCK_ESSENTIALS.fuel;
  const { commonCarTanks, popularRoutes } = mock;

  const summary = siteContent?.summary || mock.summary;
  const faqs = (siteContent?.faqs || mock.faqs || []).map((f: any) => ({
    q: f.q || f.question,
    a: f.a || f.answer,
  }));

  const deep = siteContent?.deepContent;
  const hasPortableDeep = Array.isArray(deep) && deep.length > 0;
  const hasStringDeep = typeof deep === 'string' && deep.trim().length > 0;

  const pageTitle =
    siteContent?.seoTitle || siteContent?.title || 'SA Fuel Price Calculator';
  const pageDescription =
    siteContent?.metaDescription || summary;

  const { rates, loading, isLive, lastFetched, refresh } = useLiveRates();

  const fuelPrices: Record<FuelType, number> = {
    unleaded_95: rates.fuel.inland.unleaded_95,
    unleaded_93: rates.fuel.inland.unleaded_93,
    diesel_50ppm: rates.fuel.inland.diesel_50ppm,
  };
  const fuelLastUpdated = rates.fuel.last_updated;

  const [fillLitres, setFillLitres] = useState<string>('50');
  const [fillFuelType, setFillFuelType] = useState<FuelType>('unleaded_95');
  const [selectedCar, setSelectedCar] = useState<string>('custom');
  const fillCost = (parseFloat(fillLitres) || 0) * fuelPrices[fillFuelType];

  const handleCarSelect = (make: string) => {
    setSelectedCar(make);
    if (make !== 'custom') {
      const car = commonCarTanks.find((c: any) => c.make === make);
      if (car) setFillLitres(String(car.tankLitres));
    }
  };

  const [tripTab, setTripTab] = useState<'route' | 'custom'>('route');
  const [selectedRoute, setSelectedRoute] = useState<string>('');
  const [tripDistanceKm, setTripDistanceKm] = useState<string>('');
  const [tripTolls, setTripTolls] = useState<string>('0');
  const [tripConsumption, setTripConsumption] = useState<string>('8.0');
  const [tripFuelType, setTripFuelType] = useState<FuelType>('unleaded_95');
  const [roundTrip, setRoundTrip] = useState(false);

  const handleRouteSelect = (routeKey: string) => {
    setSelectedRoute(routeKey);
    if (routeKey) {
      const r = popularRoutes.find((x: any) => `${x.from}-${x.to}` === routeKey);
      if (r) {
        setTripDistanceKm(String(r.distanceKm));
        setTripTolls(String(r.tollsZar));
      }
    }
  };

  const distance = parseFloat(tripDistanceKm) || 0;
  const multiplier = roundTrip ? 2 : 1;
  const litresNeeded = (distance * multiplier * (parseFloat(tripConsumption) || 0)) / 100;
  const fuelCost = litresNeeded * fuelPrices[tripFuelType];
  const tollCost = (parseFloat(tripTolls) || 0) * multiplier;
  const tripTotal = fuelCost + tollCost;

  const [activeTab, setActiveTab] = useState<'fill' | 'trip'>('fill');

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CalculatorHub SA',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.ico`,
    areaServed: { '@type': 'Country', name: 'South Africa' },
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    description: pageDescription,
    url: `${SITE_URL}/essentials/fuel`,
    isPartOf: { '@type': 'WebSite', name: 'CalculatorHub SA', url: SITE_URL },
  };

  const toolSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'SA Fuel Price Calculator',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'ZAR' },
    description: pageDescription,
    url: `${SITE_URL}/essentials/fuel`,
    provider: { '@type': 'Organization', name: 'CalculatorHub SA', url: SITE_URL },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f: any) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in duration-700 py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-black uppercase tracking-widest">
          <Fuel size={12} /> DMRE Official Prices
        </div>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-5xl font-black text-slate-900 leading-tight">
              SA Fuel <span className="text-orange-500">Calculator</span>
            </h1>
            <p className="text-slate-500 text-lg mt-2">{summary}</p>
          </div>
          <button
            onClick={refresh}
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-sm font-bold text-slate-600 transition-all"
          >
            <RefreshCw size={14} className={loading ? 'animate-spin' : ''} />
            {loading ? 'Updating…' : 'Refresh prices'}
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div className={`w-2 h-2 rounded-full ${isLive ? 'bg-emerald-500' : 'bg-slate-400'}`} />
          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
            {isLive
              ? `Live · fetched ${lastFetched?.toLocaleTimeString('en-ZA', {
                  hour: '2-digit',
                  minute: '2-digit',
                })} · effective ${fuelLastUpdated}`
              : `Estimated · ${fuelLastUpdated}`}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {(Object.keys(FUEL_LABELS) as FuelType[]).map((k) => (
          <div
            key={k}
            className={`bg-slate-900 rounded-2xl p-5 text-center space-y-1 transition-opacity ${
              loading ? 'opacity-50' : ''
            }`}
          >
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
              {FUEL_LABELS[k].split(' (')[0]}
            </p>
            <p className="text-2xl font-black text-orange-400 tabular-nums">
              R{fuelPrices[k].toFixed(2)}
            </p>
            <p className="text-[10px] text-slate-600">per litre</p>
          </div>
        ))}
      </div>

      <div className="flex bg-slate-100 p-1.5 rounded-2xl w-fit">
        {(['fill', 'trip'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-8 py-3 text-sm font-black rounded-xl transition-all ${
              activeTab === t ? 'bg-white shadow-md text-slate-900' : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {t === 'fill' ? '⛽ Tank Fill' : '🗺️ Road Trip'}
          </button>
        ))}
      </div>

      {activeTab === 'fill' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-5">
            <Card title="Fill Settings" className="border-slate-100 shadow-xl">
              <div className="space-y-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <Car size={14} /> Quick Car Selector
                  </label>
                  <div className="relative">
                    <select
                      className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all appearance-none pr-10"
                      value={selectedCar}
                      onChange={(e) => handleCarSelect(e.target.value)}
                    >
                      <option value="custom">Custom / Enter manually</option>
                      {commonCarTanks.map((c: any) => (
                        <option key={c.make} value={c.make}>
                          {c.make} ({c.tankLitres}L)
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    />
                  </div>
                </div>

                <Input
                  label="Litres to Fill"
                  type="number"
                  value={fillLitres}
                  onChange={(e) => {
                    setFillLitres(e.target.value);
                    setSelectedCar('custom');
                  }}
                />

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">Fuel Type</label>
                  <div className="flex flex-col gap-2">
                    {(Object.keys(FUEL_LABELS) as FuelType[]).map((k) => (
                      <button
                        key={k}
                        onClick={() => setFillFuelType(k)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-bold transition-all ${
                          fillFuelType === k
                            ? 'bg-orange-50 border-orange-300 text-orange-700'
                            : 'border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <span>{FUEL_LABELS[k]}</span>
                        <span className="font-black">R{fuelPrices[k].toFixed(2)}/L</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="bg-slate-900 rounded-[2rem] p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />
              <div className="relative z-10 space-y-3">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                  Total Fill Cost
                </p>
                <p className="text-7xl font-black text-orange-400 tabular-nums tracking-tighter">
                  {formatCurrency(fillCost)}
                </p>
                <p className="text-slate-500 text-sm">
                  {parseFloat(fillLitres) || 0}L · {FUEL_LABELS[fillFuelType]}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {commonCarTanks.slice(0, 4).map((car: any) => {
                const cost = car.tankLitres * fuelPrices[fillFuelType];
                return (
                  <button
                    key={car.make}
                    onClick={() => handleCarSelect(car.make)}
                    className={`text-left p-4 rounded-2xl border transition-all ${
                      selectedCar === car.make
                        ? 'border-orange-300 bg-orange-50'
                        : 'border-slate-100 bg-white hover:border-slate-200'
                    }`}
                  >
                    <p className="font-black text-slate-900 text-sm">{car.make}</p>
                    <p className="text-xs text-slate-500 mt-1">
                      {car.tankLitres}L · {car.avgConsumption}L/100km
                    </p>
                    <p className="text-orange-600 font-black mt-2">
                      {formatCurrency(cost)} full tank
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'trip' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-5">
            <Card title="Trip Details" className="border-slate-100 shadow-xl">
              <div className="space-y-5">
                <div className="flex bg-slate-100 p-1 rounded-xl">
                  <button
                    onClick={() => setTripTab('route')}
                    className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${
                      tripTab === 'route' ? 'bg-white shadow text-slate-900' : 'text-slate-500'
                    }`}
                  >
                    Popular Route
                  </button>
                  <button
                    onClick={() => setTripTab('custom')}
                    className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${
                      tripTab === 'custom' ? 'bg-white shadow text-slate-900' : 'text-slate-500'
                    }`}
                  >
                    Custom
                  </button>
                </div>

                {tripTab === 'route' ? (
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                      <MapPin size={14} /> Select Route
                    </label>
                    <div className="relative">
                      <select
                        className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all appearance-none pr-10"
                        value={selectedRoute}
                        onChange={(e) => handleRouteSelect(e.target.value)}
                      >
                        <option value="">Choose a route…</option>
                        {popularRoutes.map((r: any) => (
                          <option key={`${r.from}-${r.to}`} value={`${r.from}-${r.to}`}>
                            {r.from} → {r.to} ({r.distanceKm} km)
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        size={16}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                      />
                    </div>
                  </div>
                ) : (
                  <Input
                    label="Distance (km)"
                    type="number"
                    value={tripDistanceKm}
                    onChange={(e) => setTripDistanceKm(e.target.value)}
                  />
                )}

                <Input
                  label="Fuel consumption (L/100km)"
                  type="number"
                  value={tripConsumption}
                  onChange={(e) => setTripConsumption(e.target.value)}
                />
                <Input
                  label="Tolls (ZAR)"
                  type="number"
                  value={tripTolls}
                  onChange={(e) => setTripTolls(e.target.value)}
                />

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-slate-700">Fuel Type</label>
                  <div className="flex flex-col gap-2">
                    {(Object.keys(FUEL_LABELS) as FuelType[]).map((k) => (
                      <button
                        key={k}
                        onClick={() => setTripFuelType(k)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-bold transition-all ${
                          tripFuelType === k
                            ? 'bg-orange-50 border-orange-300 text-orange-700'
                            : 'border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <span>{FUEL_LABELS[k]}</span>
                        <span className="font-black">R{fuelPrices[k].toFixed(2)}/L</span>
                      </button>
                    ))}
                  </div>
                </div>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={roundTrip}
                    onChange={(e) => setRoundTrip(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-orange-400"
                  />
                  <span className="text-sm font-bold text-slate-700">Round trip</span>
                </label>
              </div>
            </Card>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="bg-slate-900 rounded-[2rem] p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />
              <div className="relative z-10 space-y-3">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                  Total Trip Cost
                </p>
                <p className="text-7xl font-black text-orange-400 tabular-nums tracking-tighter">
                  {formatCurrency(tripTotal)}
                </p>
                <p className="text-slate-500 text-sm">
                  Fuel {formatCurrency(fuelCost)} · Tolls {formatCurrency(tollCost)} ·{' '}
                  {litresNeeded.toFixed(1)}L
                </p>
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl flex gap-3">
              <Info size={16} className="text-blue-500 shrink-0 mt-0.5" />
              <p className="text-xs text-blue-700 leading-relaxed">
                Distances use major highway routes. Tolls are estimates for SANRAL plazas only.
                Gauteng e-tolls were scrapped in 2023.
              </p>
            </div>
          </div>
        </div>
      )}

      {(hasPortableDeep || hasStringDeep) && (
        <section className="bg-white p-10 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm space-y-6 mt-4">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            SA fuel prices &amp; trip costs explained
          </h2>
          {hasPortableDeep ? (
            <div className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-a:text-emerald-600">
              <PortableText value={deep} />
            </div>
          ) : (
            <div className="text-slate-600 leading-relaxed text-lg whitespace-pre-line">{deep}</div>
          )}
        </section>
      )}

      {faqs.length > 0 && (
        <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-6 mt-8">
          <h2 className="text-3xl font-black text-slate-900">Fuel Price FAQ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {faqs.map((faq: any, i: number) => (
              <div key={i} className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="font-black text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

            <RecentPosts
        posts={recentPosts}
        onNavigate={(path) => router.push(`/${path}`)}
      />
    </div>
  );
};
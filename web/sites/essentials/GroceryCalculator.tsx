//path web/sites/essentials/grocerycalculator

'use client';

import React, { useState } from 'react';
import { formatCurrency } from '../../lib/utils';
import { ShoppingCart, Plus, Minus, Trash2, TrendingUp, Info } from 'lucide-react';
import { MOCK_ESSENTIALS } from '../../lib/sanity';

const data = MOCK_ESSENTIALS.groceries;

interface BasketItem {
  name: string;
  unit: string;
  price: number;
  icon: string;
  qty: number;
}

export const GroceryCalculator: React.FC = () => {
  const [basket, setBasket] = useState<Record<string, BasketItem>>({});
  const [budgetStr, setBudgetStr] = useState('2000');

  const addItem = (item: typeof data.groceryItems[0]) => {
    setBasket((prev) => ({
      ...prev,
      [item.name]: prev[item.name]
        ? { ...prev[item.name], qty: prev[item.name].qty + 1 }
        : { ...item, qty: 1 },
    }));
  };

  const removeOne = (name: string) => {
    setBasket((prev) => {
      if (!prev[name]) return prev;
      if (prev[name].qty <= 1) {
        const next = { ...prev };
        delete next[name];
        return next;
      }
      return { ...prev, [name]: { ...prev[name], qty: prev[name].qty - 1 } };
    });
  };

  const removeItem = (name: string) => {
    setBasket((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const clearBasket = () => setBasket({});

  const basketItems = Object.values(basket);
  const total = basketItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  const budget = parseFloat(budgetStr) || 0;
  const remaining = budget - total;
  const percentUsed = budget > 0 ? Math.min((total / budget) * 100, 100) : 0;

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in duration-700 py-12 px-4">
      {/* ── Header ── */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-black uppercase tracking-widest">
          <ShoppingCart size={12} /> April 2026 Prices
        </div>
        <h1 className="text-5xl font-black text-slate-900 leading-tight">
          Grocery Basket <span className="text-emerald-500">Calculator</span>
        </h1>
        <p className="text-slate-500 text-lg leading-relaxed">{data.summary}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ── Item Grid ── */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-black text-slate-800">Tap items to add to basket</h2>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
              Average SA retail prices
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {data.groceryItems.map((item: any) => {
              const inBasket = basket[item.name]?.qty ?? 0;
              return (
                <button
                  key={item.name}
                  onClick={() => addItem(item)}
                  className={`relative text-left p-4 rounded-2xl border transition-all active:scale-95 ${
                    inBasket > 0
                      ? 'border-emerald-300 bg-emerald-50'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                  }`}
                >
                  {inBasket > 0 && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-black">
                      {inBasket}
                    </div>
                  )}
                  <p className="text-2xl mb-2">{item.icon}</p>
                  <p className="text-sm font-black text-slate-800 leading-tight">{item.name}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{item.unit}</p>
                  <p className="text-emerald-600 font-black mt-2 text-sm">
                    {formatCurrency(item.price)}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Basket Sidebar ── */}
        <div className="lg:col-span-5 space-y-5 sticky top-28">
          {/* Budget input */}
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-5 space-y-3">
            <label className="text-sm font-medium text-slate-700">Monthly Grocery Budget</label>
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5">
              <span className="text-slate-400 font-black">R</span>
              <input
                type="number"
                value={budgetStr}
                onChange={(e) => setBudgetStr(e.target.value)}
                className="flex-1 bg-transparent text-slate-900 font-black text-xl focus:outline-none"
                placeholder="2000"
              />
            </div>
            {budget > 0 && (
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-bold text-slate-500">
                  <span>{percentUsed.toFixed(0)}% used</span>
                  <span className={remaining < 0 ? 'text-red-500' : 'text-emerald-600'}>
                    {remaining < 0 ? 'Over budget by' : 'Remaining:'}{' '}
                    {formatCurrency(Math.abs(remaining))}
                  </span>
                </div>
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      percentUsed >= 100 ? 'bg-red-500' : percentUsed > 80 ? 'bg-orange-500' : 'bg-emerald-500'
                    }`}
                    style={{ width: `${percentUsed}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Basket total */}
          <div className="bg-slate-900 rounded-2xl p-6 text-center space-y-2">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
              Basket Total
            </p>
            <p className="text-5xl font-black text-emerald-400 tabular-nums tracking-tighter">
              {formatCurrency(total)}
            </p>
            {basketItems.length > 0 && (
              <p className="text-slate-500 text-sm">{basketItems.length} item type{basketItems.length !== 1 ? 's' : ''}</p>
            )}
          </div>

          {/* Basket items list */}
          {basketItems.length > 0 ? (
            <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden">
              <div className="px-4 py-3 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                <h3 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                  <ShoppingCart size={14} /> Your Basket
                </h3>
                <button
                  onClick={clearBasket}
                  className="text-xs text-red-400 hover:text-red-600 font-bold transition-colors flex items-center gap-1"
                >
                  <Trash2 size={12} /> Clear all
                </button>
              </div>
              <div className="divide-y divide-slate-50 max-h-72 overflow-y-auto">
                {basketItems.map((item) => (
                  <div key={item.name} className="flex items-center gap-3 px-4 py-3">
                    <span className="text-xl">{item.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-slate-800 truncate">{item.name}</p>
                      <p className="text-xs text-slate-400">
                        {formatCurrency(item.price)} × {item.qty}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => removeOne(item.name)}
                        className="w-6 h-6 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
                      >
                        <Minus size={10} className="text-slate-600" />
                      </button>
                      <span className="text-sm font-black text-slate-900 w-5 text-center">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => addItem(item)}
                        className="w-6 h-6 rounded-full bg-emerald-100 hover:bg-emerald-200 flex items-center justify-center transition-colors"
                      >
                        <Plus size={10} className="text-emerald-700" />
                      </button>
                      <button
                        onClick={() => removeItem(item.name)}
                        className="w-6 h-6 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center transition-colors ml-1"
                      >
                        <Trash2 size={10} className="text-red-400" />
                      </button>
                    </div>
                    <p className="text-sm font-black text-slate-900 tabular-nums w-20 text-right">
                      {formatCurrency(item.price * item.qty)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center space-y-2">
              <ShoppingCart className="mx-auto text-slate-300" size={32} />
              <p className="text-slate-400 font-medium text-sm">Tap items on the left to build your basket</p>
            </div>
          )}

          <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl flex gap-3">
            <Info size={16} className="text-blue-500 shrink-0 mt-0.5" />
            <p className="text-xs text-blue-700 leading-relaxed">
              Prices are average national retail. Actual prices vary by store, region and
              promotions. Updated monthly.
            </p>
          </div>
        </div>
      </div>

      {/* ── FAQ ── */}
      <section className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-6 mt-8">
        <h2 className="text-3xl font-black text-slate-900">Grocery Price FAQ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {data.faqs.map((faq: any, i: number) => (
            <div key={i} className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="font-black text-slate-900 mb-2">{faq.q}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

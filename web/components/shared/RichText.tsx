
import React from 'react';
import { PortableText } from '@portabletext/react';

const components = {
  block: {
    h1: ({ children }: any) => <h1 className="text-4xl font-black text-slate-900 mb-6">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">{children}</h3>,
    normal: ({ children }: any) => <p className="text-lg leading-relaxed text-slate-600 mb-6">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-emerald-500 pl-6 italic text-slate-700 my-8">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc ml-6 mb-6 space-y-2 text-slate-600">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal ml-6 mb-6 space-y-2 text-slate-600">{children}</ol>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold text-slate-900">{children}</strong>,
    link: ({ value, children }: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a href={value?.href} target={target} className="text-emerald-600 underline decoration-emerald-300 hover:text-emerald-700 transition-colors">
          {children}
        </a>
      );
    },
  },
};

export const RichText = ({ value }: { value: any }) => {
  return (
    <div className="max-w-none">
      <PortableText value={value} components={components} />
    </div>
  );
};

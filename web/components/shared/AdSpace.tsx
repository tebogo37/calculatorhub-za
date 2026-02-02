
import React, { useEffect } from 'react';

interface AdSpaceProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
  label?: boolean;
}

export const AdSpace: React.FC<AdSpaceProps> = ({ slot, format = 'auto', className = "", label = true }) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("Adsbygoogle error", e);
    }
  }, []);

  return (
    <div className={`my-8 w-full overflow-hidden flex flex-col items-center ${className}`}>
      {label && <span className="text-[10px] text-slate-300 uppercase tracking-widest mb-2">Advertisement</span>}
      <div className="bg-slate-50 border border-dashed border-slate-200 rounded-lg w-full min-h-[100px] flex items-center justify-center">
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot={slot}
             data-ad-format={format}
             data-full-width-responsive="true"></ins>
        <p className="text-[10px] text-slate-400 font-mono">AD_SLOT_{slot}</p>
      </div>
    </div>
  );
};

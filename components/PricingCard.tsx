import React from 'react';

interface PricingCardProps {
  tier: 'free' | 'pro';
}

export default function PricingCard({ tier }: PricingCardProps) {
  const isPro = tier === 'pro';

  const freeFeatures = [
    '10 practice messages per day',
    'Basic AI feedback',
    'Grammar corrections',
    'Conversation starters',
    'Mobile-friendly',
  ];

  const proFeatures = [
    'Unlimited practice messages',
    'Voice practice (mic input)',
    'Advanced AI feedback',
    'Priority response speed',
    'Pronunciation tips',
    'Progress tracking',
    'Priority support',
  ];

  const features = isPro ? proFeatures : freeFeatures;

  return (
    <div
      className={`relative rounded-3xl p-8 flex flex-col gap-6 transition-all duration-300 ${
        isPro
          ? 'glass border border-cyan-400/20 opacity-70'
          : 'glass hover:border-white/15'
      }`}
    >
      {/* Coming soon badge for Pro */}
      {isPro && (
        <div className="absolute top-5 right-5">
          <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full">
            Coming Soon
          </span>
        </div>
      )}

      {/* Header */}
      <div>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">
          {isPro ? 'Pro' : 'Starter'}
        </p>
        <div className="flex items-end gap-2">
          <span className="text-4xl font-black text-white">
            {isPro ? '₹299' : 'Free'}
          </span>
          {isPro && <span className="text-slate-400 text-sm mb-1.5">/month</span>}
        </div>
        <p className="text-sm text-slate-400 mt-1">
          {isPro
            ? 'Full access to everything Lanxgrow offers.'
            : 'Start practicing right now. No credit card.'}
        </p>
      </div>

      {/* CTA */}
      {isPro ? (
        <button
          disabled
          className="w-full py-3.5 rounded-full font-semibold text-sm bg-white/5 text-slate-500 cursor-not-allowed border border-white/5"
        >
          Coming Soon
        </button>
      ) : (
        <a
          href="/onboarding"
          className="w-full py-3.5 rounded-full font-semibold text-sm bg-cyan-400 text-slate-950 text-center hover:bg-cyan-300 transition-all duration-200 hover:scale-[1.02] active:scale-95 block"
        >
          Get Started Free
        </a>
      )}

      {/* Features */}
      <ul className="flex flex-col gap-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="flex-shrink-0 mt-0.5"
            >
              <circle cx="8" cy="8" r="7" stroke={isPro ? 'rgba(34,211,238,0.4)' : 'rgba(255,255,255,0.2)'} strokeWidth="1" />
              <path
                d="M5 8l2 2 4-4"
                stroke={isPro ? '#22d3ee' : 'rgba(255,255,255,0.6)'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={isPro ? 'text-slate-400' : 'text-slate-300'}>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

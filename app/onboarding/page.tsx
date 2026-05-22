'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type Step = 1 | 2 | 3 | 4;

const LEVELS = ['Beginner', 'Intermediate', 'Advanced'] as const;
const GOALS = [
  'Job interview prep',
  'Daily conversation',
  'Business English',
  'Confidence building',
  'Other',
] as const;
const TIMES = ['5 mins', '10 mins', '20 mins', '30 mins+'] as const;

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);
  const [level, setLevel] = useState('');
  const [goal, setGoal] = useState('');
  const [goalOther, setGoalOther] = useState('');
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [animating, setAnimating] = useState(false);

  const progress = ((step - 1) / 4) * 100;

  function next() {
    if (step === 4) {
      // Save to sessionStorage for Practice page
      sessionStorage.setItem(
        'lanxgrow_user',
        JSON.stringify({ level, goal: goal === 'Other' ? goalOther : goal, time, name }),
      );
      router.push('/practice');
      return;
    }
    setAnimating(true);
    setTimeout(() => {
      setStep((s) => (s + 1) as Step);
      setAnimating(false);
    }, 250);
  }

  const canContinue =
    (step === 1 && level) ||
    (step === 2 && goal && (goal !== 'Other' || goalOther.trim())) ||
    (step === 3 && time) ||
    (step === 4 && name.trim().length > 0);

  return (
    <main className="min-h-screen bg-slate-950 flex flex-col">
      {/* Ambient glow */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/8 rounded-full blur-[120px]" />
      </div>

      {/* Logo */}
      <div className="relative z-10 px-6 pt-8">
        <Image src="/logo.svg" alt="Lanxgrow" width={120} height={32} />
      </div>

      {/* Progress bar */}
      <div className="relative z-10 px-6 pt-8">
        <div className="w-full max-w-md mx-auto">
          <div className="flex justify-between text-xs text-slate-500 mb-2">
            <span>Step {step} of 4</span>
            <span>{Math.round((step / 4) * 100)}%</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-cyan-400 rounded-full transition-all duration-500"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Step content */}
      <div
        className={`relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 transition-opacity duration-250 ${
          animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="w-full max-w-md">

          {step === 1 && (
            <>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">What is your current English level?</h1>
              <p className="text-slate-400 mb-10 text-sm">Be honest — your tutor will adapt to you.</p>
              <div className="flex flex-col gap-3">
                {LEVELS.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLevel(l)}
                    className={`w-full text-left px-6 py-4 rounded-2xl border text-base font-medium transition-all duration-200 ${
                      level === l
                        ? 'bg-cyan-400/15 border-cyan-400 text-white'
                        : 'glass text-slate-300 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">What is your main goal?</h1>
              <p className="text-slate-400 mb-10 text-sm">We’ll personalize your practice sessions.</p>
              <div className="flex flex-col gap-3">
                {GOALS.map((g) => (
                  <button
                    key={g}
                    onClick={() => setGoal(g)}
                    className={`w-full text-left px-6 py-4 rounded-2xl border text-base font-medium transition-all duration-200 ${
                      goal === g
                        ? 'bg-cyan-400/15 border-cyan-400 text-white'
                        : 'glass text-slate-300 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
              {goal === 'Other' && (
                <textarea
                  value={goalOther}
                  onChange={(e) => setGoalOther(e.target.value.slice(0, 200))}
                  placeholder="Tell us more about your goal..."
                  maxLength={200}
                  rows={3}
                  className="mt-4 w-full glass rounded-2xl px-5 py-4 text-sm text-white placeholder:text-slate-500 resize-none focus:outline-none focus:border-cyan-400/50 border border-white/10 transition-colors"
                />
              )}
            </>
          )}

          {step === 3 && (
            <>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">How much time can you give per day?</h1>
              <p className="text-slate-400 mb-10 text-sm">Even 5 minutes a day compounds over time.</p>
              <div className="flex flex-col gap-3">
                {TIMES.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTime(t)}
                    className={`w-full text-left px-6 py-4 rounded-2xl border text-base font-medium transition-all duration-200 ${
                      time === t
                        ? 'bg-cyan-400/15 border-cyan-400 text-white'
                        : 'glass text-slate-300 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">What is your name?</h1>
              <p className="text-slate-400 mb-10 text-sm">Your AI tutor will use this to make it personal.</p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your first name"
                autoFocus
                className="w-full glass rounded-2xl px-6 py-4 text-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50 border border-white/10 transition-colors"
              />
            </>
          )}

          <button
            onClick={next}
            disabled={!canContinue}
            className={`mt-10 w-full py-4 rounded-full font-semibold text-base transition-all duration-200 ${
              canContinue
                ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300 hover:scale-[1.02] active:scale-95'
                : 'bg-white/5 text-slate-600 cursor-not-allowed'
            }`}
          >
            {step === 4 ? 'Start Practicing' : 'Continue'}
          </button>
        </div>
      </div>
    </main>
  );
}

import { useState } from "react";
import { LockKeyhole, Heart } from "lucide-react";

interface BirthdayUnlockProps {
  onUnlock: () => void;
}

function BirthdayUnlock({ onUnlock }: BirthdayUnlockProps) {
  const [dob, setDob] = useState("");
  const [error, setError] = useState("");

  // Temporary DOB for testing
  const correctDob = "01012000";

  const handleUnlock = () => {
    if (dob === correctDob) {
      setError("");
      onUnlock();
    } else {
      setError("Hmm... that's not the right date 💕");
    }
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 px-5">

      {/* Decorative hearts */}
      <div className="absolute left-6 top-10 animate-pulse text-3xl">
        💗
      </div>

      <div className="absolute right-8 top-24 animate-pulse text-2xl">
        ✨
      </div>

      <div className="absolute bottom-20 left-10 animate-pulse text-2xl">
        💕
      </div>

      <div className="absolute bottom-10 right-8 animate-pulse text-3xl">
        💖
      </div>

      {/* Main card */}
      <div className="relative w-full max-w-sm rounded-3xl bg-white/70 p-7 text-center shadow-2xl backdrop-blur-md">

        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
          <Heart
            className="fill-pink-500 text-pink-500"
            size={32}
          />
        </div>

        <h1 className="text-3xl font-bold text-rose-600">
          A Little Surprise 💖
        </h1>

        <p className="mt-3 text-sm leading-6 text-gray-600">
          Something special is waiting for you...
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Enter your date of birth to unlock it ✨
        </p>

        {/* DOB input */}
        <div className="mt-7">
          <input
            type="text"
            inputMode="numeric"
            maxLength={8}
            value={dob}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              setDob(value);
              setError("");
            }}
            placeholder="DDMMYYYY"
            className="w-full rounded-2xl border border-pink-200 bg-white px-4 py-4 text-center text-lg tracking-[0.2em] text-gray-700 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-200"
          />
        </div>

        {/* Error */}
        {error && (
          <p className="mt-3 text-sm font-medium text-rose-500">
            {error}
          </p>
        )}

        {/* Unlock button */}
        <button
          onClick={handleUnlock}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 px-5 py-4 font-semibold text-white shadow-lg transition active:scale-95"
        >
          <LockKeyhole size={20} />
          Unlock My Surprise
        </button>

        <p className="mt-5 text-xs text-gray-400">
          Made with love ❤️
        </p>

      </div>
    </section>
  );
}

export default BirthdayUnlock;
interface SurpriseReadyProps {
  onBegin: () => void;
}

function SurpriseReady({ onBegin }: SurpriseReadyProps) {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 px-5">
      <div className="text-center">

        <h1 className="text-2xl font-bold text-rose-600">
          Date matched! 💖
        </h1>

        <p className="mt-3 text-gray-600">
          Unlocking your special surprise...
        </p>

        <button
          onClick={onBegin}
          className="mt-8 rounded-full bg-pink-500 px-8 py-4 font-semibold text-white shadow-lg transition active:scale-95"
        >
          Tap to begin 💕
        </button>

      </div>
    </section>
  );
}

export default SurpriseReady;
import { useState } from "react";
import { fortunes } from "../../constants/fortunes";

const FortuneCookie = () => {
  const [fortune, setFortune] = useState("");

  const crackCookie = () => {
    const random = fortunes[Math.floor(Math.random() * fortunes.length)];
    setFortune(random);
  };

  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold text-tertiary mb-6">
        Fortune Cookie 🥠
      </h1>
      <button
        onClick={crackCookie}
        className="px-6 py-3 bg-tertiary text-white rounded-xl shadow hover:scale-105 transition-all"
      >
        Crack the Cookie
      </button>
      <div className="h-5 w-auto p-2">
        {fortune && (
          <p className="mt-6 text-xl text-gray-800 max-w-2xl mx-auto">
            {fortune}
          </p>
        )}
      </div>
    </section>
  );
};

export default FortuneCookie;

import React from "react";
import { useTranslations } from "next-intl";

// ikonlar değişmedi
const IconQuality = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       strokeWidth={1.5} stroke="currentColor"
       className="w-8 h-8 flex-shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);
const IconInnovation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       strokeWidth={1.5} stroke="currentColor"
       className="w-8 h-8 flex-shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round"
          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>
);
const IconExpertise = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       strokeWidth={1.5} stroke="currentColor"
       className="w-8 h-8 flex-shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-1.837a6.01 6.01 0 0 0-1.5-1.837m-1.5 1.837a6.01 6.01 0 0 1-1.5-1.837m1.5 1.837v5.25m0-5.25a6.01 6.01 0 0 0-1.5-1.837m-1.5 1.837a6.01 6.01 0 0 1 1.5-1.837m-1.5 1.837H9m6 0h1.5m-1.5 1.837a6.01 6.01 0 0 1 1.5-1.837m-1.5 1.837v5.25m0 0a6.01 6.01 0 0 0 1.5 1.837m-1.5-1.837a6.01 6.01 0 0 1-1.5 1.837m0 0H9m6 0h1.5m-7.5-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm12 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);
const IconSupport = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
       strokeWidth={1.5} stroke="currentColor"
       className="w-8 h-8 flex-shrink-0">
    <path strokeLinecap="round" strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.5-2.962a3.75 3.75 0 0 1 5.25 0m-5.25 0a3.75 3.75 0 0 0-5.25 0M3 13.5a9 9 0 1 0 18 0a9 9 0 0 0-18 0Zm12.75-5.625a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Z" />
  </svg>
);

const featureCards = [
  { icon: <IconQuality />, key: "title1" },
  { icon: <IconInnovation />, key: "title2" },
  { icon: <IconExpertise />, key: "title3" },
  { icon: <IconSupport />, key: "title4" },
];

export default function WhyCinarSection() {
  const t = useTranslations("whyCinarSection");

  return (
    <section
      aria-labelledby="why-cinar-title"
      className="
        relative isolate overflow-hidden
        // --- RENK DEĞİŞİKLİĞİ 1: Arka planı hafif koyulaştırdık ---
        bg-gradient-to-b from-white to-slate-100
        px-4 sm:px-6 lg:px-12 xl:px-24
        py-16 md:py-24 lg:py-28
      "
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[60rem] h-[60rem] rounded-full blur-3xl bg-sky-100/30"
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center mb-12 md:mb-16">
        <h2
          id="why-cinar-title"
          className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900"
        >
          {t("headline")}
        </h2>
        <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-600">
          {t("subHeadline")}
        </p>
      </div>

      <div
        className="
          relative z-10 mx-auto max-w-7xl
          grid gap-6 sm:gap-8
          grid-cols-1 [@media(min-width:520px)]:grid-cols-2
          lg:[grid-template-columns:repeat(4,minmax(0,1fr))]
        "
      >
        {featureCards.map(({ icon, key }, idx) => (
          <article
            key={idx}
            className="
              group relative isolate
              rounded-2xl
              // --- RENK DEĞİŞİKLİĞİ 2: Kartları daha belirgin hale getirdik ---
              border border-slate-200
              bg-white shadow-sm
              p-6 sm:p-7 lg:p-8
              flex flex-col items-center text-center
              transition-all duration-300
              // --- RENK DEĞİŞİKLİĞİ 3: Hover gölgesini güçlendirdik ---
              hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-200/40
            "
          >
            <div
              className="
                mb-5 sm:mb-6 inline-flex size-16 items-center justify-center
                rounded-full bg-white ring-1 ring-inset ring-slate-200/70 shadow-inner
                group-hover:scale-105 transition-transform duration-300
              "
            >
              {/* --- RENK DEĞİŞİKLİĞİ 4: İkon rengini daha canlı yaptık --- */}
              <span className="text-sky-500">{icon}</span>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-800">
              {t(key)}
            </h3>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600 flex-1">
              {t(key.replace("title", "decription"))}
            </p>

            <div
              aria-hidden="true"
              className="mt-6 h-px w-3/5 bg-gradient-to-r from-transparent via-slate-200 to-transparent"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
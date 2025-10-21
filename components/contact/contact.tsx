import React from 'react';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('Contact');
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d717.4139833139689!2d29.47782286919641!3d38.62012921653885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c62b6e7379086b%3A0xfa7bf678d57863f0!2zVcWfYWsgw6fEsW5hciBkZXJp!5e1!3m2!1str!2str!4v1747990582241!5m2!1str!2str";

  return (
    <>
      {/* HERO — sade düz beyaz arka plan */}
      <header className="relative bg-white border-b border-gray-200">
        <section className="pt-40 pb-20 px-4 sm:px-6 md:px-12 lg:px-24 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            {t('title')}
          </h1>
          <div className="mx-auto mb-6 h-[3px] w-24 rounded-full bg-blue-600" />
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-prose mx-auto leading-relaxed">
            {t('description')}
          </p>
        </section>
      </header>

      {/* Harita ve Detay Kartları (hiç dokunulmadı) */}
      <div className="w-full mb-20 sm:py-12">
        <div className=" sm:px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8">

            {/* Harita */}
            <div className="w-full md:w-7/10 rounded-lg overflow-hidden shadow-md min-h-[240px]">
              <iframe
                title={t('mapTitle')}
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Kartlar */}
            <div className="flex flex-col gap-4 w-full md:w-3/10">

              {/* Adres Kartı */}
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{t('addressTitle')}</h3>
                  <p className="text-gray-700 whitespace-pre-line">{t('address')}</p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(t('address'))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline mt-1 inline-block text-xs"
                  >
                    {t('openInMapsText')}
                  </a>
                </div>
              </div>

              {/* Telefon Kartı */}
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{t('phoneTitle')}</h3>
                  <p className="text-gray-700">{t('phone')}</p>
                  <p className="text-gray-500 text-xs mt-1">{t('phoneHintText')}</p>
                </div>
              </div>

              {/* E-posta Kartı */}
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{t('emailTitle')}</h3>
                  <p className="text-gray-700">{t('email')}</p>
                  <p className="text-gray-500 text-xs mt-1">{t('emailHintText')}</p>
                </div>
              </div>

              {/* Çalışma Saatleri Kartı */}
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-600 flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">{t('hoursTitle')}</h3>
                  <p className="text-gray-700 whitespace-pre-line">{t('workingHours')}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

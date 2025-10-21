import React from 'react';
import Link from 'next/link';
import { XCircle } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 px-4 text-center">
      {/* Icon */}
      <XCircle className="w-24 h-24 text-red-500 mb-6 animate-pulse" />

      {/* Status Code */}
      <h1 className="text-6xl font-extrabold text-gray-900 mb-2">404</h1>
      <p className="text-lg text-gray-700 mb-8">Oops! Bu sayfa bulunamadı.</p>

      {/* Multi-language Messages */}
      <div className="space-y-6 max-w-xl">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">Page Not Found</h2>
          <p className="text-gray-600">Sorry, the page you are looking for does not exist.</p>
        </div>
        
        {/* Italian Translation Start */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">Pagina Non Trovata</h2>
          <p className="text-gray-600">Spiacenti, la pagina che stai cercando non esiste.</p>
        </div>
        {/* Italian Translation End */}

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">Страница не найдена</h2>
          <p className="text-gray-600">Извините, запрашиваемая страница не найдена.</p>
        </div>
      </div>

      {/* Back Home Button */}
      <Link
        href="/"
        className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
      >
        Anasayfa / Home / Pagina Iniziale / Главная
      </Link>
    </section>
  );
}
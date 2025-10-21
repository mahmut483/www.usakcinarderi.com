"use client";
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const services = [
  {
    id: 1,
    href: 'importAndExport',
    titleKey: 'title1',
    textKey: 'text1',
  },
  {
    id: 2,
    href: 'ourLeatherResources',
    titleKey: 'title2',
    textKey: 'text2',
  },
  {
    id: 3,
    href: 'ourProductionProcess',
    titleKey: 'title3',
    textKey: 'text3',
  },
  {
    id: 4,
    href: 'qualityAndCertifications',
    titleKey: 'title4',
    textKey: 'text4',
  },
  {
    id: 5,
    href: 'legalComplianceAndEthics',
    titleKey: 'title5',
    textKey: 'text5',
  },
  {
    id: 6,
    href: 'internationalTrade',
    titleKey: 'title6',
    textKey: 'text6',
  },
];

function shorten(text: string, maxLength = 60) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

const ServicesDropdown: React.FC = () => {
  const t = useTranslations('Services');
  const locale = useLocale();
  const [open, setOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const isActive = pathname.startsWith(`/${locale}/digerHizmetler/`);

  const handleMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpen(false);
    }, 120);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`font-medium px-2 py-1 focus:outline-none text-sm hover:underline transition cursor-pointer ${
          isActive ? 'underline text-blue-700' : 'text-gray-700 hover:text-gray-900'
        }`}
        aria-haspopup="true"
        aria-expanded={open}
        tabIndex={0}
      >
        {t('hizmetlerimiz')}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            key="dropdown"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute left-0 w-[340px] bg-white rounded-xl shadow-lg border border-gray-200 z-50 p-2 mt-9"
          >
            <ul className="divide-y divide-gray-100">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/${locale}/digerHizmetler/${service.href}`}
                    className={`block px-4 py-2 hover:bg-gray-50 rounded-lg transition`}
                    onClick={handleLinkClick}
                  >
                    <div className={`font-semibold text-sm ${
                      pathname === `/${locale}/digerHizmetler/${service.href}` ? 'text-blue-700' : 'text-gray-900'
                    }`}>
                      {t(service.titleKey)}
                    </div>
                    <div className="text-gray-500 text-xs mt-0.5">
                      {shorten(t(service.textKey), 60)}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesDropdown; 
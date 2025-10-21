


import React from 'react';
import { useTranslations } from 'next-intl';
import KurumsalPortfolio from '@/components/services/uluslarArası/kurumsalPortfolio';
import KurumsalFeatures from '@/components/services/uluslarArası/kurumsalFeatures';
import KurumsalStoryTelling from '@/components/services/uluslarArası/kurumsalStoryTelling';
import KurumsalProcessing from '@/components/services/uluslarArası/kurumsalProcessing';
import KurumsalProductions from '@/components/services/uluslarArası/kurumsalProductions';
import KurumsalCTA from '@/components/services/uluslarArası/kurumsalCTA';

export default function CorporateProductionPage() {
  const t = useTranslations('Services');
  return (
    <div>
      <KurumsalPortfolio/>
      <KurumsalFeatures/>
      <KurumsalStoryTelling/>
      <KurumsalProcessing/>
      <KurumsalProductions/>
      <KurumsalCTA/>
    </div>
  );
} 



import React from 'react';
import { useTranslations } from 'next-intl';
import BakimPortfolio from '@/components/services/sertifika/bakimPortfolio';
import BakimFeatures from '@/components/services/sertifika/bakimFeatures';
import BakimStoryTelling from '@/components/services/sertifika/bakimStoryTelling';
import BakimProcessing from '@/components/services/sertifika/bakimProcessing';
import BakimProductions from '@/components/services/sertifika/bakimProductions';
import BakimCTA from '@/components/services/sertifika/bakimCTA';

export default function LeatherRepairCarePage() {
  const t = useTranslations('Services');
  return (
    <div>
      <BakimPortfolio/>
      <BakimFeatures/>
      <BakimStoryTelling/>
      <BakimProcessing/>
      <BakimProductions/>
      <BakimCTA/>
    </div>
  );
} 
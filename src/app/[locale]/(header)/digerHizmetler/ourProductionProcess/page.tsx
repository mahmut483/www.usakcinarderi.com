


import React from 'react';
import { useTranslations } from 'next-intl';
import BagPortfolio from '@/components/services/uretim/bagPortfolio';
import BagFeatures from '@/components/services/uretim/bagFeatures';
import BagStoryTelling from '@/components/services/uretim/bagStorytelling';
import BagProcessing from '@/components/services/uretim/bagProcessing';
import BagProductions from '@/components/services/uretim/bagProductions';
import BagCTA from '@/components/services/uretim/bagCTA';

export default function BagPortfolioPage() {
  const t = useTranslations('Services');
  return (
    <div>
      <BagPortfolio/>
      <BagFeatures/>
      <BagStoryTelling/>
      <BagProcessing/>
      <BagProductions/>
      <BagCTA/>
    </div>
  );
} 
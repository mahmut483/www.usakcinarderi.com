

import React from 'react';
import { useTranslations } from 'next-intl';
import GravurPortfolio from '@/components/services/etik/gravurPortfolio';
import GravurFeatures from '@/components/services/etik/gravurFeatures';
import GravurStoryTelling from '@/components/services/etik/gravurStoryTelling';
import GravurProcessing from '@/components/services/etik/gravurProcessing';
import GravurProductions from '@/components/services/etik/gravurProductions';
import GravurCTA from '@/components/services/etik/gravurCTA';


export default function PersonalizedEngravingPage() {
  const t = useTranslations('Services');
  return (
    <div>
      <GravurPortfolio/>
      <GravurFeatures/>
      <GravurStoryTelling/>
      <GravurProcessing/>
      <GravurProductions/>
      <GravurCTA/>
    </div>
  );
} 
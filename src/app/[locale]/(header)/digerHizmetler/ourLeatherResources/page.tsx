

import React from 'react';
import { useTranslations } from 'next-intl';
import BeltAccessory from '@/components/services/hammade/beltAccessory';
import BeltProcessing from '@/components/services/hammade/beltProcessing';
import BeltStoryTelling from '@/components/services/hammade/beltStroytelling';
import BeltFeatures from '@/components/services/hammade/beltFeatures';
import BeltProductions from '@/components/services/hammade/beltProductions';
import BeltCTA from '@/components/services/hammade/beltCTA';
export default function BeltAccessoriesPage() {
  const t = useTranslations('Services');
  return (
    <div>
      <BeltAccessory />
      <BeltFeatures />
      <BeltStoryTelling />
      <BeltProcessing />
      <BeltProductions />
      <BeltCTA />
    </div>
  );
} 
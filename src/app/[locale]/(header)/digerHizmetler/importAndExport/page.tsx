



import React from 'react';
import { useTranslations } from 'next-intl';
import HandmadeWalletHero from '@/components/services/ithalat/handmadeWallet';
import WalletFeatures from '@/components/services/ithalat/WalletFeatures';
import WalletStoryTelling from '@/components/services/ithalat/WalletStoryTelling';
import LeatherProcessing from '@/components/services/ithalat/LeatherProcessing';
import WalletProductionSteps from '@/components/services/ithalat/WalletProductionSteps';
import WalletCTA from '@/components/services/ithalat/WalletCTA';

export default function HandmadeWalletPage() {
  const t = useTranslations('Services');
  return (
    <div>
      <HandmadeWalletHero />
      <WalletFeatures />
      <WalletStoryTelling />
      <LeatherProcessing />
      <WalletProductionSteps />
      <WalletCTA />
    </div>
  );
} 
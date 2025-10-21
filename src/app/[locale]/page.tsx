
// // src/app/[locale]/page.tsx
// // BU, STATİK DIŞA AKTARIM İÇİN DOĞRU KODDUR

// import { useTranslations } from 'next-intl';

// // Sayfanızda kullandığınız bileşenlerin importları
// import Headline from '@/components/homePage/headline/headline';
// import Introduction from '@/components/homePage/introduction/introduction';
// import WhyCinarSection from '@/components/homePage/whyCinarSection/whyCinarSection';
// import SliderHeadline from '@/components/homePage/sliderHeadline/sliderHeadline';
// import Video from '@/components/homePage/video/video';
// import StoryTelling from '@/components/storyTelling/storyTelling';

// // DİKKAT: Fonksiyon artık 'params' almıyor ve içinde 'use(params)' veya 'setRequestLocale' yok.
// export default function HomePage() {
//   const t = useTranslations('HomePage');

//   return (
//     <div>
//       <SliderHeadline />
//       <Headline />
//       <Introduction />
//       <WhyCinarSection />
//       <Video url="/videos/vid1.mp4" />
//       <StoryTelling />
//     </div>
//   );
// }

// DOSYA YOLU: src/app/[locale]/page.tsx
// DİKKAT: BU DOSYANIN BAŞINDA 'use client' YOK!

import { useTranslations } from 'next-intl';
import Headline from '@/components/homePage/headline/headline';
import Introduction from '@/components/homePage/introduction/introduction';
import WhyCinarSection from '@/components/homePage/whyCinarSection/whyCinarSection';
import SliderHeadline from '@/components/homePage/sliderHeadline/sliderHeadline';
import Video from '@/components/homePage/video/video';
import StoryTelling from '@/components/storyTelling/storyTelling';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div>
      <SliderHeadline />
      <Headline />
      <Introduction />
      <WhyCinarSection />
      <Video url="/videos/vid1.mp4" />
      <StoryTelling />
    </div>
  );
}
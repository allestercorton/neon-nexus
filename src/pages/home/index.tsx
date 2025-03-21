import CTASection from './components/CTASection';
import FeatureHighlights from './components/FeatureHighlights';
import HeroSection from './components/HeroSection';
import ShowcasePreview from './components/ShowcasePreview';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureHighlights />
      <ShowcasePreview />
      <CTASection />
    </>
  );
}

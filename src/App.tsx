import { useLang } from './i18n/LanguageContext';
import { Header, ReviewBanner } from './components/Header';
import { Hero } from './components/HeroVideo';
import { DosingSchedule, Supplies } from './components/ScheduleSupplies';
import { StepGuide } from './components/StepGuide';
import { Aftercare } from './components/Aftercare';
import { FAQ, Footer, Safety, Support } from './components/InfoSections';

export default function App() {
  const { t } = useLang();
  return (
    <>
      <a href="#main" className="sr-only z-50 rounded-full bg-teal-900 px-4 py-2 font-bold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">{t.ui.skip}</a>
      <ReviewBanner />
      <Header />
      <main id="main">
        <Hero />
        <DosingSchedule />
        <Supplies />
        <StepGuide />
        <Aftercare />
        <Safety />
        <FAQ />
        <Support />
      </main>
      <Footer />
    </>
  );
}

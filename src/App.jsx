import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a
        href="#o-nas"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-poster focus:px-4 focus:py-2 focus:text-cream"
      >
        Przejdź do treści
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

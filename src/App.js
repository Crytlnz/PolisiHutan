import React, { useRef } from "react";
import Header from "./components/Navbar";
import Hero from "./components/Hero";
import TimKami from "./components/TimKami";
import BeritaKami from "./components/BeritaKami";
import KegiatanKami from "./components/KegiatanKami";
import Footer from "./components/Footer";
import {
  useVillageActivities,
  useVillageNews,
  useVillageProfile,
} from "./hooks/useApi";
import ContactKami from "./components/ContactKami";

function App() {
  const { profile, apparatus, loading, error } = useVillageProfile();
  const { news, newsError } = useVillageNews();
  const { activities, activitiesError } = useVillageActivities();

  // Menambahkan contactRef ke dalam refs
  const refs = {
    homeRef: useRef(null),
    apparatusRef: useRef(null),
    newsRef: useRef(null),
    marketRef: useRef(null),
    activitiesRef: useRef(null),
    contactRef: useRef(null), // Tambahkan contactRef di sini
  };

  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header data={profile} scrollToSection={scrollToSection} refs={refs} />
      <div className="container mx-auto flex-grow">
        <section id="home" ref={refs.homeRef}>
          <Hero />
        </section>
        <div className="flex gap-6 flex-col">
          <section id="berita-kami" ref={refs.newsRef}>
            {newsError ? (
              <p>Error: {newsError.message}</p>
            ) : (
              <BeritaKami data={news} />
            )}
          </section>
          <section id="tim-kami" ref={refs.apparatusRef}>
            {loading ? (
              <p>Loading TimKami</p>
            ) : error ? (
              <p>Error: {error.message}</p>
            ) : (
              <TimKami data={apparatus} />
            )}
          </section>
          <section id="kegiatan-kami" ref={refs.activitiesRef}>
            {activitiesError ? (
              <p>Error: {activitiesError.message}</p>
            ) : (
              <KegiatanKami data={activities} />
            )}
          </section>
          <section id="forrestContact" ref={refs.contactRef} className="pt-18">
            <ContactKami />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

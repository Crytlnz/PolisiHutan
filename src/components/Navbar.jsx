import React, { useState } from "react";
import logo from "../assets/Logo.png"; // Pastikan logo sesuai dengan tema Polisi Hutan

const Navbar = ({ scrollToSection, refs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="p-4 shadow-md fixed w-full top-0 left-0 z-50"
      style={{
        background:
          "linear-gradient(to right, rgba(34, 139, 34, 0.8), rgba(0, 100, 0, 0.8))", // Warna dengan opasitas 0.8
        color: "white",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo Polisi Hutan" className="h-12 w-auto" />
          <div className="ml-3">
            <div className="text-2xl font-bold">Polisi Hutan</div>
            <div className="text-sm font-medium">
              Konservasi dan Pelestarian
            </div>
          </div>
        </div>

        <button
          className="block md:hidden text-3xl focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>

        <nav className="hidden md:flex items-center gap-x-5">
          <ul className="flex gap-x-5">
            <li>
              <button
                onClick={() => scrollToSection(refs.homeRef)}
                className="hover:text-green-200 hover:underline"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(refs.apparatusRef)}
                className="hover:text-green-200 hover:underline"
              >
                Tim Kami
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(refs.newsRef)}
                className="hover:text-green-200 hover:underline"
              >
                Berita Kami
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(refs.activitiesRef)}
                className="hover:text-green-200 hover:underline"
              >
                Kegiatan Kami
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(refs.contactRef)}
                className="hover:text-green-200 hover:underline"
              >
                Kontak Kami
              </button>
            </li>
          </ul>
          {/* Tombol Login */}
          <a
            href="https://kawal-desa.lskk.co.id/login"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-600 transition duration-300"
          >
            Login
          </a>
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-green-700 shadow-lg">
          <ul className="flex flex-col items-center gap-y-4 py-4">
            <li>
              <button
                onClick={() => {
                  scrollToSection(refs.homeRef);
                  toggleMenu();
                }}
                className="hover:text-green-200 hover:underline"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection(refs.apparatusRef);
                  toggleMenu();
                }}
                className="hover:text-green-200 hover:underline"
              >
                Tim Kami
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection(refs.newsRef);
                  toggleMenu();
                }}
                className="hover:text-green-200 hover:underline"
              >
                Berita Kami
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection(refs.activitiesRef);
                  toggleMenu();
                }}
                className="hover:text-green-200 hover:underline"
              >
                Kegiatan Kami
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection(refs.contactRef);
                  toggleMenu();
                }}
                className="hover:text-green-200 hover:underline"
              >
                Kontak Kami
              </button>
            </li>
            {/* Tombol Login di Menu Mobile */}
            <li>
              <a
                href="https://kawal-desa.lskk.co.id/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-yellow-500 text-gray-900 rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                Login
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

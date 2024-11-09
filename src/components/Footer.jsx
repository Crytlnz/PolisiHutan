import React from "react";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        {/* Logo dan Deskripsi */}
        <div className="flex items-start md:w-1/3 mb-10 md:mb-0">
          <img src={logo} alt="Logo Polhut" className="h-14 mr-4" />
          <p className="leading-relaxed">
            Polisi Kehutanan Indonesia atau biasa disebut Polhut adalah nama
            sebuah jabatan fungsional Pegawai Negeri Sipil dalam lingkungan
            pegawai instansi kehutanan pusat maupun daerah. Polisi ini bukan
            merupakan bagian dari Kepolisian Negara Republik Indonesia.
          </p>
        </div>

        {/* Kontak */}
        <div className="w-full md:w-1/4 text-center md:text-left mb-8 md:mb-0">
          <h3 className="text-xl font-bold mb-3">Kontak Kami</h3>
          <p>Email: ipkipusat@gmail.com</p>
        </div>

        {/* Navigasi */}
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-bold mb-3">Navigasi</h3>
          <div className="flex flex-wrap md:space-x-10">
            <ul className="mb-4 md:mb-0">
              <li className="mb-3">
                <a href="#tim-kami" className="hover:text-gray-500">
                  Tim Kami
                </a>
              </li>
              <li>
                <a href="#berita-kami" className="hover:text-gray-500">
                  Berita Kami
                </a>
              </li>
            </ul>
            <ul>
              <li className="mb-3">
                <a href="#kegiatan-kami" className="hover:text-gray-500">
                  Kegiatan Kami
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hak Cipta */}
      <div className="text-center py-4 border-t border-gray-700 mt-8">
        <p>&copy; 2024 Polisi Kehutanan. Semua hak cipta dilindungi.</p>
      </div>
    </footer>
  );
};

export default Footer;

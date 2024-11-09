import React, { useEffect, useState } from "react";
import Marquee from 'react-fast-marquee';
import defaultAparat from "../assets/Police.png";

const TimKami = () => {
  const [apparatuses, setApparatuses] = useState([]);

  useEffect(() => {
    const fetchAparatData = async () => {
      try {
        const response = await fetch(
          "https://api-kawal-desa.lskk.co.id/api/village/profile?guid=2305e536-0ef6-48e7-9aac-79ca236433fa"
        );
        const result = await response.json();
        
        if (result.status && result.vaillage?.organizationalStructure) {
          setApparatuses(result.vaillage.organizationalStructure);
        } else {
          console.error("Data organizationalStructure tidak ditemukan.");
        }
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };

    fetchAparatData();
  }, []);

  return (
    <section 
      className="relative bg-cover bg-no-repeat bg-center py-20 px-4 sm:px-8 lg:px-16 mt-12" // Adjusted height
      style={{
        backgroundImage: "url('https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/2021/11/30/bidang-kehutananjpg-20211130095122.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Daftar Tim Kami</h2>
        
        <Marquee speed={80} pauseOnHover>
          {apparatuses.map((aparat) => (
            <div key={aparat.guid} className="p-4 flex-none w-80">
              <div className="bg-white shadow-lg rounded-lg p-4 text-center flex items-center flex-col transform hover:scale-105 transition-transform duration-300">
                <img
                  src={aparat.file ? `https://bucket-2.nos.wjv-1.neo.id/${aparat.file}` : defaultAparat}
                  onError={(e) => (e.target.src = defaultAparat)}
                  alt={aparat.name || "Aparat Desa"}
                  className="w-24 h-24 mb-4 object-cover rounded-lg border-4 border-gray-300"
                />
                <h3 className="text-lg font-semibold mb-1">{aparat.name || "Nama tidak tersedia"}</h3>
                <p className="text-gray-600">{aparat.position || "Jabatan tidak tersedia"}</p>
                <p className="mt-2 text-center text-gray-700 text-sm">
                  Kami siap bertugas dalam melestarikan hutan.
                </p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TimKami;

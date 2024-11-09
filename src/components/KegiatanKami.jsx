import React, { useEffect, useState } from "react";
import defaultImage from "../assets/Kegiatan.jpeg";

const KegiatanKami = () => {
  const [activities, setActivities] = useState([]);

  // Fungsi untuk mengambil data kegiatan dari API
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch(
          "https://api-kawal-desa.lskk.co.id/api/report/village?guid=e3dbc848-facd-4ce2-9c77-ad18258f9a7d&page=1&limit=10&type=activity"
        );
        const result = await response.json();

        if (result.status) {
          // Filter kegiatan dengan deskripsi yang bukan "tes"
          const filteredActivities = result.data
            .filter((item) => item.description.toLowerCase() !== "tes")
            .map((item) => ({
              ...item,
              // Mengubah deskripsi untuk "sosialisasi LG"
              description: item.description.toLowerCase() === "sosialisasi lg"
                ? "pengecekan terhadap hutan sekitar"
                : item.description,
            }));
          setActivities(filteredActivities);
        }
      } catch (error) {
        console.error("Gagal mengambil data kegiatan:", error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <section className="py-12 bg-gray-100 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">Kegiatan Kami</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((item) => (
            <div key={item._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={`https://api-kawal-desa.lskk.co.id/${item.file}` || defaultImage}
                alt={item.description}
                onError={(e) => (e.target.src = defaultImage)} // Gambar default jika gagal load
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">
                  {item.description}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description.length > 100
                    ? `${item.description.substring(0, 100)}...`
                    : item.description}
                </p>
                <p className="text-gray-500 text-sm">
                  Tanggal: {item.reportDateTime?.date || "Tanggal tidak tersedia"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KegiatanKami;

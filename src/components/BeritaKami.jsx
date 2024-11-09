import React, { useEffect, useState } from "react";
import defaultImage from "../assets/Berita.jpeg";

const BeritaKami = () => {
  const [activities, setActivities] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);

  // Fungsi untuk mengambil data berita dari API
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch(
          "https://api-kawal-desa.lskk.co.id/api/report/village?guid=e3dbc848-facd-4ce2-9c77-ad18258f9a7d&page=1&limit=10&type=news"
        );
        const result = await response.json();

        if (result.status) {
          setActivities(result.data);
        }
      } catch (error) {
        console.error("Gagal mengambil data kegiatan:", error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <section className="py-12 bg-gray-200 px-4 sm:px-8 lg:px-16 mt-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">Berita Kami</h2>
        <hr className="mb-6 border-t-2 border-green-500 w-20" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={activity.id || index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={activity.image || defaultImage}
                alt={activity.title}
                onError={(e) => (e.target.src = defaultImage)} // Gambar default jika gagal load
                className="w-full h-40 object-cover rounded-t-lg mb-2"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">
                  {activity.title}
                </h3>
                <hr className="border-t-2 border-blue-300 w-16 mb-2" />
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <p className="text-gray-500 text-sm">
                  Tanggal: {activity.date || "Tanggal tidak tersedia"}
                </p>
                <button
                  onClick={() => setSelectedReport(activity)}
                  className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 active:scale-95 transform transition duration-200 ease-in-out"
                >
                  Detail
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal untuk zoom detail berita */}
        {selectedReport && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
            onClick={() => setSelectedReport(null)}
          >
            <div
              className="bg-white rounded-lg p-8 max-w-lg w-full relative transform transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedReport(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
              {selectedReport.image && (
                <img
                  src={selectedReport.image || defaultImage}
                  alt={selectedReport.title || "Detail berita"}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h2 className="text-2xl font-semibold mb-2">
                {selectedReport.title}
              </h2>
              <hr className="border-t-2 border-blue-500 w-20 mb-4" />
              <p className="text-gray-700 mb-4">{selectedReport.description}</p>
              <p className="text-gray-500 text-sm">
                Tanggal: {selectedReport.date || "Tanggal tidak tersedia"}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BeritaKami;

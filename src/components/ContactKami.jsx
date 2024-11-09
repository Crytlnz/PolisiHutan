import React, { useState } from "react";
import { FaUser, FaEnvelope, FaCommentDots } from "react-icons/fa";

const ContactKami = () => {
  // State untuk menampung nilai input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const phoneNumber = "6289622349955"; // Ganti dengan nomor WhatsApp yang dituju (gunakan kode negara tanpa '+')
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="forrestContact"
      className="py-16 overflow-hidden relative mx-5 md:mx-20 rounded-3xl mb-10"
      style={{
        backgroundImage:
          "url('https://th.bing.com/th/id/OIP.nSnP2wMpOQhwVrKjnJs_8AAAAA?rs=1&pid=ImgDetMain')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto px-4 md:px-20 relative z-10 flex flex-col md:flex-row items-center md:items-start">
        {/* Form Kontak - di sebelah kiri */}
        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 md:mr-8 mb-8 md:mb-0">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
              Hubungi Kami
            </h2>

            {/* Nama */}
            <div className="mb-6 flex items-center">
              <FaUser className="text-green-500 mr-2" />
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Masukkan nama Anda"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-6 flex items-center">
              <FaEnvelope className="text-green-500 mr-2" />
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Masukkan email Anda"
                  required
                />
              </div>
            </div>

            {/* Pesan */}
            <div className="mb-6 flex items-center">
              <FaCommentDots className="text-green-500 mr-2" />
              <div className="flex-1">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Tulis pesan Anda di sini..."
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>

            {/* Tombol Kirim */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold py-3 px-6 rounded-md transition duration-300 w-full"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>

        {/* Teks judul dan subjudul - di sebelah kanan */}
        <div className="flex flex-col justify-center items-center md:items-end w-full md:w-1/2 lg:w-1/3 md:mx-10">
          <div className="border-l-4 border-green-500 pl-4 text-white text-center md:text-right">
            <h2 className="text-3xl font-semibold mb-6">
              Hubungi Kami Tim Polisi Kehutanan
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed max-w-xs">
              Kami di sini untuk Anda! Apapun pertanyaannya, baik mengenai upaya
              konservasi hutan maupun layanan kami, jangan ragu untuk menghubungi
              kami.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactKami;

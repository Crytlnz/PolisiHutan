import React from "react";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-no-repeat bg-center h-screen"
        style={{
          backgroundImage: "url('https://image.popmama.com/content-images/post/20230303/tugas-60-contoh-aktivitas-ekonomi-kehutanan-e55b8eab070597382c90356bfdd678b5.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center mb-6 leading-snug">
            Selamat Datang di Website Kami
          </h1>
          <p className="text-white text-lg md:text-xl text-center mb-8 leading-relaxed max-w-3xl">
            Kami adalah pejabat tertentu dalam lingkungan instansi kehutanan pusat
            dan daerah yang sesuai dengan sifat pekerjaannya, menyelenggarakan
            dan/atau melaksanakan perlindungan hutan yang oleh kuasa
            undang-undang diberikan wewenang kepolisian khusus di bidang
            kehutanan dan konservasi sumber daya alam hayati dan ekosistemnya.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;

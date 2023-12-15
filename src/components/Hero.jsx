const Hero = () => {
  return (
    <div className="relative w-full z-0">
      <img
        className="w-full h-[239px]  sm:h-[450px] md:h-[760px] lg:h-[700px]"
        src="../../images/Hero.png"
        alt="Hero Image"
      />

      <div className="md:absolute w-full mb-20 md:mb-0 p-3 md:bottom-7 md:left-20 md:w-[630px] md:h-[306px] px-10 pt-6 pb-8 bg-gradient-to-l from-cyan-500 to-green-400 flex-col justify-start items-start gap-5 inline-flex">
        <div className="sm:w-[556px] text-white text-4xl sm:text-5xl font-inter font-bold capitalize leading-[48px]">
          We crush your competitors, goals, and sales records - without the B.S.
        </div>
        <div className="px-5 py-3 bg-orange-400 rounded justify-start items-start gap-2 inline-flex">
          <button className="text-white text-sm font-bold uppercase leading-[14px] font-inter">
            Get free consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

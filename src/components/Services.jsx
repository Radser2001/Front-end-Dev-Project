const Services = () => {
  return (
    <div id="services" className="flex flex-col items-center mt-10">
      <div className="flex flex-col sm:flex-row items-center justify-around  mb-20 w-11/12 md:w-9/12 ">
        <img
          src="../../images/image 2.png"
          className="w-[275px] h-[275px] md:w-[414px] md:h-[414px]"
          alt=""
        />
        <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start ">
          <p className="font-poppins text-2xl mb-5 text-violet-700 text-[27px] font-semibold leading-[33px] text-center sm:text-start ">
            Web & Mobile App Development
          </p>
          <p className="text-center sm:text-start font-normal text-base font-inter">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>
          <button className="uppercase mt-4 px-5 py-3 bg-orange-400 rounded font-inter text-white">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-around  mb-20 w-11/12 md:w-9/12">
        <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start ">
          <img
            className="sm:hidden block w-[275px] h-[275px] md:w-[414px] md:h-[416px]"
            src="../../images/image 1.png"
            alt=""
          />
          <p className="font-poppins text-2xl mb-5 text-violet-700 text-[27px] font-semibold leading-[33px] text-center sm:text-start  ">
            Digital Strategy Consulting
          </p>
          <p className="text-center sm:text-start font-normal text-base font-inter">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </p>
          <button className="uppercase mt-4 px-5 py-3 bg-orange-400 rounded font-inter text-white">
            Learn More
          </button>
        </div>
        <img
          className="hidden sm:block  w-[275px] h-[275px] md:w-[414px] md:h-[416px]"
          src="../../images/image 1.png"
          alt=""
        />
      </div>
    </div>
  );
};
export default Services;

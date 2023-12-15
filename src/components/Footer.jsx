const Footer = () => {
  return (
    <div>
      <footer className="bg-[#6B3CC9] ">
        <div className="mx-auto w-full max-w-screen-xl p-8 sm:p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0 flex flex-col items-start justify-start w-9/12 md:w-5/12">
              <img
                src="images/Logo.png"
                className="h-8 me-3 mb-5"
                alt="ATDigital Logo"
              />
              <p className="text-white font-lato text-base text-normal font-light">
                Your goal is our target. Not anything in between. We use online
                marketing platforms and tools to achieve single objective - your
                business results.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-1 sm:gap-24 mt-10 md:mt-0 sm:mt-0 sm:grid-cols-2">
              <div>
                <h2 className="mb-6 text-white text-[21px] font-semibold font-inter ">
                  Our Technologies
                </h2>
                <ul className="text-white  font-medium">
                  <li className="mb-4 text-white text-sm font-medium font-inter capitalize">
                    ReactJS
                  </li>
                  <li className="mb-4 text-white text-sm font-medium font-inter capitalize">
                    Gatsby
                  </li>
                  <li className="mb-4 text-white text-sm font-medium font-inter capitalize">
                    NextJS
                  </li>
                  <li className="mb-4 text-white text-sm font-medium font-inter capitalize">
                    NodeJS
                  </li>
                  <li className="mb-4 text-white text-sm font-medium font-inter capitalize">
                    GraphQL
                  </li>
                  <li className="mb-4 text-white text-sm font-medium font-inter capitalize">
                    Laravel
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 mt-10 sm:mt-0 text-white text-[21px] font-semibold font-inter ">
                  Our Services
                </h2>
                <ul className="text-white  font-medium">
                  <li className="mb-4 text-white text-sm font-medium font-inter capitalize">
                    social media marketing
                  </li>
                  <li className="mb-4 text-white text-sm font-medium font-inter capitalize">
                    web & mobile app development
                  </li>
                  <li className="mb-4 text-white text-sm font-medium font-inter capitalize">
                    data & analytics
                  </li>
                  <li className="mb-4 text-white text-sm font-medium font-inter capitalize">
                    google marketing solutions
                  </li>
                  <li className="mb-4 text-white text-sm font-medium font-inter capitalize">
                    search engine optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 mx-auto w-11/12 sm:w-8/12  lg:my-4" />

          <div className="text-center text-white font-inter text-sm font-medium">
            <p>
              Privacy Policy <span className="mr-4 ml-4">|</span> Terms &
              Conditions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;

const Hero = () => {
  return (
    <div className="bg-[#0D141B] px-12 md:px-12 lg:px-8 md:pb-16  pb-28 ">
      <div className="md:flex justify-center gap-10 lg:gap-24 pt-20 md:items-center">
        <div>
          <div>
            <h1 className="text-[#F9FAFB] md:text-[72px] text-[28px]  font-Inter">
              Hi, I&apos;m Parvez Ansari{" "}
            </h1>
          </div>
          <div className="md:hidden  pt-6">
        <img src="parvez.jpg" className="rounded-lg w-[320px] h-[328px] object-cover"></img>
      </div>

          <div>
            <h1 className="text-[#F9FAFB]  text-[20px]  md:pt-0 pt-4 md:text-[28px]">
              {" "}
              An education and counseling expert{" "}
            </h1>
          </div>
          <div className="">
            <h1 className="md:text-[18px] text-[16px]  md:pt-3 pt-6 text-[#D1D5DB]">
              With over 13 years of experience guiding students and parents
              toward informed <br />
              academic choices. Specializing in boarding schools across India, I
              bring a deep <br /> understanding of education systems and a
              personalized approach to every <br /> consultation.
            </h1>
          </div>
        </div>
        <div className=" md:block  hidden md:pt-0 pt-4">
          <img
            src="parvez.jpg"
            className="lg:w-[360px] lg:h-[368px]  md:w-[800px]  md:h-[380px] object-cover rounded-lg"
          ></img>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;

const About = () => {
  return (
    <div>
      <div className="p-14">
        <div className="md:flex md:justify-center md:items-center gap-10  ">
          <div className="flex gap-8 ">
            <div className="space-y-10">
              <div className="">
                <h1 className="md:text-[56px]  text-[24px] ">About me</h1>
                <img src="Line.svg " className="md:h-auto md:w-auto w-[116px] " />
              </div>
              <div>
                <h1 className="text-[28px] text-right text-[#000000] mt-8 md:block hidden">
                  13 <br /> Year of Experience
                </h1>
              </div>
              <div>
                <h1 className="text-[28px]   text-[#000000] md:block hidden text-right">
                  {" "}
                  5+ <br />
                  Project Completed
                </h1>
              </div>
            </div>
            <div className=" hidden md:block ">
              <hr className="w-[2px] bg-[#000000] lg:h-52 md:h-96 mt-32"></hr>
            </div>
          </div>
          <div className="md:text-[22px] text-[#0D141B] text-[16px]    md:pt-28 ">
            <p>
              Hello, I&apos;m Parvez Ansari, an education and counseling expert with
              over 13 years of
              <br /> experience.
              <br /> With a proven track record, I&apos;ve dedicated my career to
              helping families navigate <br /> the complexities of boarding
              school admissions. My expertise lies in evaluating <br />
              academic potential, identifying the right fit, and providing
              actionable guidance. By <br /> combining expert knowledge and
              empathetic counseling, I empower students to <br /> excel in their
              educational journey and achieve long-term success.
            </p>
            <div className="flex gap-[12px]">
            <div>
                <h1 className="md:text-[28px] md:text-right text-center mt-8 md:hidden text-[18px]">
                  13 <br /> Year of Experience
                </h1>
              </div>
              <div>
                <h1 className="md:text-[28px] md:hidden text-[18px] md:pt-0 pt-8 text-center md:text-right">
                  {" "}
                  5+ <br />
                  Project Completed
                </h1>
              </div>
              </div>
            </div>
          
          </div>
          </div>
        </div>
     
  );
};

export default About;

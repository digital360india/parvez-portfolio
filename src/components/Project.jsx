const Project = () => {
  return (
    <div>
      <div className="bg-[#F3EFE5] px-10 py-10">
        <div className=" pb-3">
          <h1 className="md:text-[56px] text-[24px] font-bold">Project</h1>
          <img src="Line.svg" className="md:w-auto w-[82px] " />
        </div>
        <div className="md:flex md:justify-evenly md:gap-2   ">
          <div className=" flex items-center justify-center">
            <div className=" md:flex-col flex md:space-y-28 lg:mb-0 md:mb-36 space-x-5 md:space-x-0 md:justify-normal justify-center font-bold ">
              <div className="md:text-[32px] text-[20px] text-left  ">
                Listen
              </div>

              <div className="md:text-[32px] text-[20px]  md:text-left  md:border-none border-r border-l w-[120px] text-center border-[#000000] ">
                {" "}
                Evaluate
              </div>
              <div className="md:text-[32px]  text-[20px] text-left ">
                {" "}
                Advise
              </div>
            </div>
          </div>
          <div className="md:border-l-4 md:pl-6  lg:w-[73%]  border-[#000000]">
            <div className="md:text-[22px] text-[16px] text-[#0D141B]">
              <p className="mt-6">
                I have had the privilege of working with renowned educational
                platforms like Edu My Nation, Boarding Admissions, Global Edu,
                Go Edu, and Edu123, each offering unique opportunities to impact
                students&apos; lives.
              </p>
              <p className="mt-9">
                Through personalized counseling sessions, I&apos;ve helped
                students and parents navigate critical decisions, ensuring
                clarity and confidence at every step. My approach focuses on
                understanding individual needs, aligning academic aspirations
                with the right schools, and simplifying complex admission
                processes.
              </p>
              <p className="mt-5">
                Across these projects, my guidance has led to measurable
                outcomes, including higher success rates in school placements
                and improved confidence among students and families. By blending
                empathy with expertise, I&apos;ve been able to empower countless
                learners to take meaningful strides toward their educational
                goals, building trust and credibility with each interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

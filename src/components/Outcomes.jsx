const outcomedata = [
  {
    image: "/image & heading.svg",
    description:
      
    "Through Parvez empathetic and insightful guidance, families felt more confident in their decisions. His counseling contributed to a 25% rise in parent satisfaction ratings and a noticeable boost in repeat consultations.",
  },
  {
    image: "/image(1).svg",
    description:
      "Parvez played a pivotal role in guiding students toward top-tier boarding schools. His strategic approach resulted in a 35% improvement in admission success rates, making the process seamless for families.",
  },
  {
    image: "/image & heading (5).svg",
    description:
      "Parvez tailored counseling sessions empowered students across India to achieve their academic dreams. His efforts drove a 30% increase in client engagement and established our platform as a trusted educational consultant.",
  },
  {
    image: "/image (3).svg",
    description:
      "Parvez counseling expertise helped our Dubai-based clients make informed academic choices. His personalized sessions led to a 40% increase in successful placements, enhancing both student satisfaction and trust in our platform.",
  },
  {
    image: "/image & heading (6).svg",
    description:
      "Parvez holistic approach to counseling simplified school selection for families across cities in India. His sessions led to a 50% improvement in parent feedback scores and significantly strengthened our credibility as an education consultant.",
  },
];

const Outcomes = () => {
  return (
    <div className="bg-[#0D141B] p-12 ">
      <div className="text-[#FFFFFF] md:text-[56px] text-[24px]">
        How Has My Counseling Transformed Outcomes?
      </div>

      <div className="pt-12">
        {outcomedata.map((data, index) => (
          <div key={index} className={`
            ${
                index % 2 === 0 ? "md:w-[560px]" : "lg:ml-[55%]  md:w-[500px]"
              }`}
          
          >
            <img src={data.image} className="md:w-[300px] md:h-[60px] w-[160px] h-[48px]" />
            <div className="py-4">

            <hr className="md:w-[528px]  w-[280px]  border-[#FFFFFF66] " />
            </div>
            <p className="text-[#FFFFFF] md:w-auto w-[288px] md:text-[24px] text-[16px]">&quot;{data.description}&quot;</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Outcomes;

const skillsdata = [
  {
    number: "1",
    heading: "Student-Centered Academic Counseling",
    li1: "Personalized Guidance",
    li2: "Individual Growth Plans",
    li3: "Dedicated Mentorship",
    li4: "Tailored Strategies",
    li5: "Focused Support",
  },
  {
    number: "2",
    heading: "Expertise in Boarding School Admissions Processes",
    li1: "Comprehensive Knowledge",
    li2: "Application Assistance",
    li3: "Interview Preparation",
    li4: " Scholarship and Financial Aid Expertise",
    li5: "Personalized School Selection",
  },
  {
    number: "3",
    heading: "Effective Communication and Empathetic Guidance",
    li1: "Clear and Concise Messaging",
    li2: "Conflict Resolution",
    li3: "Feedback Mechanism",
    li4: "Cultural Sensitivity",
    li5: "Encouragement and Motivation",
  },
  {
    number: "4",
    heading: "Strategic Problem-Solving for Academic Success",
    li1: "Goal Setting",
    li2: "Identifying Challenges",
    li3: "Critical Decision-Making",
    li4: "Time Management",
    li5: "Monitoring Progress",
  },
  {
    number: "5",
    heading: "Tailored School Selection and Fit Analysis",
    li1: "Academic Alignment",
    li2: "Extracurricular Opportunities",
    li3: "Future Prospects",
    li4: "Class Size and Teacher Ratio",
    li5: "Facilities and Support Services",
  },
  {
    number: "6",
    heading: "Parental Consultation and Decision Support",
    li1: "Understanding Family Goals",
    li2: "Financial Planning Support",
    li3: "Continuous Involvement",
    li4: "Empathy and Reassurance",
    li5: "Balancing Expectations",
  },
];

const Skill = () => {
  return (
    <div className="bg-[#0D141B] p-12 overflow-hidden">
      <div className="md:text-[56px] text-[24px] text-[#FFFFFF]">Skills</div>
      <div>
        {skillsdata.map((data, index) => (
          <div
            key={index}
            className={`text-[#4AA9DF] md:text-[32px]  pt-10 ${
              index % 2 === 0 ? "md:w-[560px]" : "lg:ml-[60%] md:w-[560px]"
            }`}
          >
            <h2 className="md:text-4xl text-xl ">
              <span className="md:text-[60px] text-[24px] ">{data.number}</span> .{" "}
              {data.heading}
            </h2>
            <div className="py-4">
            <hr
              className={`md:w-[500px] border-[#FFFFFFB2] ${
                  index % 2 === 0 ? "" : ""
                }`}
                />
                </div>

            <div className="text-[#FFFFFF] md:text-[24px] text-[16px] ">
              <li>{data.li1}</li>
              <li>{data.li2}</li>
              <li>{data.li3}</li>
              <li>{data.li4}</li>
              <li>{data.li5}</li>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;

const Contact = () => {
  return (
    <div className="bg-[#0D141B] md:w-auto p-14 md:p-24 lg:p-12">
      <div className="text-[#FFFFFF] md:text-[56px] text-[24px] ">Contact me</div>
      <div className="text-[#FFFFFF70] md:text-[32px] text-[16px]">
        Let&apos;s get in Touch or Meet me{" "}
      </div>

      <div className="md:hidden  ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.738969175792!2d78.05069307458105!3d30.301491906347877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092993565e314b%3A0xa00a7211a30700!2sDigital%20360!5e0!3m2!1sen!2sin!4v1732515902474!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="md:w-auto w-[320px]  md:h-auto h-[240px] md:mt-0 mt-5"
            ></iframe>
          </div>

      <div className="">
        <div className="grid grid-cols-2 py-12">
          <div className=" ">
            <form className="space-y-6 text-white  md:w-auto w-[320px]">
              <input
                type="text"
                name="Name"
                placeholder="Name"
                className="border bg-transparent border-[#FFFFFF70] w-[320px] md:w-[520px] h-[45px] text-[24px] rounded-lg p-3"
              />
              <input
                type="text"
                name="Email"
                placeholder="Email"
                className="border bg-transparent border-[#FFFFFF70] rounded-lg   w-[320px] md:w-[520px] h-[45px] text-[24px] p-3"
              />
              <input
                type="text"
                name="Topic"
                placeholder="Topic"
                className="border bg-transparent border-[#FFFFFF70] md:w-[520px]  w-[320px] rounded-lg  h-[45px] text-[24px] p-3"
              />
              <input
                type="text"
                name="Message"
                placeholder="Message"
                className="border bg-transparent border-[#FFFFFF70] md:w-[520px]  w-[320px] h-[125px] rounded-lg text-[24px] p-3"
              />

              <button className="border bg-[#4AA9DF] w-[320px] md:w-[520px] h-[56px] text-[24px] rounded-lg text-[#F3EFE5]">
                Submit
              </button>
            </form>
          </div>
          <div className="lg:block hidden ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.738969175792!2d78.05069307458105!3d30.301491906347877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092993565e314b%3A0xa00a7211a30700!2sDigital%20360!5e0!3m2!1sen!2sin!4v1732515902474!5m2!1sen!2sin"
              width="600"
              height="410"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

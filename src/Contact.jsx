import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact py-40">
        <h1 className="text-center text-xl font-bold mb-8">Contact Us</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.5361714689648!2d73.07643427427936!3d33.64326657331369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9528605276bb%3A0xb4f3c817d1543c9e!2sBarani%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2s!4v1708458459234!5m2!1sen!2s"
          title="Google Maps"
          width="100%"
          height="400"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <form
          action="https://formspree.io/f/xjvnwdan"
          className="flex flex-col gap-6 justify-center items-center p-5 py-20"
          method="POST"
        >
          <input
            className="px-4 py-2 border-gray-600 border-[1px] rounded-md w-80"
            type="text"
            placeholder="Enter your user name"
            name="username"
            autoComplete="off"
            required
          />
          <input
            className="px-4 py-2 border-gray-600 border-[1px] rounded-md w-80"
            type="email"
            placeholder="Enter your user email"
            name="Email"
            autoComplete="off"
            required
          />
          <textarea
            className="px-4 py-2 border-gray-600 border-[1px] rounded-md w-80"
            name="Message"
            cols="22"
            rows="2"
            required
            autoComplete="off"
            placeholder="Enter your message..."
          ></textarea>
          <button
            type="submit"
            className="py-2 px-5 text-white bg-blue-500 hover:border-blue-500 hover:border-2 hover:bg-white hover:text-blue-500 transition-colors rounded-md"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;

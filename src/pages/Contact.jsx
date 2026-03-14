// import React from "react";

// export default function Contact() {
//   return (
//     <>
//       <div
//         className="relative w-full h-60 bg-cover bg-center flex items-center justify-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1521791136064-7986c2920216')",
//         }}
//       >
//         {/* Black Overlay */}
//         <div className="absolute inset-0 bg-black/50"></div>

//         {/* Center Text */}
//         <h1 className="relative text-white text-4xl md:text-7xl font-bold">
//           Contact Us
//         </h1>
//       </div>
//     </>
//   );
// }
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const form = useRef();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        toast.error("Failed to send message");
      });

    const phoneNumber = "9352515020";
    const message =
      "Hello, I want to know more about your Products & Services.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <Toaster />

      {/* Heading */}

      <div className="text-center mb-14" data-aos="fade-down">
        <div
          className="relative w-full h-60 bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521791136064-7986c2920216')",
          }}
        >
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Center Text */}
          <h1 className="relative text-white text-4xl md:text-7xl font-bold">
            Contact Us
            <p className="text-white text-xs mt-3">
              We'd love to hear from you
            </p>
          </h1>
        </div>
        {/* <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1> */}
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Form */}

        <div
          className="bg-white p-8 rounded-2xl shadow-lg"
          data-aos="fade-right"
        >
          <h2 className="text-2xl font-semibold mb-6">Send Message</h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="user_name"
                required
                className="peer w-full border p-3 rounded-lg outline-none"
                placeholder=" "
              />
              <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1">
                Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="user_email"
                required
                className="peer w-full border p-3 rounded-lg outline-none"
                placeholder=" "
              />
              <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1">
                Email
              </label>
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                type="text"
                name="user_phone"
                className="peer w-full border p-3 rounded-lg outline-none"
                placeholder=" "
              />
              <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1">
                Phone
              </label>
            </div>

            {/* Subject */}
            <div className="relative">
              <input
                type="text"
                name="subject"
                className="peer w-full border p-3 rounded-lg outline-none"
                placeholder=" "
              />
              <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1">
                Subject
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                rows="4"
                name="message"
                required
                className="peer w-full border p-3 rounded-lg outline-none"
                placeholder=" "
              ></textarea>
              <label className="absolute left-3 top-3 text-gray-500 text-sm transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-white peer-focus:px-1">
                Message
              </label>
            </div>

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition w-full">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}

        <div
          className="bg-white p-8 rounded-2xl shadow-lg"
          data-aos="fade-left"
        >
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

          <div className="space-y-6 text-gray-700">
            <div className="flex items-center gap-4">
              <FaPhone className="text-green-600" />
              <p>+91 9352515020</p>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-green-600" />
              <p>info@company.com</p>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-green-600" />
              <p>Kota, Rajasthan, India</p>
            </div>
          </div>

          {/* Social icons */}

          {/* <div className="flex gap-5 mt-8 text-xl text-gray-600">
            <FaFacebook className="hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="hover:text-pink-600 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
          </div> */}

          {/* Google map */}

          <div className="mt-8 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=kota%20rajasthan&output=embed"
              className="w-full h-64 border-0"
              loading="lazy"
              title="map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

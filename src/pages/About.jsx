import React from "react";

export default function About() {
  return (
    <div className="">
      <div
        className="relative w-full h-60 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/114283644/photo/about-us.webp?a=1&b=1&s=612x612&w=0&k=20&c=QAn9E5uA4r7aTYVaO1unzGPlKXPE-gmXA8wyNbVlSDk=')",
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Center Text */}
        <h1 className="relative text-white text-4xl md:text-7xl font-bold">
          About Us
        </h1>
      </div>
      <div className="md:flex flex-1 w-full p-10 gap-10">
        <img
          src="https://images.unsplash.com/photo-1772362350668-1ecd3c3ab8d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="md:w-1/2 p-5 object-cover rounded-lg shadow-lg md:h-screen"
          data-aos="fade-right"
        />
        <div className="flex-col md:w-1/2 p-5">
          <h1 data-aos="fade-left" className="mb-5 text-2xl text-red-600">
            – – – Welcome – – –
          </h1>
          <h1 data-aos="fade-right" className="text-4xl mb-5 text-green-800">
            Thermo Green Energy Pvt. Ltd.
          </h1>
          <p data-aos="fade-up">
            <strong className="text-green-800">
              Thermo Green Energy Pvt. Ltd.
            </strong>{" "}
            has earned unwavering trust and recognition from clients and vendors
            alike for consistently delivering quality products and services.
            Since its inception, the company has adhered to the highest
            standards of quality and performance, achieving excellent ratings as
            per norms set by reputed industry organizations.
            <br />
            <br />
            In a short span of time, Thermo Green Energy has emerged as a rising
            leader in the fields of Power Plants, Steel Plants, and various
            Process Industries. Our dedication to excellence has positioned us
            at the forefront of industrial innovation and reliability.
            <br />
            <br />
            We are a versatile and dynamic company, backed by a highly motivated
            and technically proficient team. Our team’s consistent and
            remarkable performance has enabled us to overcome complex challenges
            and drive successful project execution across industries
          </p>
        </div>
      </div>
    </div>
  );
}

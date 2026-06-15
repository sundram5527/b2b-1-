import {
  FaWhatsapp,
  FaCode,
  FaRocket,
  FaLaptopCode
} from "react-icons/fa";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function LandingPage() {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between">
          <h1 className="text-2xl font-bold text-blue-600">
            TheMbaLedWalla
          </h1>
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>
      

        {/* Mobile Menu */}
         {isOpen && (
           <div className="md:hidden bg-white shadow-lg">

           <div className="flex flex-col p-4 space-y-4">

             <a
              href="#about"
              onClick={() => setIsOpen(false)}
             >
              About
             </a>

             <a
              href="#services"
              onClick={() => setIsOpen(false)}
             >
              Services
             </a>

             <a
              href="#projects"
              onClick={() => setIsOpen(false)}
             > 
              Projects
             </a>

             <a
              href="#contact"
              onClick={() => setIsOpen(false)}
             >
              Contact
             </a>

          </div>
          </div>

          )
         }
        </nav>
    
      {/* Hero */}
      <section className="pt-32 pb-24 bg-linear-to-r from-blue-600 to-indigo-700 text-white">


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">

          <div>   {/*hero text scaling*/}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Transforming Ideas Into Digital Success
            </h1>

            <p className="text-lg mb-8">
              We create beautiful websites and scalable
              digital solutions that help businesses grow.
            </p>

            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">

              Get Started
            </button>
          </div>

          <div>
            {/* <img
              src="./1.jpg"
              alt="hero"
              className="w-full h-auto object-cover rounded-xl shadow-2xl"
            /> */}
             <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full
              h-64
              md:h-96
              lg:h-120
              object-cover rounded-4xl shadow-lg"
             >
             <source src="./2.mp4" type="video/mp4" />
             </video>
          </div>

        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          About Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">

          <img
            src="./1.jpg"
            alt=""
            className="w-full h-auto object-cover rounded-xl"
          />

          <div>
            <h3 className="text-3xl font-semibold mb-4">
              Helping Businesses Grow
            </h3>

            <p className="text-gray-600">
              We specialize in building modern web
              applications, business automation systems,
              and AI-powered solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="bg-gray-50 py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl font-bold text-center mb-16">
            Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-xl shadow">
              <FaCode className="text-4xl mb-4 text-blue-600" />
              <h3 className="font-bold text-xl mb-3">
                Web Development
              </h3>
              <p>
                Modern React, Next.js and Tailwind websites.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <FaRocket className="text-4xl mb-4 text-blue-600" />
              <h3 className="font-bold text-xl mb-3">
                Digital Growth
              </h3>
              <p>
                SEO, marketing and conversion optimization.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <FaLaptopCode className="text-4xl mb-4 text-blue-600" />
              <h3 className="font-bold text-xl mb-3">
                Software Solutions
              </h3>
              <p>
                Custom business applications and automation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {[1, 2].map((item) => (
            <div
              key={item}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              {/* <img
                src={`https://picsum.photos/600/400?random=${item}`}
                alt=""
                className="w-full h-auto object-cover"
              /> */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-64 md:h-96 lg:h-120 object-cover rounded-2xl"

              >
               <source src="./2.mp4" type="video/mp4" />
              </video>

              <div className="p-5">
                <h3 className="font-bold text-xl">
                  Project {item}
                </h3>

                <p className="text-gray-600 mt-2">
                  Custom business solution built with
                  modern technologies.
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-slate-900 text-white py-24"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Contact Us
          </h2>

          <p className="mb-3">
            Email: thembaledwall@gmail.com.com
          </p>

          <p className="mb-3">
            Phone: +91 9102050979
          </p>

          <p>
            Location: Dhanbad, India

          </p>

        </div>
      </section>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919102050979"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <FaWhatsapp
          size={32}
          className="text-white"
        />
      </a>

    </div>
  );
}
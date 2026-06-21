import {
  FaWhatsapp,
  FaCode,
  FaRocket,
  FaLaptopCode,
  FaAffiliatetheme
} from "react-icons/fa";

import Gallery from "./components/gallery";
import Photos from "./components/Image";  {/*add routing to gallery and merge photos and videos add photos and videos ui background animation*/}
import Theme from "./components/theme"


import { Menu, X } from "lucide-react";
import { useState,useEffect } from "react";
import aboutImage from './assets/1.jpg'
import Image2 from './assets/2.jpg'
import Image7 from './assets/7.jpg'
import Image4 from './assets/4.jpg'
import Image5 from './assets/5.jpg'
import Image6 from './assets/6.jpg'
import videoProject from './assets/hero(2).mp4'
import videoProject2 from './assets/2.mp4'
import videoProject4 from './assets/4.mp4'
import videoProject5 from './assets/5.mp4'
export default function LandingPage() {


  const projects = [
  {
    id: 1,
    title: "IIT ISM Dhanbad",
    description: "Custom AI chatbot for customer support.",
    video: videoProject4,
    technologies: ["React", "Node.js", "OpenAI"],
  },
  {
    id: 2,
    title: "Palak Mucchal ",
    description: "Analytics dashboard for business insights.",
    video: videoProject2,
    technologies: ["React", "FastAPI", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Wedlock Greens ",
    description: "Analytics dashboard for business insights.",
    video: videoProject5,
    technologies: ["React", "FastAPI", "PostgreSQL"],
  },
];

 const galleryImages = [Image2,Image7,Image4,Image5,Image6];
 
 
 
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isView, setIsView] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white text-black dark:bg-gray-900 dark:text-white shadow z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between">
          <h1 className="text-2xl font-bold text-blue-600">
            TheMbaLedWalla
          </h1>
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8  bg-white text-black dark:bg-gray-900 dark:text-white">
           
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <Theme darkMode={darkMode}
        setDarkMode={setDarkMode}></Theme>


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
           <div className="md:hidden  bg-white text-black dark:bg-gray-900 dark:text-white shadow-lg">

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
             <Theme darkMode={darkMode}
        setDarkMode={setDarkMode} className="cursor-pointer"></Theme>

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
              We create beautiful visuals and scalable
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
             <source src={videoProject} type="video/mp4" />
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
            src={aboutImage}
            alt=""
            className="w-full h-auto object-cover rounded-xl"
          />

          <div>
            <h3 className="text-3xl font-semibold mb-4">
              Helping Businesses Grow
            </h3>

            <p className="text-gray-600">
             We are a creative visual solutions company specializing in high-impact LED display setups, dynamic stage backdrops, and immersive visual experiences for conferences, corporate meetings, exhibitions, festivals, and live events.
            </p>
          </div>
        </div>
      </section>

       {/* Photos */}
       <Photos></Photos>
      {/* <section
        id="projects"
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold text-center mb-12">
          Photo Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

      {galleryImages.map((image, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl"
        >
          <img
            src={image}
            alt={`Gallery ${index + 1}`}
            style={{ cursor: "pointer" }}
            onClick={() => setIsView(true)}
            className="
              w-full
              h-64
              object-cover
              hover:scale-110
              transition
              duration-500
            "
          />
          {isView && (
        <div
          onClick={() => setIsView(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={image}
            alt={`Gallery ${index + 1}`}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
            }}
          />
        </div>
      )}





        </div>
      ))}
      </div>       
     </section> */}


      {/* Services */}
      <section
        id="services"
        className=" border border-amber-50 bg-gray-50 text-black dark:bg-gray-900 dark:text-white dark:border-gray-800 py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl font-bold text-center mb-16">
            Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="bg-white text-black dark:bg-gray-900 dark:text-white border border-amber-50 dark:border-gray-800 p-8 rounded-xl shadow">
              <FaCode className="text-4xl mb-4 text-blue-600" />
              <h3 className="font-bold text-xl mb-3">
                Meetings
              </h3>
              <p>
                
              </p>
            </div>

            <div className= "bg-white text-black dark:bg-gray-900 dark:text-white border border-amber-50 dark:border-gray-800 p-8 rounded-xl shadow">
              <FaRocket className="text-4xl mb-4 text-blue-600" />
              <h3 className="font-bold text-xl mb-3">
                College Fests
              </h3>
              <p>
                
              </p>
            </div>

            <div className=" bg-white text-black dark:bg-gray-900 dark:text-white border border-white dark:border-gray-800 p-8 rounded-xl shadow">
              <FaLaptopCode className="text-4xl mb-4 text-blue-600" />
              <h3 className="font-bold text-xl mb-3">
                Weddings
              </h3>
              <p>
                
              </p>
            </div>
            <div className=" bg-white text-black dark:bg-gray-900 dark:text-white border border-amber-50 dark:border-gray-800 p-8 rounded-xl shadow">
              <FaAffiliatetheme className="text-4xl mb-4 text-blue-600" />
              <h3 className="font-bold text-xl mb-3">
                Promotional Events
              </h3>
              <p>
                
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Projects */}

      <Gallery></Gallery>

      {/* <section
        id="projects"
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold text-center mb-16">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {projects.map((project) => (
          <div
             key={project.id}
             className="rounded-xl overflow-hidden shadow-lg bg-white"
          >
           <video
            autoPlay
            muted
            loop
            playsInline
            style={{ cursor: "pointer" }}
            onClick={() => setOpen(true)}
            className="w-full h-64 md:h-96 object-cover"
           >
           <source src={project.video} type="video/mp4" />
          </video>
                     
          {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          
          <video
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "80%",
              maxHeight: "90vh",
            }}
          >
            <source src={project.video} type="video/mp4" />
          </video>
          
        </div>
      )}




          <div className="p-6">
           <h3 className="text-2xl font-semibold">
            {project.title}
           </h3>

           {<p className="mt-3 text-gray-600">
            {project.description}
          </p> 
          </div>
        </div>
        
          ))}

          {/* {[1, 2].map((item) => (
            <div
              key={item}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              { <img
                src={`https://picsum.photos/600/400?random=${item}`}
                alt=""
                className="w-full h-auto object-cover"
              /> }
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-64 md:h-96 lg:h-120 object-cover rounded-2xl"

              >
               <source src={videoProject}type="video/mp4" />
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
      
      </section> */}

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
            Email: thembaledwall@gmail.com
          </p>

          <a href="tel:9102050979">
          <p className="mb-3">
            Phone: +91 9102050979
          </p>
          </a>
          <p>
            Location: Dhanbad, Jharkhand

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
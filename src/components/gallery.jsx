import React from "react";
import { useState,useEffect } from "react";
import videoProject from '../assets/hero(2).mp4'
import videoProject2 from '../assets/2.mp4'
import videoProject4 from '../assets/4.mp4'
import videoProject5 from '../assets/5.mp4'


export default function VideoGallery() {
const [selectedVideo, setSelectedVideo] = useState(null);

useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setSelectedVideo(null);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, []);

 const projects = [
  {
    id: 10,
    title: "IIT ISM Dhanbad",
    description: "Custom AI chatbot for customer support.",
    video: videoProject4,
    technologies: ["React", "Node.js", "OpenAI"],
  },
  {
    id: 20,
    title: "Palak Mucchal ",
    description: "Analytics dashboard for business insights.",
    video: videoProject2,
    technologies: ["React", "FastAPI", "PostgreSQL"],
  },
  {
    id: 30,
    title: "Wedlock Greens ",
    description: "Analytics dashboard for business insights.",
    video: videoProject5,
    technologies: ["React", "FastAPI", "PostgreSQL"],
  },
];

return(
    <div className="border border-amber-50 bg-white text-black dark:bg-gray-900 dark:text-white dark:border-gray-800">
     <section
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
             className="rounded-xl border border-gray-50 overflow-hidden shadow-lg  bg-white text-black dark:bg-gray-900 dark:text-white dark:border-yellow-800"
          >
           <video
            autoPlay
            muted
            loop
            playsInline
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedVideo(project.video)}
            className="w-full h-64 md:h-96 object-cover"
           >
           <source src={project.video} type="video/mp4" />
          </video>
              <div className="p-6">
           <h3 className="text-2xl font-semibold ">
            {project.title}
           </h3>
      
           {/* <p className="mt-3 text-gray-600">
            {project.description}
          </p> */}
          </div>        
          
        </div>
        
      ))}
         {selectedVideo && (
         <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedVideo(null)}
         > 
          
          <video
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
            className="w-[90%] max-h-[90vh]"
          >
            <source src={selectedVideo} type="video/mp4" />
          </video>
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setSelectedVideo(null)}
           >
               ×
        </button>
        </div>
         )}
          






         
        </div>
        
          

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
          ))} */}
        
      
      
    </section>
    
    </div>
  );
}

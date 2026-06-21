import React from "react";
import { useState } from "react";
import aboutImage from '../assets/1.jpg'
import Image2 from '../assets/2.jpg'
import Image7 from '../assets/7.jpg'
import Image4 from '../assets/4.jpg'
import Image5 from '../assets/5.jpg'
import Image6 from '../assets/6.jpg'



export default function photos() {


const galleryImages = [Image2,Image7,Image4,Image5,Image6];
const [selectedPhoto, setSelectedPhoto] = useState(null);

    return(
        <div>
       <section
        id="projects"
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border dark:border-gray-800"
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
            onClick={() => setSelectedPhoto(image)}
            className="
              w-full
              h-64
              object-cover
              hover:scale-110
              transition
              duration-500
              cursor-pointer
            "
          />
          </div>
           ))}
          {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="
            fixed
            inset-0
          bg-black/80
            flex
            items-center
            justify-center
            z-50
            "
          
        >
          <img
            src={selectedPhoto}
            alt="selected photo"
            className="
            max-w-[90%]
            max-h-[90vh]
            rounded-lg
            "
            onClick={(e) => e.stopPropagation()}
          />
        <button
          className="absolute top-4 right-6 text-white text-4xl"
          onClick={() => setSelectedPhoto(null)}
        >
        ×
        </button>
        </div>
      )}

        
     /</div>
       
     </section>

        </div>
    )

 }
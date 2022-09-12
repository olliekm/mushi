import Navbar from "../components/Navbar"
import { useRef, useEffect } from 'react'

export default function Home() {

  const galleryRef = useRef(null)


  useEffect(() => {
    if(galleryRef && galleryRef.current){
      galleryRef.current.scrollLeft = galleryRef.current.scrollWidth
      const myTimeout = setTimeout(() => {
        galleryRef.current.scrollLeft = galleryRef.current.scrollWidth * -1
      }, 1000);
      clearTimeout(myTimeout)


      galleryRef.current.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        galleryRef.current.scrollLeft += evt.deltaY*10;
      });
    }
  }, [galleryRef])
  
  

  return (
    <div className="min-h-screen w-full bg-gray-200">
      <div className="w-full lg:h-auto h-[80vh] md:mt-0 mt-32  flex items-center">
        <div className="w-full h-auto flex justify-center">
          <div className="w-1/2 p-12 flex flex-col justify-center items-center">
            <div className="text-9xl flex flex-col justify-center items-start font-bold uppercase text-black">
              <h1 className="">Share new products and reviews</h1>
              <button className="bg-black text-2xl font-normal px-7 py-3 rounded-full  text-white my-5">Get started</button>
            </div>
          </div>
          <div className="w-1/2 h-full items-center overflow-x-auto flex p-2 noScroll scroll-smooth space-x-10" ref={galleryRef}>
            <div className="h-[40rem] w-80 rounded-full outline-2 outline shrink-0"></div>
            <div className="h-[40rem] w-80 rounded-full outline-2 outline shrink-0"></div>
            <div className="h-[40rem] w-80 rounded-full outline-2 outline shrink-0"></div>
            <div className="h-[40rem] w-80 rounded-full outline-2 outline shrink-0"></div>
            <div className="h-[40rem] w-80 rounded-full outline-2 outline shrink-0"></div>
            <div className="h-[40rem] w-80 rounded-full outline-2 outline shrink-0"></div>
            <div className="h-[40rem] w-80 rounded-full outline-2 outline shrink-0"></div>
            <div className="h-[40rem] w-80 rounded-full outline-2 outline shrink-0"></div>
            <div className="h-[40rem] w-80 rounded-full outline-2 outline shrink-0"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

// app/page.tsx
import Link from "next/link";

// text-[#ff340a]
// bg-[#1d1d1d]
export default function LandingPage() {
  return (
    <>
      <header className="h-[65px] sticky top-0 z-50 border-b backdrop-blur bg-black/10 ">
        <div className=" flex h-16 items center space-x-4 ml-50 mr-45">
          <div className="flex items-center font-montserrat font-bold text-[#37634d]">
            <a>
              <span>National Parks</span>
            </a>
          </div>

          <div className="flex flex-1 items-center">
            <nav className="flex flex-1 justify-end ">
              <ul className="flex justify-around text-[#37634d] items-center">
                <li className="font-montserrat px-[16px] py-[8px] mr-[8px] rounded-lg hover:bg-neutral-300">
                  <a>Explore</a>
                </li>
                <li className="font-montserrat px-[16px] py-[8px] mr-[8px] rounded-lg hover:bg-neutral-300">
                  <a>About</a>
                </li>
                <li className="font-montserrat px-[16px] py-[8px] mr-[8px] rounded-lg hover:bg-neutral-300">
                  <a>Gallery</a>
                </li>
                <li className="font-montserrat px-[16px] py-[8px] mr-[8px] whitespace-nowrap text-neutral-50 bg-[#37634d] hover:bg-[#2A4C3B] rounded-lg">
                  <a>Get in Touch</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="min-h-screen flex flex-col">
        <section>
          <div className="bg-[url('/Landing.jpg')] bg-[position:center_65%] bg-cover w-full h-screen relative">
            {/* Image overlay for screen readability */}
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative flex flex-col min-h-screen items-center justify-center text-center mx-auto px-4 max-w-5xl">
              <h1 className="text-6xl text-white font-extrabold mb-6">
                Journey Through America's National Parks
              </h1>
              <p className="text-lg text-white/90 font-medium font-librebaskerville max-w-2xl mb-8">
                An archive of my adventures, photos, and memories from the U.S.
                National Parks.
              </p>
              <div className="flex flex-row gap-4 mt-4 items-center">
                <a className="px-8 py-3 bg-[#37634d] hover:bg-[#2A4C3B] text-white font-medium rounded-lg text-lg shadow-lg hover:shadow-xl">
                  Explore Parks
                </a>
                <a className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium px-8 py-3 rounded-lg text-lg">
                  My Story
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

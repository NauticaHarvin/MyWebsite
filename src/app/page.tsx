// app/page.tsx
import { Pill } from "@/components/Pill";
import { StatImage } from "@/components/StatImage";
import { StatPill } from "@/components/StatPill";

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

      <main id="statSection" className="min-h-screen flex flex-col">
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

        <section className="bg-[hsl(80,8%,95.1%)] py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="flex justify-center">
                <Pill pillText={"My Story"} />
              </div>
              <h1 className="text-[#37634d] font-montserrat font-bold text-5xl mb-6">
                The Journey Behind The Lens
              </h1>
              <hr className="text-[#3973AC] w-[100px] mx-auto mt-4 border-2"></hr>
            </div>

            <div className="flex flex-row gap-16 items-center">
              <div className="w-5/12">
                <div className="aspect-[3/4]">
                  <StatImage
                    statImage="/StatImage_3.jpg"
                    alt="Landing page image"
                    yearsExplored={2}
                    parksExplored={2}
                  />
                </div>
              </div>

              <div className="w-7/12">
                <div>
                  <p className="text-foreground/90 mb-6 text-lg text-[#344256e6]">
                    As a passionate photographer and nature enthusiast, I've
                    dedicated years to exploring America's most breathtaking
                    national parks. This website serves as a visual diary of my
                    adventures and a tribute to these natural treasures.
                  </p>

                  <p className="text-foreground/90 mb-8 text-[#344256e6]">
                    From the towering sequoias of Yosemite to the otherworldly
                    geysers of Yellowstone, each park offers unique landscapes,
                    wildlife, and experiences that have profoundly shaped my
                    appreciation for conservation and natural history.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <StatPill stat="3k+" description="Photos Taken" />
                  <StatPill stat="11" description="Trails Hiked" />
                  <StatPill stat="5" description="States Visited" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

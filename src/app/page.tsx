// app/page.tsx
import { Pill } from "@/components/Pill";
import { StatImage } from "@/components/StatImage";
import { StatPill } from "@/components/StatPill";
import { SpotlightImage } from "@/components/SpotlightImage";
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
        {/* Landing Section */}
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

        {/* Quick Stats Section */}
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

        {/* Featured Parks Section */}
        <section className="w-full h-full bg-[#1E2939] flex flex-col">
          {/* Row 1 */}
          <div className="flex flex-col items-center pt-32 mb-24">
            <Pill
              pillText={"BREATHTAKING DESTINATIONS"}
              backgroundColor="#2A6F4D"
              textColor="#FFFFFF"
            />
            <div className="flex flex-row text-6xl font-bold mb-4">
              ICONIC
              <div className="text-[#8F663D] ml-3">PARKS</div>
            </div>
            <div className="max-w-160 text-center font-medium text-lg">
              <p>
                Experience the raw beauty and untamed wilderness of America's
                most stunning national parks through my lens.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row bg-amber-300 md:pl-40 md:gap-16">
            {/* LEFT SIDE */}
            <div className="w-full md:w-2/5 flex flex-col items-end justify-center p-4">
              {/* Container to condense all content */}
              <div className="bg-green-500 p-4 md:p-6 rounded-lg flex flex-col gap-4">
                <Pill
                  pillText={"SPOTLIGHT"}
                  backgroundColor="#2A6F4D"
                  textColor="#FFFFFF"
                />

                <div className="flex flex-wrap text-2xl md:text-4xl font-bold mb-2 md:mb-4">
                  <span>YOSEMITE</span>
                  <span className="text-[#8F663D] ml-2 md:ml-3">VALLEY</span>
                </div>

                <div className="max-w-prose font-medium text-sm md:text-lg space-y-2 md:space-y-4">
                  <p>
                    Nestled in California's Sierra Nevada mountains, Yosemite
                    National Park is famed for its ancient giant sequoias,
                    spectacular waterfalls, and iconic valley views shaped by
                    massive granite walls.
                  </p>
                  <p>
                    My three visits to Yosemite have yielded over 1,500
                    photographs across different seasons, capturing the park's
                    dynamic beauty from summer's vibrant greens to winter's
                    serene snowscapes.
                  </p>
                </div>

                <div className="flex gap-3 md:gap-4 mt-4 md:mt-6">
                  <button className="px-3 py-1 md:px-4 md:py-2 bg-green-700 text-white rounded-lg text-sm md:text-base">
                    VIEW GALLERY
                  </button>
                  <button className="px-3 py-1 md:px-4 md:py-2 bg-green-200 text-green-800 rounded-lg text-sm md:text-base">
                    TRAVEL GUIDE
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full md:w-3/5 flex justify-start items-center bg-blue-400 p-4">
              <SpotlightImage
                parkImage={"/Landing.jpg"}
                parkName={"Yosemite"}
                parkDescription={"Short Simple Sweet"}
              />
            </div>
          </div>

          {/* <div className="flex flex-row bg-amber-300 pl-40 gap-16">
            <div className="w-2/5 flex flex-col items-start justify-center bg-green-500">
              <Pill
                pillText={"SPOLIGHT"}
                backgroundColor="#2A6F4D"
                textColor="#FFFFFF"
              />
              <div className="flex flex-row text-6xl font-bold mb-4">
                YOSEMITE
                <div className="text-[#8F663D] ml-3">VALLEY</div>
              </div>
              <div className="max-w-160 font-medium text-lg">
                <p>
                  Nestled in California's Sierra Nevada mountains, Yosemite
                  National Park is famed for its ancient giant sequoias,
                  spectacular waterfalls, and iconic valley views shaped by
                  massive granite walls.
                </p>
                <p>
                  My three visits to Yosemite have yielded over 1,500
                  photographs across different seasons, capturing the park's
                  dynamic beauty from summer's vibrant greens to winter's serene
                  snowscapes.
                </p>
              </div>
              <div>
                <button>VIEW GALLERY</button>
                <button>TRAVEL GUIDE</button>
              </div>
            </div>

            <div className="w-5/12 bg-blue-400">
              <div className="w-full h-full flex justify-center items-center">
                <SpotlightImage
                  parkImage={"/Landing.jpg"}
                  parkName={"Yosmite"}
                  parkDescription={"Short Simple Sweet"}
                />
              </div>
            </div>
          </div> */}
        </section>
        <div className="bg-blue-900 h-100 w-full"></div>
      </main>
    </>
  );
}

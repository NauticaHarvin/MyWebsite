// app/page.tsx
import { Pill } from "@/components/Pill";
import { StatImage } from "@/components/StatImage";
import { StatPill } from "@/components/StatPill";
import { SpotlightImage } from "@/components/SpotlightImage";
import { ParkImage } from "@/components/ParkImage";

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
        {/* Not FInished */}
        <section className="w-full h-full bg-[#1E2939] flex flex-col py-32">
          <div className="container relative mx-auto px-4 flex flex-col">
            {/* Row 1 */}
            <div className="flex flex-col items-center mb-20">
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
            <div className="flex flex-col gap-8 md:flex-row md:gap-8">
              {/* LEFT SIDE */}
              <div className="w-full max-w-[600px] flex flex-col items-end justify-center p-4">
                {/* Container to condense all content */}
                <div className="p-4 md:p-6 rounded-lg flex flex-col">
                  <div className="font-playfairDisplay font-bold">
                    <Pill
                      pillText={"SPOTLIGHT"}
                      backgroundColor="#2A6F4D"
                      textColor="#FFFFFF"
                    />
                  </div>

                  <div className="flex flex-wrap text-4xl text-white font-playfairDisplay font-bold md:text-5xl mb-2 md:mb-4">
                    <span>YOSEMITE</span>
                    <span className="text-[#8F663D] ml-2 md:ml-3">VALLEY</span>
                  </div>

                  <div className="max-w-prose font-medium text-lg text-white/90 md:text-lg space-y-2 md:space-y-4">
                    <p className="mb- leading-relaxed">
                      Nestled in California's Sierra Nevada mountains, Yosemite
                      National Park is famed for its ancient giant sequoias,
                      spectacular waterfalls, and iconic valley views shaped by
                      massive granite walls.
                    </p>
                    <p className="mb-10">
                      My three visits to Yosemite have yielded over 1,500
                      photographs across different seasons, capturing the park's
                      dynamic beauty from summer's vibrant greens to winter's
                      serene snowscapes.
                    </p>
                  </div>

                  <div className="flex gap-3 md:gap-4">
                    <a
                      href="#"
                      className="px-6 py-4 font-bold md:px-4 md:py-4 bg-[#8F663D] text-black font-playfairDisplay rounded-lg text-sm md:text-base"
                    >
                      VIEW GALLERY
                    </a>
                    <button className="px-3 py-4 md:px-4 md:py-4 border text-white font-playfairDisplay rounded-lg text-sm md:text-base">
                      TRAVEL GUIDE
                    </button>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="w-full flex justify-start items-center p-4">
                <SpotlightImage
                  parkImage={"/SpotlightImage.jpeg"}
                  parkName={"Yosemite"}
                  parkDescription={"Short Simple Sweet"}
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-3 gap-2 p-8">
              <ParkImage
                parkImage={"/StatImage_1.jpg"}
                parkName={"Zion"}
                parkState="Nevada"
                parkDescription="Example text about Zion National Park"
              />
              <ParkImage
                parkImage={"/StatImage_1.jpg"}
                parkName={"Joshua Tree"}
                parkState="Califorina"
                parkDescription="Example text about Joshua Tree National Park"
              />
              <ParkImage
                parkImage={"/StatImage_1.jpg"}
                parkName={"Grand Canyon"}
                parkState="Arizona"
                parkDescription="Example text about Grand Canyon National Park"
              />
            </div>

            {/* Row 4 */}
            <div className="flex justify-center uppercase mt-16">
              <Pill
                pillText={"Discover All Parks"}
                textColor="#FFFFFF"
                backgroundColor="#2A6F4D"
              />
            </div>
          </div>
        </section>

        {/* Captured Moments */}
        {/* Not Finished */}
        <section className="py-32 bg-[hsl(80,8%,85.1%)]">
          <div className="container mx-auto px-4 relative">
            {/*  */}
            {/* Row 1 */}
            <div className="flex flex-row justify-between items-center mb-16">
              <div>
                <div className="uppercase mb-4">
                  <Pill
                    pillText={"Visual Story"}
                    textColor="#FFFFFF"
                    backgroundColor="#37634d"
                    className="font-outfit font-bold"
                  />
                </div>
                <h2 className="font-outfit w-full uppercase font-black text-5xl md:text-6xl mb-4 text-white">
                  Captured
                  <span className="text-[#37634d] pl-4">Moments</span>
                </h2>
                <p className="max-w-xl text-white/80">
                  Every photograph tells a story of wild landscapes, rare
                  moments, and the breathtaking beauty of America's national
                  treasures.
                </p>
              </div>

              <a
                href="#"
                className="bg-[#8f663d] uppercase font-bold py-3 px-6 rounded-lg font-outfit"
              >
                <span>Full Gallery</span>
              </a>
            </div>
            {/*  */}
            {/* Row 2 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {/* Large Image */}
              <div className="col-span-2 row-span-2 relative group">
                <div className="absolute inset-0 bg-cover bg-center rounded-xl overflow-hidden">
                  <img
                    src="/Landing.jpg"
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-playfairDisplay font-bold text-xl text-white mb-1">
                      Grand Canyon Sunset
                    </h3>
                    <p className="text-white/80 text-sm">
                      The ever-changing light creates a canvas of colors
                    </p>
                  </div>
                </div>
              </div>
              {/* Regular Images */}
              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src="/Landing.jpg"
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-display font-bold">
                    Giant Sequoias
                  </span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src="/Landing.jpg"
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-display font-bold">
                    Giant Sequoias
                  </span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src="/Landing.jpg"
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-display font-bold">
                    Giant Sequoias
                  </span>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src="/Landing.jpg"
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-display font-bold">
                    Giant Sequoias
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Connected */}
        {/* Not Finished: Add In Hover and Animation Features */}
        <section className="py-32 bg-black/50">
          <div className="container mx-auto px-4 flex flex-col items-center justify-center">
            {/* Row 1 */}
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col items-center justify-center font-outfit mb-16">
                <div className="uppercase mb-4">
                  <Pill
                    pillText={"Get Connected"}
                    textColor="#FFFFFF"
                    backgroundColor="#37634d"
                    className="font-playfairDisplay font-bold"
                  />
                </div>
                <h2 className="uppercase font-black text-5xl md:text-6xl mb-4 text-white">
                  Let's
                  <span className="text-[#8f663d] pl-4">Talk</span>
                </h2>
                <p className="max-w-xl text-white/80 text-center">
                  Questions about my adventures? Want prints of my photographs?
                  Just want to connect? Drop me a message!
                </p>
              </div>

              {/* Row 2 */}
              <div className="p-12">
                <div className="grid grid-cols-2 gap-12">
                  {/* Contact Details */}
                  <div className="space-y-8 font-outfit">
                    <div className="">
                      <h3 className="font-bold text-2xl pb-4 text-white">
                        Contact Details
                      </h3>
                      <p className="font-medium mb-6 font-sans text-white/80">
                        Reach out directly or through the form. I'm always
                        excited to connect with fellow park enthusiasts!
                      </p>
                    </div>

                    <div className="flex flex-col justify-start space-y-4">
                      <div className="flex">
                        <div className="p-3 bg-green-700 rounded flex-shrink-0 text-green-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="currentColor"
                          >
                            <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <div className="font-bold">Email</div>
                          <div>Nauticaharvin17@gmail.com</div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="bg-green-700 p-3 rounded flex-shrink-0 text-green-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="currentColor"
                          >
                            <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v124q18 7 29 22t11 34v80q0 19-11 34t-29 22v404q0 33-23.5 56.5T680-40H280Zm0-80h400v-720H280v720Zm0 0v-720 720Zm200-600q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Z" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <div className="font-bold">Phone</div>
                          <div>(336) 954-8975</div>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="bg-green-700 p-3 rounded flex-shrink-0 text-green-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="currentColor"
                          >
                            <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <div className="font-bold">Location</div>
                          <div>Greensboro, North Carolina</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className=" font-bold mb-4">Follow The Adventure</h4>
                      <div className="flex space-x-4">
                        <a
                          href="#"
                          className="bg-green-500/20 h-10 w-10 flex items-center justify-center rounded text-black"
                        >
                          <span>LI</span>
                        </a>
                        <a
                          href="#"
                          className="bg-green-500/20 h-10 w-10 flex items-center justify-center rounded text-black"
                        >
                          <span>GH</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Contact Form */}
                  <div className="">
                    <form className="w-full max-w-lg font-outfit space-y-5">
                      <div className="flex flex-col">
                        <div className="w-full">
                          <label
                            className="block tracking-wide text-gray-700 text-sm font-medium mb-1"
                            htmlFor="form-name"
                          >
                            Name
                          </label>
                          <input
                            className="appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="form-name"
                            type="text"
                            placeholder="Jane Doe"
                          />
                        </div>
                        <div className="w-full">
                          <label
                            className="block tracking-wide text-gray-700 text-sm font-medium mb-1"
                            htmlFor="form-email"
                          >
                            Email
                          </label>
                          <input
                            className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="form-email"
                            type="text"
                            placeholder="JaneDoe@gmail.com"
                          />
                        </div>
                        <div className="w-full">
                          <label
                            className="block font-medium text-sm text-gray-700 tracking-wide mb-1"
                            htmlFor="form-message"
                          >
                            Message
                          </label>
                          <textarea
                            id="form-message"
                            name="form-message"
                            rows={4}
                            cols={40}
                            className="bg-white rounded w-full"
                          />
                        </div>
                      </div>
                      <button className="items-center justify-center py-2 px-4 bg-[#2a6f4d] text-white text-sm w-full rounded">
                        <span>Send Message</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-blue-900 h-100 w-full"></footer>
      </main>
    </>
  );
}

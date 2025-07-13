// app/page.tsx
import Link from "next/link";

// text-[#ff340a]
// bg-[#1d1d1d]
export default function LandingPage() {
  return (
    <main className="min-h-[calc(100vh-20rem)] flex flex-col">
      {/* NavBar Container Flex-Col #1 */}
      <div className="py-6 px-10 text-2xl font-semibold flex justify-between">
        {/* Nav Bar Left Item */}
        <div className=" px-4 py-2">
          <a className="text-[#00cbf5]" href="#">
            NAUTICA HARVIN
          </a>
        </div>

        {/* Nav Bar Right Item */}
        <ul className="flex space-x-6 px-4 py-2">
          <li>
            <a className="text-[#00cbf5]" href="/about/">
              Resume
            </a>
          </li>
          <li>
            <a className="text-[#00cbf5]" href="/parks">
              Explorations
            </a>
          </li>
        </ul>
      </div>

      {/* Hero Section Flex-Col #2 */}
      <section className="relative flex justify-center min-h-[calc(100vh+15rem)] items-start">
        {/* Background Image */}
        <div>
          <div className="bg-[url('/headshot.jpg')] bg-cover bg-center h-[709px] w-[777px] mt-50 ml-200 absolute z-0"></div>
          <div className="absolute mt-230 ml-200 font-geist text-[50px]">
            Nautica Harvin
          </div>
          <div className="absolute mt-245 ml-200 font-geist text-[30px]">
            Engineer | Visionary | Adventure Seeker
          </div>
        </div>

        <div className="relative">
          <div className="w-[600px] space-y-5 z-10 p-6 absolute mt-200 ml-8">
            <p className="text-lg">
              Welcome to My Website!! Hi, I’m Nautica — engineer by day,
              adventurer by heart, and professional thrill-seeker 24/7. I build
              clean, interactive web experiences with the same intensity I bring
              to a steep hike, a spontaneous road trip, or a brutal workout.
            </p>
            <p className="text-lg">
              I write code like I run trails: focused, fast, and occasionally
              muttering to myself. Whether it’s React, Tailwind, or TypeScript,
              I love turning ideas into digital reality — and making it look
              good while I’m at it.
            </p>
            <p className="text-lg">
              When I’m not shipping features, you’ll probably find me chasing
              sunsets in a national park, flipping through my camera roll like
              it’s a photojournal, or plotting my next spontaneous adventure.
              This project is part portfolio, part personal archive — and 100%
              me. Take a look around.
            </p>
          </div>
        </div>

        {/* Big Words Container */}
        <div className="relative flex flex-col pt-5 w-400 z-10 py-2">
          <h1 className="text-[250px] text-[#00cbf5] font-gesitSans leading-none w-fit">
            DREAM
          </h1>
          <h1 className="text-[250px] text-[#00cbf5] font-geistSans leading-none w-fit px-2">
            DEBUG
          </h1>
          <h1 className="text-[250px] text-[#00cbf5] font-geistSans leading-none w-fit px-2">
            DISCOVER
          </h1>
        </div>
      </section>

      {/* Welcome Message Section Flex-Col #3 */}
      {/* <section className="bg-gray-500 py-16 px-10 text-[#00cbf5] font-geistmono flex justify-center">
        <div className="max-w-xl space-y-8 z-10 bg-lime-200 p-6">
          <p className="text-lg bg-pink-300 p-2">
            Welcome to My Crib!! Hi, I’m Nautica — engineer by day, adventurer
            by heart, and professional thrill-seeker 24/7. I build clean,
            interactive web experiences with the same intensity I bring to a
            steep hike, a spontaneous road trip, or a brutal workout.
          </p>
          <p className="text-lg bg-rose-300 p-2">
            I write code like I run trails: focused, fast, and occasionally
            muttering to myself. Whether it’s React, Tailwind, or TypeScript, I
            love turning ideas into digital reality — and making it look good
            while I’m at it. When I’m not shipping features, you’ll probably
            find me chasing sunsets in a national park, flipping through my
            camera roll like it’s a photojournal, or plotting my next
            spontaneous adventure. This project is part portfolio, part personal
            archive — and 100% me. Take a look around.
          </p>
        </div>
      </section> */}
    </main>
  );
}

// Pick Up
// finish modifying the placement of the big words. using items start instead of center

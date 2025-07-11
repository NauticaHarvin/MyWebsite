// app/page.tsx
import Link from "next/link";

// text-[#ff340a]
export default function LandingPage() {
  return (
    <main>
      <div className="p-[15px]">
        {/* Nav Bar Left */}
        <div className="float-left">
          <ul className="flex">
            <li className="float-left">
              <a className="text-[#00cbf5]" href="#">
                Nautica Harvin
              </a>
            </li>
          </ul>
        </div>

        {/* Nav Bar Right */}
        <div className="float-right">
          <ul>
            <li className="float-right ml-6">
              <a className="text-[#00cbf5]" href="/about/">
                Resume
              </a>
            </li>

            <li className="float-right ml-6">
              <a className="text-[#00cbf5]" href="/parks">
                Explorations
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Email on Page */}
      <div className="relative">
        <h1 className="text-[200px] absolute left-10 inset-y-10 text-[#00cbf5]">
          DREAM
        </h1>
        <h1 className="text-[200px] absolute left-10 inset-y-60 text-[#00cbf5]">
          DEBUG
        </h1>
        <h1 className="text-[200px] absolute left-10 inset-y-110 text-[#00cbf5]">
          DISCOVER
        </h1>
      </div>

      {/* Welcome Message */}
      <div className="relative">
        {/* Headshot Added */}
        <div className="bg-[url('/headshot.jpg')] bg-cover bg-center h-128 w-140 absolute inset-y-60 right-30 -z-1"></div>

        <p className="text-lg w-[485px] h-[232px] absolute left-10 top-190 text-[#00cbf5]">
          Welcome to My Crib!! Hi, I’m Nautica — engineer by day, adventurer by
          heart, and professional thrill-seeker 24/7. I build clean, interactive
          web experiences with the same intensity I bring to a steep hike, a
          spontaneous road trip, or a brutal workout.
        </p>

        <p className="text-lg w-[485px] h-[232px] absolute left-10 top-250 text-[#00cbf5]">
          I write code like I run trails: focused, fast, and occasionally
          muttering to myself. Whether it’s React, Tailwind, or TypeScript, I
          love turning ideas into digital reality — and making it look good
          while I’m at it. When I’m not shipping features, you’ll probably find
          me chasing sunsets in a national park, flipping through my camera roll
          like it’s a photojournal, or plotting my next spontaneous adventure.
          This project is part portfolio, part personal archive — and 100% me.
          Take a look around.
        </p>
      </div>
    </main>
  );
}

// // app/page.tsx
// import Link from "next/link";

// // text-[#ff340a]
// export default function LandingPage() {
//   return (
//     <main>
//       <div className="p-[15px]">
//         {/* Nav Bar Left */}
//         <div className="float-left">
//           <ul className="flex">
//             <li className="float-left">
//               <a className="text-[#00cbf5]" href="#">
//                 Nautica Harvin
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Nav Bar Right */}
//         <div className="float-right">
//           <ul>
//             <li className="float-right ml-6">
//               <a className="text-[#00cbf5]" href="/about/">
//                 Resume
//               </a>
//             </li>

//             <li className="float-right ml-6">
//               <a className="text-[#00cbf5]" href="/parks">
//                 Explorations
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-10">
//         <h1 className="font-pacifico text-4xl text-blue-600">Pacifico Font</h1>
//         <h1 className="font-playfair text-4xl text-green-600">
//           Playfair Display Font
//         </h1>
//         <h1 className="font-inter text-4xl text-purple-600">Inter Font</h1>
//       </main>

//       {/* Email on Page */}
//       <div className="relative">
//         <h1 className="text-[200px] absolute left-10 inset-y-10 text-[#00cbf5]">
//           DREAM
//         </h1>
//         <h1 className="text-[200px] absolute left-10 inset-y-60 text-[#00cbf5]">
//           DEBUG
//         </h1>
//         <h1 className="text-[200px] absolute left-10 inset-y-110 text-[#00cbf5]">
//           DISCOVER
//         </h1>
//       </div>

//       {/* Welcome Message */}
//       <div className="relative">
//         {/* Headshot Added */}
//         <div className="bg-[url('/headshot.jpg')] bg-cover bg-center h-128 w-140 absolute inset-y-60 right-30 -z-1"></div>

//         <p className="text-lg w-[485px] h-[232px] absolute left-10 top-190 text-[#00cbf5]">
//           Welcome to My Crib!! Hi, I’m Nautica — engineer by day, adventurer by
//           heart, and professional thrill-seeker 24/7. I build clean, interactive
//           web experiences with the same intensity I bring to a steep hike, a
//           spontaneous road trip, or a brutal workout.
//         </p>

//         <p className="text-lg w-[485px] h-[232px] absolute left-10 top-250 text-[#00cbf5]">
//           I write code like I run trails: focused, fast, and occasionally
//           muttering to myself. Whether it’s React, Tailwind, or TypeScript, I
//           love turning ideas into digital reality — and making it look good
//           while I’m at it. When I’m not shipping features, you’ll probably find
//           me chasing sunsets in a national park, flipping through my camera roll
//           like it’s a photojournal, or plotting my next spontaneous adventure.
//           This project is part portfolio, part personal archive — and 100% me.
//           Take a look around.
//         </p>
//       </div>
//     </main>
//   );
// }

// app/page.tsx
import parks from "@/data/parks.json";
import Image from "next/image";
import Link from "next/link";

export default function ParksPage() {
  return (
    // main grid layout

    <main>
      <div className=" flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-bold mb-6">
          Welcome To My National Parks Album
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Track my journey through America’s national parks.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 items-center">
        {/* maps each park into an grid item */}
        {parks.map((park) => (
          <div key={park.id} className="relative group">
            <Link
              href={park.visited ? `/parks/${park.id}` : "#"}
              className={park.visited ? "" : "pointer-events-none"}
            >
              <Image
                src={park.heroImage}
                alt={park.name}
                width={400}
                height={300}
                className={`rounded-lg transition duration-300 ${
                  park.visited ? "grayscale-0" : "grayscale opacity-60"
                }`}
              />
              <div className="absolute bottom-2 left-2 text-white font-bold drop-shadow">
                {park.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

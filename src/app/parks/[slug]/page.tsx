// app/parks/[slug]/page.tsx
import { notFound } from "next/navigation";
import parks from "@/data/parks.json";
import Image from "next/image";

type Params = {
  params: {
    slug: string;
  };
};

export default function ParkPage({ params }: Params) {
  const park = parks.find((p) => p.id === params.slug);

  if (!park || !park.visited) return notFound();

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">{park.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {park.albumImages.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Photo ${i + 1}`}
            width={800}
            height={600}
            className="rounded-lg shadow"
          />
        ))}
      </div>
    </div>
  );
}

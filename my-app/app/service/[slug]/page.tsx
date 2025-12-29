import { notFound } from "next/navigation";
import { Services } from "../../data/Services";
import { heading, paraText } from "@/app/style/ui";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params; // ✅ REQUIRED
  console.log("Slug:", slug);

  const service = Services.find((item) => item.slug === slug);

  if (!service) return notFound();

  return (
    <section className="relative py-8 px-4">
      <div className="absolute inset-0 bg-[url('/service-bg.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-white/60"></div>
      <div className="relative z-10">
        <h1 className={heading}>{service.title}</h1>
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-4 place-items-center">
          <div className="col-span-1 p-6">
            <img src={service.image} className="rounded-lg shadow-md" />
          </div>
          <div className={`col-span-2 ${paraText}`}>
            {service.content.paragraphs.map((text, i) => (
              <p key={i} className="mb-4 text-gray-700">
                {text}
              </p>
            ))}

            <ul className="list-disc pl-6 space-y-2">
              {service.content.bullets.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

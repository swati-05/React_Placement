import Link from "next/link";
import { heading, paraText } from "../style/ui";
import { Services } from "../data/Services";

export default function Service() {
  return (
    <>
      <section className="relative py-8 px-4 bg-gray-100">
        <h1 className={heading}>Our Services</h1>

        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-4 place-items-center">
          {Services.map((item, index) => (
            <div className="col-span-1 p-6">
              <div className="bg-white max-w-sm p-6 border rounded-lg shadow-lg">
                <img src={item.image} alt="" className="mb-4" />
                <h5 className="text-md font-semibold text-gray-900 mb-2 text-center">
                  {item.title}
                </h5>
                <p className="text-gray-600 mb-6 text-xs text-center">
                  {item.desc}{" "}
                </p>
                <Link href={`/service/${item.slug}`}>
                  <div className="flex justify-center">
                    <button className="inline-flex items-center text-xs px-4 py-2 bg-gray-600 hover:bg-gray-800 rounded ">
                      Read more →
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

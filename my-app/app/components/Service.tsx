import Link from "next/link";
import { buttonPrimary, heading, paraText } from "../style/ui";
import { Services } from "../data/Services";

export default function Service() {
  return (
    <>
      <div
        className="min-h-screen p-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/assest/services2.jpg')" }}
      >
        <h1 className={`${heading} text-center mb-10`}>
          PNB Services that Boost your business Online & Offline.
        </h1>

        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-3 place-items-center">
          {Services.map((item, index) => (
            <div key ={index} className="col-span-1 p-6 ">
              <div className="bg-white max-w-sm p-6 border rounded-xl shadow-lg transition-all duration-300 ease-out
            hover:-translate-y-3 hover:shadow-2xl">
                <img
                  src={item?.image}
                  alt=""
                  className="mb-4 rounded-lg  opacity-90"
                />
                <h5 className="text-md font-semibold text-gray-900 mb-2 text-center">
                  {item?.title}
                </h5>
                <p className="text-gray-600 mb-6 text-xs text-center">
                  {item?.desc}{" "}
                </p>
                <Link href={`/service/${item.slug}`}>
                  <div className="flex justify-center">
                    <button className={buttonPrimary}>Read more →</button>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

import { heading } from "../style/ui";

export default function PlacementList() {
  const candidates = [
    {
      id: "1",
      name: "Ankit Yadav",
      designation: "System Engineer",
      company: "Wipro",
      state: "Noida",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s",
    },
    {
      id: "2",
      name: "Nagalinga Channadasar",
      designation: "System Engineer",
      company: "Wipro",
      state: "Noida",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s",
    },
    {
      id: "3",
      name: "Kiran Menghare",
      designation: "System Engineer",
      company: "Wipro",
      state: "Noida",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s",
    },
    {
      id: "4",
      name: "Sonam Laxman Gurav",
      designation: "System Engineer",
      company: "Wipro",
      state: "Noida",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s",
    },
    {
      id: "5",
      name: "Ankit Yadav",
      designation: "System Engineer",
      company: "Wipro",
      state: "Noida",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s",
    },
  ];

  return (
    <>
      <div
        className="min-h-screen p-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/assest/services2.jpg')" }}
      >
        <h1 className={`${heading} text-center mb-10`}>Placement</h1>

        <div className="max-w-6xl mx-auto grid grid-cols-5 gap-3">
          {candidates.map((item, index) => {
            const firstName = item?.name?.split(" ")[0];

            return (
              <div key={index} className="col-span-1 p-1 border-inside">
                {/* group on card */}
                <div className="group  bg-white w-full p-6 border rounded-xl shadow-lg overflow-visible">
                  <span
                    className="absolute -mt-6 -ml-6  h-2 w-18
                 bg-gradient-to-r from-[#00cab1] to-lime-500
                 rounded-tl-xl"
                  ></span>
                  <img
                    src={item?.image}
                    alt=""
                    className="mx-auto mb-2 h-28 w-28 rounded-full shadow-md border"
                  />

                  {/* Name + Tooltip */}
                  <div className="relative flex justify-center">
                    <h5 className="text-md font-semibold text-gray-900 cursor-pointer">
                      {firstName}
                    </h5>

                    {/* Tooltip with FULL name */}
                    <span
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2
                           hidden group-hover:block
                           bg-black text-white text-xs px-2 py-1 rounded
                           whitespace-nowrap z-50"
                    >
                      {item?.name}
                    </span>
                  </div>

                  <p className="text-gray-600 text-xs text-center">
                    {item?.state}
                  </p>
                  <p className="text-gray-600 text-xs text-center">
                    {item?.designation}- {item?.company}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

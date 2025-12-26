 
 import Link from "next/link";
 import Image from "next/image";


 const header = () => {

    return (
<div>
 
 <nav className="bg-[#44425A] text-white pl-30 pr-30 py-3 flex items-center justify-between">
  <ul className="flex gap-60">
    <li>Noida Sector - 12 , U.P. (Currently Online Due to covid 19 - WFH).</li>
    <li>pnbtechnologieshr@gmail.com</li>
    <li>8409803595</li>
  </ul>
</nav>


<nav className="bg-white text-black px-30 py-5 flex items-center justify-left">
  <div>
    <Image
      src="/logo.png"
      alt="logo"
      width={120}
      height={120}
    />
  </div>

  <div className="flex gap-10 items-center pl-30">

    <Link href="/duotransition">Home</Link>
     <Link href="/duo-app">About</Link>

    {/* Services Dropdown */}
    <div className="relative group">
      <span className="cursor-pointer">Services <span className="text-xs">▼</span></span>

      <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded">
        <Link
          href="/duo-card-product"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          Card Product
        </Link>
        <Link
          href="/duo-app"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          App Services
        </Link>
      </div>
    </div>

   

    {/* Courses Dropdown */}
    <div className="relative group">
      <span className="cursor-pointer">Courses <span className="text-xs">▼</span></span>

      <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded">
        <Link
          href="/react-course"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          React
        </Link>
        <Link
          href="/javascript-course"
          className="block px-4 py-2 hover:bg-gray-100"
        >
          JavaScript
        </Link>
      </div>
    </div>

    <Link href="/consumer-proposition">Placements</Link>
    <Link href="/issuer-proposition">Videos</Link>
    <Link href="/download-app">Contact</Link>

  </div>
</nav>
</div>

   )
 }

 export default header;
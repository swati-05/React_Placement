"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
 
 <nav className="bg-[#44425A] text-white pl-30 pr-30 py-3 flex items-center justify-between">
  <ul className="flex gap-60">
    <li>Noida Sector - 12 , U.P. (Currently Online Due to covid 19 - WFH).</li>
    <li>pnbtechnologieshr@gmail.com</li>
    <li> 8409803595</li>
  </ul>
</nav>
    <nav className="bg-white text-black px-30 py-5 flex items-center justify-left">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Image src="/logo.png" alt="logo" width={120} height={120} />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center pl-30 font-medium">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>

          {/* Services */}
          <Dropdown title="Services">
            <DropdownItem href="/duo-card-product">💳 Software Development</DropdownItem>
            <DropdownItem href="/duo-app">📱 IT & ITES Staffing & Recruitments </DropdownItem>
            <DropdownItem href="/duo-card-product">💳 IT Trainings Services </DropdownItem>
          </Dropdown>

          {/* Courses */}
          <Dropdown title="Courses">
            <DropdownItem href="/react-course">⚛ AWS DevOps</DropdownItem>
            <DropdownItem href="/javascript-course">🟨 PC Hardware & Networking </DropdownItem>
            <DropdownItem href="/react-course">⚛ Web Developments </DropdownItem>
            <DropdownItem href="/react-course">⚛ Java Developments </DropdownItem>
        
          </Dropdown>

          <NavLink href="/placement">Placements</NavLink>

          <NavLink href="/issuer-proposition">Videos</NavLink>
          <NavLink href="/download-app">Contact</NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4 bg-gray-50 p-4 rounded-lg">
          <MobileLink href="/">Home</MobileLink>
          <MobileLink href="/about">About</MobileLink>
          <MobileLink href="/duo-card-product">Card Product</MobileLink>
          <MobileLink href="/duo-app">App Services</MobileLink>
          <MobileLink href="/react-course">React Course</MobileLink>
          <MobileLink href="/javascript-course">JavaScript Course</MobileLink>
          <MobileLink href="/placement">Placements</MobileLink>
          <MobileLink href="/issuer-proposition">Videos</MobileLink>
          <MobileLink href="/download-app">Contact</MobileLink>
        </div>
      )}
    </nav>
    </div>
  );
}

/* ================= Components ================= */

const NavLink = ({ href, children }: any) => (
  <Link
    href={href}
    className="hover:text-[#00cab1] transition"
  >
    {children}
  </Link>
);

const Dropdown = ({ title, children }: any) => (
  <div className="relative group">
    <span className="cursor-pointer flex items-center gap-1 hover:text-[#00cab1]">
      {title} <span className="text-xs">▼</span>
    </span>

  <div
  className="absolute left-0 mt-3 w-72 hidden group-hover:block
  rounded-xl bg-gradient-to-br from-[#00cab1] to-[#4abceb]
  text-white shadow-lg z-50"
>

      {children}
    </div>
  </div>
);

const DropdownItem = ({ href, children }: any) => (
  <Link
    href={href}
    className="block px-5 py-3 hover:bg-white/20 transition"
  >
    {children}
  </Link>
);

const MobileLink = ({ href, children }: any) => (
  <Link
    href={href}
    className="block py-2 text-gray-700 hover:text-[#00cab1]"
  >
    {children}
  </Link>
);

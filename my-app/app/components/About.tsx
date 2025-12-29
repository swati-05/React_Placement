import { heading, paraText } from "../style/ui";

export default function About() {
  return (
    <section className="relative py-8 px-4">
      <div className="absolute inset-0 bg-[url('/about-bg.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-white/60"></div>
      <div className="relative z-10">
        <h1 className={heading}>About Us</h1>

        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-4 place-items-center">
          <div className="col-span-1 p-6">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-flat-design-intranet-illustration_23-2149373420.jpg?semt=ais_hybrid&w=740&q=80"
              alt="About us"
              className="rounded-lg shadow-md"
            />
          </div>

          <div className={`col-span-2 ${paraText}`}>
            Providing our services worldwide since 2018. Taking a step-ahead PNB
            Technologies is a starting a new platform for providing technical
            support in the field of Software Development and maintenance
            including web development, App development, ERP's and IOS Apps. In
            the field of Training & Placements we are one of the leading
            training institute and providing Corporate, Industrial & College
            based training with full placement support. We are training
            organization with an aim to bridge the gap between the demands of
            the industry and the curriculum of educational institutions. With
            canters across the Globe, the institute is a platform where young
            minds are given the opportunity to build successful careers. We are
            an Institute dedicated to help students to get their career to
            succeed through Computer Networking, Microsoft Azure Cloud, AWS
            Cloud, Web Development, Digital Marketing Courses, Cyber Security
            courses and Software Training programs. We provide course
            certification training programs in PAN INDIA for Cisco, Microsoft
            Azure, AWS, and many more. We have partnered with various companies
            and agencies to help place our students with the best matching
            position with Companies.
          </div>
        </div>
      </div>
    </section>
  );
}

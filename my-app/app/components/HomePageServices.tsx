import ServiceCard from "./ServiceCard";
import { heading, paraText } from "../style/ui";

export default function ServicesPage() {
  return (
<div
  className="min-h-screen p-10 bg-cover bg-center"
  style={{ backgroundImage: "url('/assest/services2.jpg')" }}


//   style={{
//   backgroundImage:
//     "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('/assest/services.jpg')"
// }}
>
  <h1 className={`${heading} text-center mb-10`}>
 PNB Services that Boost your business Online & Offline.
  </h1>
   <div className="flex flex-wrap gap-10 justify-center">
      {/* Web Design Service */}
      <ServiceCard
        image="/assest/banner1.jpg"
        title="Software"
        highlight="Development"
        description="If you have a long term business plan and want to develop software in stages 
        to achieve a bigger goal, Brightcode would like to be your software development firm."
        buttonText="Read more"
        href="/services/web-design"
      />

      {/* Software Development Service */}
      <ServiceCard
        image="/assest/banner1.jpg"
        title="IT & ITES Staffing & "
        highlight="Recruitments"
        description="IT & ITES Staffing and Recruitment Services involves sourcing and providing qualified 
        professionals to meet the workforce needs of IT and IT-enabled service companies."
        buttonText="Read more"
        href="/services/software-development"
      />

         {/* Software Development Service */}
      <ServiceCard
        image="/assest/banner1.jpg"
        title="IT Trainings "
        highlight="Services"
        description="Jobs Based IT Training Services or Internship Programs refer to structured 
        learning initiatives designed to equip individuals with practical, job-ready IT skills."
        buttonText="Read more"
        href="/services/software-development"
      />
</div>
    </div>
  );
}

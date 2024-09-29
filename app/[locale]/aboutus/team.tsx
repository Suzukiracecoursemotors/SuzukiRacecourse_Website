import Image from "next/image";
import muzammilpic from "../public/profiles/muzammil.jpg";
import hamayopic from "../public/profiles/hamayo.jpeg";
import kalsoompic from "../public/profiles/kulsoom.jpeg";
import umerpic from "../public/profiles/umer.jpeg";
const teamMembers = [
  {
    id: 1,
    img: hamayopic,
    name: "Hamayun Bhatti",
    title: "Sales Manager",
  },
  {
    id: 2,
    img: kalsoompic,
    name: "Kulsoom Baloch",
    title: "Sales Manager ",
  },
  {
    id: 3,
    img: umerpic,
    name: "Umer Khan",
    title: "User Car Manager",
  },
  {
    id: 4,
    img: muzammilpic,
    name: "Muzammal Zaman",
    title: "Service Manager After Sales",
  },
];

export default function Team() {
  return (
    <section className="py-1 py-xl-2 bg-light overflow-hidden">
      <div className="container">
        <div className="row mb-10">
          <div className="col-lg-8">
            <h2>Our Team</h2>
          </div>
        </div>
        <div className="row g-3 g-xl-5">
          {teamMembers.map((member) => (
            <div key={member.id} className="col-md-6 col-lg-4">
              <div className="card">
                <div className="equal-1-1 mb-2">
                  <Image
                    className="background"
                    src={member.img}
                    layout="responsive"
                    alt={`${member.name} image`}
                  />
                </div>
                <h4 className="fs-5 mb-0">{member.name}</h4>
                <span className="text-secondary">{member.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

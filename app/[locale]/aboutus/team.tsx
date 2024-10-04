import Image from "next/image";
import muzammilpic from "../public/profiles/muzammil.jpg";
import hamayopic from "../public/profiles/hamayo.jpeg";
import kalsoompic from "../public/profiles/kulsoom.jpeg";
import arshad from "../public/profiles/arshad.jpeg";
import idrees from "../public/profiles/idrees.jpeg";
import umerpic from "../public/profiles/umer.jpeg";
import ibtida from "../public/profiles/shahg.jpeg";
import mushtaq from "../public/profiles/mushtaq.jpeg";
import almas from "../public/profiles/almaas.jpeg";
import usmanparts from "../public/profiles/usmanparts.jpeg";
import owaismalik from "../public/profiles/owaismalik.jpeg";
import Missions from "../common/mission";
const teamMembers = [
  {
    id: 1,
    img: owaismalik,
    name: "Owais Malik",
    title: " Head of Sales",
  },
  {
    id: 2,
    img: hamayopic,
    name: "Hamayun Gulzar",
    title: "Manager Sales",
  },
  {
    id: 3,
    img: muzammilpic,
    name: "Muzammal Zaman",
    title: "Service Manager After Sales",
  },
  {
    id: 4,
    img: arshad,
    name: "Muhammad Arshad",
    title: "Senior Corporate Manager",
  },
  {
    id: 5,
    img: kalsoompic,
    name: "Kulsoom Baloch",
    title: "Senior Depty Manager Sales",
  },
  {
    id: 6,
    img: idrees,
    name: "Muhammad Idrees",
    title: "Suzuki Finance Manager",
  },
  {
    id: 7,
    img: umerpic,
    name: "Umer Khan",
    title: "Manager User Car",
  },
  {
    id: 8,
    img: ibtida,
    name: "Ibtaida Hussain shah",
    title: "Operation Manager",
  },
  {
    id: 9,
    img: mushtaq,
    name: "Muhammad Mushtaq",
    title: " Accounts Manager",
  },
  {
    id: 10,
    img: almas,
    name: "Muhammad Almaas",
    title: "Bodyshop Manager",
  },
  {
    id: 11,
    img: usmanparts,
    name: "Muhammad Usman",
    title: "Parts Manager",
  },
];

export default function Team() {
  return (
    <>
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
      {/* <Missions /> */}
    </>
  );
}

import Image from "next/image";

type HeroSmallWithImageProps = {
  title: string;
  imageURL: string;
};

export default async function HeroSmallWithImage({
  title,
  imageURL,
}: HeroSmallWithImageProps) {
  return (
    <section className="py-15 py-xl-20 bg-black inverted overflow-hidden">
      <div className="container mt-10 level-3">
        <div className="row mb-md-10">
          <div className="col-md-10 col-lg-8">
            <h1 className="display-2 font-weight-bold">{title}</h1>
          </div>
        </div>
      </div>
      <Image
        className="background background-overlay"
        style={{
          backgroundImage: `url("${imageURL}")`,
        }}
        src={""}
        alt={""}
      ></Image>
    </section>
  );
}

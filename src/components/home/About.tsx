import bg from "../../assets/property.avif";

const About = () => {
  return (
    <div
      className="h-48 md:h-64 my-8 md:mt-16 bg-fixed text-white bg-cover bg-center flex items-center justify-evenly"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:text-5xl font-bold pb-3">1200+ </h1>
        <p>properties sell</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:text-5xl font-bold pb-3">25+ </h1>
        <p>Awards gain</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-2xl md:text-5xl font-bold pb-3">10+ </h1>
        <p>Experience</p>
      </div>
    </div>
  );
};

export default About;

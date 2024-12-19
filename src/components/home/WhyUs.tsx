import bg from "../../assets/whyus.jpg";
import img1 from "../../assets/i-1.svg";
import img2 from "../../assets/i-2.svg";
import img3 from "../../assets/i-3.svg";
import img4 from "../../assets/i-4.svg";
import Image from "next/image";

const WhyUs = () => {
  return (
    <div className="relative  mt-16">
      <div
        className=" h-[250px] md:h-[350px] bg-cover bg-center text-center  text-white "
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="bg-black w-full h-full bg-opacity-40 pt-20">
          <h1 className="text-4xl">Why Choose Us</h1>
          <p> We offer perfect real estate services</p>
        </div>
      </div>
      <div className="absolute mx-12 left-0 -bottom-28 bg-white grid grid-cols-4 shadow-md rounded-md">
        <div className="flex flex-col border-r items-center p-4">
          <Image height={50} width={50} src={img1} alt=""></Image>
          <p className="text-xl font-semibold py-4">Find Your Home</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            voluptatum, quae doloremque ab ea enim laudantium repellat! Veniam,
            obcaecati nesciunt?
          </p>
        </div>
        <div className="flex flex-col border-r items-center p-4">
          <Image height={50} width={50} src={img2} alt=""></Image>
          <p className="text-xl font-semibold py-4">Trusted By Thousands</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            voluptatum, quae doloremque ab ea enim laudantium repellat! Veniam,
            obcaecati nesciunt?
          </p>
        </div>
        <div className="flex flex-col border-r items-center p-4">
          <Image height={50} width={50} src={img3} alt=""></Image>
          <p className="text-xl font-semibold py-4">Find Your Home</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            voluptatum, quae doloremque ab ea enim laudantium repellat! Veniam,
            obcaecati nesciunt?
          </p>
        </div>
        <div className="flex flex-col items-center p-4">
          <Image height={50} width={50} src={img4} alt=""></Image>
          <p className="text-xl font-semibold py-4">Find Your Home</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
            voluptatum, quae doloremque ab ea enim laudantium repellat! Veniam,
            obcaecati nesciunt?
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;

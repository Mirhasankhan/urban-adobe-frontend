import Image from "next/image";
import client1 from "../../../assets/cam.png";
import client2 from "../../../assets/will.png";
import { RiDoubleQuotesR } from "react-icons/ri";
import { Metadata } from "next";
import bg1 from "../../../assets/list3.jpg";

export const metadata: Metadata = {
  title: "About",
};

const AboutUs = () => {
  return (
    <div>
      <div
        className="h-[100px] md:h-[250px] 2xl:h-[350px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg1.src})` }}
      >
        <div className="bg-black bg-opacity-20 text-white h-full w-full flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold">About Us</h1>
          <p className="font-medium text-2xl mt-2">Your Trusted Partner in Real Estate Solutions</p>
        </div>
      </div>
      <div className="px-4 md:px-12 2xl:px-28">
        <h1 className="text-xl py-6 font-semibold">Who We Are?</h1>
        <p>
          At Urban Adobe, we believe finding your perfect space shouldn’t be
          complicated—it should be exciting, seamless, and empowering. As a
          premier real estate platform, we are dedicated to simplifying the
          process of buying, selling, and renting properties while delivering
          unparalleled value to our users. Our journey began with a vision: to
          create a user-friendly platform where people can explore diverse
          property listings, connect with trusted agents, and make informed
          decisions effortlessly. Today, we stand as a trusted partner for
          homeowners, buyers, renters, and investors alike, offering an
          intuitive interface and robust tools tailored to meet your unique
          needs.
        </p>
        <p className="pt-3">
          Whether you are searching for your dream home, looking to rent out a
          property, or aiming to sell at the best market price, Urban Adobe
          provides a comprehensive, tech-driven solution to make it happen. We
          combine innovative technology with human expertise to bring you a
          platform that does not just meet expectations but exceeds them. At the
          heart of Urban Adobe is our commitment to creating lasting
          relationships and fostering a community of trust. We are more than a
          website—we are a bridge to your future, connecting you to the spaces
          and opportunities that shape your life. Let us help you take the next
          step in your real estate journey. With Urban Adobe, you are not just
          exploring properties—you are exploring possibilities.
        </p>
        <div>
          <h1 className="text-center text-2xl md:text-4xl font-medium py-12">
            Find Client&apos;s Feedback
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="rounded-md border p-8">
              <div className="flex justify-between items-center ">
                <div className="flex items-center gap-2">
                  <Image src={client1} height={60} width={60} alt=""></Image>
                  <div>
                    <h1 className="font-medium text-xl">Adam Zampa</h1>
                    <p className="text-red-400">Real State Businnesman</p>
                  </div>
                </div>
                <RiDoubleQuotesR className="text-red-500 text-7xl"></RiDoubleQuotesR>
              </div>
              <p className="pt-4">
                I recently used this platform for my real estate needs, and the
                experience was fantastic. The site is user-friendly, easy to
                navigate, and made the process of buying/selling property much
                simpler. I highly recommend it to anyone looking for a seamless
                real estate experience.
              </p>
            </div>
            <div className="rounded-md border p-8">
              <div className="flex justify-between items-center ">
                <div className="flex items-center gap-2">
                  <Image src={client2} height={60} width={60} alt=""></Image>
                  <div>
                    <h1 className="font-medium text-xl">Cameron Williamson</h1>
                    <p className="text-red-400">Property Buyer</p>
                  </div>
                </div>
                <RiDoubleQuotesR className="text-red-500 text-7xl"></RiDoubleQuotesR>
              </div>
              <p className="pt-4">
                I used this platform to find my new home, and it made the
                process so easy! The property listings were detailed, and the
                search features helped me narrow down my options quickly. I
                found exactly what I was looking for, and the whole experience
                was smooth and hassle-free. Highly recommend!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

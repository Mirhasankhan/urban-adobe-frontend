import Image from "next/image";
import client1 from "../../../assets/cam.png";
import client2 from "../../../assets/will.png";
import { RiDoubleQuotesR } from "react-icons/ri";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Urban Adobe | About",
};

const AboutUs = () => {
  return (
    <div className="pt-16 px-4 md:px-14">
      <div className="grid md:grid-cols-5 gap-6 pt-6">
        <div className="col-span-2">
          <video className="rounded-md" width="900" height="500" controls>
            <source src="/state.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-span-3">
          <h1 className="text-2xl md:text-4xl font-medium pb-6 text-gray-500">
            Efficiency. Transparency. <br />
            Control.
          </h1>
          <p>
            At Urban Adobe, we are dedicated to providing exceptional real
            estate services, helping you find the perfect property to call home.
            With years of experience and a deep understanding of the market, our
            team is committed to guiding you through every step of the buying,
            selling, or renting process. We pride ourselves on our personalized
            approach, ensuring that each client receives the attention and
            support they deserve. Trust us to make your real estate journey
            smooth and successful.
          </p>
        </div>
      </div>
      <div>
        <h1 className="text-center text-2xl md:text-4xl font-medium py-12">
          Find Client&apos;s Feedback
        </h1>
        <div
          className="
        grid grid-cols-1 md:grid-cols-2 gap-6 mb-4"
        >
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
              I used this platform to find my new home, and it made the process
              so easy! The property listings were detailed, and the search
              features helped me narrow down my options quickly. I found exactly
              what I was looking for, and the whole experience was smooth and
              hassle-free. Highly recommend!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

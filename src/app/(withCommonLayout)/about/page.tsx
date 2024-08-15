// import client1 from "../../../assets/cam.png";
// import client2 from "../../../assets/cam.png";
// import client3 from "../../../assets/will.png";

const AboutUs = () => {
  return (
    <div className="pt-16 px-4 md:px-14">
      <div className="grid grid-cols-5 gap-6 pt-6">
        <div className="col-span-2">
          <video className="rounded-md" width="900" height="500" controls>
            <source src="/state.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-span-3">
          <h1 className="text-3xl font-medium pb-6 text-gray-500">
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
        <h1 className="text-center text-4xl font-medium pt-12">
          Find Client&apos;s Feedback
        </h1>
      </div>
    </div>
  );
};

export default AboutUs;

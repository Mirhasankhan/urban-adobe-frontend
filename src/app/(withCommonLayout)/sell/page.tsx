import HowWorks from "@/components/home/HowWorks";
import sell from "../../../assets/sell.png";
import Link from "next/link";

export const metadata = {
  title: "Sell",
};

const SellPage = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${sell.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "450px",
          minWidth: "100%",
          overflow: "hidden",
        }}
        className="flex items-center justify-center"
      >
        <div className="bg-black text-white w-full h-full text-center pt-48 bg-opacity-60">
          <h1 className="text-3xl font-semibold">
            Sell Faster. Save Thousands.
          </h1>
          <Link href="/register-seller">
            <button className="bg-primary py-2 px-8 mt-4 rounded-lg border border-primary hover:bg-transparent">
              Register Your Agency
            </button>
          </Link>
        </div>
      </div>
      <div className="pb-6">
        <HowWorks></HowWorks>
      </div>
    </div>
  );
};

export default SellPage;

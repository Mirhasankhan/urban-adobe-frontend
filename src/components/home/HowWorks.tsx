import { CiHome } from "react-icons/ci";
import { FiKey } from "react-icons/fi";
import { FaMagento } from "react-icons/fa";

const HowWorks = () => {
    return (
        <div>
            <div className="text-center py-12">
                <h1 className="font-medium pb-3 text-xl">How It Works</h1>
                <p className="text-gray-500">A great plateform to buy, sell and rent your properties without any agent or <br /> commisions.</p>
            </div>
            <div className="px-4 md:px-24 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                    <div className="bg-green-400 bg-opacity-10 p-6 rounded-lg">
                        <CiHome className="text-3xl text-green-500 font-bold"></CiHome>
                    </div>
                    <h1 className="font-medium py-4">Evaluate Property</h1>
                    <p className="text-gray-500">If the distribution of letters and words is random, the reader will not be distracted from making.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-green-400 bg-opacity-10 p-6 rounded-lg">
                        <FaMagento className="text-3xl text-green-500 font-bold"></FaMagento>
                    </div>
                    <h1 className="font-medium py-4">Meeting with Agent</h1>
                    <p className="text-gray-500">If the distribution of letters and words is random, the reader will not be distracted from making.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="bg-green-400 bg-opacity-10 p-6 rounded-lg">
                        <FiKey className="text-3xl text-green-500 font-bold"></FiKey>
                    </div>
                    <h1 className="font-medium py-4">Close the Deal</h1>
                    <p className="text-gray-500">If the distribution of letters and words is random, the reader will not be distracted from making.</p>
                </div>

            </div>
        </div>
    );
};

export default HowWorks;
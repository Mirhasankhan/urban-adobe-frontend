import Image from "next/image";
import list1 from '../../assets/list1.jpg'
import list2 from '../../assets/list2.jpg'
import list3 from '../../assets/list3.jpg'
import list4 from '../../assets/list4.jpg'
import Link from "next/link";


const Categories = () => {
    return (
        <div className="px-4 md:px-24">
            <div className="text-center py-12">
                <h1 className="font-medium pb-3 text-xl">Listing Categories</h1>
                <p className="text-gray-500">A great plateform to buy, sell and rent your properties without any agent or <br /> commisions.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <Link href="/" className="border hover:shadow-xl hover:cursor-pointer rounded-lg">
                    <Image className="rounded-t-lg" src={list1} width={400} height={300} alt=""></Image>
                    <div className="p-3">
                        <h1 className="text-xl font-medium">Family</h1>
                        <p className="text-gray-500">48 listings</p>
                    </div>
                </Link>
                <div className="border hover:shadow-xl hover:cursor-pointer rounded-lg">
                    <Image className="rounded-t-lg" src={list2} width={400} height={300} alt=""></Image>
                    <div className="p-3">
                        <h1 className="text-xl font-medium">Shop</h1>
                        <p className="text-gray-500">90 listings</p>
                    </div>
                </div>
                <div className="border hover:shadow-xl hover:cursor-pointer rounded-lg">
                    <Image className="rounded-t-lg" src={list3} width={400} height={300} alt=""></Image>
                    <div className="p-3">
                        <h1 className="text-xl font-medium">Bachelor</h1>
                        <p className="text-gray-500">150 listings</p>
                    </div>
                </div>
                <div className="border hover:shadow-xl hover:cursor-pointer rounded-lg">
                    <Image className="rounded-t-lg" src={list4} width={400} height={300} alt=""></Image>
                    <div className="p-3">
                        <h1 className="text-xl font-medium">Office</h1>
                        <p className="text-gray-500">25 listings</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
"use client"
import { useAllBuysQuery } from '@/redux/features/buyProperty/buy.property.api';
import { TListing } from '@/types/common';
import Image from 'next/image';
import pr from '../../../../../assets/pr.png'
import { JWTDecode } from '@/utils/jwtDecode';

const MyBuys = () => {
    const user = JWTDecode()
    const email = user?.email
    const { data: buys } = useAllBuysQuery(email)

    return (
        <div className='p-6 h-screen'>
            <h1 className='font-medium text-xl'>Manage Your Properties</h1>
            <p className='text-gray-500 pb-6'>We are glad to see you again!</p>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className='bg-black text-white'>
                        <tr>
                            <th>Property Details</th>
                            <th>Seller</th>
                            <th>Size</th>
                            <th>Bedroom</th>
                            <th>Bathroom</th>
                            <th>Kitchen</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buys?.map((listing: TListing) => <tr key={listing._id} className='bg-white'>
                            <td>
                                <div className='flex gap-1 items-center'>
                                    <Image className='rounded-lg' src={listing?.image?.imageUrl || pr} height={60} width={60} alt=''></Image>
                                    <div>
                                        <h1 className='font-semibold'>{listing.title}</h1>
                                        <h1>{listing.address}</h1>
                                        <h1>${listing.price}</h1>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div>
                                   <h1 className='font-semibold'> {listing.sellerName}</h1>
                                   <h1> {listing.sellerEmail}</h1>
                                </div>
                            </td>
                            <td>{listing.size} sqf</td>
                            <td>{listing.bedroom}</td>
                            <td>{listing.bathroom}</td>
                            <td>{listing.kitchen}</td>
                            <td>{listing.status}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBuys;
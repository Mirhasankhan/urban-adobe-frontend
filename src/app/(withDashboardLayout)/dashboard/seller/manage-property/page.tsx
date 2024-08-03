"use client"
import { useListingsQuery } from '@/redux/features/listing/listing.api';
import { TListing } from '@/types/common';
import { JWTDecode } from '@/utils/jwtDecode';
import moment from 'moment';
import Image from 'next/image';
import { HiDotsVertical } from "react-icons/hi";
import pr from '../../../../../assets/list1.jpg'
import { useAllBuysQuery } from '@/redux/features/buyProperty/buy.property.api';

const ManageProperty = () => {
    const user = JWTDecode()
    const email = user?.email
    const { data: listings } = useListingsQuery(email)
    const { data: buys } = useAllBuysQuery("")
    return (
        <div className='p-6 h-screen'>
            <h1 className='font-medium text-xl'>Manage Your Properties</h1>
            <p className='text-gray-500 pb-6'>We are glad to see you again!</p>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className='bg-black text-white'>
                        <tr>
                            <th>Property</th>
                            <th>Publish Date</th>
                            <th>Property Type</th>
                            <th>Status</th>
                            <th>For</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listings?.map((listing: TListing) => <tr key={listing._id} className='bg-white'>
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
                            <td> <h1>
                                {moment(listing.year).format("MMMM Do YYYY")}
                            </h1></td>
                            <td className='text-green-500'>
                                <h1>{listing.type}</h1>
                            </td>
                            <td className='text-red-500'>
                                {
                                    buys?.some((buy: { refId: string }) => buy.refId == listing._id) ? "pending" : "unsold"
                                }
                            </td>
                            <td>{listing.for}</td>
                            <td>
                                <HiDotsVertical className='hover:text-blue-500 cursor-pointer'></HiDotsVertical>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProperty;
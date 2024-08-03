"use client"
import Card from '@/components/shared/Card';
import { useListingsQuery } from '@/redux/features/listing/listing.api';
import { TListing } from '@/types/common';

const Listings = () => {
    const { data: listings } = useListingsQuery("")
    const { data } = useListingsQuery({ type: "" })
    console.log(data)

    return (
        <div className='px-4 md:px-24 my-12  pt-16'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
                {listings?.map((listing: TListing) => <Card key={listing._id} listing={listing}></Card>)}
            </div>

        </div>
    );
};

export default Listings;
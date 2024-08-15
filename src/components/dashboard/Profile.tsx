import Image from 'next/image';
import bgProf from '../../assets/pr-bg.png'
import prof from '../../assets/prof.png'

const Profile = () => {
    return (
        <div>
            <div
                style={{ height: "230px", width: "100%", position: "relative" }}
            >
                <Image
                    layout="fill"
                    src={bgProf}
                    alt=""
                />
            </div>
            <div className='px-12 grid grid-cols-5'>
                <div
                    style={{ height: "280px", width: "80%", position: "relative" }}
                    className='col-span-2 p-3 border border-red-500 rounded-md bg-white'
                >
                    <Image
                        layout="fill"
                        src={prof}
                        alt=""
                    />
                </div>
                <div className='col-span-3 flex justify-between'>
                    <div className='mt-20'>
                        <h1 className='text-xl font-semibold'>Danish Heiliu</h1>
                        <p className='text-gray-500'>Real State Businessman</p>
                    </div>
                    <div className='mt-12'>
                        <h1 className='text-xl font-semibold'>EMAIL</h1>
                        <p className='text-gray-500'>Real@gmail.com</p>
                        <h1 className='text-xl font-semibold'>PHONE</h1>
                        <p className='text-gray-500'>+8801678506798</p>
                    </div>
                    <div className='mt-12'>
                        <h1 className='text-xl font-semibold'>BIRTHDAY</h1>
                        <p className='text-gray-500'>14 July, 1999</p>
                        <h1 className='text-xl font-semibold'>LOCATION</h1>
                        <p className='text-gray-500'>Bangladesh</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center px-28'>
                <h1 className='text-xl font-bold pt-3'>About Me</h1>
                <p className='py-3'>The UI UX Designer helps create products with a good user experience. They are responsible for understanding what users want from their device and then designing it so they can find all of its features easily without any hassle. They also make sure everything works properly when combined in one package</p>
            </div>
        </div>
    );
};

export default Profile;
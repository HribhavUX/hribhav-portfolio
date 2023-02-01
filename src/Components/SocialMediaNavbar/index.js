import hribhav_funky_photo from '../../Assets/hribhav_funky_photo.svg';



export default function SocialMediaNavbar(){
    return (
        <div className='w-full flex justify-start h-full fixed z-10'>
            <div className='w-full flex flex-col px-20 mt-56 items-start text-white font-PoR'>
                <a className='text-[0.8rem] -rotate-90  pl-0 pr-0'>Instagram</a>
                <a className=' -rotate-90 text-[0.8rem] ml-2 mt-24'>LinkedIn</a>
                <div className='flex justify-center mt-10'>
                    <a className=' -rotate-90 text-[0.8rem] p-0 pt-8'>Twitter</a>
                    <img src={hribhav_funky_photo} className='w-7/12 p-0 -ml-4' alt='Social Media Navbar'/>
                </div>
            </div>
        </div>
    )
}
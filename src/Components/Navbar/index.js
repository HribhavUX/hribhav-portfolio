import hribhav from '../../Assets/hribhav_name.svg';


export default function Navbar() {
    return (
        <>
            <div className='flex w-full px-24 z-10 items-end justify-between bg-transparent fixed text-white pt-10'>
                <div className='flex items-center justify-center'>
                    <img src={hribhav} className='w-14'/>
                </div>
                <div className='flex items-center justify-center text-[0.8rem] font-PoR'>
                    <p className='my-0 px-6'>My Work</p>
                    <p className='my-0 px-6'>My Not Work</p>
                    <p className='my-0 px-6'>About Me</p>
                    <p className='my-0 pl-6'>Resume</p>
                </div>
            </div>
        </>
    )
}
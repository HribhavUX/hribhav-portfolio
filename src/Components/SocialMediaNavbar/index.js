export default function  SocialMediaNavbar(props){
    return (
        <div className='w-full flex justify-start h-full fixed z-40'>
            <div className='w-full flex flex-col px-20 mt-56 items-start text-white font-PoR'>
                <a className='text-[0.8rem] -rotate-90  pl-0 pr-0' style={{
                    opacity: props.opacity,
                }} href='/'>Instagram</a>
                <a className=' -rotate-90 text-[0.8rem] ml-2 mt-24' style={{
                    opacity: props.opacity,
                }} href='/'>LinkedIn</a>
                <div className='flex justify-center mt-10'>
                    <a className='-rotate-90 text-[0.8rem] p-0 pt-8' style={{
                    opacity: props.opacity,
                }} href='/'>Twitter</a>
                    <img id={props.id} style={props.style} src={props.image} className={props.classname} alt='Social Media Navbar'/>
                </div>
            </div>
        </div>
    )
}
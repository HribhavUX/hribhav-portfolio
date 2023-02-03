export default function Navbar(props) {
    return (
        <>
            <div className='flex w-full px-24 z-[50] items-end justify-between bg-transparent fixed text-white' style={{
                paddingTop: props.paddingTop,
            }}>
                <div className='flex items-center justify-center'>
                    <img src={props.name} className={props.width} alt='hribhav_signature'/>
                </div>
                <div className='flex items-center justify-center text-[0.8rem] font-PoR'>
                    <a className='my-0 px-6 cursor-pointer' href='/'>My Work</a>
                    <a className='my-0 px-6 cursor-pointer' href='/not_work'>My Not Work</a>
                    <a className='my-0 px-6 cursor-pointer' href='/about'>About Me</a>
                    <a className='my-0 pl-6 cursor-pointer' href='/resume'>Resume</a>
                </div>
            </div>
        </>
    )
}
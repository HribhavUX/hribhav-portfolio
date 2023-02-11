import music_scroll_control from '../../Assets/music_scroll_control.png'

export default function MusicAndScrollControlBar() {
    return (
        <div className='w-full flex h-full fixed mt-0 z-10'>
            <div className='w-full p-0 -mt-8 flex flex-col justify-center items-end text-white font-PoR'>
                <img className='w-[6.5rem] pr-20' src={music_scroll_control} alt='music_scroll_control'/>
                <p className='font-PoR text-sm rotate-90 pl-[6.4rem] mt-2'>Scroll Down</p>
            </div>
        </div>
    )
}
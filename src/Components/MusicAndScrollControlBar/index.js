import music_mute from '../../Assets/music_mute.png'
import music_unmute from '../../Assets/music_unmute.png'
import scroll from '../../Assets/scroll.png'
import {useEffect, useState} from "react";
import ReactPlayer from 'react-player';
import music from '../../../src/music.mp3'
export default function MusicAndScrollControlBar(props) {
    const [playing, setPlaying] = useState(true);
    const [volume, setVolume] = useState(0);
     let context;
    // window.onload = function() {
        context = new AudioContext();
        // console.log('context ', context);
    // };
    useEffect(() => {
        console.log('volume is ', volume);
    }, [volume]);

    return (
        <div className='flex h-full right-[7vw] fixed mt-0 z-40' onClick={
            () => {
                setVolume(
                    (volume === 0) ? 1 : 0
                );
            }
        }>
         <ReactPlayer
                url={'https://soundcloud.com/zainu-kunjur/sanam-re?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'}
                playing={playing}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                volume={volume}
             // loop={true}
                controls={true}
                style={{display: 'none'}}
            />
            <div className='w-full p-0 -mt-8 flex flex-col justify-center items-end text-white font-PoR'>
                <img className='pr-0 mb-2' style={
                    (volume===0)? {width: "1.5rem"}:{width: "2rem"}
                } src={volume===0?music_mute:music_unmute}/>
                <img className='w-[1.5rem] pr-0' src={scroll} alt='scroll'/>
                <p className='font-PoR text-sm rotate-90 m-0 mt-16 -mr-7'>Scroll Down</p>
            </div>
        </div>
        // <div className='z-[100]'>
        //     <ReactPlayer
        //         url='../../music.mp3'
        //         playing={playing}
        //         onPlay={() => setPlaying(true)}
        //         onPause={() => setPlaying(false)}
        //         controls
        //         style={{display: 'none'}}
        //     />
        //     <button style={{
        //         color: 'white',
        //     }} onClick={() => setPlaying(!playing)}>
        //         { playing ? 'Pause' : 'Play' }
        //     </button>
        // </div>
    )
}
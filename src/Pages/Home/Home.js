import Navbar from "../../Components/Navbar";
import animationBlob from "../../Assets/animationBlob.svg";
import AnimationBlob from "../../Components/AnimationBlob";
import SocialMediaNavbar from "../../Components/SocialMediaNavbar";
import Music_and_scroll_control_bar from "../../Components/Music_and_scroll_control_bar";
import Memboro from "../Memboro/Memboro";
import MagnidVR from "../MagnidVR/MagnidVR";
import Rozgaar from "../Rozgaar/Rozgaar";
import Sace from "../Sace/Sace";
import Who_am_I from "../Who_am_I/Who_am_I";
import {useMotionValue, useScroll} from "framer-motion";
import {useEffect, useState} from "react";
export default function Home(){
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const [windowSize, setWindowSize] = useState(0);

    useEffect(() => {
        setWindowSize(window.innerWidth);
    }, []);
    const handleMouse=(e)=>{
        x.set(e.pageX);
        y.set(e.pageY);
        console.log(x,y, "x main page,y main page")
    }
    return (
        <div className='w-full bg-[#15151A] z-10 overflow-x-clip' onMouseMove={(e)=>handleMouse(e)}>
            <div className='relative w-full flex flex-col items-center'>
                <Navbar />
                <SocialMediaNavbar/>
                <Music_and_scroll_control_bar />
                <AnimationBlob />
                <div className='relative w-full h-full'>
                    <Memboro x={x} y={y} />
                    <MagnidVR x={x} y={y} />
                    <Rozgaar x={x} y={y} />
                    <Sace x={x} y={y}/>
                    <Who_am_I />
                </div>
            </div>
        </div>
    )

}

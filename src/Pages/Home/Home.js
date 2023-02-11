import Navbar from "../../Components/Navbar";
import AnimationBlob from "../../Components/AnimationBlob";
import SocialMediaNavbar from "../../Components/SocialMediaNavbar";
import Music_and_scroll_control_bar from "../../Components/Music_and_scroll_control_bar";
import Memboro from "../Memboro/Memboro";
import MagnidVR from "../MagnidVR/MagnidVR";
import Rozgaar from "../Rozgaar/Rozgaar";
import Sace from "../Sace/Sace";
import Who_am_I from "../WhoAmI/Who_am_I";
import {useMotionValue} from "framer-motion";
import hribhav_name from "../../Assets/hribhav_name.png";
import hribhav_funky_photo from "../../Assets/hribhav_funky_photo.png";
import Pic from "../../Components/Pic";
export default function Home(){
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    // const [windowSize, setWindowSize] = useState(0);
    // useEffect(() => {
    //     setWindowSize(window.innerWidth);
    // }, []);
    const handleMouse=(e)=>{
        x.set(e.pageX);
        y.set(e.pageY);
        console.log(x,y, "x main page,y main page")
    }
    return (
        <div>
            <Pic />
            <div id='main-body' className='w-full bg-[#15151A] z-10 overflow-x-clip' onMouseMove={(e)=>handleMouse(e)}>
                <div className='relative w-full flex flex-col items-center'>
                    <Navbar name={hribhav_name} width={"w-14"} paddingTop={'3rem'} />
                    <SocialMediaNavbar id='unclicked' imageDisplay='block' display='block' image={hribhav_funky_photo}
                        style={{
                            marginLeft: '0rem',
                            display: 'block',
                            width: '30.333%',
                            cursor: 'pointer',
                        }}
                    />
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
        </div>
    )

}

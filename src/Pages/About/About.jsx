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
import WelcomeText from "../../Assets/WelcomeText.svg";
import AboutMePicture from "../../Assets/AboutMePicture.svg";
import AboutName from "../../Assets/AboutName.svg";

export default function About(){
        return (
        <div className='w-full bg-[#15151A] z-10 overflow-x-clip'>
            <div className='relative w-full flex flex-col items-center bg-[#23232D]'>

                <Navbar name = {AboutName} width={'w-46'}/>
                <SocialMediaNavbar/>
                <Music_and_scroll_control_bar />
                <div className='relative flex w-full h-screen'> 
                    <div className=" absolute top-60 left-60 text-white font-normal text-left flex flex-wrap ">
                        <span> 
                            <img src={WelcomeText} alt="WelcomeText" /> 
                        </span>
                        <p className='text-white font-normal text-left flex flex-wrap w-5/12 mt-40'>
                            I am a Bachelor in Technology student, working in Computer science and Design. I've been an inquisitive individual from the very beginning. Drawing and illustrating always attracted me and I still have some of my works from when I was 6. Design, became a passion when I was in the 10th standard and a career choice in college sophomore years. Though, started as a graphic designer, human & computer interactions intrigued me more. After several graphic identity design freelancing work, I was getting accepted for user experience design projects. I want to grow more and learn from the environment I work in. <br /> <br /> I originally started off as a Computer Science major during undergrad, but quickly realized that I was fascinated by the 'Why' behind the code I was writing. This led me to exploring the field of UX, and after a few side projects and freelance work, I fell in love with the art of problem solving. <br /> <br />
                            I like to think of myself as a full-stack product designer who can lead a project from research & design to the prototyping phase to ensure a smooth developer handoff.
                        </p>
                    </div>    

                    <span className='absolute top-80 right-40 backdrop-blur-sm bg-white/30'>
                        <img src={AboutMePicture} alt="AboutMePicture" className=""/>
                    </span>
                </div>
            </div>
        </div>  
    )

}

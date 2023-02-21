import animationBlob from "../../Assets/animationBlob.png";
import AboutMe from "../AboutMe";


export default function AnimationBlob(){

    return (
        <div className='w-full flex flex-col items-center'>
            <div className='w-9/12 -mt-[5vh] flex flex justify-center items-center'>
                <img src={animationBlob} className='w-full' alt='Animation Blob'/>
                <div className='w-full absolute h-full '>
                    {/*<iframe title='spline-3d-stuff' className='spline-comp' src='https://my.spline.design/untitledcopy-cf0fbbc37953b3ef6fa8316c5e316edc/' width='100%' height='100%'></iframe>*/}
                </div>
            </div>
            <p className='font-Ga text-[2.65rem] flex justify-center items-center text-white w-7/12 pt-20 pb-80'>
                <AboutMe />
                {/*UX designer with a vision to design sustainable solutions for the future*/}
            </p>
        </div>
    )
}
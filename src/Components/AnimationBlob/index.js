import animationBlob from "../../Assets/blob-bg.png";
import AboutMe from "../AboutMe";


export default function AnimationBlob() {

    return (
        <div className='w-full flex flex-col items-center'>
            <div className='w-9/12 ml-12 flex flex justify-center items-center'>
                <div className= "relative">
                <img src={animationBlob} className='w-full z-0' alt='Animation Blob' />
                {/* <div className='w-full absolute h-full '> */}
                    {/*<iframe title='spline-3d-stuff' className='spline-comp' src='https://my.spline.design/untitledcopy-cf0fbbc37953b3ef6fa8316c5e316edc/' width='100%' height='100%'></iframe>*/}
                {/* </div> */}

                    <iframe style={{ left: '22rem' }} className= 'w-52 absolute bottom-20 z-10' src='https://my.spline.design/untitledcopy-892aec6ddd4c393192eadbcb7c2ca04e/' frameborder='0' width='100%' height='100%'></iframe>
                </div>
                </div>
            <p className='font-Ga text-[2.65rem] flex justify-center items-center text-white w-7/12 pt-20 pb-80'>
                <AboutMe />
                {/*UX designer with a vision to design sustainable solutions for the future*/}
            </p>
        </div>
    )
}
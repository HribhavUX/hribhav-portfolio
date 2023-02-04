import MagnidVR_background1 from "../Assets/MagnidVR_background1.png";
import MagnidVR_background2 from "../Assets/MagnidVR_background2.png";
import MagnidVR_background3 from "../Assets/MagnidVR_background3.png";
import MagnidVR_background4 from "../Assets/MagnidVR_background4.png";
import Context from "../Components/MagnidVR/Context";

export default function MagnidVR(props) {
   return(
     <>
       <div className='w-full flex justify-center px-36 h-full max-h-screen'>
           <div className='absolute w-full z-0 top-0 max-h-full overflow-hidden'>
             <img src={MagnidVR_background1} className='w-full' alt='magnidVR'/>
           </div>
           <div className='w-6/12 pl-48 flex flex-col justify-center z-30 pt-[4.5rem]'>
             <div className='w-full'>
               <p className='text-white w-full font-Sgb text-[2.65rem] pt-20'>Magnid VR</p>
                 <p className='text-white w-full font-Sgr text-sm pt-0'>
                        Helps organizations plan and host events using VR technology to enhance the event experience for attendees and make it more interactive, engaging, and immersive.
                 </p>
                 <p className='text-white w-1/2 font-PoB text-base pt-10 pb-1.5'>My Role</p>
                 <p className='text-sm text-white w-1/2 font-PoR'>UX Designer | Unity Developer</p>
                 <div className='flex w-full pt-14 justify-start pr-[0rem] flex-wrap'>
                   <div className='font-PoM flex z-20 bg-[#6900BB] min-w-fit text-white text-sm px-4 mr-5 py-1 my-1 rounded-xl items-center justify-center'>
                            Virtual Reality
                   </div>
                   <div className='font-PoM flex z-20 bg-[#6900BB] min-w-fit text-white text-sm px-6 mr-5 py-1 my-1  rounded-xl items-center justify-center'>
                            Metaverse
                   </div>
                   <div className='font-PoM flex z-20 bg-[#E7018B] min-w-fit text-white text-sm px-7 py-1 my-1 rounded-xl items-center justify-center'>
                            Miro
                   </div>
                   </div>
                   <div className='flex w-full py-1 justify-start flex-wrap'>
                     <div className='font-PoM flex z-20 my-1 bg-[#6900BB] min-w-fit text-white text-sm px-5 mr-5 py-1 rounded-xl items-center justify-center'>
                            Event Curation
                     </div>
                     <div className='font-PoM flex z-20 my-1 bg-[#E7018B] min-w-fit text-white text-sm px-5 mr-5 py-1 rounded-xl items-center justify-center'>
                            Oculus
                     </div>
                     <div className='font-PoM flex z-20 my-1 bg-[#E7018B] min-w-fit text-white text-sm px-5 mr-5 py-1 rounded-xl items-center justify-center'>
                            Figma
                     </div>
                     <div className='font-PoM flex z-20 my-1 bg-[#E7018B] min-w-fit text-white text-sm px-7 py-1 rounded-xl items-center justify-center'>
                            Unity
                     </div>
                  </div>
              </div>
            </div>
            <div className='w-[40%] pl-0 flex flex-col justify-center items-center'>
                <div className='absolute w-[26%] flex justify-center items-center mt-28 z-10'>
                    <img src={MagnidVR_background2} className='w-[100%]' alt='magnid background 2'/>
                </div>
                <div className='absolute mr-[20vw] w-[20%] -mt-[10vw] flex justify-center items-center z-0'>
                    <img src={MagnidVR_background3} className='w-[100%]' alt='magnid background 3'/>
                </div>
                <div className='absolute ml-[12.5vw] w-[16%] mt-[8vw]  flex flex-col justify-center items-center z-10'>
                    <img src={MagnidVR_background4} className='w-[100%]' alt='magnid background 4'/>
                </div>
            </div>
        </div>
        <Context />
       </>
    )
}

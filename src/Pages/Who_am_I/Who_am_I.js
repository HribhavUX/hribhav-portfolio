import profile_circle from '../../Assets/profile_circle.png'
import {useEffect} from "react";
import styles from './who.module.css';

export default function Who_am_I() {
    useEffect(() => {
        function isInViewport(item) {

            const bounding = item.getBoundingClientRect(),
                myElementHeight = item.offsetHeight,
                myElementWidth = item.offsetWidth;

            if(bounding.top >= -1*myElementHeight
                && bounding.left >= -1*myElementWidth
                && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) + myElementWidth
                && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + myElementHeight) {
                return true;

            } else {
                return false;
            }

        }
        const scrollele1 = document.querySelector(`#who_am_i`);
        document.addEventListener("scroll", function(){
			if(isInViewport(scrollele1)) {
				document.querySelector(`#box1`).classList.add(styles.fadeInTop);
				document.querySelector(`#box2`).classList.add(styles.fadeInDown);
				document.querySelector(`#box3`).classList.add(styles.fadeInTop);
				document.querySelector(`#box4`).classList.add(styles.fadeInDown);
				document.querySelector(`#box5`).classList.add(styles.fadeInTop);
				document.querySelector(`#box6`).classList.add(styles.fadeInDown);

			}else{
				document.querySelector(`#box1`).classList.remove(styles.fadeInTop);
				document.querySelector(`#box2`).classList.remove(styles.fadeInDown);
				document.querySelector(`#box3`).classList.remove(styles.fadeInTop);
				document.querySelector(`#box4`).classList.remove(styles.fadeInDown);
				document.querySelector(`#box5`).classList.remove(styles.fadeInTop);
				document.querySelector(`#box6`).classList.remove(styles.fadeInDown);
            }
        });
    } , []);
    return (
        <div className='flex w-full justify-center bg-[#15151A] py-32 mt-44 overflow-y-clip'>
            <div id='who_am_i' className='flex w-[74%]'>
                <div className='flex pl-20 mr-5 w-[30rem] flex-col justify-center'>
                    <p className='text-[2.5rem] pb-10 font-PoB text-white'>
                        Who am I?
                    </p>
                    <p className='font-PoL text-white pr-2'>
                        As a UX Designer with a strong background in development and growth marketing, I have a proven track record of successfully bringing the agile nature of a startup to a robust enterprise system. In my current role as design team lead for a team of six, I am responsible for coordinating with cross-functional teams, establishing a strong visual identity, curating a comprehensive design system, and designing both responsive websites and IOS applications. I am confident in my ability to drive growth and success through my expertise in UX design and development.
                    </p>
                </div>
                <div className='w-[45%] px-1 flex justify-evenly pt-20'>
                    <div className='grid grid-cols-2 grid-rows-3'>

                        <div id='box1' className='p-3 pr-1 rounded-xl mr-5 mb-5 bg-[#23232D] flex flex-col'>
                            <div className='w-full flex justify-between pb-3'>
                                <div className='w-3/12'>
                                    <img src={profile_circle} alt='profile_circle' className='w-full' />
                                </div>
                                <div className='w-[70%] flex flex-col justify-center'>
                                    <p className='font-PoB text-white text-[0.6rem]'>
                                        Your Name
                                    </p>
                                    <p className='font-PoL text-white text-[0.6rem] mt-1'>
                                        Somewhere you work
                                    </p>
                                </div>
                            </div>
                            <div className='text-[0.65rem] font-PoB text-white text-[0.75rem]'>
                                “Your testimonial. Something controversial works too XD.”
                            </div>
                        </div>

                        <div id='box2' className='p-3 pr-1 rounded-xl mr-5 mb-5 bg-[#23232D] flex flex-col'>
                            <div className='w-full flex justify-between pb-3'>
                                <div className='w-3/12'>
                                    <img src={profile_circle} alt='profile_circle' className='w-full' />
                                </div>
                                <div className='w-[70%] flex flex-col justify-center'>
                                    <p className='font-PoB text-white text-[0.6rem]'>
                                        Your Name
                                    </p>
                                    <p className='font-PoL text-white text-[0.6rem] mt-1'>
                                        Somewhere you work
                                    </p>
                                </div>
                            </div>
                            <div className='text-[0.65rem] font-PoB text-white text-[0.75rem]'>
                                “Your testimonial. Something controversial works too XD.”
                            </div>
                        </div>

                        <div id='box3' className='p-3 pr-1 rounded-xl mr-5 mb-5 bg-[#23232D] flex flex-col'>
                            <div className='w-full flex justify-between pb-3'>
                                <div className='w-3/12'>
                                    <img src={profile_circle} alt='profile_circle' className='w-full' />
                                </div>
                                <div className='w-[70%] flex flex-col justify-center'>
                                    <p className='font-PoB text-white text-[0.6rem]'>
                                        Your Name
                                    </p>
                                    <p className='font-PoL text-white text-[0.6rem] mt-1'>
                                        Somewhere you work
                                    </p>
                                </div>
                            </div>
                            <div className='text-[0.65rem] font-PoB text-white text-[0.75rem]'>
                                “Your testimonial. Something controversial works too XD.”
                            </div>
                        </div>

                        <div id='box4' className='p-3 pr-1 rounded-xl mr-5 mb-5 bg-[#23232D] flex flex-col'>
                            <div className='w-full flex justify-between pb-3'>
                                <div className='w-3/12'>
                                    <img src={profile_circle} alt='profile_circle' className='w-full' />
                                </div>
                                <div className='w-[70%] flex flex-col justify-center'>
                                    <p className='font-PoB text-white text-[0.6rem]'>
                                        Your Name
                                    </p>
                                    <p className='font-PoL text-white text-[0.6rem] mt-1'>
                                        Somewhere you work
                                    </p>
                                </div>
                            </div>
                            <div className='text-[0.65rem] font-PoB text-white text-[0.75rem]'>
                                “Your testimonial. Something controversial works too XD.”
                            </div>
                        </div>

                        <div id='box5' className='p-3 pr-1 rounded-xl mr-5 mb-5 bg-[#23232D] flex flex-col'>
                            <div className='w-full flex justify-between pb-3'>
                                <div className='w-3/12'>
                                    <img src={profile_circle} alt='profile_circle' className='w-full' />
                                </div>
                                <div className='w-[70%] flex flex-col justify-center'>
                                    <p className='font-PoB text-white text-[0.6rem]'>
                                        Your Name
                                    </p>
                                    <p className='font-PoL text-white text-[0.6rem] mt-1'>
                                        Somewhere you work
                                    </p>
                                </div>
                            </div>
                            <div className='text-[0.65rem] font-PoB text-white text-[0.75rem]'>
                                “Your testimonial. Something controversial works too XD.”
                            </div>
                        </div>

                        <div id='box6' className='p-3 pr-1 rounded-xl mr-5 mb-5 bg-[#23232D] flex flex-col'>
                            <div className='w-full flex justify-between pb-3'>
                                <div className='w-3/12'>
                                    <img src={profile_circle} alt='profile_circle' className='w-full' />
                                </div>
                                <div className='w-[70%] flex flex-col justify-center'>
                                    <p className='font-PoB text-white text-[0.6rem]'>
                                        Your Name
                                    </p>
                                    <p className='font-PoL text-white text-[0.6rem] mt-1'>
                                        Somewhere you work
                                    </p>
                                </div>
                            </div>
                            <div className='text-[0.65rem] font-PoB text-white text-[0.75rem]'>
                                “Your testimonial. Something controversial works too XD.”
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
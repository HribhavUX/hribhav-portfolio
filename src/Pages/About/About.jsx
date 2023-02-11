import Navbar from "../../Components/Navbar";
import SocialMediaNavbar from "../../Components/SocialMediaNavbar";
import MusicAndScrollControlBar from "../../Components/MusicAndScrollControlBar";
import WelcomeText from "../../Assets/WelcomeText.png";
import Pic from "../..";
import AboutName from "../../Assets/AboutName.png";
import hribhav_funky_photo from "../../Assets/hribhav_funky_photo.png";

export default function About() {
  return (
    <div className="w-full">
      <Pic />
      {/* <div className="w-full z-20 overflow-x-clip">
        <div className=" w-full flex flex-col items-center bg-[#23232D] pb-20">
          <Navbar name={AboutName} width={"w-28"} paddingTop={"1.5rem"} />
          <SocialMediaNavbar
            id="unclicked"
            imageDisplay="block"
            display="block"
            image={hribhav_funky_photo}
            style={{
              marginLeft: "0rem",
              display: "block",
              width: "28%",
              paddingLeft: "1rem",
              cursor: "pointer",
            }}
          />
          <MusicAndScrollControlBar />
          <div className="flex w-full h-full justify-center pt-28 pl-52">
            <div className="w-[70%] text-white font-normal text-left flex flex-col flex-wrap ">
              <div className="w-4/12">
                <img src={WelcomeText} alt="WelcomeText" className="w-60" />
              </div>
              <p className="text-white font-light text-sm text-left flex flex-wrap w-[60%] mt-10">
                I am a Bachelor in Technology student, working in Computer
                science and Design. I've been an inquisitive individual from the
                very beginning. Drawing and illustrating always attracted me and
                I still have some of my works from when I was 6. Design, became
                a passion when I was in the 10th standard and a career choice in
                college sophomore years. Though, started as a graphic designer,
                human & computer interactions intrigued me more. After several
                graphic identity design freelancing work, I was getting accepted
                for user experience design projects. I want to grow more and
                learn from the environment I work in. <br /> <br /> I originally
                started off as a Computer Science major during undergrad, but
                quickly realized that I was fascinated by the 'Why' behind the
                code I was writing. This led me to exploring the field of UX,
                and after a few side projects and freelance work, I fell in love
                with the art of problem solving. <br /> <br />I like to think of
                myself as a full-stack product designer who can lead a project
                from research & design to the prototyping phase to ensure a
                smooth developer handoff.
              </p>
            </div>

            <span className="w-[50%] mt-32 mr-20 pr-20">
              <img src={Pic} alt="AboutMePicture" className="w-full" />
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
}

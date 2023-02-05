import hribhav_name from "../Assets/hribhav_name.png";
import hribhav_funky_photo from "../Assets/hribhav_funky_photo.png";
import Navbar from "../Components/Navbar";
import SocialMediaNavbar from "../Components/SocialMediaNavbar";

export default function NotWork() {
  return (
    <div className="w-full min-h-screen bg-[#15151A]">
      <Navbar name={hribhav_name} width={"w-14"} paddingTop={'3rem'} />
      <SocialMediaNavbar id='unclicked' imageDisplay='block' display='block' image={hribhav_funky_photo}
          style={{
              marginLeft: '0rem',
              display: 'block',
              width: '30.333%',
              cursor: 'pointer',
          }}
      />
      <div className="w-full px-36 pl-52 py-24">
        <div className="w-full min-h-[150vh] flex justify-between">
          <div className="w-[30%] flex flex-col justify-between">
            <div className="w-full h-[48%] bg-[#292932] rounded-md"></div>
            <div className="w-full h-[48%] flex flex-col justify-between">
              <div className="w-full h-[48%] bg-[#292932] rounded-md"></div>
              <div className="w-full h-[48%] bg-[#292932] rounded-md"></div>
            </div>
          </div>
          <div className="w-[30%] flex flex-col justify-between">
            <div className="w-full h-[48%] flex flex-col justify-between">
              <div className="w-full h-[48%] bg-[#292932] rounded-md"></div>
              <div className="w-full h-[48%] bg-[#292932] rounded-md"></div>
            </div>
            <div className="w-full h-[48%] bg-[#292932] rounded-md"></div>
          </div>
          <div className="w-[30%] flex flex-col justify-between">
            <div className="w-full h-[31%] bg-[#292932] rounded-md"></div>
            <div className="w-full h-[31%] bg-[#292932] rounded-md"></div>
            <div className="w-full h-[31%] bg-[#292932] rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

import hribhav_name from "../../Assets/hribhav_name.png";
import hribhav_funky_photo from "../../Assets/hribhav_funky_photo.png";
import Navbar from "../../Components/Navbar";
import SocialMediaNavbar from "../../Components/SocialMediaNavbar";
import sanityClient from "../../sanity-client";
import {useEffect, useState} from "react";

export default function NotWork() {
  const [data, setData] = useState(null)

  useEffect(() => {
    sanityClient.fetch(`*[_type == "blog"] {
      images[] {
        asset -> {
          url
        }
      },
      link,
      cards[]
    }`)
      .then(data => {
        console.log(data)
        setData(data[0])
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

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
      {data && <div className="w-full px-36 pl-52 py-24 text-white">
          <div className="w-full min-h-[150vh] flex justify-between">
            <div className="w-[30%] flex flex-col justify-between">
              <a href={data.link} className="w-full h-[48%] bg-[#292932] rounded-md">
                <h2>{data.cards[0].heading}</h2>
                <p>{data.cards[0].content}</p>
              </a>
              <div className="w-full h-[48%] flex flex-col justify-between">
                <div className="w-full h-[48%] bg-[#292932] rounded-md">
                  <img src={data.images[0].asset.url} alt="" />
                </div>
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
        </div>}
    </div>
  )
}

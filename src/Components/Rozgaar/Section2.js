import arrowleft from "../../Assets/arrow-left.png";
import arrowright from "../../Assets/arrow-right.png";
import arrowdown from "../../Assets/arrow-down.png";
import comp from "../../Assets/Rozgaar/comp.png";
import compa from "../../Assets/Rozgaar/compa.png";
import intro from "../../Assets/Rozgaar/intro.png";
import profile from "../../Assets/Rozgaar/profile.png";
import av from "../../Assets/Rozgaar/av.png";
import multil from "../../Assets/Rozgaar/multil.png";
import wire2 from "../../Assets/Rozgaar/wire2.png";
import wire3 from "../../Assets/Rozgaar/wire3.png";

export default function Section2() {
  return (
    <div className="font-PoR">
      <div className="px-36 my-24">
        <div className="w-full flex justify-between items-center">
          <span className="w-[20%] border-2 px-4 py-2 rounded-md shadow-md">Qualitative & Quantitive Research</span>
          <img className="w-8" src={arrowright} alt="arrowright"/>
          <span className="w-[20%] border-2 px-4 py-2 rounded-md shadow-md">Persona Mapping</span>
          <img className="w-8" src={arrowright} alt="arrowright"/>
          <span className="w-[20%] border-2 px-4 py-2 rounded-md shadow-md">How Might We</span>
          <img className="w-8" src={arrowright} alt="arrowright"/>
          <span className="w-[20%] border-2 px-4 py-2 rounded-md shadow-md">Competitor Analysis</span>
        </div>
        <div className="my-12 w-full flex justify-between items-center">
          <h2 className="text-2xl font-bold">Design Process</h2>
          <img src={arrowdown} alt="arrowdown"/>
        </div>
        <div className="w-full flex justify-between items-center">
          <span className="w-[20%] border-2 px-4 py-2 rounded-md shadow-md">User Feedback</span>
          <img className="w-8" src={arrowleft} alt="arrowleft"/>
          <span className="w-[20%] border-2 px-4 py-2 rounded-md shadow-md">High Fidelity Prototype</span>
          <img className="w-8" src={arrowleft} alt="arrowleft"/>
          <span className="w-[20%] border-2 px-4 py-2 rounded-md shadow-md">Storyboarding</span>
          <img className="w-8" src={arrowleft} alt="arrowleft"/>
          <span className="w-[20%] border-2 px-4 py-2 rounded-md shadow-md">Signature Moments</span>
        </div>
      </div>
      <div className="flex my-36 justify-evenly items-center">
        <p className="text-xl max-w-[30%]">How are our competitors solving these problems? <b>Or are they?</b></p>
        <img className="h-[50vh]" src={comp} alt="decorative"/>
      </div>
      <div className="px-36 my-24">
        <h2 className="font-Sgs text-2xl">Competitor Analysis</h2>
        <img className="my-16 mx-auto w-3/4" src={compa} alt="competitor analysis"/>
      </div>
      <div className="flex my-36 justify-evenly items-center">
        <p className="text-xl max-w-[30%]">After gathering all the elements, we designed a product. <b> Introducing Rozgaar!</b></p>
        <img className="h-[50vh]" src={intro} alt="decorative"/>
      </div>
      <div className="flex my-36 justify-center items-center">
        <div className="max-w-[30%]">
          <h2 className="font-bold text-2xl">Easily sharable profile</h2>
          <p className="text-xl my-2">Auto-generated WhatsApp and Facebook story templates to share them easily.</p>
          <p className="text-xl my-2">This feature can be used by job seekers to publicize their work in their network.</p>
        </div>
        <img className="h-[50vh]" src={profile} alt="decorative"/>
      </div>
      <div className="flex my-36 justify-center items-center">
        <img className="w-1/2" src={av} alt="decorative"/>
        <div className="max-w-[30%]">
          <h2 className="font-bold text-2xl">Audio and Video Entry profile</h2>
          <p className="text-xl my-2">Record your audio or video with your applications to communicate better and be a cut above the rest.</p>
        </div>
      </div>
      <div className="flex my-36 justify-center items-center">
        <div className="max-w-[30%]">
          <h2 className="font-bold text-2xl">Multi-lingual Platform</h2>
          <p className="text-xl my-2">Not knowing a language shouldn't be a barrier between you and the job you deserve.</p>
        </div>
        <img className="w-1/2" src={multil} alt="decorative"/>
      </div>
      <div className="flex my-36 justify-center items-center">
        <img className="w-1/2" src={av} alt="decorative"/>
        <div className="max-w-[30%]">
          <h2 className="font-bold text-2xl">Graphic Intensive UI</h2>
          <p className="text-xl my-2">Graphical representation aids in decreasing the cognitive load on the user, resultng in efficient decision making.</p>
        </div>
      </div>
      <div className="px-36 my-24">
        <h2 className="font-Sgs text-2xl">Wireframes</h2>
        <img className="my-16 mx-auto w-3/4" src={wire2} alt="wireframes"/>
        <img className="my-16 mx-auto w-3/4" src={wire3} alt="wireframes"/>
      </div>
    </div>
  )
}

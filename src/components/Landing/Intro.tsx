import { FaApple } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";

export default function Intro() {
  return (
    <div className="overflow-hidden bg-transparent py-24 sm:py-32 relative">
      <img className="absolute top-0 left-1/4" src="./img/intro-bg.png"></img>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-xl font-bold tracking-wide text-white sm:text-2xl">Unlock the Future of Networking, Events, and NFT Ticketing with Winee3!</p>
              <p className="mt-6 text-lg leading-8 text-[#867D8B] max-w-sm">
                Register for early access and be part of the future today!
              </p>
              <div className="flex flex-col sm:flex-row mt-12 gap-5">
                <input className="border-[#403D42] border bg-transparent py-5 px-5 w-full sm:w-40 rounded-md" placeholder="Referral Code"></input>
                <input className="border-[#403D42] border bg-transparent py-5 px-5 w-full sm:w-60 rounded-md" placeholder="E-Mail"></input>
              </div>
              <button className="bg-[#FFA81F] text-[#381840] rounded-md py-4 font-semibold px-12 mt-12">Next</button>
              <div className="flex flex-row gap-7 mt-16">
                <div className="flex flex-row gap-3 justify-center items-center">
                    <FaApple className="w-5 h-5 text-white"/>
                    <div>
                        <p className="text-sm text-[#867D8B]">Download</p>
                        <p className="text-lg text-white">App Store</p>
                    </div>
                </div>
                <div className="flex flex-row gap-3 justify-center items-center">
                    <FaGooglePlay className="w-5 h-5 text-white"/>
                    <div>
                        <p className="text-sm text-[#867D8B]">Download</p>
                        <p className="text-lg text-white">App Store</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            <img src="./img/intro-frame-1.png" className=""></img>
            <img src="./img/intro-frame-2.png" className="mt-10"></img>
            <img src="./img/intro-frame-3.png"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

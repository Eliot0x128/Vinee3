import { FaApple } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";

export default function Explorer() {
  return (
    <div className="w-screen bg-white">
        <div className="overflow-hidden bg-transparent py-24 sm:py-32 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
            <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                    <p className="mt-2 text-[#451D50] max-w-sm text-base font-medium leading-normal">Swipe to your next success</p>
                    <p className="mt-6 text-2xl tracking-wide text-[#381840] font-extrabold sm:text-3xl max-w-sm">Explore Winee3 and Elevate Your Career</p>
                    <p className="mt-6 text-[#451D50] max-w-sm text-base font-medium leading-normal">
                        Discover professional networking, job opportunities, and more with Winee3.
                    </p>
                    <div className="bg-[#E5DDE3] border border-[#EEECEF] max-w-sm p-6 mt-10 rounded-md">
                        <p className="text-[#451D50] text-base font-bold leading-normal">Network with Ease</p>
                        <p className="mt-3 max-w-[270px] text-[#4B3052] text-base italic font-light leading-normal">Connect effortlessly and expand your network.</p>
                    </div>
                    <div className="bg-transparent max-w-sm p-6 rounded-md">
                        <p className="text-[#451D50] text-base font-bold leading-normal">Attend to Events</p>
                        <p className="mt-3 max-w-[270px] text-[#4B3052] text-base italic font-light leading-normal">Discover and attend exclusive events with NFT tickets.</p>
                    </div>
                    <div className="bg-transparent max-w-sm p-6 rounded-md">
                        <p className="text-[#451D50] text-base font-bold leading-normal">Earnings & Rewards</p>
                        <p className="mt-3 max-w-[270px] text-[#4B3052] text-base italic font-light leading-normal">Engage, participate, and earn rewards.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-5 items-center relative justify-center">
                <img src="./img/explorer-3.png" className="h-[305px] sm:h-[563px] w-auto"></img>
                <img src="./img/explorer-2.png" className="absolute h-[305px] sm:h-[563px] left-1/3 sm:left-1/4 top-0"></img>
                <img src="./img/explorer-1.png" className="h-[305px] sm:h-[563px] mt-20"></img>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

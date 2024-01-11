export default function Solution() {
    return (
      <div className="w-screen relative bg-[#F5F3F5] p-12 sm:p-24">
        <div className="relative max-w-7xl flex flex-col sm:flex-row mx-auto sm:gap-32">
            <div className="flex flex-col">
                <p className="text-[#381840] text-2xl font-bold max-w-[150px]">Innovative Solution</p>
                <p className="mt-2 text-[#451D50] font-medium leading-normal max-w-[200px]">Our unique Super-App caters to the web3 community needs</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:mt-0 mt-10 sm:gap-5">
                <div className="flex flex-col gap-1">
                    <div className="bg-[#ECE8EC] w-16 h-16 rounded-full flex items-center justify-center"><img src="./img/solution-frame-1.png" className="p-2"></img></div>
                    <p className="mt-5 text-[#381840] text-lg font-bold">AI-Powered Networking</p>
                    <p className="text-[#381840]">Web3 networking with advanced AI matchmaking.</p>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="bg-[#ECE8EC] w-16 h-16 rounded-full flex items-center justify-center"><img src="./img/solution-frame-2.png" className="p-2"></img></div>
                    <p className="mt-5 text-[#381840] text-lg font-bold">Discover Events</p>
                    <p className="text-[#381840]">Blockchain-fueled event discovery.</p>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="bg-[#ECE8EC] w-16 h-16 rounded-full flex items-center justify-center"><img src="./img/solution-frame-3.png" className="p-2"></img></div>
                    <p className="mt-5 text-[#381840] text-lg font-bold">Customize Your Profile</p>
                    <p className="text-[#381840]">Tailor your profile with Winee ID.</p>
                </div>
                <div className="flex flex-col gap-1 sm:mt-5">
                    <div className="bg-[#ECE8EC] w-16 h-16 rounded-full flex items-center justify-center"><img src="./img/solution-frame-4.png" className="p-2"></img></div>
                    <p className="mt-5 text-[#381840] text-lg font-bold">Unlock NFT Benefits</p>
                    <p className="text-[#381840]">NFTs for event tickets and profiles.</p>
                </div>
                <div className="flex flex-col gap-1 sm:mt-5">
                    <div className="bg-[#ECE8EC] w-16 h-16 rounded-full flex items-center justify-center"><img src="./img/solution-frame-5.png" className="p-2"></img></div>
                    <p className="mt-5 text-[#381840] text-lg font-bold">Control Your Privacy</p>
                    <p className="text-[#381840]">Enhanced security to manage visibility.</p>
                </div>
                <div className="flex flex-col gap-1 sm:mt-5">
                    <div className="bg-[#ECE8EC] w-16 h-16 rounded-full flex items-center justify-center"><img src="./img/solution-frame-6.png" className="p-2"></img></div>
                    <p className="mt-5 text-[#381840] text-lg font-bold">Earn and Compete</p>
                    <p className="text-[#381840]">Engage with leaderboards and dynamic earnings.</p>
                </div>
            </div>
        </div>
      </div>
    )
}

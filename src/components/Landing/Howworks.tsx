export default function Howworks() {
    return (
      <div className="w-screen relative">
        <img src="./img/howworks-bg.png" className="absolute top-0 left-0 w-screen"></img>
        <div className="relative max-w-7xl flex flex-col sm:flex-row mx-auto">
            <img src="./img/howworks-image.png" className="mt-[-100px]"></img>
            <div className="justify-center flex flex-col gap-3 mx-8">
                <p className="text-white text-2xl font-bold">How Winee3 Works?</p>
                <p className="text-[#867D8B]">Experience the power of Web3 networking with Winee3. Join a global community, effortlessly connect, turn virtual networking into real-life meetups, access top Web3 opportunities, discover events with NFT tickets, earn rewards, and tailor your profile for a personalized experience.</p>
            </div>
        </div>
      </div>
    )
}

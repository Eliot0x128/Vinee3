export default function Referral() {
    return (
      <div className="w-screen relative bg-[#381840] py-16 px-4 text-left">
        <img className="absolute bottom-0 right-1/4" src="./img/referral-foreground.png"></img>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col gap-3">
                <p className="text-white text-2xl sm:text-3xl font-semibold">Winee3 Referral Program</p>
                <p className="mt-4 max-w-sm text-[#867D8B]">Unlock Exciting Rewards with the Winee3 Referral Program</p>
            </div>
            <button className="sm:mt-0 mt-10 bg-[#FFA81F] text-[#381840] rounded-md py-2 px-10 font-medium">Join now</button>
        </div>
      </div>
    )
}

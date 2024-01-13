export default function Tokenomics() {
    return (
      <div className="w-screen relative">
        <div className="relative max-w-7xl flex flex-col sm:flex-row mx-auto justify-between">
            <div className="justify-center flex flex-col gap-3 mx-8">
                <p className="text-white text-2xl font-bold sm:mt-0 mt-20">Tokenomics</p>
                <p className="text-[#867D8B] max-w-sm">The comprehensive distribution of Winee3 Token is meticulously illustrated in the chart that follows, offering a clear and detailed breakdown of how tokens are allocated and circulate within our platform. This commitment to transparency ensures that all users can fully understand the token journey and its significance in our ecosystem.</p>
                <button className="bg-[#FFA81F] text-[#381840] rounded-md py-3 px-3 font-medium w-40 mt-6">Read more</button>
            </div>
            <div className="mt-20 flex justify-center items-center bg-[#381840] sm:mt-[-80px] p-8 rounded-xl shadow-xl">
              <img src="./img/Tokenomics-frame.png" className=""></img>
            </div>
        </div>
      </div>
    )
}

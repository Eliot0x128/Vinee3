import { FaTelegramPlane, FaDiscord, FaFacebookF, FaRedditAlien } from "react-icons/fa";
import { FaXTwitter, FaInstagram  } from "react-icons/fa6";

export default function JoinCommunity() {
    return (
      <div className="px-4 bg-[#F5F3F5] w-screen">
        <div className="max-w-7xl mx-auto py-20 sm:py-32">
            <p className="text-2xl sm:text-3xl text-[#381840] font-bold">Join our community</p>
            <p className="text-[#867D8B] mt-2 max-w-sm">Learn more about Winee3, chat with us and have your say in the future of the Winee3 ecosystem.</p>
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 mt-12 rounded-xl relative text-white">
                <div className="absolute top-0 left-0 w-full h-full bg-[#381840B8] rounded-xl"></div>
                <img src="./img/community-frame.png" className="lg:ml-0 ml-10 relative lg:absolute bottom-0 right-10"></img>
                <div className="flex flex-row p-8 relative gap-10 items-center">
                    <FaTelegramPlane className="text-white w-12 h-12"/>
                    <div className="flex flex-col">
                        <p className="sm:text-3xl text-2xl">News & Updates</p>
                        <p className="mt-2">Follow our announcement channel on Telegram</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 mt-12 gap-10">
                <div className="bg-white rounded-xl flex flex-row gap-10 p-3">
                    <div className="bg-[#4A4074] rounded-full text-white p-2 flex justify-center items-center">
                        <FaTelegramPlane className="w-12 h-12"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#381840] text-2xl sm:text-3xl font-semibold">Telegram</p>
                        <p className="text-[#867D8B]">Join our Telegram group</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl flex flex-row gap-10 p-3">
                    <div className="bg-[#4A4074] rounded-full text-white p-2 flex justify-center items-center">
                        <FaXTwitter className="w-12 h-12"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#381840] text-2xl sm:text-3xl font-semibold">Telegram</p>
                        <p className="text-[#867D8B]">Join our Telegram group</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl flex flex-row gap-10 p-3">
                    <div className="bg-[#4A4074] rounded-full text-white p-2 flex justify-center items-center">
                        <FaDiscord className="w-12 h-12"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#381840] text-2xl sm:text-3xl font-semibold">Telegram</p>
                        <p className="text-[#867D8B]">Join our Telegram group</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl flex flex-row gap-10 p-3">
                    <div className="bg-[#4A4074] rounded-full text-white p-2 flex justify-center items-center">
                        <FaInstagram className="w-12 h-12"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#381840] text-2xl sm:text-3xl font-semibold">Telegram</p>
                        <p className="text-[#867D8B]">Join our Telegram group</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl flex flex-row gap-10 p-3">
                    <div className="bg-[#4A4074] rounded-full text-white p-2 flex justify-center items-center">
                        <FaFacebookF className="w-12 h-12"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#381840] text-2xl sm:text-3xl font-semibold">Telegram</p>
                        <p className="text-[#867D8B]">Join our Telegram group</p>
                    </div>
                </div>
                <div className="bg-white rounded-xl flex flex-row gap-10 p-3">
                    <div className="bg-[#4A4074] rounded-full text-white p-2 flex justify-center items-center">
                        <FaRedditAlien className="w-12 h-12"/>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-[#381840] text-2xl sm:text-3xl font-semibold">Telegram</p>
                        <p className="text-[#867D8B]">Join our Telegram group</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}

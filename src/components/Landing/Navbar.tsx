export default function Intro() {
  return (
    <div className="w-full">
      <div className="flex mx-auto flex-row max-w-7xl justify-between">
        <img src="./img/logo.png"></img>
        <div className="flex flex-row gap-10 justify-center items-center">
          <p className="text-white">Docs</p>
          <button className="bg-[#FFA81F] text-[#381840] rounded-md py-2 px-10 font-semibold">Connect</button>
        </div>
      </div>
    </div>
  )
}

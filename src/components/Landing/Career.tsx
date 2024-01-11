export default function Career() {
    return (
      <div className="w-screen relative bg-white pt-12 sm:pt-24">
        <div className="flex flex-col items-center">
            <p className="text-[#381840] text-2xl font-bold max-w-[250px]">Explore Winee3 and Elevate Your Career</p>
            <p className="mt-4 text-[#451D50] font-medium leading-normal max-w-[400px] text-center">Discover professional networking, job opportunities, and more with Winee3.</p>
        </div>
        <div className="flex justify-center mt-20 w-screen relative">
            <img src="./img/career-bg.png" className="w-full relative"></img>
            <img className="absolute left-0 top-0 w-full" src='./img/career-bg-upper-gradient.png'></img>
            <img className="absolute left-0 bottom-0 w-full" src='./img/career-bg-down-gradient.png'></img>
        </div>
      </div>
    )
}

import Navbar from '../components/Landing/Navbar';
import Intro from '../components/Landing/Intro';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#381840] p-12 nunito">
      <Navbar />
      <Intro />
    </main>
  )
}

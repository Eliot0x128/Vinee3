import Navbar from '../components/Landing/Navbar';
import Intro from '../components/Landing/Intro';
import Explorer from '@/components/Landing/Explorer';
import Howworks from '@/components/Landing/Howworks';
import Solution from '@/components/Landing/Solution';
import Career from '@/components/Landing/Career';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#381840] p-12 nunito overflow-hidden">
      <Navbar />
      <Intro />
      <Explorer />
      <Howworks />
      <Solution />
      <Career />
    </main>
  )
}

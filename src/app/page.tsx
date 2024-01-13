import Navbar from '../components/Landing/Navbar';
import Intro from '../components/Landing/Intro';
import Explorer from '@/components/Landing/Explorer';
import Howworks from '@/components/Landing/Howworks';
import Solution from '@/components/Landing/Solution';
import Career from '@/components/Landing/Career';
import Tokenomics from '@/components/Landing/Tokenomics';
import JoinCommunity from '@/components/Landing/JoinCommunity';
import Utility from '@/components/Landing/Utility';
import Investors from '@/components/Landing/Investors';
import Referral from '@/components/Landing/Referral';
import FeaturedPosts from '@/components/Landing/FeaturedPosts';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#381840] p-12 nunito overflow-hidden">
      <Navbar />
      <Intro />
      <Explorer />
      <Howworks />
      <Solution />
      <Career />
      <JoinCommunity />
      <Tokenomics />
      <Utility />
      <Investors />
      <Referral />
      <FeaturedPosts />
    </main>
  )
}

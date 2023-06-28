import AmazeNFT from "@/components/Amaze/AmazeNFT";
import Collection from "@/components/Collection/Collection";
import AllNft from "@/components/DiscoverMore/AllNft";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import SellNFT from "@/components/SellNFT/SellNFT";
import TopCollection from "@/components/TopCollection/TopCollection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AmazeNFT />
      <TopCollection />
      <Collection />
      <SellNFT/>
      <AllNft />
      <Footer />
    </main>
  );
}

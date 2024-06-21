import Image from "next/image";
import MarqueeDemo from "./datas/marqueedata";
import BentoDemo from "./datas/bentodata"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden ">
      <div className="content1 w-full">
        <section className="part1 flex flex-col items-center justify-center w-full">
          <h1 className="flex-col justify-center items-center "> Hello Everynyan</h1>
          <Image
                 className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert py-10"
                 
                 src="/next.svg"
                 alt="Next.js Logo"
                 width={180}
                 height={37}
                 priority
                 >
                 </Image>       
        </section>

        <div className="w-full">
          <BentoDemo/>
        </div>

        <div className="w-full py-10">
          <MarqueeDemo/>
        </div>

        
      </div>
    </main>
  );
}





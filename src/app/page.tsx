import Image from "next/image";
import MarqueeDemo from "./datas/marqueedata";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden ">
      <div className="content1">
        <section className="part1 flex flex-col items-center justify-center">
          <h1 className="flex-col justify-center items-center py-40"> Hello Everynyan</h1>
          <Image
                 className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                 src="/next.svg"
                 alt="Next.js Logo"
                 width={180}
                 height={37}
                 priority
                 >
                 </Image>       
        </section>
        
        <MarqueeDemo/>
      </div>
    </main>
  );
}





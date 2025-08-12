import Image from "next/image";

import Hero from "@/components/home/hero";
import PhotoReel from '@/components/home/photoReel'
import DesignReel from '@/components/home/designReel'

export default function Home() {
      return (
            <div>
                  <Hero />

                  <div className="h-40 w-full flex items-center justify-center">
                        <div className="w-[60%] text-amber-400 text-lg font-serif">
                              <h2>Authentic imagery,</h2>
                              <h2 className="text-right">refined design,</h2>
                              <h2 className="text-center text-2xl">crafted with care.</h2>
                        </div>
                  </div>

                  <PhotoReel />

                  <div className="h-10"></div>

                  <DesignReel />

                  <div className="h-10"></div>

                  <div className="h-35 bg-amber-400 flex flex-col justify-center gap-5 pl-5">
                        <h2 className="text-xl font-bold">
                              Let's create something beautiful
                        </h2>
                        <h2 className="text-lg underline">
                              Proceed to contact page...
                        </h2>
                  </div>
            </div>
      );
}

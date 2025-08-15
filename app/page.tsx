import Image from "next/image";

import Hero from "@/components/home/hero";
import PhotoReel from '@/components/home/photoReel'
import DesignReel from '@/components/home/designReel'

export default function Home() {
      return (
            <div>
                  <Hero />

                  <div className="h-35 w-full flex items-center justify-center">
                        <div className="w-[60%] text-white text-lg font-serif">
                              <h2>Authentic imagery,</h2>
                              <h2 className="text-right">refined design,</h2>
                              <h2 className="text-center text-2xl">crafted with care.</h2>
                        </div>
                  </div>

                  <PhotoReel />

                  <div className="h-2"></div>

                  <DesignReel />

                  <div className="h-10"></div>

                  <div className="h-35 bg-black pl-4 pt-6">
                        <h2 className="text-xl font-bold">
                              Karina Prezeau
                        </h2>
                        <h2 className="text-lg">
                              Photography & Graphic Design
                        </h2>
                  </div>
            </div>
      );
}

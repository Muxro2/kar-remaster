import Image from "next/image";

import Hero from "@/app/ui/home/hero";
import PhotoReel from '@/app/ui/home/photoReel'
import DesignReel from '@/app/ui/home/designReel'

export default function Home() {
      return (
            <div>
                  <Hero />

                  <div className="h-35 w-full flex items-center justify-center">
                        <div className="w-[60%] text-white text-2xl">
                              <h2>Authentic imagery,</h2>
                              <h2 className="text-right">refined design,</h2>
                              <h2 className="text-center text-4xl">crafted with care.</h2>
                        </div>
                  </div>

                  <PhotoReel />

                  <div className="h-2"></div>

                  <DesignReel />

                  <div className="h-10"></div>

            </div>
      );
}

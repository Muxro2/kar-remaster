import Image from "next/image";

import Hero from "@/app/ui/home/hero";
import PhotoReel from '@/app/ui/home/photoReel'
import DesignReel from '@/app/ui/home/designReel'

export default function Home() {
      return (
            <div>
                  <Hero />

                        <div className="w-max mx-auto lg:w-[100vw] h-35 lg:h-[18vh] text-white text-2xl lg:text-[4vh] lg:justify-evenly content-center lg:flex">
                              <h2 className="lg:content-center">Authentic imagery,</h2>
                              <h2 className="text-right lg:content-center">refined design,</h2>
                              <h2 className="text-center text-4xl lg:text-[4vh] lg:content-center">crafted with care.</h2>
                        </div>

                  <PhotoReel />

                  <div className="h-2"></div>

                  <DesignReel />

                  <div className="h-10"></div>

            </div>
      );
}

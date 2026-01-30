"use client";

import { useScrollThreshold } from "@/hooks/useScrollThreshold";
import { IInvite } from "@/lib/models/Invite";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = ({ data }: { data: IInvite }) => {
  const hideHeroContent = useScrollThreshold(500);
  return (
    <section className="relative h-screen w-full overflow-hidden before:bg-[radial-gradient(circle,rgba(233,178,52,0.08),transparent_70%)]">
      <div className="pointer-events-none absolute top-0 left-0 w-full h-[260px] z-0">
        {/* Soft paper glow (very subtle) */}
        <div className="absolute top-0 left-0 w-[150px] h-[150px] md:w-[210px] md:h-[210px] bg-[#f3d38a] blur-3xl opacity-40" />
        <div className="absolute top-0 right-0 w-[150px] h-[150px] md:w-[210px] md:h-[210px] bg-[#f3d38a] blur-3xl opacity-40" />

        {/* Mandala texture */}
        <div className="absolute opacity-[0.1] left-11 md:left-0 -translate-y-2/3 translate-x-0 md:-translate-y-1/2 md:-translate-x-1/2  md:block">
          <Image
            src="/images/mandala.png"
            alt=""
            width={420}
            height={420}
            className="object-contain animate-[spin_35s_linear_infinite]"
          />
        </div>

        {/* Mandala texture */}
        <div className="absolute top-0 right-0 opacity-[0.1] -translate-y-1/2 translate-x-1/2 hidden md:block">
          <Image
            src="/images/mandala.png"
            alt=""
            width={420}
            height={420}
            className="object-contain animate-[spin_35s_linear_infinite]"
          />
        </div>
      </div>

      <div className="content-container py-16 md:py-20 text-center">
        {/* Devotional Text */}
        <p
          className="
            text-sm md:text-base
            tracking-wide
            text-foreground/60
            font-body
            z-10
          "
        >
          &#124;&#124; Sri Venkatesaya Namaha &#124;&#124;
        </p>

        {/* Ornamental Divider */}
        <div className="mt-6 flex justify-center opacity-100">
          <Image
            src="/images/floral-2.png"
            alt="divider"
            width={250}
            height={60}
            className="object-contain !opacity-65"
          />
        </div>
      </div>
      {/* ================= CENTERED HERO CONTENT ================= */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            opacity: hideHeroContent ? 0 : 1,
            y: hideHeroContent ? -20 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative mx-auto max-w-5xl px-6 pb-10 pt-6 rounded-3xl text-center"
        >
          {/* Mandala Watermark */}
          <div className="pointer-events-none absolute top-0 left-0 right-0 flex items-center justify-center opacity-[0.2]">
            <Image
              src="/images/mandala.png"
              alt="mandal"
              width={420}
              height={420}
              className="object-contain w-[280px] h-[280px] md:w-[420px] md:h-[420px]"
            />
          </div>

          {/* Wrapper */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            {/* Bride Image – desktop left */}
            <div className="hidden md:block relative w-[180px] h-[300px] shrink-0">
              <Image
                src="/images/bride.png"
                alt="bride"
                fill
                sizes="(max-width: 768px) 100vw, 180px"
                className="object-contain scale-100"
              />
            </div>

            {/* Center Content */}
            <div className="flex flex-col items-center">
              {/* Names */}
              <h1 className="flex flex-col items-center gap-1 sm:gap-2 py-6 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-heading gold-shimmer">
                <span>{data.brideName}</span>

                <div className="flex justify-center items-center">
                  <Image
                    src="/images/coupleHands.png"
                    alt="hands"
                    width={200}
                    height={200}
                    className="opacity-80 scale-75 sm:scale-90 md:scale-100"
                  />
                </div>
                <span>{data.groomName}</span>
              </h1>

              {/* Floral Divider */}
              <div className="mb-6 mt-8 md:mt-40 md:mb-12">
                <img
                  src="/images/border.png"
                  alt="divider"
                  width={200}
                  height={100}
                  className="object-cover"
                />
              </div>

              {/* Date */}
              <p className="text-base md:text-lg tracking-wide text-muted-foreground">
                {data.weddingDate}
              </p>

              {/* Venue */}
              <p className="mt-1 text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground">
                {data.venue}
              </p>

              {/* Floral Divider */}
              <div className="mb-6 mt-8">
                <img
                  src="/images/border.png"
                  alt="divider"
                  width={200}
                  height={100}
                  className="object-cover"
                />
              </div>
            </div>

            {/* Groom Image – desktop right */}
            <div className="hidden md:block relative w-[180px] h-[300px] shrink-0">
              <Image
                src="/images/groom.png"
                alt="groom"
                fill
                sizes="(max-width: 768px) 100vw, 180px"
                className="object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ================= SCROLL HINT (BOTTOM LAYER) ================= */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-30 left-1/2 -translate-x-1/2 text-center w-full px-4"
      >
        <p className="text-foreground/60 font-body mb-2 text-sm md:text-lg">
          With the blessings of Lord Venkateshwara, we invite you to celebrate
          our union.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{
            opacity: !hideHeroContent ? 1 : 0,
            y: !hideHeroContent ? 0 : 8,
          }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
          className="animate-bounce text-primary text-xs tracking-widest uppercase opacity-60"
        >
          Scroll to Explore
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
export { HeroSection };

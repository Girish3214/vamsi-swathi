import { IInvite } from "@/lib/models/Invite";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = ({ data }: { data: IInvite }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto max-w-5xl px-6 pb-10 pt-6 rounded-3xl overflow-hidden text-center"
      >
        {/* Mandala Watermark */}
        <div className="pointer-events-none absolute top-6 left-0 right-0 flex items-center justify-center opacity-[0.1]">
          <Image
            src="/images/mandal.png"
            alt="mandal"
            width={280}
            height={280}
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
              className="object-contain"
            />
          </div>

          {/* Center Content */}
          <div className="flex flex-col items-center">
            {/* Names */}
            <h1
              className="flex flex-col items-center gap-1 sm:gap-2 py-6
          text-4xl sm:text-5xl md:text-6xl lg:text-8xl
          font-heading gold-shimmer"
            >
              <span>{data.brideName}</span>

              <Image
                src="/images/hands.png"
                alt="hands"
                width={200}
                height={200}
                className="opacity-80 scale-75 sm:scale-90 md:scale-100"
              />

              <span>{data.groomName}</span>
            </h1>

            {/* Floral Divider */}
            <div className="my-6">{/* SVG unchanged */}</div>

            {/* Date */}
            <p className="text-base md:text-lg tracking-wide text-muted-foreground">
              {data.weddingDate}
            </p>

            {/* Venue */}
            <p className="mt-1 text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground">
              {data.venue}
            </p>
          </div>

          {/* Groom Image – desktop right */}
          <div className="hidden md:block relative w-[180px] h-[300px] shrink-0">
            <Image
              src="/images/groom.png"
              alt="groom"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </motion.div>

      {/* Scroll Hint (Bottom of Hero) */}
      <motion.div
        style={{ opacity: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center w-full"
      >
        <p className="text-foreground/60 font-body mb-2 text-lg">
          With the blessings of Lord Ganesh, we invite you to celebrate our
          union.
        </p>
        <div className="animate-bounce text-primary text-sm tracking-widest uppercase opacity-60">
          Scroll to Explore
        </div>
      </motion.div>
      <div className="h-24 w-full pointer-events-none" />
    </>
  );
};

export default HeroSection;
export { HeroSection };

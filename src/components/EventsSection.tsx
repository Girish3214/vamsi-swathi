import { IEvent } from "@/lib/models/Invite";
import { motion } from "framer-motion";
import Image from "next/image";

const EventsSection = ({ events }: { events: IEvent[] }) => {
  return (
    <>
      <div className="w-full h-auto flex justify-center items-center">
        <Image
          src="/images/decor-1-header-lines.png"
          alt="lines"
          width={500}
          height={500}
          className="max-w-md h-auto mx-2"
        />
      </div>
      <section className="content-container py-20 relative">
        {/* Event Details - Vertical Timeline */}
        <Image
          src="/images/flowers-upward.png"
          alt=""
          width={500}
          height={500}
          className="absolute top-12 right-[-80px] w-80 rotate-6 pointer-events-none hidden md:block"
        />
        <div className="relative max-w-5xl mx-auto px-4 md:px-0">
          {/* Central Line */}
          <svg
            className="absolute left-8 md:left-1/2 top-0 h-full -translate-x-1/2"
            width="14"
            viewBox="0 0 14 600"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="
                  M7 0
                  C 2 40, 12 80, 7 120
                  C 2 160, 12 200, 7 240
                  C 2 280, 12 320, 7 360
                  C 2 400, 12 440, 7 480
                  C 2 520, 12 560, 7 600"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeOpacity="0.35"
            />
          </svg>

          <div className="flex flex-col gap-12 md:gap-24 relative">
            {events?.map((event: any, idx: number) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`relative flex items-center md:justify-between ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-background border-4 border-primary rounded-full z-10 -translate-x-1/2 shadow-[0_0_15px_rgba(233,178,52,0.6)]" />

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-[50%] pl-10 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}
                  >
                    <div className="p-8 border border-primary/10 rounded-3xl bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-primary/30 transition-all group relative overflow-hidden">
                      {/* Decorative gradient blob */}
                      <div
                        className={`absolute top-0 ${isEven ? "left-0" : "right-0"} w-32 h-32 bg-[#f3d38a] rounded-full blur-3xl -translate-y-1/2 ${isEven ? "-translate-x-1/2" : "translate-x-1/2"}`}
                      />
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          {event?.title?.toLowerCase() === "reception" && (
                            <img
                              src="/images/camera.png"
                              alt="camera"
                              width={100}
                              height={100}
                              className="absolute top-6 left-5 object-contain opacity-60 pointer-events-none w-20"
                            />
                          )}
                          <h3
                            className={`${isEven ? "px-18" : "px-0"} text-4xl text-primary font-heading relative z-10 ${isEven ? "md:text-right" : "md:text-left"}`}
                          >
                            {event.title}
                          </h3>
                          {event?.title?.toLowerCase()?.includes("wedding") && (
                            <img
                              src="/images/knot.png"
                              alt="knot"
                              width={100}
                              height={100}
                              className="absolute top-2 right-0 object-contain opacity-60 pointer-events-none w-32 rotate-18 translate-x-1 -translate-y-1"
                            />
                          )}
                        </div>

                        <p className="font-bold text-lg text-foreground font-opensans relative z-10">
                          {event.date}{" "}
                          <span className="text-primary mx-2">•</span>{" "}
                          {event.time}
                        </p>
                        <div className="w-full h-px bg-primary/10 mb-8" />
                        <p className="text-foreground/80 leading-relaxed relative z-10 font-light">
                          {event.location}
                        </p>
                        <p className="mt-4 text-sm italic text-muted-foreground relative z-10">
                          {event.description}
                        </p>
                      </div>

                      {/* Decorative Icons matching the sketch */}
                      <div
                        className={`absolute bottom-4 ${isEven ? "right-4 md:left-4! " : "right-4"} flex gap-0 opacity-10`}
                      >
                        <Image
                          src="/images/bride.png"
                          alt="bride"
                          width={70}
                          height={70}
                          className="w-10 h-24"
                        />
                        <Image
                          src="/images/groom.png"
                          alt="groom"
                          width={70}
                          height={70}
                          className="w-8 md:w-8 h-24"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Empty spacer for the other side to keep balance */}
                  <div className="hidden md:block w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
        {/* Bottom-left floral ornament */}
        <Image
          src="/images/flowers-upward.png"
          alt=""
          width={500}
          height={500}
          className="absolute bottom-12 left-[-80px] w-80 -rotate-6 rotate-y-180 rotate-x-180 pointer-events-none hidden md:block"
        />
      </section>

      <div className="w-full h-auto flex justify-center items-center">
        <Image
          src="/images/decor-event-end.png"
          alt="lines"
          width={500}
          height={500}
          className="max-w-md h-auto opacity-55"
        />
      </div>
    </>
  );
};

export { EventsSection };

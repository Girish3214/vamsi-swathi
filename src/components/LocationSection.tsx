import { ILocation } from "@/lib/models/Invite";
import Image from "next/image";

const LocationSection = ({ location }: { location: ILocation }) => {
  const { venue, venueDetails, venueGoogleMapsLink, venueQR } = location;
  return (
    <section className="content-container py-24">
      <div className="max-w-5xl mx-auto flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 items-center">
          {/* LEFT: QR block */}
          <div className="flex flex-col items-center gap-3">
            <div className="p-4 rounded-2xl bg-white/50 backdrop-blur-sm shadow-sm">
              <Image
                src={venueQR}
                alt="QR Code"
                width={192}
                height={192}
                className="
            w-44 h-4w-44
            md:w-48 md:h-48
          "
              />
            </div>
          </div>

          {/* RIGHT: Location details */}
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-heading text-primary">
              {venue}
            </h2>
            {/* Soft divider */}
            <div className="h-[2px] w-1/3 bg-primary/30 mx-auto md:mx-0" />

            <p className="text-foreground/80 leading-relaxed max-w-md">
              {venueDetails}
            </p>

            <a
              href={venueGoogleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-primary underline underline-offset-4"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
export { LocationSection };

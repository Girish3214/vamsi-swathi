import {
  EventsSection,
  HeroSection,
  LocationSection,
  Navbar,
} from "@/components";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import { getInvite } from "@/lib/data";

const BRIDE = process.env.BRIDE;
const GROOM = process.env.GROOM;

export default async function Home() {
  const data = await getInvite(BRIDE!, GROOM!);
  const parsedData = JSON.parse(JSON.stringify(data, null, 2));

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center bg-background text-foreground font-poppins">
        <h2 className="text-3xl text-primary mb-4 font-heading">
          Om Ganeshay Namah
        </h2>
        <p className="text-muted-foreground">Invitation not found.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center relative bg-background text-foreground font-poppins">
      <main className="min-h-[60vh] w-full">
        <Navbar
          brideName={data.brideName}
          groomName={data.groomName}
          weddingDate={data.weddingDate}
        />
        {/* HERO handles its own centering */}
        <HeroSection data={parsedData} />
        {/* CONTENT BELOW HERO */}
        <EventsSection events={parsedData.events} />
        <LocationSection location={parsedData.location} />
        <ContactSection contacts={parsedData.contacts} />
        <FooterSection invite={parsedData} />
      </main>
    </div>
  );
}

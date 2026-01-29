"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  EventsSection,
  HeroSection,
  Loader,
  LocationSection,
  Navbar,
} from "@/components";
import ContactSection from "@/components/ContactSection";
import { IInvite } from "@/lib/models/Invite";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IInvite | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const startTime = Date.now();
      try {
        const response = await fetch(
          `/api/invite?bride=${"Divya"}&groom=${"Manikanta"}`,
        );
        if (!response.ok) {
          throw new Error("Invitation not found or server error.");
        }
        const result = await response.json();
        setData(result);

        // Add a slight delay for the visual experience
        const elapsed = Date.now() - startTime;
        const minimumLoadTime = 5000;
        const delay = Math.max(0, minimumLoadTime - elapsed);
        setTimeout(() => setLoading(false), delay);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex min-h-screen items-center justify-center relative bg-background text-foreground font-poppins">
      <AnimatePresence>{loading ? <Loader /> : null}</AnimatePresence>

      {error ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h2 className="text-3xl text-primary mb-4 font-heading">
            Om Ganeshay Namah
          </h2>
          <p className="text-muted-foreground">{error}</p>
        </div>
      ) : data ? (
        <main className="min-h-[60vh] w-full">
          <Navbar
            brideName={data.brideName}
            groomName={data.groomName}
            weddingDate={data.weddingDate}
          />
          {/* HERO handles its own centering */}
          <HeroSection data={data} />
          {/* CONTENT BELOW HERO */}
          <EventsSection events={data.events} />
          <LocationSection location={data.location} />
          <ContactSection contacts={data.contacts} />
          <FooterSection invite={data} />
        </main>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <h2 className="text-3xl text-primary mb-4 font-heading">
            Om Ganeshay Namah
          </h2>
        </div>
      )}
    </div>
  );
}

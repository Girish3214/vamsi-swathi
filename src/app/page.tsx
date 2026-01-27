"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Loader } from "@/components";

export default function Home() {
  const searchParams = useSearchParams();
  const bride = searchParams.get("bride") || "Divya";
  const groom = searchParams.get("groom") || "Manikanta";

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!bride || !groom) {
      setError(
        "Please provide bride and groom names in the URL (e.g., /?bride=Kavya&groom=Vaibhav)",
      );
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      const startTime = Date.now();
      try {
        const response = await fetch(
          `/api/invite?bride=${bride}&groom=${groom}`,
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
  }, [bride, groom]);

  return (
    <div className="flex min-h-screen items-center justify-center relative bg-background text-foreground font-tangerine">
      <AnimatePresence>{loading ? <Loader /> : null}</AnimatePresence>

      <div className="content-container py-20">
        {error ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <h2 className="text-3xl text-primary mb-4 font-heading">
              Om Ganeshay Namah
            </h2>
            <p className="text-muted-foreground">{error}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

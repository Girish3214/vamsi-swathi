import { IContact } from "@/lib/models/Invite";
import Image from "next/image";
import { ContactCard } from "./ContactCard";

const ContactSection = ({ contacts }: { contacts: IContact[] }) => {
  if (!contacts?.length) return null;

  return (
    <>
      <div className="w-full h-auto flex justify-center items-center">
        <Image
          src="/images/decor-2-upside.png"
          alt="lines"
          width={500}
          height={500}
          className="max-w-md h-auto opacity-10 rotate-180 w-1/2"
        />
      </div>
      <section className="content-container py-10">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          {/* Heading */}
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-heading text-primary">
              For Any Assistance
            </h2>

            <div className="mx-auto w-24 h-px bg-primary/30" />
          </div>

          {/* Contacts */}
          <div
            className={`grid gap-12 justify-items-center ${
              contacts.length === 1
                ? "grid-cols-1"
                : "grid-cols-1 sm:grid-cols-2 sm:justify-items-stretch"
            }`}
          >
            {contacts.map((contact, index) => {
              const relation =
                contact.relation && contact.relation.toLowerCase() !== "unknown"
                  ? contact.relation
                  : null;

              return (
                <ContactCard
                  key={index}
                  name={contact.name}
                  relation={contact.relation}
                  phone={contact.phone}
                />
              );
            })}
          </div>
          <p className="text-sm tracking-widest text-foreground/60">
            సంప్రదించండి
          </p>
        </div>
      </section>
      <div className="w-full h-auto flex justify-center items-center">
        <Image
          src="/images/decor-2-upside.png"
          alt="lines"
          width={500}
          height={500}
          className="max-w-md h-auto opacity-10 w-1/2"
        />
      </div>
    </>
  );
};

export default ContactSection;

type ContactCardProps = {
  name: string;
  relation?: string;
  phone: string;
};

const ContactCard = ({ name, relation, phone }: ContactCardProps) => {
  return (
    <div className="relative w-full max-w-sm px-10 py-10 md:py-12 rounded-[22px] bg-[#fbf6f1] text-center space-y-5 border border-primary/10 shadow-[0_8px_24px_rgba(63,46,41,0.08)] before:absolute before:inset-0 before:rounded-[22px] before:pointer-events-none before:bg-[radial-gradient(120%_120%_at_0%_0%,rgba(233,178,52,0.04)_0%,rgba(233,178,52,0.02)_35%,rgba(233,178,52,0.08)_100%)] after:absolute after:inset-[10px] after:rounded-[14px] after:border after:border-primary/15 after:pointer-events-none overflow-hidden">
      {/* Floral – top left */}
      <img
        src="/images/floral-corner.png"
        alt=""
        className="absolute top-[-4px] left-[-2px] w-28 pointer-events-none"
      />
      {/* Floral – top left */}
      <img
        src="/images/floral-corner.png"
        alt=""
        className="absolute top-[-4px] left-[-2px] w-28 pointer-events-none"
      />
      {/* Name */}
      <p className="text-2xl font-heading text-primary">{name}</p>
      {/* Relation */}
      {relation && relation.toLowerCase() !== "unknown" && (
        <p className="text-sm italic text-foreground/70 capitalize">
          — {relation} —
        </p>
      )}
      {/* Phone */}
      <div className="flex justify-center items-center gap-2">
        <span className="opacity-60 text-primary font-semibold tracking-wider">
          ☎
        </span>
        <a
          href={`tel:${phone}`}
          className="text-primary font-semibold tracking-wider underline underline-offset-4"
        >
          {phone}
        </a>
      </div>
    </div>
  );
};
export { ContactCard };

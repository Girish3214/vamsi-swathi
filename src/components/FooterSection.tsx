import { IInvite } from "@/lib/models/Invite";

const FooterSection = ({ invite }: { invite: IInvite }) => {
  return (
    <footer className="content-container py-24">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        {/* Top ornament */}
        <div className="mx-auto w-40 h-px bg-primary/20" />

        {/* Closing message */}
        <p className="text-sm md:text-base italic text-foreground/70">
          With love & blessings
        </p>

        {/* Couple names */}
        <h3 className="text-3xl md:text-4xl font-heading text-primary">
          {invite.brideName} & {invite.groomName}
        </h3>

        {/* Date / location */}
        <p className="text-sm tracking-wide text-foreground/60">
          {invite.weddingDate} • {invite.location.venue}
        </p>

        {/* Bottom ornament */}
        <div className="mx-auto w-40 h-px bg-primary/20" />
      </div>
    </footer>
  );
};

export default FooterSection;

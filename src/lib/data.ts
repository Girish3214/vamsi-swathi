import Invite, { IInvite } from "./models/Invite";
import connectDB from "./mongodb";

export async function getInvite(
  bride: string,
  groom: string,
): Promise<IInvite | any | null> {
  const slug = `${bride}-${groom}`.toLowerCase();

  try {
    const conn = await connectDB();

    if (conn) {
      const invite = await Invite.findOne({ slug }).lean();
      if (invite) {
        console.log(`[DB] Found invite for ${slug}`);
        return invite;
      } else {
        console.log(`[DB] No invite found for ${slug}`);
        return null;
      }
    }
  } catch (error) {
    console.warn("[DB] Error connecting or fetching from MongoDB:", error);
    return null;
  }
}

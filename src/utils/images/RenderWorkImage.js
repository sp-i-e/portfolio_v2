import CyrusImage from "@/lib/images/work/cyrus.jpg";
import PortfolioV2 from "@/lib/images/work/portfolio_v2.jpg";
import Portfolio from "@/lib/images/work/portfolio.jpg";
import Arcanum from "@/lib/images/work/arcanum.jpg";
import Avalon from "@/lib/images/work/avalon.jpg";
import Staysense from "@/lib/images/work/staysense.jpg";
import hirehub from "@/lib/images/work/hirehub.jpg";
import intellicode from "@/lib/images/work/intellicode.jpg";
import engage from "@/lib/images/work/engage.jpg";
import camparchive from "@/lib/images/work/camparchive.jpg";
import learnr from "@/lib/images/work/learnr.jpg";
import tuneology from "@/lib/images/work/tuneology.jpg";
import apocalypse from "@/lib/images/work/apocalypse.jpg";
import aps from "@/lib/images/work/aps.jpg";
import rps from "@/lib/images/work/rps.jpg";
import paritychecker from "@/lib/images/work/paritychecker.jpg";
import scribble from "@/lib/images/work/scribble.jpg";
import newswire from "@/lib/images/work/newswire.jpg";

export default function renderWorkImage(image) {
  switch (image) {
    case "cyrus":
      return CyrusImage?.src;
    case "portfolio_v2":
      return PortfolioV2?.src;
    case "portfolio":
      return Portfolio?.src;
    case "arcanum":
      return Arcanum?.src;
    case "avalon":
      return Avalon?.src;
    case "staysense":
      return Staysense?.src;
    case "hirehub":
      return hirehub?.src;
    case "intellicode":
      return intellicode?.src;
    case "engage":
      return engage?.src;
    case "camparchive":
      return camparchive?.src;
    case "learnr":
      return learnr?.src;
    case "tuneology":
      return tuneology?.src;
    case "apocalypse":
      return apocalypse?.src;
    case "aps":
      return aps?.src;
    case "rps":
      return rps?.src;
    case "paritychecker":
      return paritychecker?.src;
    case "scribble":
      return scribble?.src;
    case "newswire":
      return newswire?.src;
    default:
      return null;
  }
}

import CapIcon from "@/icons/CapIcon";
import FourDotsIcon from "@/icons/FourDotsIcon";
import PenIcon from "@/icons/PenIcon";
import TieIcon from "@/icons/TieIcon";
import TwoDotsIcon from "@/icons/TwoDotsIcon";

export default function RenderEducationIcon({ icon, className }) {
  switch (icon) {
    case "cap":
      return <CapIcon className={className} />;
    case "tie":
      return <TieIcon className={className} />;
    case "pen":
      return <PenIcon className={className} />;
    case "four-dots":
      return <FourDotsIcon className={className} />;
    case "two-dots":
      return <TwoDotsIcon className={className} />;
    default:
      return null;
  }
}

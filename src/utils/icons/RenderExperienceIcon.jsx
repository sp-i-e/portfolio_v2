import CodeOutlineDimIcon from "@/icons/CodeOutlineDimIcon";
import CodeOutlineIcon from "@/icons/CodeOutlineIcon";
import CompassOutlineIcon from "@/icons/CompassOutlineIcon";
import LaptopIcon from "@/icons/LaptopIcon";
import PlacewitIcon from "@/icons/PlacewitIcon";
import WalmartIcon from "@/icons/WalmartIcon";

export default function RenderExperienceIcon({ icon, className }) {
  switch (icon) {
    case "walmart":
      return <WalmartIcon className={className} />;
    case "placewit":
      return <PlacewitIcon className={className} />;
    case "laptop":
      return <LaptopIcon className={className} />;
    case "code":
      return <CodeOutlineIcon className={className} />;
    case "code-dim":
      return <CodeOutlineDimIcon className={className} />;
    case "compass":
      return <CompassOutlineIcon className={className} />;
    default:
      return null;
  }
}

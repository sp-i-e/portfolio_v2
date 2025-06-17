import CodeIcon from "@/icons/CodeIcon";
import DiscordIcon from "@/icons/DiscordIcon";
import GfgIcon from "@/icons/GfgIcon";
import GithubOutlineIcon from "@/icons/GithubOutlineIcon";
import LeetcodeIcon from "@/icons/LeetcodeIcon";
import LinkedInOutlineIcon from "@/icons/LinkedInOutlineIcon";
import LinkIcon from "@/icons/LinkIcon";
import LocationIcon from "@/icons/LocationIcon";
import MailIcon from "@/icons/MailIcon";
import PhoneIcon from "@/icons/PhoneIcon";
import SpotifyIcon from "@/icons/SpotifyIcon";

export default function RenderLinkIcon({ icon, className }) {
  switch (icon) {
    case "code":
      return <CodeIcon className={className} />;
    case "location":
      return <LocationIcon className={className} />;
    case "phone":
      return <PhoneIcon className={className} />;
    case "email":
      return <MailIcon className={className} />;
    case "link":
      return <LinkIcon className={className} />;
    case "linkedin-link":
      return <LinkedInOutlineIcon className={className} />;
    case "github-link":
      return <GithubOutlineIcon className={className} />;
    case "leetcode-link":
      return <LeetcodeIcon className={className} />;
    case "gfg-link":
      return <GfgIcon className={className} />;
    case "spotify-link":
      return <SpotifyIcon className={className} />;
    case "discord-link":
      return <DiscordIcon className={className} />;
    default:
      return null;
  }
}

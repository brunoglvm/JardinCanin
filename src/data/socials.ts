import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import Facebook from "../components/svg/socials/facebook.astro";
import Instagram from "../components/svg/socials/instagram.astro";
import Linkedin from "../components/svg/socials/linkedin.astro";
import X from "../components/svg/socials/x.astro";
import Youtube from "../components/svg/socials/youtube.astro";

type SocialLink = {
  label: string;
  href: string;
  icon: AstroComponentFactory;
};

export const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: Youtube,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company",
    icon: Linkedin,
  },
  {
    label: "X",
    href: "https://x.com",
    icon: X,
  },
];

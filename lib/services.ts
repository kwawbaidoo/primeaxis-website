import {
  AppWindowIcon,
  CodeXmlIcon,
  GraduationCapIcon,
  MegaphoneIcon,
  PackageIcon,
  PrinterIcon,
  SmartphoneIcon,
  WorkflowIcon,
  type LucideIcon,
} from "lucide-react";

export type ServiceGroup = "Build" | "Grow" | "Equip";

export type Service = {
  slug: string;
  title: string;
  group: ServiceGroup;
  /** One line, used in menus. */
  short: string;
  /** A sentence or two, used on cards. */
  summary: string;
  icon: LucideIcon;
};

export const serviceGroups: ServiceGroup[] = ["Build", "Grow", "Equip"];

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    group: "Build",
    short: "Business websites that bring in enquiries",
    summary: "Fast, mobile-friendly websites that turn visitors into enquiries.",
    icon: AppWindowIcon,
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    group: "Build",
    short: "Systems built around your workflow",
    summary:
      "Software shaped around the way your business already works, not the other way round.",
    icon: CodeXmlIcon,
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    group: "Build",
    short: "Android and iOS apps",
    summary: "Android and iOS apps for your customers or your team in the field.",
    icon: SmartphoneIcon,
  },
  {
    slug: "api-integration",
    title: "API Integration",
    group: "Build",
    short: "Connect payments and business tools",
    summary:
      "Connect payments, accounting and business tools so data moves without retyping.",
    icon: WorkflowIcon,
  },
  {
    slug: "graphic-design-printing",
    title: "Graphic Design & Printing",
    group: "Grow",
    short: "Branding, flyers, banners and cards",
    summary:
      "Logos, brand identity, flyers, banners and business cards, designed and printed.",
    icon: PrinterIcon,
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    group: "Grow",
    short: "Content, posting and reporting",
    summary:
      "Planned content, consistent posting and a monthly report on what is working.",
    icon: MegaphoneIcon,
  },
  {
    slug: "it-skills-training",
    title: "IT Skills Training",
    group: "Equip",
    short: "Courses for individuals and teams",
    summary:
      "Practical courses that make individuals and staff confident with everyday tools.",
    icon: GraduationCapIcon,
  },
  {
    slug: "it-accessories",
    title: "IT Accessories & General Goods",
    group: "Equip",
    short: "Equipment and supplies, sourced for you",
    summary:
      "Computer accessories, networking equipment and office supplies, sourced for you.",
    icon: PackageIcon,
  },
];

export function servicesInGroup(group: ServiceGroup) {
  return services.filter((service) => service.group === group);
}

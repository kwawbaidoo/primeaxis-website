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
import { site } from "@/lib/site";

export type ServiceGroup = "Build" | "Grow" | "Equip";

export type Service = {
  slug: string;
  title: string;
  group: ServiceGroup;
  /** One line, used in menus. */
  short: string;
  /** A sentence or two, used on cards and in page metadata. */
  summary: string;
  /** Opening paragraph on the service page. */
  intro: string;
  included: string[];
  benefits: { title: string; description: string }[];
  /** Primary button label on the service page. */
  ctaLabel?: string;
  icon: LucideIcon;
};

export const serviceGroups: ServiceGroup[] = ["Build", "Grow", "Equip"];

// Draft copy. Anything in [BRACKETS] is a placeholder.
export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    group: "Build",
    short: "Business websites that bring in enquiries",
    summary: "Fast, mobile-friendly websites that turn visitors into enquiries.",
    intro:
      "Your website is often the first place customers meet your business. We design and build fast, mobile-friendly sites that explain what you do clearly and make it easy for visitors to get in touch.",
    included: [
      "Custom design based on your brand",
      "Mobile-friendly pages that load quickly",
      "Contact and enquiry forms that reach your inbox",
      "A content system so you can update pages yourself",
      "Search engine basics: page titles, descriptions and sitemaps",
      "Domain, hosting and business email setup",
    ],
    benefits: [
      {
        title: "Look credible from the first visit",
        description:
          "A clean, professional site builds trust before a customer ever calls you.",
      },
      {
        title: "Turn visitors into enquiries",
        description:
          "Clear buttons and simple forms make it easy for people to take the next step.",
      },
      {
        title: "Stay in control",
        description:
          "Update your own text, images and posts without paying for every small change.",
      },
    ],
    icon: AppWindowIcon,
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    group: "Build",
    short: "Systems built around your workflow",
    summary:
      "Software shaped around the way your business already works, not the other way round.",
    intro:
      "When off-the-shelf tools don't fit, we build software around the way your team already works, from internal dashboards and booking systems to stock management and customer portals.",
    included: [
      "A workshop to map your current process",
      "Web-based systems your team can use from any device",
      "User accounts with roles and permissions",
      "Reports and dashboards for the numbers you track",
      "Moving your data from spreadsheets or old systems",
      "Training, documentation and ongoing support",
    ],
    benefits: [
      {
        title: "Less manual work",
        description:
          "Automate repetitive tasks such as data entry, reminders and report preparation.",
      },
      {
        title: "One source of truth",
        description:
          "Keep customer, stock and sales information in one place instead of scattered files.",
      },
      {
        title: "Software that grows with you",
        description:
          "Add features and users as your business changes, without starting again.",
      },
    ],
    icon: CodeXmlIcon,
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    group: "Build",
    short: "Android and iOS apps",
    summary: "Android and iOS apps for your customers or your team in the field.",
    intro:
      "We build Android and iOS apps for your customers or your staff, from the first sketch to publishing in the app stores.",
    included: [
      "App design for Android and iOS",
      "Customer apps or internal apps for your team",
      "Sign-in, notifications and in-app payments",
      "Connections to your website, systems or payment providers",
      "Testing on real devices before launch",
      "Publishing to Google Play and the App Store",
    ],
    benefits: [
      {
        title: "Reach customers on their phones",
        description: "Give customers a faster way to order, book or contact you.",
      },
      {
        title: "Equip your team in the field",
        description:
          "Let staff record jobs, sales or deliveries from wherever they are.",
      },
      {
        title: "Kept up to date",
        description:
          "We keep your app working as phones and operating systems change.",
      },
    ],
    icon: SmartphoneIcon,
  },
  {
    slug: "api-integration",
    title: "API Integration",
    group: "Build",
    short: "Connect payments and business tools",
    summary:
      "Connect payments, accounting and business tools so data moves without retyping.",
    intro:
      "We connect the tools your business already uses, such as payment providers, accounting software, SMS and your website, so information moves automatically instead of being copied by hand.",
    included: [
      "Online payment provider integration",
      "Connections to accounting and invoicing systems",
      "SMS and email notifications",
      "Syncing data between your website and business systems",
      "Custom APIs for your own software",
      "Monitoring and alerts when something fails",
    ],
    benefits: [
      {
        title: "No more double entry",
        description:
          "Orders, payments and customer details flow between systems automatically.",
      },
      {
        title: "Fewer mistakes",
        description:
          "Removing manual copying cuts the errors that creep into spreadsheets.",
      },
      {
        title: "Faster service",
        description:
          "Customers get confirmations and updates the moment something happens.",
      },
    ],
    icon: WorkflowIcon,
  },
  {
    slug: "graphic-design-printing",
    title: "Graphic Design & Printing",
    group: "Grow",
    short: "Branding, flyers, banners and cards",
    summary:
      "Logos, brand identity, flyers, banners and business cards, designed and printed.",
    intro:
      "From a new logo to a full set of marketing materials, we design your brand and print it, so everything looks consistent from your business cards to your banners.",
    included: [
      "Logo design and brand identity",
      "Business cards, letterheads and stationery",
      "Flyers, brochures and posters",
      "Banners, roll-up stands and signage",
      "Social media graphics",
      `Printing and delivery in ${site.contact.serviceArea}`,
    ],
    benefits: [
      {
        title: "A consistent brand",
        description:
          "Every piece uses the same colours, fonts and style, so customers recognise you.",
      },
      {
        title: "Design and print in one place",
        description:
          "No need to pass files between a designer and a separate printer.",
      },
      {
        title: "Ready for every channel",
        description: "Get files prepared for print, the web and social media.",
      },
    ],
    icon: PrinterIcon,
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    group: "Grow",
    short: "Content, posting and reporting",
    summary:
      "Planned content, consistent posting and a monthly report on what is working.",
    intro:
      "We plan, create and post content for your business pages, so you stay visible to customers without spending hours on it every week.",
    included: [
      "A monthly content plan agreed with you",
      "Post design, captions and scheduling",
      "Page setup and profile improvements",
      "Replies to comments and messages (optional)",
      "Paid ad campaigns (optional)",
      "A monthly report on reach and engagement",
    ],
    benefits: [
      {
        title: "Stay consistent",
        description:
          "Regular, on-brand posts keep your business in front of customers.",
      },
      {
        title: "Save time",
        description:
          "Spend your time running the business while we handle the posting.",
      },
      {
        title: "Know what's working",
        description:
          "Monthly reports show which posts bring engagement and enquiries.",
      },
    ],
    icon: MegaphoneIcon,
  },
  {
    slug: "it-skills-training",
    title: "IT Skills Training",
    group: "Equip",
    short: "Courses for individuals and teams",
    summary:
      "Practical courses that make individuals and staff confident with everyday tools.",
    intro:
      "Practical training for individuals and teams, from computer basics to the office and online tools people use at work every day.",
    included: [
      "Computer and internet basics",
      "Microsoft Office or Google Workspace",
      "Email, file sharing and online collaboration",
      "Cyber security awareness",
      "Social media and digital marketing basics",
      "Group sessions for teams or one-to-one lessons",
    ],
    benefits: [
      {
        title: "Hands-on learning",
        description:
          "Participants practise on real tasks instead of just watching slides.",
      },
      {
        title: "Training that fits your team",
        description:
          "We adapt each course to your staff's current skills and the tools you use.",
      },
      {
        title: "More confident staff",
        description:
          "People work faster and make fewer mistakes with the tools they use daily.",
      },
    ],
    icon: GraduationCapIcon,
  },
  {
    slug: "it-accessories",
    title: "IT Accessories & General Goods",
    group: "Equip",
    short: "Equipment and supplies, sourced for you",
    summary:
      "Computer accessories, networking equipment and office supplies, sourced for you.",
    intro:
      "We supply computer accessories, networking equipment and office supplies. Tell us what you need and we'll source it and send you a quote.",
    included: [
      "Keyboards, mice, headsets and webcams",
      "Chargers, cables and adapters",
      "Flash drives, hard drives and memory cards",
      "Routers, switches and network cabling",
      "Printers, ink and toner",
      "Office supplies and general goods",
    ],
    benefits: [
      {
        title: "One order, one supplier",
        description:
          "Get IT accessories and office supplies together instead of shopping around.",
      },
      {
        title: "Advice before you buy",
        description:
          "We help you choose equipment that works with what you already have.",
      },
      {
        title: "Bulk orders welcome",
        description: "Equip a whole office or classroom with a single quote.",
      },
    ],
    ctaLabel: "Enquire about products",
    icon: PackageIcon,
  },
];

export function servicesInGroup(group: ServiceGroup) {
  return services.filter((service) => service.group === group);
}

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

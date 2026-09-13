import {
  FileCheckIcon,
  HeadsetIcon,
  LayersIcon,
  TrendingUpIcon,
  type LucideIcon,
} from "lucide-react";
import type { ServiceGroup } from "@/lib/services";
import { site } from "@/lib/site";

// Draft copy for the home page. Anything in [BRACKETS] is a placeholder.

export const pillars: { group: ServiceGroup; summary: string }[] = [
  {
    group: "Build",
    summary: "Websites, custom software, mobile apps and API integration",
  },
  {
    group: "Grow",
    summary: "Graphic design, printing and social media management",
  },
  {
    group: "Equip",
    summary: "IT skills training, accessories and general goods",
  },
];

export const processSteps = [
  {
    title: "Discover",
    description:
      "We talk through your goals, audience, timeline and budget, and ask the questions that shape the project.",
  },
  {
    title: "Plan",
    description:
      "You receive a written proposal with the scope, timeline and cost before any work begins.",
  },
  {
    title: "Build",
    description:
      "We design, develop, print or source what you need, and show you progress at agreed checkpoints.",
  },
  {
    title: "Launch & support",
    description:
      "We hand over, train your team where needed and stay available for updates and fixes.",
  },
];

export const reasons: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "One team for every service",
    description:
      "Your website, software, print work and social media handled by people who already know your brand.",
    icon: LayersIcon,
  },
  {
    title: "Clear quotes before work starts",
    description:
      "You get the scope, timeline and cost in writing, so there are no surprises on the invoice.",
    icon: FileCheckIcon,
  },
  {
    title: "Built to grow with you",
    description:
      "We choose tools and write code that can take on more customers, staff and features as you expand.",
    icon: TrendingUpIcon,
  },
  {
    title: "Support after handover",
    description:
      "Training for your team and ongoing help with updates and fixes are part of the job.",
    icon: HeadsetIcon,
  },
];

export const faqs = [
  {
    question: "How much does a project cost?",
    answer:
      "It depends on what you need. After a short conversation about your goals, we send a written quote with the full scope and price, usually within [NUMBER] business days.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A typical business website takes [NUMBER] to [NUMBER] weeks from the first call to launch. Custom software and mobile apps are planned in stages, and your proposal includes a timeline.",
  },
  {
    question: "Do you work with small businesses and startups?",
    answer:
      "Yes. We work with businesses of every size, and we can split a project into phases so it fits your budget.",
  },
  {
    question: "Will I be able to update my website myself?",
    answer:
      "Yes. We can build your site so you can edit text, images and posts yourself, and we show you how before handover.",
  },
  {
    question: "Do you provide support after the project is finished?",
    answer:
      "Yes. We offer ongoing support for updates, fixes and backups, and we can train your team to handle everyday changes.",
  },
  {
    question: "Can you design and print our marketing materials?",
    answer: `Yes. We design and print business cards, flyers, banners, brochures and more, with delivery available in ${site.contact.serviceArea}.`,
  },
];

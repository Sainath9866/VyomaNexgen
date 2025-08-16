import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <div className="w-full">
      {/* Beautiful Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Our Services
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          We offer comprehensive digital solutions designed to transform your business and elevate your online presence to new heights.
        </p>
      </div>
      
      {/* Bento Grid */}
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const items = [
  {
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that deliver seamless user experiences across iOS and Android devices.",
    header: <div className="w-full h-full min-h-[100px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden relative"><Image src="https://www.vyomanexgen.com/images/2835b06c053a1fdab58a4b8d7006f73b.gif" alt="Mobile Applications" fill className="object-cover" /></div>,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Web Applications",
    description: "Custom web applications built with modern technologies, responsive design, and optimized performance that engage users and drive results.",
    header: <div className="w-full h-full min-h-[100px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden relative"><Image src="https://www.vyomanexgen.com/images/Difference%20between%20a%20Full%20Stack%20Developer%20and%20a%20Software%20Engineer-7.gif" alt="Web Applications" fill className="object-cover" /></div>,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design research and intuitive interfaces that create meaningful connections between users and your digital products.",
    header: <div className="w-full h-full min-h-[100px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden relative"><Image src="https://www.vyomanexgen.com/images/1_9BrpVqQkpXGPP4fLcrk5Dw.gif" alt="UI/UX Design" fill className="object-cover" /></div>,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Billing Software",
    description: "Billing software is a type of business application used to automate and streamline the process of creating, managing, and tracking invoices, bills, and other financial documents",
    header: <div className="w-full h-full min-h-[100px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden relative"><Image src="https://www.vyomanexgen.com/images/9413885.jpg" alt="Billing Software" fill className="object-cover" /></div>,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "CRM Development",
    description: "Develop seamless CRM for your business",
    header: <div className="w-full h-full min-h-[100px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden relative"><Image src="https://intileo.com/wp-content/uploads/2024/09/25559373_70981321-1-scaled.webp" alt="CRM Development" fill className="object-cover" /></div>,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
];

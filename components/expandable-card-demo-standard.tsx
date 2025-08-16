"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  // Handle outside clicks
  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

  return (
    <div className="w-full">
      {/* Beautiful Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Our Proof of Work
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover our portfolio of successful projects and innovative solutions that showcase our expertise and commitment to excellence.
        </p>
      </div>

      {/* Expandable Cards */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <div className="relative w-full h-80">
                  <Image
                    fill
                    src={active.src}
                    alt={active.title}
                    className="sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  />
                </div>
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer border-2 border-gray-200 dark:border-gray-700"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <div className="relative h-40 w-40 md:h-14 md:w-14">
                  <Image
                    fill
                    src={card.src}
                    alt={card.title}
                    className="rounded-lg object-cover object-top"
                  />
                </div>
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Interactive learning Management system",
    title: "Educational Platform",
    src: "https://www.vyomanexgen.com/images/timetoclimb-3-1.gif",
    ctaText: "Link",
    ctaLink: "http://sainath-tech.vercel.app/",
    content: () => {
      return (
        <p>
          Our comprehensive Learning Management System revolutionizes the educational experience with cutting-edge features designed for modern learning environments. The platform seamlessly integrates course management, student progress tracking, and interactive assessment tools to create an engaging learning ecosystem. <br /> <br />
          Built with responsive design principles, the system ensures optimal performance across all devices while maintaining accessibility standards for diverse learners. Advanced analytics provide educators with real-time insights into student performance, enabling personalized learning paths and data-driven instructional decisions. The platform&apos;s modular architecture allows for easy customization and scalability, making it suitable for educational institutions of all sizes.
        </p>
      );
    },
  },
  {
    description: "Modern e-commerce solution With Advanced Features",
    title: "E-Commerce Platform",
    src: "https://www.vyomanexgen.com/images/116.gif",
    ctaText: "Link",
    ctaLink: "http://sainath-tech.vercel.app/",
    content: () => {
      return (
        <p>
          Our advanced E-commerce platform delivers a seamless shopping experience with state-of-the-art features that drive conversions and customer satisfaction. The platform incorporates intelligent product recommendations, dynamic pricing strategies, and comprehensive inventory management systems to optimize business operations. <br /> <br />
          Built with modern web technologies, the platform ensures fast loading times, secure payment processing, and mobile-first responsive design that works flawlessly across all devices. Advanced features include real-time inventory tracking, automated order fulfillment, customer relationship management tools, and comprehensive analytics dashboards. The platform&apos;s scalable architecture supports businesses from startups to enterprise-level operations, with built-in SEO optimization and multi-language support for global reach.
        </p>
      );
    },
  },

  {
    description: "Real-time analytics dashboard For Financial Data",
    title: "Financial Dashboard",
    src: "https://www.vyomanexgen.com/images/Dasahboard.gif",
    ctaText: "Link",
    ctaLink: "http://sainath-tech.vercel.app/",
    content: () => {
      return (
        <p>
          Our sophisticated Financial Dashboard provides real-time insights into critical financial metrics, enabling data-driven decision-making for businesses and financial institutions. The platform integrates with multiple data sources to deliver comprehensive financial analytics, including cash flow analysis, profit and loss statements, and predictive financial modeling. <br /> <br />
          Built with advanced data visualization techniques, the dashboard presents complex financial information in intuitive, interactive charts and graphs that make analysis accessible to all stakeholders. Real-time alerts and notifications keep users informed of critical financial events, while customizable reporting tools allow for tailored financial analysis. The platform&apos;s robust security features ensure sensitive financial data remains protected, with role-based access controls and comprehensive audit trails for compliance and transparency.
        </p>
      );
    },
  },
  {
    description: "Digital Menu and ordering system for Restaurant",
    title: "Restaurant App",
    src: "https://www.vyomanexgen.com/images/original-2a00a1da8fdfc5ef2f0e1f562682b061.gif",
    ctaText: "Link",
    ctaLink: "http://sainath-tech.vercel.app/",
    content: () => {
      return (
        <p>
          Our innovative Restaurant App transforms the dining experience by providing a seamless digital menu and ordering system that enhances customer satisfaction and operational efficiency. The platform features an intuitive digital menu with high-quality food photography, detailed descriptions, and real-time pricing updates that keep customers informed and engaged. <br /> <br />
          The app streamlines the ordering process with secure payment processing, order tracking capabilities, and automated kitchen notifications that reduce wait times and improve order accuracy. Built-in customer feedback systems and loyalty programs help restaurants build stronger relationships with their patrons while gathering valuable insights for menu optimization. The platform&apos;s comprehensive backend management system allows restaurant staff to efficiently manage orders, track inventory, and analyze customer preferences to drive business growth.
        </p>
      );
    },
  },
  {
    description: "Comprehensive travel Planning and book Platform",
    title: "Travel Booking Portal",
    src: "https://www.vyomanexgen.com/images/63be5f30749ff7be7bb4a633ffac763f%20(1).gif",
    ctaText: "Link",
    ctaLink: "http://sainath-tech.vercel.app/",
    content: () => {
      return (
        <p>
          Our comprehensive Travel Booking Portal revolutionizes the way travelers plan and book their journeys with an all-in-one platform that simplifies every aspect of travel planning. The platform integrates flight bookings, hotel reservations, car rentals, and activity bookings into a seamless user experience, with intelligent search algorithms that find the best deals and optimal travel combinations. <br /> <br />
          Advanced features include personalized travel recommendations based on user preferences, real-time price tracking and alerts, comprehensive travel insurance options, and detailed destination guides with local insights. The platform&apos;s mobile-first design ensures travelers can manage their bookings on-the-go, while the integrated itinerary management system keeps all travel details organized in one place. Built with robust booking engines and secure payment processing, the platform provides reliable service for millions of travelers while offering comprehensive customer support and flexible cancellation policies.
        </p>
      );
    },
  },
  {
    description: "Healthcare management system for Healthcare providers",
    title: "Health Care Mobile App",
    src: "https://www.vyomanexgen.com/images/original-632b549f7b0d06bc33eadac1830ccc4a.gif",
    ctaText: "Link",
    ctaLink: "http://sainath-tech.vercel.app/",
    content: () => {
      return (
        <p>
          Our comprehensive Healthcare Management System empowers healthcare providers with cutting-edge tools to deliver exceptional patient care while streamlining administrative operations. The platform integrates electronic health records, appointment scheduling, patient communication tools, and billing systems into a unified, user-friendly interface that enhances clinical workflows and reduces administrative burden. <br /> <br />
          Built with HIPAA-compliant security standards, the system ensures patient data privacy and security while providing healthcare professionals with real-time access to critical patient information. Advanced features include automated appointment reminders, secure patient messaging, telemedicine capabilities, and comprehensive reporting tools that support evidence-based decision making. The platform&apos;s mobile-first design enables healthcare providers to access patient information and manage care from anywhere, while the integrated analytics dashboard provides insights into practice performance, patient outcomes, and operational efficiency.
        </p>
      );
    },
  },
];

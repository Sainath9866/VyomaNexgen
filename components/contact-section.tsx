"use client";

import { GlobeDemo } from "@/components/globeDemo";

export function ContactSection() {
  return (
    <div className="w-full pt-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-1">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Contact Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact us from any part of the world
          </p>
        </div>

        {/* Contact Form and Globe - Simple Flex Layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-center max-w-7xl mx-auto">
          {/* Contact Form - Left Side */}
          <div className="w-full lg:w-1/2 space-y-2">
            <h3 className="text-2xl font-bold text-foreground">
              Have a Project in Mind?
            </h3>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <div className="flex">
                  <div className="px-4 py-3 bg-gray-100 dark:bg-gray-700 text-muted-foreground border border-r-0 border-gray-300 dark:border-gray-600 rounded-l-lg flex items-center">
                    +91
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-r-lg bg-white dark:bg-gray-800 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Make It Happen
              </button>
            </form>
          </div>

          {/* Original Globe - Right Side */}
          <div className="w-full lg:w-1/2">
            <GlobeDemo />
          </div>
        </div>

        {/* Motivational Text Below */}
        <div className="text-center ">
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            You bring the{" "}
            <span className="text-purple-600">idea</span>,{" "}
            We&apos;ll bring the{" "}
            <span className="text-purple-600">code</span>,{" "}
            <span className="text-purple-600">design</span>{" "}
            and{" "}
            <span className="text-purple-600">momentum</span>
          </p>
        </div>
      </div>
    </div>
  );
}

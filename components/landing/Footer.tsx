import Cta from "@/constant/Cta";
import Link from "next/link";
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Github, YoutubeIcon, XIcon } from "lucide-react";

const footerItems = [
  { title: "Home", path: "/" },
  { title: "Features", path: "#" },
  { title: "Overview", path: "#" },
  { title: "Metrics", path: "#" },
  { title: "Engagement", path: "#" },
];

const socialIcons = [
  { icon: Facebook, path: "#", name: "Facebook" },
  { icon: Twitter, path: "#", name: "Twitter" },
  { icon: Instagram, path: "#", name: "Instagram" },
  { icon: XIcon, path: "#", name: "X" },
  { icon: YoutubeIcon, path: "#", name: "Youtube" },
];

export default function Footer() {
  return (
    <footer>
      <section className="bg-[#313235] py-16 md:py-24">
        <div className="wrapper max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-white max-w-2xl md:max-w-4xl">
              <span className="text-sm md:text-base uppercase font-medium tracking-wider text-[#FAFDFF]/80">
                Try It Now
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAFDFF] mt-3 mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-base md:text-lg text-[#FAFDFF]/90 max-w-xl leading-relaxed">
                Your reviews and reports help build a safer, fraud-free space.
                Join Revbuddi and be a part of the change.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto mt-8 md:mt-0">
              <Cta className="bg-baseColor hover:bg-baseColor/90 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl text-center">
                Get Started
              </Cta>
              <Cta className="bg-transparent border-2 border-[#FAFDFF]/30 hover:border-[#FAFDFF]/50 text-white font-medium py-3 px-6 rounded-lg transition-all">
                Learn More
              </Cta>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#202123] flex flex-col items-center justify-center leading-[5] py-8 text-sm text-white wrapper">
        <ul className="flex items-center justify-center gap-4 text-sm text-white">
          {footerItems.map(({ title, path }, idx) => (
            <li key={idx}>
              <Link href={path} className="block py-2 md:py-0">
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <p>©{new Date().getFullYear()} RevBuddii, INC. All rights reserved</p>
        <div className="flex gap-6">
          <Link href="#" className="block underline text-xs py-2 md:py-0">
            Privacy Policy
          </Link>
          <Link href="#" className="block underline text-xs py-2 md:py-0">
            Terms & Conditions
          </Link>
        </div>
        <div className="flex items-center justify-center gap-6 mt-4">
          {socialIcons.map((social, idx) => {
            const IconComponent = social.icon;
            return (
              <Link 
                href={social.path} 
                key={idx} 
                aria-label={social.name}
                className="text-white/80 hover:text-white transition-colors"
              >
                <IconComponent size={15} />
              </Link>
            );
          })}
        </div>
      </section>
    </footer>
  );
}
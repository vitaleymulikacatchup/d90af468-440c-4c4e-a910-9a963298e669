"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from "@/components/navbar/NavbarStyleMinimal";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import FeatureCardEight from "@/components/sections/feature/FeatureCardEight";
import FooterSocial from "@/components/sections/footer/FooterSocial";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="small"
      background="radialGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Alex Chen"
          button={{
            text: "Hire Me",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCarouselLogo
          logoText="ALEX CHEN"
          description="Frontend Developer specializing in React, Next.js, and modern web technologies. Creating exceptional user experiences through clean code and innovative design."
          buttons={[
            {
              text: "View Portfolio",
              href: "feature"
            },
            {
              text: "Contact Me",
              href: "contact"
            }
          ]}
          slides={[
            {
              imageSrc: "https://pixabay.com/get/g3787e50a33211517a544dc27c6443fcd9b8437a14003c2c7d28d31072ba4b7335d42f0e8fc6722a81034638750a1855f96fa0225af79065223bb6d3021d18515_1280.jpg",
              imageAlt: "Alex Chen professional workspace"
            },
            {
              imageSrc: "https://pixabay.com/get/g774d8fa905ca9e338346a3724d3556922920444fc6aa7066413e5cd54ea673f80c8ef11fd7c385e9001586742b437bf7d307671a6a679ec0b14037767a1025ae_1280.jpg",
              imageAlt: "Frontend development setup"
            },
            {
              imageSrc: "https://pixabay.com/get/g7891ce9093aa99119a4e6ee34b2717a749bfe6d99f52746d198f0ab59dbb759bb68cac1d048aa660fbb4a337fb0a6655927830484b90c51f116810eacd04c37d_1280.jpg",
              imageAlt: "Modern developer office"
            },
            {
              imageSrc: "https://pixabay.com/get/gda72d8aaa927d3952d5f3375ec416089defd6b862ecb52277753813bac08d70f93a6a5a4484e6fbc780eb0f5b00d2701729dba615ccda394225f61b73cac2704_1280.jpg",
              imageAlt: "Professional developer portrait"
            },
            {
              imageSrc: "https://pixabay.com/get/gcd8e07aa0f92dd71e77d6cbeab8fbc58707b5e3232a6b011dbe3a353e0fdb91e346fc08e4bdd5fac3cb3c6eddae0c9aa1bfd7b77dedfcd7eb22cacda77c6bf6b_1280.jpg",
              imageAlt: "JavaScript coding environment"
            }
          ]}
          autoplayDelay={4000}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Me"
          description={[
            "I'm a passionate frontend developer with 5+ years of experience creating modern, responsive web applications. I specialize in React, Next.js, TypeScript, and modern CSS frameworks.",
            "My expertise spans from pixel-perfect UI implementation to complex state management and performance optimization. I love turning design concepts into interactive, accessible, and performant web experiences."
          ]}
          buttons={[
            {
              text: "Download Resume",
              href: "https://example.com/resume.pdf"
            },
            {
              text: "View Skills",
              href: "feature"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Alex Chen"
          copyrightText="© 2025 Alex Chen. All rights reserved."
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Frontend Development",
                  href: "/services"
                },
                {
                  label: "React Applications",
                  href: "/services"
                },
                {
                  label: "Next.js Projects",
                  href: "/services"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "My Story",
                  href: "/about"
                },
                {
                  label: "Portfolio",
                  href: "/portfolio"
                },
                {
                  label: "Blog",
                  href: "/blog"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Get In Touch",
                  href: "/contact"
                },
                {
                  label: "FAQ",
                  href: "/about"
                },
                {
                  label: "Pricing",
                  href: "/services"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Github,
              href: "https://github.com/alexchen",
              ariaLabel: "GitHub Profile"
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/in/alexchen",
              ariaLabel: "LinkedIn Profile"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/alexchen_dev",
              ariaLabel: "Twitter Profile"
            },
            {
              icon: Mail,
              href: "mailto:alex@example.com",
              ariaLabel: "Email Contact"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
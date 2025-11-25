"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from "@/components/navbar/NavbarStyleMinimal";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import FooterSocial from "@/components/sections/footer/FooterSocial";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
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
            href: "/contact"
          }}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="About Me"
          description={[
            "I'm a passionate frontend developer with 5+ years of experience creating modern, responsive web applications. I specialize in React, Next.js, TypeScript, and modern CSS frameworks.",
            "My expertise spans from pixel-perfect UI implementation to complex state management and performance optimization. I love turning design concepts into interactive, accessible, and performant web experiences.",
            "When I'm not coding, I enjoy contributing to open-source projects, writing technical articles, and staying up-to-date with the latest web development trends and best practices."
          ]}
          buttons={[
            {
              text: "Download Resume",
              href: "https://example.com/resume.pdf"
            },
            {
              text: "View Portfolio",
              href: "/portfolio"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Common questions about my development process and services"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What technologies do you specialize in?",
              content: "I specialize in React, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, and various modern frontend frameworks. I also work with Node.js, Express, and databases for full-stack projects."
            },
            {
              id: "2",
              title: "What's your typical project timeline?",
              content: "Project timelines vary based on complexity. A landing page typically takes 1-2 weeks, while a full web application can take 6-12 weeks. I provide detailed timelines during our initial consultation."
            },
            {
              id: "3",
              title: "Do you provide ongoing support?",
              content: "Yes, I offer ongoing support and maintenance packages. This includes bug fixes, performance monitoring, security updates, and feature enhancements based on your needs."
            },
            {
              id: "4",
              title: "Can you work with existing design mockups?",
              content: "Absolutely! I can work with Figma, Adobe XD, Sketch, or any other design files. I ensure pixel-perfect implementation while maintaining responsive design principles."
            },
            {
              id: "5",
              title: "What's your development process?",
              content: "I follow an agile approach: discovery & planning, design review, development with regular check-ins, testing & quality assurance, deployment, and post-launch support."
            }
          ]}
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
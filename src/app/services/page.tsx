"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from "@/components/navbar/NavbarStyleMinimal";
import PricingCardTwo from "@/components/sections/pricing/PricingCardTwo";
import TestimonialCardThree from "@/components/sections/testimonial/TestimonialCardThree";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import FooterSocial from "@/components/sections/footer/FooterSocial";
import { Github, Linkedin, Twitter, Mail, Sparkles, Award } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
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

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Development Packages"
          description="Choose the perfect package for your project needs"
          tag="Pricing"
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "1",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$2,500",
              subtitle: "Perfect for small to medium projects",
              buttons: [
                {
                  text: "Get Started",
                  href: "/contact"
                },
                {
                  text: "View Details",
                  href: "https://example.com/landing-package"
                }
              ],
              features: [
                "Responsive landing page",
                "React/Next.js development",
                "Mobile-first design",
                "SEO optimization",
                "1 month support"
              ]
            },
            {
              id: "2",
              badge: "Enterprise",
              badgeIcon: Award,
              price: "$8,000",
              subtitle: "Comprehensive solution for businesses",
              buttons: [
                {
                  text: "Contact Sales",
                  href: "/contact"
                },
                {
                  text: "Learn More",
                  href: "https://example.com/web-app-package"
                }
              ],
              features: [
                "Full web application",
                "Backend integration",
                "User authentication",
                "Database design",
                "3 months support",
                "Performance optimization"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardThree
          title="What Clients Say"
          description="Real feedback from satisfied clients and collaborators"
          tag="Testimonials"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              handle: "@sarahj_startup",
              testimonial: "Alex delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made our project a huge success.",
              imageSrc: "https://pixabay.com/get/g33b31c94344858097f87518819f03dfc6c32469d3cea66c5f5211e95901a7f114990292df790167a6c11e0781c5a0ca263c8c623b9b56016e5ff17471dfd6169_1280.jpg",
              imageAlt: "Sarah Johnson client portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              handle: "@mchen_tech",
              testimonial: "Working with Alex was a game-changer for our company. He transformed our outdated website into a modern, fast, and user-friendly application.",
              imageSrc: "https://pixabay.com/get/g7ac9f105b1dec565a99bb3aaea536198aa1e2c38a6024466e82d895b55ae9e37bbc162c79f8ce37e111cc97fdeec20909e601f02c8e3c53b474e71b176f75e9c_1280.jpg",
              imageAlt: "Michael Chen client portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              handle: "@emily_marketing",
              testimonial: "The React dashboard Alex built for us improved our team's productivity by 300%. His code quality and documentation are outstanding.",
              imageSrc: "https://pixabay.com/get/g26cfb173f6914576ae562c304e0864ea11601642db4261a230a1dfad8a2eedfc904eebf1a28f89b3ff2005d8fe3f7c87d58c61d4eac6923f864db24262090a60_1280.jpg",
              imageAlt: "Emily Rodriguez client portrait"
            },
            {
              id: "4",
              name: "David Kim",
              handle: "@davidkim_cto",
              testimonial: "Alex's expertise in Next.js and performance optimization helped us achieve 90+ Lighthouse scores. Highly recommended for any serious web project.",
              imageSrc: "https://pixabay.com/get/gf13bde5bd1bd7ebe7d806b6a68ae7acf4641a5260601dfa416ef6422ebd5a7205c7e01133d7d0eac5202facb99aa883d4e965ed7a8a4e2939a38a2057e3f615c_1280.jpg",
              imageAlt: "David Kim client portrait"
            }
          ]}
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
"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from "@/components/navbar/NavbarStyleMinimal";
import FeatureCardEight from "@/components/sections/feature/FeatureCardEight";
import ProductCardTwo from "@/components/sections/product/ProductCardTwo";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import FooterSocial from "@/components/sections/footer/FooterSocial";
import { Github, Linkedin, Twitter, Mail, Code, Calendar, ThumbsUp, Clock } from "lucide-react";
import Link from "next/link";

export default function PortfolioPage() {
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

      <div id="feature" data-section="feature">
        <FeatureCardEight
          title="My Projects"
          description="Explore my latest work and see how I bring ideas to life"
          tag="Portfolio"
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "E-commerce Platform",
              description: "Full-stack React application with Next.js, TypeScript, and Stripe integration. Features include product catalog, shopping cart, user authentication, and admin dashboard.",
              imageSrc: "https://pixabay.com/get/gc6367b16c8a4a9ee3b25d3530a562398a0a4b8f6fd12f69c36314e9fff5b09d889165a05b37dbc966f3cbfc683a79f4165901ecd4be43bfad16c269ef542b487_1280.jpg",
              imageAlt: "E-commerce platform dashboard"
            },
            {
              id: 2,
              title: "SaaS Dashboard",
              description: "Modern analytics dashboard built with React, D3.js, and real-time data visualization. Includes user management, reporting tools, and responsive design.",
              imageSrc: "https://pixabay.com/get/g0212cd265ddc093be4eeb02b92a84604f7cc2e37c2193a4b005337d490fc4587eaad683a5d3b09a82eeee3f0603c86de91c4c00430299bab7fd1bd5e6495054d_1280.jpg",
              imageAlt: "SaaS dashboard interface"
            },
            {
              id: 3,
              title: "Mobile App Interface",
              description: "React Native application for task management with offline support, push notifications, and seamless synchronization across devices.",
              imageSrc: "https://pixabay.com/get/ge8b1afe178500acbc19f1a8430ec2de4eff83ae65039efbbe9f46acf1468dccab7e0bf2dc454270ec3da95e47202c6a7bfcdcffcc8875491f1431aa056294352_1280.jpg",
              imageAlt: "Mobile app interface design"
            },
            {
              id: 4,
              title: "Portfolio Website",
              description: "Custom-built portfolio site using Next.js, Framer Motion animations, and optimized performance. Features dark/light themes and accessibility compliance.",
              imageSrc: "https://pixabay.com/get/ge2d4ac0803e2ae5ac8ed3d3df00afd93439f16a1a9d0e0368fa7e11759dd8ed9c29315774959e8d5a32c0a2edd1cd29b746339c59cf5e2ef05211b39afa9951e_1280.jpg",
              imageAlt: "Portfolio website mockup"
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Services & Expertise"
          description="Professional web development services tailored to your needs"
          tag="Services"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "Frontend Development",
              name: "React Application Development",
              price: "Starting at $3,000",
              rating: 5,
              reviewCount: "25+",
              imageSrc: "https://pixabay.com/get/g1b9a2d27c86f1ba4f93add520721105503102894820d4c4812ce8a438c68f066c19a2bd862994062cb2104ae51e2aaba88fe6d4e67af4005873da2381ee9d2de_1280.png",
              imageAlt: "React development service"
            },
            {
              id: "2",
              brand: "Full-Stack Development",
              name: "Next.js Web Applications",
              price: "Starting at $5,000",
              rating: 5,
              reviewCount: "20+",
              imageSrc: "https://pixabay.com/get/g178ce2a21214540e5d6153e897028dfdf9f5b44bc4dfc2f149e0cd7590efa1f735a3681ba8dead78dd3500b6e022cc62ecf1d37fef95495f46bd4b7dfb4ff6e9_1280.png",
              imageAlt: "Next.js development service"
            },
            {
              id: "3",
              brand: "UI/UX Implementation",
              name: "Responsive Web Design",
              price: "Starting at $2,000",
              rating: 5,
              reviewCount: "30+",
              imageSrc: "https://pixabay.com/get/g06803a3442f527b6d1d4aafe34b1473ae4847f50c300e51e584aedbd043008368a6d9b682c5d94c32f807bd931735b1c398eb2390be1289a9b263daaa32147e6_1280.jpg",
              imageAlt: "Responsive design service"
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardOne
          title="My Impact"
          description="Numbers that reflect my dedication and success in web development"
          tag="Achievements"
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "50+",
              title: "Projects",
              description: "Successful web applications delivered",
              icon: Code
            },
            {
              id: "2",
              value: "5+",
              title: "Years",
              description: "Professional development experience",
              icon: Calendar
            },
            {
              id: "3",
              value: "99%",
              title: "Satisfaction",
              description: "Client satisfaction rate",
              icon: ThumbsUp
            },
            {
              id: "4",
              value: "24/7",
              title: "Support",
              description: "Available for urgent project needs",
              icon: Clock
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
"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from "@/components/navbar/NavbarStyleMinimal";
import BlogCardOne from "@/components/sections/blog/BlogCardOne";
import FooterSocial from "@/components/sections/footer/FooterSocial";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
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

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Latest Articles"
          description="Insights, tutorials, and thoughts on modern web development"
          tag="Blog"
          textboxLayout="default"
          animationType="slide-up"
          blogs={[
            {
              id: "1",
              category: "React",
              title: "Building Scalable React Applications",
              excerpt: "Best practices for structuring and organizing large React applications with proper state management and component architecture.",
              imageSrc: "https://pixabay.com/get/ge3ca8420fa837253bad4169d76ba8f709c80cda9c2eb841d370d2cf21b38fe23490c4ec069f17eab97408050404c3709fb4f39df7a2925b3635cdb40eb6d292d_1280.png",
              imageAlt: "React development article",
              authorName: "Alex Chen",
              authorAvatar: "https://pixabay.com/get/gda72d8aaa927d3952d5f3375ec416089defd6b862ecb52277753813bac08d70f93a6a5a4484e6fbc780eb0f5b00d2701729dba615ccda394225f61b73cac2704_1280.jpg",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Next.js",
              title: "Next.js Performance Optimization Tips",
              excerpt: "Advanced techniques for optimizing Next.js applications including image optimization, code splitting, and caching strategies.",
              imageSrc: "https://pixabay.com/get/g10c3d8723718e32530c5f3aa88acda2b538f87f3343abbe0db4bb59740c90ed2235719db7b58c22485e512eda7717ca7c8ba9620515632ed79776b868909d7b2_1280.png",
              imageAlt: "Next.js performance article",
              authorName: "Alex Chen",
              authorAvatar: "https://pixabay.com/get/gda72d8aaa927d3952d5f3375ec416089defd6b862ecb52277753813bac08d70f93a6a5a4484e6fbc780eb0f5b00d2701729dba615ccda394225f61b73cac2704_1280.jpg",
              date: "10 Jan 2025"
            },
            {
              id: "3",
              category: "Frontend",
              title: "Modern CSS Techniques for 2025",
              excerpt: "Exploring the latest CSS features including container queries, CSS Grid enhancements, and modern layout patterns.",
              imageSrc: "https://pixabay.com/get/g853dbba7f43e36dcc135a0f31d43a47647e48215d2340399a2bbe2eaafd5e37767d3d804e24ba069a5709f662b796b27603c1d8e2f6ccbc0993140bba4cc9be5_1280.png",
              imageAlt: "Modern CSS techniques article",
              authorName: "Alex Chen",
              authorAvatar: "https://pixabay.com/get/gda72d8aaa927d3952d5f3375ec416089defd6b862ecb52277753813bac08d70f93a6a5a4484e6fbc780eb0f5b00d2701729dba615ccda394225f61b73cac2704_1280.jpg",
              date: "5 Jan 2025"
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
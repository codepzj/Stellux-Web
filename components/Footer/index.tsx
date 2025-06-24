"use client";

import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer
      className="bg-background section-padding-y"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-padding-x container mx-auto flex flex-col gap-12 lg:gap-16">
        <div className="flex flex-col gap-12">
          {/* Top Section */}
          <div className="flex flex-col gap-12 md:items-center md:justify-between lg:flex-row">
            {/* Logo and Navigation */}
            <div className="flex flex-col items-center gap-12 lg:flex-row">
              {/* Logo */}
              <Link href="/" aria-label="Go to homepage">
                {/* <Logo /> */}
              </Link>

              {/* Main Navigation */}
              <nav
                className="flex flex-col items-center gap-6 text-center md:flex-row md:gap-8"
                aria-label="Footer navigation"
              >
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Support
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQ
                </Link>
              </nav>
            </div>

            {/* Newsletter Form */}
            <form
              className="flex w-full flex-col gap-2 md:w-auto md:flex-row"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter subscription form"
            >
              <Input
                type="email"
                placeholder="Your email"
                className="md:w-[242px]"
                required
                aria-required="true"
                aria-label="Enter your email for newsletter"
              />
              <Button
                type="submit"
                className="w-full md:w-auto"
                aria-label="Subscribe to our newsletter"
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Section Divider */}
          <Separator role="presentation" />

          {/* Bottom Section */}
          <div className="flex flex-col items-center justify-between gap-12 text-center lg:flex-row">
            {/* Copyright Text */}
            <p className="text-muted-foreground order-2 md:order-1">
              <span>Copyright © {new Date().getFullYear()}</span>{" "}
              <Link href="/" className="hover:underline">
                shadcndesign.com
              </Link>
              . All rights reserved.
            </p>

            {/* Legal Navigation */}
            <nav
              className="order-1 flex flex-col items-center gap-6 md:order-2 md:flex-row md:gap-8"
              aria-label="Legal links"
            >
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Cookies Settings
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

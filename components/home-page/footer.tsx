// React and Next.js imports
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// Local component imports
import { Section, Container } from "../craft";

// Asset imports
import Logo from "@/public/logo.svg";

const Footer: React.FC = () => {
  return (
    <footer>
      <Section>
        <Container className="grid gap-12 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
          <div className="grid gap-6">
            <Link href="/" aria-label="Go to home">
              <h3 className="sr-only">Jansen Accountants</h3>
              <Image
                src={Logo}
                alt="Jansen Accountants Logo"
                width={120}
                height={27.27}
                className="transition-all hover:opacity-75 dark:invert"
              />
            </Link>
            <p>
              <Balancer>
                Jansen Accountants provides expert accounting services tailored to your needs.
              </Balancer>
            </p>
            <p className="text-muted-foreground">
              ©{" "}
              <Link href="https://jansenaccountants.com" target="_blank" rel="noopener noreferrer">
                Jansen Accountants
              </Link>
              . All rights reserved. 2024-present.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2" aria-label="Website Navigation">
            <h5>Website</h5>
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>

          {/* Legal Links */}
          <nav className="flex flex-col gap-2" aria-label="Legal Navigation">
            <h5>Legal</h5>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </nav>
        </Container>
      </Section>
    </footer>
  );
};

export default Footer;

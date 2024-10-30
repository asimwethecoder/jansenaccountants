// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "../ui/button";

// Image URL from Unsplash
const imageUrl =
  "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=80&w=1080";

const Hero = () => {
  return (
    <Section>
      <Container>
        <div>
          <Button
            asChild
            className="mb-6 w-fit"
            size={"sm"}
            variant={"outline"}
          >
            <Link className="not-prose" href="https://9d8.dev">
              Explore our financial expertise <ArrowRight className="w-4" />
            </Link>
          </Button>
          <h1>
            <Balancer>
              Empowering businesses with expert accounting and advisory services
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>
              At Jansen Accountants, we provide comprehensive accounting, tax, and consulting services 
              tailored to your business needs. Our team delivers trusted advice and practical solutions 
              to help you navigate financial complexities and achieve sustainable growth.
            </Balancer>
          </h3>
          <div className="not-prose my-8 h-96 w-full overflow-hidden rounded-lg border md:h-[480px] md:rounded-xl">
            <Image
              className="h-full w-full object-cover object-bottom"
              src={imageUrl}
              width={1920}
              height={1080}
              alt="Accounting and Finance Services"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;

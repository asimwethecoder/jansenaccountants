// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// UI component imports
import * as Craft from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Auditing from "@/public/auditing.jpg";

const FeatureLeft = () => {
  return (
    <Craft.Section>
      <Craft.Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          <Image
            src={Auditing}
            alt="Auditing services"
            className="responsive4"
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex flex-col gap-6 py-8">
          <h3 className="!my-0">Expert Auditing Services</h3>
          <p className="font-light leading-[1.4] opacity-70">
            Ensure your financial records are accurate and compliant with 
            our professional auditing services. Our team delivers thorough 
            audits that help identify risks and opportunities for improvement, 
            providing you with clear insights into your financial health.
          </p>
          <div className="not-prose flex items-center gap-2">
            <Button className="w-fit" asChild>
              <Link href="#">Get Started</Link>
            </Button>
            <Button className="w-fit" variant="link" asChild>
              <Link href="#">Learn More {"->"}</Link>
            </Button>
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default FeatureLeft;

// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// UI component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Taxes from "@/public/taxes.jpg";

const FeatureRight = () => {
  return (
    <Section>
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-6 py-8">
          <h3 className="!my-0">Expert Tax Planning Services</h3>
          <p className="font-light leading-[1.4] opacity-70">
            At Jansen Accountants, our tax planning services go beyond simple tax compliance. We analyze your financial situation to create tax-efficient strategies that align with your business goals, ensuring that you capitalize on available deductions, credits, and incentives.
          </p>
          <p className="font-light leading-[1.4] opacity-70">
            Our team of experienced tax professionals stays up-to-date with the latest regulations and industry best practices, helping you minimize liabilities and avoid unnecessary penalties. Whether you are a small business or an established corporation, we tailor our approach to suit your specific needs and goals.
          </p>
          <p className="font-light leading-[1.4] opacity-70">
            By partnering with us, you can rest assured that your tax planning is in expert hands, allowing you to focus on what matters most—growing your business and achieving financial success.
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
        <div className="not-prose relative flex h-auto overflow-hidden rounded-lg border">
          <Image
            src={Taxes}
            alt="Tax Planning Services"
            className="object-cover w-full h-full"
            layout="responsive3"  
            width={700}          
            height={700}         
          />
        </div>
      </Container>
    </Section>
  );
};

export default FeatureRight;

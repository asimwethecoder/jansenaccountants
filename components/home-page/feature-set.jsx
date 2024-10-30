import * as React from "react";
import Image from "next/image";

import { Section, Container } from "@/components/craft";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    title: "Bookkeeping & Accounting",
    description:
      "Ensure your financial records are accurate and up to date. Our team provides tailored bookkeeping services to help you stay compliant and financially organized.",
    src: "https://images.unsplash.com/photo-1721137287642-43b251bd6f00?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Tax Planning & Preparation",
    description:
      "Optimize your tax strategy with our expert tax planning services. We ensure that your tax filings are accurate and help you minimize liabilities through strategic planning.",
    src: "https://images.unsplash.com/photo-1507730690594-f21182eee8b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Audit & Assurance",
    description:
      "Gain confidence in your financial statements with our comprehensive audit and assurance services. We provide thorough evaluations to ensure compliance and accuracy.",
    src: "https://images.unsplash.com/photo-1721041879224-ff011603ada5?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Financial Consulting",
    description:
      "Make informed business decisions with our financial consulting services. From budgeting to investment strategies, we offer expert advice tailored to your business goals.",
    src: "https://images.unsplash.com/photo-1720983627245-ca4a6913016f?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Payroll Services",
    description:
      "Simplify your payroll process with our full-service payroll solutions. We handle everything from wage calculation to tax deductions, ensuring compliance with local laws.",
    src: "https://images.unsplash.com/photo-1720887236665-43caad593cdf?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const FeatureSet = () => {
  return (
    <Section>
      <Container>
        <h2 className="!mt-0 mb-4">Our Services</h2>
        <p>
          At Jansen Accountants, we offer a range of accounting services to help your business thrive. From financial reporting to tax planning, we provide expert guidance tailored to your needs.
        </p>
        <Carousel className="mt-6 w-full">
          <CarouselContent className="-ml-1">
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="relative overflow-hidden">
                    <Image
                      src={service.src}
                      alt={service.title}
                      width={720}
                      height={480}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <CardHeader className="relative z-10 bg-black bg-opacity-50 p-4 text-white">
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="not-prose flex aspect-square items-center justify-center">
                      {/* Additional content like a button could go here */}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </Section>
  );
};

export default FeatureSet;

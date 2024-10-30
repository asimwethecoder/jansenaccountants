import * as React from "react";
//import Image from "next/image";

// Component Imports
import Hero from "@/components/home-page/hero";
import { Container, Section, Main } from "@/components/craft";
import FeatureLeft from "@/components/home-page/feature-left";
import FeatureRight from "@/components/home-page/feature-right";
import FeatureSet from "@/components/home-page/feature-set";
import CTA from "@/components/home-page/cta";
import Footer from "@/components/home-page/footer";

// Home Component
const Home: React.FC = () => {
  return (
    <Main>
      <Section>
        <Container>
          <Hero />
          <FeatureLeft />
          <FeatureRight />
          <FeatureSet />
          <CTA />
          <Footer />
        </Container>
      </Section>
    </Main>
  );
};

export default Home;

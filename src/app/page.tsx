import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="">Hi! I&apos;m Yash</Heading>
      <Paragraph className="max-w-xl mt-4">
        Founder & Product Engineer @ PieceOfCode
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m currently running my own small venture called PieceOfCode into
        software space, working on some of my own projects. I have{" "}
        <Highlight>7 years of experience</Highlight> building scalable web apps
        that are performance optimized and good looking.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I like to talk about{" "}
        <Highlight>
          Software, Technology, Products, recently have started vneturing in AI/
          ML and Robotics.
        </Highlight>
        If you like to talk about these topic, feel free to give me a ping!
      </Paragraph>
      <Heading as="h2" className=" text-lg md:text-lg lg:text-lg mt-20 mb-4">
        What I&apos;ve been working on
      </Heading>
      <Products />
      {/* <TechStack /> */}
    </Container>
  );
}

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
        I&apos;m currently running my own small venture called PieceOfCode Labs
        into software space, working on some of my own projects. I have{" "}
        <Highlight>been enjoying building software for past 7 years</Highlight>
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I like to talk about{" "}
        <Highlight>
          Software, Technology, Products, recently have started venturing and
          learning into AI/ ML and Robotics 🦾 space, if you are interested in
          these topics, feel free to ping me!
        </Highlight>
      </Paragraph>
      <Heading as="h2" className=" text-lg md:text-lg lg:text-lg mt-20 mb-4">
        Some of the projects I have been working on 👇🏻
      </Heading>
      <Products />
      {/* <TechStack /> */}
    </Container>
  );
}

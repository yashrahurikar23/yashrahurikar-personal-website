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
        Product Engineer @Tweeny.ai | @PieceOfCode
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m currently working with Tweeny Technologies, building products
        for the future of AI.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I have also worked on couple of project of my own for solving real world
        problems.
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

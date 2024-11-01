import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { Pharalax } from "@/app/_components/pharalax";
import { About  } from "@/app/_components/about";
import { SocialMedia } from "@/app/_components/social-media";
import { ContactMe } from "@/app/_components/contact-me";

export default function Index() {

  return (
    <main>
      <Container>
        <Intro />
        <Pharalax
          id={"bg-pharalax-1"}
          subtitle={"Hi, my name is"}
          mainTitle={"John Doe"}
          belowTitle={"An Awesome Developer, who loves to code and write blogs"}
          minHeight={false}
        />
        <About />
        <Pharalax
          id={"bg-pharalax-3"}
          minHeight={true}
          component={<SocialMedia />}
        />
        <ContactMe />
        <Pharalax
          id={"bg-pharalax-1"}
          mainTitle={"Good Bye,"}
          belowTitle={"Have a nice day !!"}
          minHeight={false}
        />
      </Container>
    </main>
  );
}

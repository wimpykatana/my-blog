import Link from "next/link";

export function Intro() {
  return (
    <section className="w-full flex-row flex items-center justify-between px-5 mt-8 mb-8">
      <h1 className="text-5xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link href={"/"}>Doe.</Link>
      </h1>
      <h4 className="text-center md:text-left text-lg md:pl-8">
        Visit my <Link href={"/posts"}><span className="underline">Blog</span></Link>
      </h4>
    </section>
  );
}

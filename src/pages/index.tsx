import Head from "next/head";

import type { Project } from "helpers/typeDefinitions";
import { getAllProjects } from "helpers/getProjects";
import Header from "ui/Header";
import About from "ui/About";
import Projects from "ui/Projects";
import Footer from "ui/Footer";

import type { GetStaticProps, InferGetStaticPropsType } from "next";

export default function Home({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Meta />
      <Header />
      <About />
      <Projects projects={projects} />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<{
  projects: Project[];
}> = async () => {
  const projects = getAllProjects();
  return {
    props: {
      projects,
    },
  };
};

function Meta(): JSX.Element {
  const title = "Aseem Gupta";
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={"Webfolio of a marketeer."} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://aseemgupta.com" />
      <meta
        property="og:image"
        content="https://bhutani.design/images/profile.jpeg"
      />
      <meta property="og:image:alt" content={title} />
    </Head>
  );
}

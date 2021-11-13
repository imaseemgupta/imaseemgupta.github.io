import Head from "next/head";

import type { Blog } from "helpers/typeDefinitions";
import { getAllBlogs, cleanupBlog } from "helpers/blog";
import Header from "ui/Header";
import About from "ui/About";
import GridSection from "ui/GridSection";
import Footer from "ui/Footer";
import db from "../../db.json";

import type { GetStaticProps } from "next";

export default function Home({ blogs }: StaticProps) {
  return (
    <>
      <Meta />
      <Header />
      <About />
      <GridSection title="Blog" id="blog" items={blogs} baseUrl="/blog/" />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const blogs = getAllBlogs().map(cleanupBlog);
  return {
    props: {
      blogs,
    },
  };
};

interface StaticProps {
  blogs: Blog[];
}

function Meta(): JSX.Element {
  return (
    <Head>
      <title>{db.title}</title>
      <meta property="og:title" content={db.title} />
      <meta property="og:description" content={db.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={db.website} />
      <meta property="og:image" content={db.profileImg} />
      <meta property="og:image:alt" content={db.title} />
    </Head>
  );
}

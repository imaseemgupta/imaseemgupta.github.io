import Head from "next/head";

import Header from "ui/Header";
import Markdown from "ui/Markdown";
import Footer from "ui/Footer";
import Siblings from "ui/Siblings";
import { getAllBlogs, getBlog } from "helpers/getBlog";
import { HeroSection } from "components/layout";
import { Tag } from "components/Filters";

import type { CSSProperties } from "react";
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import type { Blog } from "helpers/typeDefinitions";
import styled from "@emotion/styled";
import { Color } from "styles";
import { capitalise } from "helpers/tags";

export default function ProjectPage({
  data,
  content,
  next,
  prev,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  return (
    <>
      <Meta {...data} />
      <Header />
      <HeroImage project={data} />
      <Markdown markdown={content} project={data} />
      <Siblings next={next} prev={prev} />
      <Footer />
    </>
  );
}

function HeroImage({
  project,
  style,
}: {
  project: Blog;
  style?: CSSProperties;
}): JSX.Element {
  const { image, tags = [] } = project;
  return (
    <HeroSection
      style={{
        ...style,
        backgroundImage: `url(${image})`,
        height: "70vh",
      }}
    >
      <TagsContainer>
        {tags.map((tag) => (
          <CustomTag key={tag}>{capitalise(tag)}</CustomTag>
        ))}
      </TagsContainer>
    </HeroSection>
  );
}

const TagsContainer = styled.div`
  position: absolute;
  bottom: -1.5em;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`;

const CustomTag = styled(Tag)`
  cursor: initial;
  background-color: ${Color.Background_Primary};
`;

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = getAllBlogs();
  const paths = blogs.map(({ id }) => `/blog/${id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{
  data: Blog;
  content: string;
  next: Blog;
  prev: Blog;
}> = async ({ params }) => {
  const id = params?.id as string;
  return {
    props: getBlog(id),
  };
};

function Meta({
  name: title,
  id: projectId,
  description = "Portfolio of Mahima Bhutani.",
  image,
}: Blog): JSX.Element {
  const siteName = "Mahima Bhutani";
  const domainUrl = "https://bhutani.design";
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${domainUrl}${image}`
    : `${domainUrl}/images/profile.jpeg`;

  return (
    <Head>
      <title>
        {title} | {siteName}
      </title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={domainUrl + "/project/" + projectId} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={title} />
    </Head>
  );
}

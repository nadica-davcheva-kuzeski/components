import Head from "next/head";


import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function ArticlePage({ story }) {
  story = useStoryblokState(story);

  return (
    <div>
      <Head>
        <title>Article page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl text-center text-gray-600 p-16">Article Page</h1>
      <StoryblokComponent blok={story.content} />
    </div>
  );
};

export async function getStaticProps() {
    let slug = "article-page";
  
    let sbParams = {
      version: "draft", // or 'published'
    };
  
    const storyblokApi = getStoryblokApi();
    let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
  
    return {
      props: {
        story: data ? data.story : false,
        key: data ? data.story.id : false,
      },
      revalidate: 3600,
    };
  }
  
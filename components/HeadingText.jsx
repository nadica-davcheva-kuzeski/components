import { storyblokEditable } from "@storyblok/react";

const HeadingText = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h2 className="text-2xl mb-10">{blok.title}</h2>
      <div>{ blok.description}</div>
    </div>
  );
};

export default HeadingText;

import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Grid = ({ blok }) => {
  return (
    <div className="grid grid-cols-2 gap-8" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
        <div key={nestedBlok._uid}>
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        </div>
      ))}
    </div>
  );
};

export default Grid;

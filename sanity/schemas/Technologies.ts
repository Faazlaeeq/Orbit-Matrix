export const Technologies = {
  name: "technologies",
  title: "Technologies",
  type: "document",
  fields: [
     {
      name: "technology",
      title: "technology",
      type: "string",
    },
    {
    name: "logo",
    title: "logo",
    type: "image",
    options: { hotspot: true },
    fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },

    
  ],
};

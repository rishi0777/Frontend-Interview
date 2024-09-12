export const MOCK_FOLDER_DATA = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        { isFolder: false, name: "index.html" },
        { isFolder: false, name: "favicon.ico" },
        { isFolder: false, name: "manifest.json" },
        { isFolder: false, name: "robots.txt" },
      ],
    },
    {
      name: "src",
      isFolder: true,
      items: [
        {
          isFolder: true,
          name: "components",
          items: [
            {
              isFolder: true,
              name: "BrandFilter",
              items: [
                { isFolder: false, name: "index.js" },
                { isFolder: false, name: "index.css" },
              ],
            },
          ],
        },
        { isFolder: false, name: "App.js" },
        { isFolder: false, name: "index.css" },
        { isFolder: false, name: "index.js" },
      ],
    },
    { isFolder: false, name: "package.json" },
    { isFolder: false, name: "Readme.md" },
  ],
};

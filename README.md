# Exploring Chart Display and Configuration with Headless CMS

In this tutorial series, you will learn how to build a headless website using Storyblok and Next.js. Starting with the fundamental integration of Storyblok in Next.js, more advanced functionalities are explained in bite-sized content pieces, such as dynamic page rendering, dynamic menus, custom components, multilingual content and more.

The primary objective was to explore how we can display various charts using a headless CMS and to determine how to configure them.

## Requirements

To use this project you have to have a Storyblok account. If you don't have one yet you can register at [Storyblok](https://www.storyblok.com), it's free.

## How to get started?

### 1. Clone the repo

```sh
  $ git clone https://github.com/nadica-davcheva-kuzeski/nextjs-storyblock-charts.git
```

### 2. Install all dependecies 
```sh
$  yarn # or npm install
```

### 3. Adding the Access token
Create a new empty Space and exchange the preview token with your own in ```pages/_app.js```.

```js
// in pages/_app.js
storyblokInit({
  accessToken: "your-preview-token",
  use: [apiPlugin],
  components,
});
```

### 4. Run your project
Set the preview domain in <strong>Storyblok</strong> to `http://localhost:3000/`

```sh
# to run in developer mode
$ yarn dev # or npm run dev
```

```sh
# to build your project
$ yarn build # or npm run build
```



## Resources

- [Next.js docs](https://nextjs.org/docs/#setup)
- [Storyblok Next.js Ultimate Tutorial](https://www.storyblok.com/tp/nextjs-headless-cms-ultimate-tutorial)
- Tutorial: [Add a headless CMS to Next.js 3 in 5 minutes](https://www.storyblok.com/tp/add-a-headless-cms-to-next-js-in-5-minutes)

  
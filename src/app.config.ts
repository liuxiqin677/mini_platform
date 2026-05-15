export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/login/index',
  ],
  window: {
    backgroundColor: '#FAF5F0',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#FAF5F0',
    navigationBarTextStyle: 'black',
  },
  subPackages: [
    {
      root: 'explore',
      pages: [
        'mazeWord/index',
      ],
    },
    {
      root: 'book',
      pages: [
        'list/index',
      ],
    }
  ],
})

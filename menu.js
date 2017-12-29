module.exports = [
  { url: '/', name: 'Strona domowa' },
  {
    url: '/basics',
    name: 'Podstawowe pojęcia',
    children: [
      { url: '/basics/formatting-context', name: 'Formatting context' },
      { url: '/basics/normal-flow', name: 'Normal flow' },
      { url: '/basics/containing-block', name: 'Containing block' }
    ]
  },
  {
    url: '/position',
    name: 'Pozycjonowanie',
    children: [
      { url: '/position/static', name: 'statyczne' },
      { url: '/position/relative', name: 'relatywne' },
      { url: '/position/absolute', name: 'absolutne' }
    ]
  },
  { url: '/vertical-align', name: 'Vertical-align' }
]

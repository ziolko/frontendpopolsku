module.exports = [
  { url: '/', name: 'Strona domowa' },
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

module.exports = [
  { url: '/', name: 'Wstęp' },
  {
    url: '/position',
    name: 'Pozycjonowanie',
    children: [
      { url: '/position/static', name: 'statyczne' },
      { url: '/position/relative', name: 'relatywne' },
      { url: '/position/absolute', name: 'absolutne' }
    ]
  },
  { url: '/vertical-align', name: 'Vertical-align' },
  { url: '/vertical-align2', name: 'Vertical-align s' }
]

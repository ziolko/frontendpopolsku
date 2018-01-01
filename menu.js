module.exports = [
  { url: '/', name: 'Strona domowa' },
  {
    url: '/basics',
    name: 'Podstawy',
    children: [
      { url: '/basics/normal-flow', name: 'Normal flow' },
      { url: '/basics/floats', name: 'Floats' },
      { url: '/basics/collapsing-margins', name: 'Collapsing margins' },
      { url: '/basics/containing-block', name: 'Containing block' },
      { url: '/basics/vertical-align', name: 'Vertical-align' }
    ]
  },
  {
    url: '/position',
    name: 'Pozycjonowanie',
    children: [
      { url: '/position/absolute', name: 'Position: absolute' },
      { url: '/position/fixed', name: 'Position: fixed' }
    ]
  },
  {
    url: '/flexbox',
    name: 'Flexbox',
    children: []
  },
  {
    url: '/layout',
    name: 'Layout strony',
    children: []
  }
]

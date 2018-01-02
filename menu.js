module.exports = [
  { url: '/', name: 'Strona domowa' },
  {
    url: '/basics',
    name: 'Podstawy',
    children: [
      { url: '/basics/box-model', name: 'Box model' },
      { url: '/basics/normal-flow', name: 'Normal flow' },
      { url: '/basics/collapsing-margins', name: 'Collapsing margins' },
      { url: '/basics/position', name: 'Position' },
      { url: '/basics/containing-block', name: 'Containing block' },
      { url: '/basics/vertical-align', name: 'Vertical-align' },
      { url: '/basics/stacking-context', name: 'Stacking context' }
    ]
  },
  {
    url: '/applications',
    name: 'Praktyka'
  }
]

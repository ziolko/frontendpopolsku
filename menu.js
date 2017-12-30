module.exports = [
  { url: '/', name: 'Strona domowa' },
  {
    url: '/basics',
    name: 'Podstawy',
    children: [
      { url: '/basics/normal-flow', name: 'Normal flow' },
      { url: '/basics/block-formatting-context', name: 'Block formatting context' },
      { url: '/basics/containing-block', name: 'Containing block' }
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
  { url: '/vertical-align', name: 'Vertical-align' }
]

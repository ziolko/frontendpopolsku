export default new Promise(resolve => {
  if (!process.browser) {
    return
  }

  // const loaderScript = document.createElement('script')
  // loaderScript.type = 'text/javascript'
  // loaderScript.src = '/static/require.js'
  // loaderScript.addEventListener('load', () => {
    // window.require.config({ baseUrl: '/static/' })
    // window.require(['vs/editor/editor.main'], () => resolve(window.monaco))
  // })
  // document.body.appendChild(loaderScript)
})

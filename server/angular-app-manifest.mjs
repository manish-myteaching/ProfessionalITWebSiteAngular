
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ProfessionalITWebSiteAngular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ProfessionalITWebSiteAngular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 483, hash: 'cfbc0ab72233c27bc330394684643107ee05cff7e8ba5e523e4838521012397a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: '216ce8508af7ced1dc2c688b91e570ebcb4d4aa2fd76fe086b5b9d647a25f2a1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21637, hash: 'b27b56ffe3119ed5e32f1862ab9f92d85f9d07c618b6c94d123175a16ddfc683', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

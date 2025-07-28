
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
    'index.csr.html': {size: 483, hash: '0fac9c47901095062542663514c740cffd65dbcec9efbf199302112c8c726d73', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 996, hash: '623503f0922ea263a4988f58d43944b33d354233076952a84b012d11860c454a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21634, hash: '02c7482ba5d903cbb69a07491973bf2a1f01ba4d71fe79a9015773f6510acd49', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

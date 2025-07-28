
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://manish-myteaching.github.io/ProfessionalITWebSiteAngular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ProfessionalITWebSiteAngular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 518, hash: '602b833cf0f53c8431fd0dcbcccb9319162d01aec3c451a267bcfd76cf3c9e04', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1031, hash: '97dc8289828333e6586b860b59f2c9a22f324cad7be70f2e4c63b9bb87bf2cf8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21672, hash: '3769ab2b2460e2e94ea2fee84270843cea38bce973156b4bb6b3c9b93f78515a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};

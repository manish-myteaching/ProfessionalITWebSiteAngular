
export default {
  basePath: '/ProfessionalITWebSiteAngular',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};

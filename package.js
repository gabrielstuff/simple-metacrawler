Package.describe({
  summary: 'Simple server method that finds images, page name and description from an url',
  version: '0.1.4.1'
});

Package.on_use(function (api) {
  api.use('http');
  
  Npm.depends({cheerio: '0.17.0'});

  api.add_files('server/crawler.js', ['server']);

});

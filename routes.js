const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

//routes.add('blog', '/blog/:slug')
routes.add('home', '/')
routes.add('tracker', '/tracker')
routes.add('wishes', '/wishes')
routes.add('faq', '/faq')
routes.add('about', '/about')



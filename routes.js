const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

//routes.add('blog', '/blog/:slug')
routes.add('home', '/home')
routes.add('tracker', '/tracker')
routes.add('wishes', '/wishes')

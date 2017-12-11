import { Link, Router } from '../routes'
import HomeModule from './home'
import Tracker from '../components/Tracker/Tracker'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'


export default () => (
  <div className="header">  
  <Link route='home' params={{ slug: 'home' }}><a>Home | </a></Link>
  <Link route='tracker' params={{ slug: 'tracker' }}><a>Tracker | </a></Link>
  <Link route='wishes' params={{ slug: 'wishes' }}><a>Wishes</a></Link>
  <style jsx>{`
    .header{
      background-color: #0A1829;
      color: white;
      text-align: center;
    }
  `}</style>
  </div>
  /*
  <ul>
    <li><Link route='tracker' params={{ slug: 'tracker' }}><a>Tracker</a></Link></li>
    <li><Link route='blog' params={{ slug: 'hello-world' }}><a>Blog: Hello world</a></Link></li>
    <li><Link route='blog' params={{ slug: 'another-blog-post' }}><a>Blog: Another blog post</a></Link></li>
    <li><Link route='blog' params={{ slug: 'non-existant' }}><a>Blog: Not found</a></Link></li>
    <li><button onClick={() => Router.pushRoute('about', { foo: 'bar' })}>About foo bar</button></li>
    <li><button onClick={() => Router.pushRoute('about', { foo: 'baz' })}>About foo baz</button></li>
  </ul>
  */
)

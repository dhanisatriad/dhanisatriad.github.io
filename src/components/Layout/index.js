import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'
import ShootingStar from '../starAnimation/starAnimation';

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className='background'>
        <ShootingStar/>
      <div className="page">
        <span className="tags top-tags top-tag-html">
          &lt;html&gt;
          <br/>
          <span className="top-tag-body">&lt;body&gt;</span>
        </span>
        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
      </div>
    </div>
  )
}

export default Layout

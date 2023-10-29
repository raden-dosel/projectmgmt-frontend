import CAS__LOGO from './assets/CAS__LOGO.png';

export default function Header() {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
        <div className='container'>
            <a className='navbar-brand' href='/'>
                <div className='d-flex'>
                    <img src={CAS__LOGO} alt='CAS__LOGO' className='mr-2' />
                    <div>ProjectMGMT</div>
                </div>
            </a>
        </div>
    </nav>
  )
}

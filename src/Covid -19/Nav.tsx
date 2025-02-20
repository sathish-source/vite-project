import { Link } from "react-router-dom"
import logo from './primary-logo.svg'



const Nav = () => {
    return (
        <div>
            <div className='bg-secondary min-h-screen bg-gray-50 p-3'>
                <p className="h5 font-wieght-bolder text-white">+ 99 00 (0) 0000 888</p>
                <p className="h5 font-wieght-bolder text-white">info@yourdomain.com</p>
            </div>
            <p className="d-flex">
                <img className= "w-25 p-3" src= {logo} />
            </p>

            <div className='d-flex justify-content-end p-0 '>
                <Link className="p-3 h5" to='/Home'>Home</Link>
                <Link className="p-3 h5" to='/'>About</Link>
                <Link className="p-3 h5" to='/Contact'>Contact</Link>
                <Link className="p-3 h5" to='/FAQ'>FAQ</Link>
                <Link className="p-3 h5" to='/GeneralInformation'>General Information</Link>
                <Link className="p-3 h5" to='/News'>News</Link>
                <button className="h4 bg-danger">Call Us</button>
            </div>
        </div>

    )

}

export default Nav


import { Link } from 'react-router-dom';
function Footer() {
    return (
        <>
           
                <footer className=" footer py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link to='/'className=" text  px-2 ">Home</Link></li>
                        <li className="nav-item"><Link to='/now_Showing'className=" text  px-2 ">Now Showing</Link></li>
                        <li className="nav-item"><Link to='/coming_soon' className=" text px-2 ">Coming Soon</Link></li>
                        <li className="nav-item"><Link to='/popular'className=" text  px-2 ">Popular</Link></li>
                        <li className="nav-item"><Link to='/top_Rate'className=" text  px-2 ">Top Rate</Link></li>
                        <li className="nav-item"><Link to='/contact' className=" text  px-2 ">Contact</Link></li>
                    </ul>
                    <p className=" text text-center ">© 2023 Create By : Sreyly Long</p>
                   
                </footer>
           
        </>




    )
}
export default Footer;
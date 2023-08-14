import face from '../assets/facebook.png'
import tele from '../assets/telegram.png'
import instar from '../assets/instargram.png'
import docter from '../assets/landing-slider-img.png'
import cave from '../assets/cave.jpg'
import joker from '../assets/joker.jpg'
const Contact = () => {
    return (
        <>

            <section className="home-page inner_content" >
                <div id="media_v4" className="media discover ">
                    <div className="column_wrapper ">
                        <div className="content_wrapper wrap">
                            <div id="carouselExample" className="carousel slide">
                                <div className="carousel-inner ">
                                    <div className="carousel-item active">
                                        <img src={docter} alt="empty" style={{height:740}}/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={cave} alt=".." style={{height:740}}/>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={joker} style={{height:740}}/>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-5'>
                <div className=" General col s12 p0 pl0 pr0">
                    <button className='text-white '>Contact Us</button>
                </div>

                <div className="container mt-5" id="contact_us">
                    <div className="row m1 mb0">
                        <div className="col s6 ipl0 ml0">
                            <table>
                                <tbody className='text-white'>
                                    <tr>
                                        <td><span className="lang_telephone">Telephone</span></td>
                                        <td>:</td>
                                        <td>+855 764112513</td>
                                    </tr>
                                    <tr>
                                        <td><span className="lang_contact_hour">Contact Hour</span></td>
                                        <td>:</td>
                                        <td>09:00 AM to 09:00 PM (daily)</td>
                                    </tr>
                                    <tr>
                                        <td><span className="lang_ticket_hour">Ticketing Counters Opening Hours</span></td>
                                        <td>:</td>
                                        <td>09:00 AM to 10:30 PM (daily)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col s3 text-white">
                            <ul className="collection">
                                <li className="collection-item avatar ">
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <img src={face} alt="fb" className="circle" />
                                    </a>
                                    <span className="title">Facebook</span>
                                    <p className="content_center">@LongSreyly</p>
                                </li>
                                <li className="collection-item avatar">
                                    <a href="https://www.instagram.com/" target="_blank">
                                        <img src={instar} alt="insta" className="circle" />
                                    </a>
                                    <span className="title">Instragram</span>
                                    <p className="content_center">@LongSreyly</p>
                                </li>
                                <li className="collection-item avatar">
                                    <a href="https://t.me/long_sreyly" target="_blank">
                                        <img src={tele} alt="telegram" border="0" className="circle" />
                                    </a>
                                    <span className="title">Telegam</span>
                                    <p className="content_center">@LongSreyly</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>



    )
}
export default Contact;
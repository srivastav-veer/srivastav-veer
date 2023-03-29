import { Button, Form } from 'react-bootstrap';
import styles from '../styles/footer.module.scss';

export default function Footer () {

    return (
        <footer className={`w-100 ${styles.footer}`}>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12 col-md-4 col-lg-4'>
                        <a href='/'><img src='./images/Hydraenium-Logo-Full.png' id={styles.hydraenium} /></a>
                        <div className={styles.socialLink}>
                            <h5 className={`${styles.extra}`}>Follow Us</h5>
                            <a href="https://www.linkedin.com/company/frigga-cloud" className={styles.devto} target='_new'>
                                <img src='./images/linkedin.png'></img>
                            </a>
                            <a href="" className={styles.devto} target='_new'>
                                <img src='./images/dev-black.png'></img>
                            </a>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-5 col-lg-4'>
                        <div className='row'>
                            <div className='col-sm-12 col-md-5 col-lg-6'>
                                <ul className='list-group list-group-flush'>
                                    <li>
                                        <a href='/about' target='_new' className=''>About</a>
                                    </li>
                                    <li>
                                        <a href='/events' target='_new' className=''>Events</a>
                                    </li>
                                    <li>
                                        <a href='/contact-us' target='_new' className=''>Contact Us</a>
                                    </li>
                                    <li>
                                        <a href='/enterprise' target='_new' className=''>Enterprise Support</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-sm-12 col-md-7 col-lg-6'>
                                <h5>Resources</h5>
                                <ul className='list-group list-group-flush'>
                                    <li>
                                        <a href='/hydraoid' target='_new' className=''>Hydraoid</a>
                                    </li>
                                    <li>
                                        <a href='/docs' target='_new' className=''>Documentation</a>
                                    </li>
                                    <li>
                                        <a href='/forum' target='_new' className=''>Forum</a>
                                    </li>
                                    <li>
                                        <a href='https://blogs.hydraenium.org' target='_new' className=''>Blogs</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-3 col-lg-4'>
                        <h5>Newsletter</h5>
                        <Form method='post'>
                            <input type='text' id='email' className={`form-control ${styles.emailText}`}></input>
                            <Button type='submit'>Subscribe</Button>
                        </Form>
                        <p className={styles.mini}>
                            By submitting you acknowledge that you've agreed that Hydraenium and Frigga 
                            may send you newletter about updates on our products, services, developments,
                            events and more. You can also opt-out at any time.
                        </p>
                    </div>
                </div>
                <div className={`row ${styles.row}`}>
                    <div className='col-12 text-center'>
                        &#169; 2023 Hydraenium by Frigga Cloud Labs. 
                    </div>
                </div>
            </div>
		</footer>
    );
};

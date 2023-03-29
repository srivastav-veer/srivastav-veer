import styles from '../../styles/extra.module.scss';
import { Button } from 'react-bootstrap';

export default function Frigga () {

    return (
        <div className='w-100' id={styles.frigga}>
            <div className='container'>
                <div className='row'>
                    <div className={`col-lg-5 col-md-6 col-sm-12 ${styles.logoHolder}`}>
                        <img src='images/frigga-logo.png' className='' />
                    </div>
                    <div className={`col-lg-7 col-md-6 col-sm-12`}>
                        <div className={styles.textcontainer}>
                            <h6>Developed and Maintained By</h6>
                            <h1>Frigga Cloud Labs</h1>
                            <h5 className='d-none'>
                                Hydraenium is developed and maintained by Frigga Cloud Labs. This was created
                                as a replacement for Cloud VMs under Open Cloud Project also known as the CloudSpace Technology.
                            </h5>
                            <h4>
                                Frigga Cloud Labs aim to reduce the complexity of DevOps while the world marches towards 
                                multi-cloud or hybrid-cloud approach. Our product line up  
                                are specifically designed to bring convenience at scale. We build cloud-native resources that have embedded 
                                DevOps intelligence to optimise cloud infrastructure for cost, scale, and reliability.
                            </h4>
                            <div className={styles.socialLink}>
                                <a href="https://frigga.cloud" target='_new'>
                                    <i class="bi bi-globe2"></i>
                                </a>
                                <a href="https://www.linkedin.com/company/frigga-cloud" target='_new'>
                                    <i class="bi bi-linkedin"></i>
                                </a>
                                <a href="" className={styles.devto} target='_new'>
                                    <img src='./images/dev-black.png'></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

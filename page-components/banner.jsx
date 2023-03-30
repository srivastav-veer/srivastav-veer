import { Button } from 'react-bootstrap';
import styles from '../styles/banner.module.scss';

export default function Banner() {

  	return (
		<>
            <div className='row' id={styles.banner}>
                <div className='col-12'>
                    <div className={styles.wrapper}>
                        <h1 className={styles.hello}>Hi There! I'm</h1>
                        <h1 className={styles.intro}><span className={styles.name}>Veer Shrivastav,</span></h1>
                        <div className='d-flex'>
                            <ul>
                                <li><span>Entrepreneur</span></li>
                                <li><span>Technologist</span></li>
                                <li><span>Developer</span></li>
                                <li><span>Learner</span></li>
                                <li><span>Explorer</span></li>
                            </ul>
                        </div>
                        <div className='d-flex'>
                            <Button className={styles.hire} variant='danger' size='lg'>Hire Me!</Button>
                            <Button className={styles.info} variant='warning' size='lg'>My Profile</Button>
                        </div>
                    </div>
                </div>
            </div>
		</>
  	)
}

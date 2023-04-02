import { Button } from 'react-bootstrap';
import styles from '../../styles/profile.module.scss';

export default function Profile() {



  	return (
		<div className='container-flex relative page' id='profile'>
            <div className='row' id={styles.profile}>
                <div className='col-12'>
                    <Button id={styles.resumeBtn} size={'md'}>
                        <i className="bi bi-download"></i> Resume
                    </Button>
                    <h1 className='title'>Experience</h1>
                    <div className={`relative ${styles.workEx}`}>
                        <h5 className={styles.endTime}>March 2023</h5>
                        <h2 className={styles.organization}><a href='https://damensch.com' target='_new'>DaMENSCH</a></h2>
                        <h3 className={styles.position}>VP of Engineering</h3>
                        <div className={styles.skillset}>
                            <span className='code'>PHP</span>
                            <span className='code'>mongoDB</span>
                            <span className='code'>Java</span>
                        </div>
                        <div className={`d-flex ${styles.widthsm50Container}`}>
                            <div className={`d-flex ${styles.widthsm50}`}>
                                <h6 className={`subtitle`}>Description</h6>
                                <p className={styles.description}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a
                                </p>
                            </div>
                            <div className={`d-flex ${styles.widthsm50}`}>
                                <h6 className={`subtitle`}>Key Responsibilities</h6>
                                <ul>
                                    <li>Lorem Lorem Lorem Lorem</li>
                                    <li>Lorem Lorem Lorem Lorem</li>
                                    <li>Lorem Lorem Lorem Lorem</li>
                                    <li>Lorem Lorem Lorem Lorem</li>
                                    <li>Lorem Lorem Lorem Lorem</li>
                                </ul>  
                            </div>
                        </div>
                        <h5 className={styles.startTime}>July 2021</h5>
                    </div>
                    <div className={`relative ${styles.workEx}`}>
                        <h5 className={styles.endTime}>March 2023</h5>
                        <h2 className={styles.organization}><a href='https://damensch.com' target='_new'>DaMENSCH</a></h2>
                        <h3 className={styles.position}>VP of Engineering</h3>
                        <h5 className={styles.startTime}>July 2021</h5>
                    </div>
                </div>
            </div>
		</div>
  	)
}

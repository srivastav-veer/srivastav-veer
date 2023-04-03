import { Button } from 'react-bootstrap';
import styles from '../../styles/profile.module.scss';
import {experiences} from './data/experience';
import Experience from './experience';

export default function Profile() {
    
    const downloadResume = () => {
        window.location.href = "https://veershrivastav.com/veer_shrivastav.pdf"
    }

  	return (
		<div className='container-flex relative page' id='profile'>
            <div className='row' id={styles.profile}>
                <div className='col-12'>
                    <Button id={styles.resumeBtn} onClick={downloadResume} size={'md'}>
                        <i className="bi bi-download"></i> Resume
                    </Button>
                    <h1 className='title'>Experience</h1>
                    {experiences.map(experience => {
                        return (<Experience data={experience} />)
                    })}
                </div>
            </div>
		</div>
  	)
}

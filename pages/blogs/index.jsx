import { useEffect } from 'react';
import styles from '../../styles/extra.module.scss';

export default function About() {

    useEffect(() => {
        setTimeout(() => {
            location.replace('https://blogs.hydraenium.org');
        }, 3000);
    });

  	return (
        <div className={`container ${styles.extraPages}`}>
            <div className={`row ${styles.rowCenter}`}>
                <div className='col-12'>
                    <h3 className='text-center'>You're being redirected to <a href='https://blogs.hydraenium.org'>blogs.hydraenium.org</a></h3>
                </div>
            </div>
        </div>
    );
}

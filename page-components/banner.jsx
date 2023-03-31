import { Button } from 'react-bootstrap';
import styles from '../styles/banner.module.scss';
import Conways from './conways';
import { useEffect, useRef, useState } from 'react';

export default function Banner() {

    const [subIndex, setSubIndex] = useState(0);
    const [index, setIndex] = useState(0); //index of char of word
    const [reverse, setReverse] = useState(false);
    const definition = ['Entrepreneur', 'Technologist'];// 'Developer', 'Explorer', 'Learner', 'Blogger'];

    useEffect(() => {
        if (subIndex === definition[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }
         
        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => {
                return (prev + 1 >= definition.length) ? 0 : prev+1;
            });
            return;
        }
        
        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, 200);
         
        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

  	return (
		<div className='container-flex relative'>
            <div className='row' id={styles.banner}>
                <div className='col-12'>
                    <Conways />
                    <div className={styles.wrapper}>
                        <h1 className={styles.hello}>Hi There! I'm</h1>
                        <h1 className={styles.intro}><span className={styles.name}>Veer Shrivastav,</span></h1>
                        <h3 className={styles.definition}><span>{`${definition[index].substring(0, subIndex)}`}</span></h3>
                        {/* <div className='d-flex'>
                            <ul>
                                <li><span>Entrepreneur</span></li>
                                <li><span>Technologist</span></li>
                                <li><span>Developer</span></li>
                                <li><span>Learner</span></li>
                                <li><span>Explorer</span></li>
                            </ul>
                        </div> */}
                        <div className='d-flex'>
                            <Button className={styles.hire} variant='danger' size='lg'>Hire Me!</Button>
                            <Button className={styles.info} variant='warning' size='lg'>My Profile</Button>
                        </div>
                    </div>
                </div>
            </div>
		</div>
  	)
}

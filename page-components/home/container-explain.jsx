import styles from '../../styles/explain.module.scss';
import { useEffect, useState } from 'react';

export default function ContainerExplaination({pageY}) {

    const [explainerClass, setExplainerclass] = useState(`${styles.explainer}`);
    const [packaged, setPackaged] = useState(0);

    useEffect(() => {
        let scrollTop = Math.min(0, window.pageYOffset - (window.innerHeight/2.5));
        
        if (!(scrollTop < 0)) {
            setExplainerclass(`${styles.explainer} ${styles.onScroll}`);
            setPackaged(1);
        } else {
            setExplainerclass(`${styles.explainer}`);
            setPackaged(0);
        }
    }, [pageY]);

    const togglePackaged = () => {
        setPackaged((packaged==1 ? 0 : 1));
    };

    return (
        <div className={styles.ContainerExplaination}>
            <div className='container' onClick={togglePackaged}>
                <div className='row'>
                    <div className={`col d-flex relative`}>
                        <div className={explainerClass}>
                            <h3>Containerized Linux Kernel</h3>
                            <h5>
                                A containerized Linux kernel attached to multi-boot disk developed with in built
                                Auto-Scale, Load-Balancing, Jenkins, and VPN to run on Kubernetes.
                            </h5>
                        </div>
                        <div className={styles.cubeHolder} style={{'--packaged': packaged}}>
                            <div className={styles.scene}>
                                <div className={styles.package__wrapper}>
                                    <div className={styles.package}>
                                        <div className={styles.package__content}>
                                            <img className={`${styles.package__icon} ${styles.package__icon__linux}`} src='./images/linux-logo.png' />
                                            <img className={`${styles.package__icon} ${styles.package__icon__k8s}`} src='./images/k8s-logo.png' />
                                        </div>
                                        <div className={`${styles.package__side} ${styles.package__side__main}`}>
                                            <div className={`${styles.package__flap} ${styles.package__flap__top}`}></div>
                                            <div className={`${styles.package__flap} ${styles.package__flap__bottom}`}></div>
                                            <div className={`${styles.package__side} ${styles.package__side__tabbed}`}>
                                                <div className={`${styles.package__flap} ${styles.package__flap__top}`}></div>
                                                <div className={`${styles.package__flap} ${styles.package__flap__bottom}`}></div>
                                            </div>
                                            <div className={`${styles.package__side} ${styles.package__side__extra}`}>
                                                <div className={`${styles.package__flap} ${styles.package__flap__top}`}></div>
                                                <div className={`${styles.package__flap} ${styles.package__flap__bottom}`}></div>
                                                <div className={`${styles.package__side} ${styles.package__side__flipped}`}>
                                                    <div className={`${styles.package__flap} ${styles.package__flap__top}`}></div>
                                                    <div className={`${styles.package__flap} ${styles.package__flap__bottom}`}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

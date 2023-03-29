import styles from '../../styles/extra.module.scss';
import { Button } from 'react-bootstrap';

export default function NativeK8S ({onGetStarted}) {

    return (
        <div className='container' id={styles.nativek8s}>
            <div className='row'>
                <div className={`relative col-lg-5 col-md-4 col-sm-12`} id={styles.img_holder}>
                    <div className={styles.blueBg}></div>
                </div>
                <div className={`col-lg-7 col-md-8 col-sm-12`}>
                    <div className={styles.textcontainer}>
                        <h3>Configure. Deploy and Forget</h3>
                        <h5>
                            Imagine a Cloud VM which runs on Kubernetes without any prior settings.
                            A server with built-in DevOps intelligence which needs zero maintainence.
                        </h5>
                        <h5 className='d-none d-sm-block'>
                            In simple words, Hydraenium is a powerful replacement for cloud VMs.
                        </h5>
                        <ul>
                            <li>
                                <h5>Convenience.</h5>
                                <p>
                                    Run any and every application on Kubernetes without doing any K8S management.
                                </p>
                            </li>
                            <li>
                                <h5>Auto-Scale.</h5>
                                <p>
                                    Let your linux server handle it's own auto-scaling based on the load. 
                                </p>
                            </li>
                            <li>
                                <h5>Save Cost.</h5>
                                <p>
                                    Replacing Cloud VM with Hydraenium saves upto 70% on Cloud Bills.
                                </p>
                            </li>
                        </ul>
                        <Button onClick={onGetStarted} variant='warning' size="md">
                            <i className="bi bi-terminal-fill"></i> Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
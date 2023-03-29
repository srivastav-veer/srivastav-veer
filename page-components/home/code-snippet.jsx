import { useEffect, useRef, useState } from 'react';
import styles from '../../styles/code.module.scss';
import Modal from 'react-bootstrap/Modal';
import { setSyntheticLeadingComments } from 'typescript';

export default function CodeSnippet ({display, onModalClose}) {

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        onModalClose();
    }

    useEffect(() => {
        setShow(display);
    }, [display])

    return (
        <Modal show={show} onHide={handleClose}>
        <div className={styles.codeSnippet}>
            <div className={styles.cover}></div>
            <div className={styles.testing}>
                <p className={styles.notice}>Under Internal Testing</p>
                <div className={styles.break}></div>
                <p className={styles.testingDetails}>
                    Public version of Hydraoid CLI has not been released yet.
                    We're doing some last minute changes.
                </p>
                <p className={styles.testingDetails}>
                    However, you can access Hydraoid through REST API, checkout the <a href='/docs'>swagger docs here</a>.
                </p>
            </div>
            <div className={styles.taskBar}>
                <div onClick={handleClose} className={`${styles.red} ${styles.roundBtn}`}></div>
                <div className={`${styles.yellow} ${styles.roundBtn}`}></div>
                <div className={`${styles.green} ${styles.roundBtn}`}></div>
            </div>
            <pre>
                <div className={styles.line}>
                    <span className={styles.statements}>wget</span>
                    <span className={styles.variable}> -O</span>
                    <span className={styles.string}> https://hydraenium.org/dist/hydraoid-v1-0-0.dpkg</span>
                    <span className={styles.variable}> | </span>
                    <span className={styles.string}> </span>
                </div>
                <div className={styles.line}>
                    <span className={styles.statements}>hydraoid</span>
                    <span className={styles.variable}> platform add</span>
                </div>
                <div className={styles.continue}>
                    <span className={styles.statements}>Account nick name: </span>
                    <span className={styles.variable}>hydraenium-test</span>
                </div>
                <div className={styles.continue}>
                    <span className={styles.statements}>Platform Name: </span>
                    <span className={styles.variable}>aws</span>
                </div>
                <div className={styles.continue}>
                    <span className={styles.statements}>Access Key: </span>
                    <span className={styles.variable}>3289141783</span>
                </div>
                <div className={styles.continue}>
                    <span className={styles.statements}>Access Secret: </span>
                    <span className={styles.variable}></span>
                </div>
                <div className={styles.line}>
                    <span className={styles.statements}>hydraoid</span>
                    <span className={styles.variable}> platform use </span>
                    <span className={styles.string}>hydraenium-test</span>
                </div>
                <div className={styles.continue}>
                    <span className={styles.variable}>Connecting to hydraenium-test...</span>
                </div>
                <div className={styles.continue}>
                    <span className={styles.variable}>Successfully connected to hydraenium-test...</span>
                </div>
                <div className={styles.line}>
                    <span className={styles.statements}>hydraoid</span>
                    <span className={styles.variable}> hydraenium create </span>
                    <span className={styles.function}>--key</span>
                    <span className={styles.vriable}>=</span>
                    <span className={styles.string}>/location/to/pem/file</span>
                    <span className={styles.function}> --dev</span>
                </div>
                <div className={styles.continue}>
                    <span className={styles.statements}>Nick name: </span>
                    <span className={styles.variable}>my-first-server</span>
                </div>
                <div className={styles.continue}>
                    <span className={styles.statements}>RAM (GB): </span>
                    <span className={styles.variable}>2</span>
                </div>
                <div className={styles.continue}>
                    <span className={styles.statements}>vCPU: </span>
                    <span className={styles.variable}>1</span>
                </div>
                <div className={styles.continue}>
                    <span className={styles.statements}>Storage (GiB) [default 8]: </span>
                    <span className={styles.variable}>12</span>
                </div>
                <div className={styles.continue}>
                    <span className={styles.statements}>Default Ports (Comma Separated) [default 22]: </span>
                    <span className={styles.variable}>80, 8080, 5000</span>
                </div>
            </pre>
        </div>
        </Modal>
    );
};
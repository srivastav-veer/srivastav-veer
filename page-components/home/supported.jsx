import styles from '../../styles/extra.module.scss';

export default function SupportedOn () {

    return (
        <div className='container' id={styles.supportedOn}>
            <div className='row'>
                <div className={`col-12 d-flex ${styles.content}`}>
                    <h3>Supported On</h3>
                    <img src='images/platform.png' className={{}} />
                </div>
            </div>
        </div>
    );
};
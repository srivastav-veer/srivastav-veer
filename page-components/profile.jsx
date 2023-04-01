import styles from '../styles/banner.module.scss';

export default function Profile() {
  	return (
		<div className='container-flex relative'>
            <div className='row' id={styles.profile}>
                <div className='col-12'>
                    Profile
                </div>
            </div>
		</div>
  	)
}

import { Button } from 'react-bootstrap';
import styles from '../styles/side-profile.module.scss';

export default function SideProfile() {

  	return (
		<>
            <div className='row' id={styles.sideProfile}>
                <div className='col-12'>
					<div id={styles.frame}>
						<img className={styles.profilePic} src="./images/veer_shrivastav.jpg" />
						<h3 className={styles.name}><a href="#home">Veer Shrivastav</a></h3>
					</div>
					<div className={styles.links}>
						<ul>
							<li><a href="#profile">My Profile</a></li>
							<li><a href="#diary">My Diary</a></li>
							<li><a href="#contact">Contact Me!</a></li>
						</ul>
					</div>
					<footer>
						<ul>
							<li>
								<a href='https://www.linkedin.com/in/veer-shrivastav/' target='_blank'>
									<img className={styles.social} src='./images/linkedin.png' alt='LinkedIn' />
								</a>
							</li>
							<li>
								<a href='https://dev.to/srivastavveer' target='_blank'>
									<img className={styles.social} src='./images/devto.png' alt='Dev.To' />
								</a>
							</li>
							<li>
								<a href='https://github.com/srivastav-veer' target='_blank'>
									<img className={styles.social} src='./images/github.png' alt='GitHub' />
								</a>
							</li>
							<li>
								<a href='https://stackoverflow.com/users/1393856/veer-shrivastav' target='_blank'>
									<img className={styles.social} src='./images/stackoverflow.png' alt='StackOverflow' />
								</a>
							</li>
						</ul>
						<h5 className={`text-center copyright`}>
							<span className='text-danger'>No Copyright!</span> Take the Code.
						</h5>
						<h5 className={`text-center copyright-name`}>
							By Veer S Shrivastav
						</h5>
					</footer>
				</div>
            </div>
		</> 
  	)
}

import styles from '../../styles/profile.module.scss';

export default function Experience ({data}) {
    return (
        <div className={`relative ${styles.workEx}`}>
            <h5 className={styles.endTime}>{data.endTime}</h5>
            <h2 className={styles.organization}><a href={data.organization.url} target='_new'>{data.organization.name}</a></h2>
            <h3 className={styles.position}>{data.position}</h3>
            <div className={styles.skillset}>
                {data.skills.map((skill) => {
                    return (<span className='code'>{skill}</span>)
                })}
            </div>
            <div className={`d-flex ${styles.widthsm50Container}`}>
                {'desciption' in data && 
                    <div className={`d-flex ${styles.widthsm50}`}>
                        <h6 className={`subtitle`}>Description</h6>
                        <p className={styles.description}>
                            {data.desciption}
                        </p>
                    </div>
                }
                {'pointerHeader' in data && 
                    <div className={`d-flex ${styles.widthsm50}`}>
                        <h6 className={`subtitle`}>{data.pointerHeader}</h6>
                        <ul>
                            {data.pointers.map((responsibillity) => {
                                return (<li className='code'>{responsibillity}</li>)
                            })}
                        </ul>  
                    </div>
                }
            </div>
            <h5 className={styles.startTime}>{data.startTime}</h5>
        </div>
    );
}
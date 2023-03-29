import styles from '../../styles/features.module.scss';

export default function Features () {

    return (
        <div className='container' id={styles.features}>
            <div className='row'>
                <div className='col-12 text-center'>
                    <h1>Silent Features</h1>
                </div>
            </div>
            <div className={`row d-flex`}>
                <div className='col-xl-7 col-lg-7 col-md-6 col-sm-12 order-md-1 order-sm-2 order-2 '>
                    <h3 className='d-block d-lg-none text-center'>Natively Kubernetes</h3>
                    <h4>
                        Hydraenium is a cluster based Linux OS, i.e. internally it runs on Kubernetes
                        and has an intelligent layer which self-manages the entire cluster on its own. 
                    </h4>
                </div>
                <div className='col-xl-5 col-lg-5 col-md-6 col-sm-12 order-md-2 order-sm-1 order-1 d-flex'>
                    <div className={styles.featureHolder} id={styles.featureK8S}>
                        <img src={'./images/hydraenium-k8s.gif'} />
                    </div>
                </div>
            </div>
            <div className={`row ${styles.marginTop4}`}>
                <div className={`col-lg-5 col-md-6 col-sm-12 d-flex`}>
                    <div className={styles.featureHolder}>
                        <div className={`${styles.hydraeniumServer} ${styles.autoScaling}`} id={styles.two}>Hd</div>
                        <div className={`${styles.hydraeniumServer} ${styles.autoScaling}`} id={styles.one}>Hd</div>
                        <div className={`${styles.hydraeniumServer} ${styles.autoScaling}`}>Hd</div>
                    </div>
                </div>
                <div className='col-lg-7 col-md-6 col-sm-12'>
                    <h3 className='d-block d-lg-none text-center'>In-Built Auto-Scaling</h3>
                    <h4>
                        Hydraenium servers automatically replicate themselves when they&#39;re under high load. 
                        This happens in less than 10 seconds, giving Hydraenium an edge against VM auto-scaling configurations.
                    </h4>
                </div>
            </div>
            <div className={`row ${styles.marginTop4} d-flex`}>
                <div className='col-xl-7 col-lg-7 col-md-6 col-sm-12 order-md-1 order-sm-2 order-2 '>
                    <h3 className={`d-block d-lg-none text-center ${styles.marginTop2}`}>An Unique Architecture</h3>
                    <h4>
                        Every instance of Hydraenium connects with the same file system that helps in eliminating 
                        a lot of added complexities with logs, configurations, or resources. And it also has an in-built 
                        load balancer to manage incoming traffic.
                    </h4>
                </div>
                <div className='col-xl-5 col-lg-5 col-md-6 col-sm-12 order-md-2 order-sm-1 order-1 d-flex'>
                    <div className={styles.featureHolder}>
                        <div className={`${styles.hydraeniumServer} ${styles.fileSystem} text-center`} id={styles.lB}>Load Balancer</div>
                        <div className={`${styles.hydraeniumServer} ${styles.fileSystem} ${styles.server}`}>Hd</div>
                        <div className={`${styles.hydraeniumServer} ${styles.fileSystem} ${styles.server} d-block d-md-none d-xl-block`}>Hd</div>
                        <div className={`${styles.hydraeniumServer} ${styles.fileSystem} ${styles.server}`}>Hd</div>
                        <div className={`${styles.hydraeniumServer} ${styles.fileSystem} text-center`} id={styles.file}>File System</div>
                    </div>
                </div>
            </div>
            <div className={`row ${styles.marginTop4}`}>
                <div className={`col-lg-5 col-md-6 col-sm-12 d-flex`}>
                    <div className={styles.featureHolder} id={styles.cloudAgnostic}>
                        <div className={`${styles.hydraeniumServer} ${styles.cloudAgnostic}`} id={styles.aws}>AWS</div>
                        <div className={`${styles.hydraeniumServer} ${styles.cloudAgnostic}`} id={styles.azure}>Azure</div>
                        <div className={`${styles.hydraeniumServer} ${styles.cloudAgnostic} ${styles.server}`} id={styles.one}>Hd</div>
                        <div className={`${styles.hydraeniumServer} ${styles.cloudAgnostic} ${styles.server}`} id={styles.two}>Hd</div>
                        <div className={`${styles.hydraeniumServer} ${styles.cloudAgnostic} text-center`} id={styles.file}>Unified File System</div>
                    </div>
                </div>
                <div className='col-lg-7 col-md-6 col-sm-12'>
                    <h3 className={`d-block d-lg-none text-center ${styles.marginTop2}`}>100&#37; Cloud Agnostic</h3>
                    <h4>
                        Hydraenium servers can easily be moved from one cloud platform to another cloud platform.
                        Infact, it can also co-exist on two different cloud platforms and two different locations 
                        at the same time.
                    </h4>
                </div>
            </div>
            {/* <div className={`row ${styles.marginTop4} d-flex`}>
                <div className='col-xl-7 col-lg-7 col-md-6 col-sm-12 order-md-1 order-sm-2 order-2 '>
                    <h3 className='d-block d-lg-none text-center'>Saves 70% Cost</h3>
                    <h4>
                        With the enhanced in-built intelligence on top of K8S, Hydraenium intelligently optimises for unused VMs. 
                        It also leverages heavily on spot instances, this adds further on cost saving. Overall using Hydraenium
                        could save 70% on your cloud VMs.
                    </h4>
                </div>
                <div className='col-xl-5 col-lg-5 col-md-6 col-sm-12 order-md-2 order-sm-1 order-1 d-flex'>
                    <div className={styles.featureHolder}>
                    </div>
                </div>
            </div> */}
        </div>
    );
};
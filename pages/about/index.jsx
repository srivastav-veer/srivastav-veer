import Head from 'next/head';
import MainMenu from '../../page-components/navbar.module';
import Footer from '../../page-components/footer.module';
import styles from '../../styles/extra.module.scss';

export default function About() {

  	return (
		<>
			<Head>
				<title>About | Hydraenium</title>
				<meta name="description" content="Hydraenium is a containerzied VM, which supports all the paradigms of Hyper-Hybrid Cloud. 
				Hydraenium runs on top of your cloud computes, and optimizes it's resources for better performance. Also, 
				it can split when the load comes helping in unplanned spikes." />
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<MainMenu toggle={false} />
			<main>
				<div className={`container`} id={styles.about}>
                    <div className={`row`}>
                        <div className='col-12'>
                            <h1 className='text-center'>Hydraenium - Etymology</h1>
                        </div>
                        <div className={`col-lg-5 col-md-12 col-xs-12`} id={styles.etymology}>
                            <img src='../images/hydraenium_etymology.jpg' />
                        </div>
                        <div className={`col-lg-7 col-md-12 col-xs-12`}>
                            <h3><code>Hydrae: </code>
                             Hydra - the mythical dragon which poses multiple heads with regeneration capabilities.
                             This represents the unique architecture of Hydraenium, where there are multiple Kernels &#40;Heads&#41; 
                             and same file system &#40;Body&#41;. This also resembles with the intelligent design to recreate the 
                             a replica in case of crash or any malfunction.
                             </h3>
                             <h3><code>Nium: </code>is added to represent the Kernel splitting which is similar to Nuclear Fission.
                             </h3>
                        </div>
                    </div>
                    <div className={`row`}>
                        <div className='col-12'>
                            <h1 className='text-center'>Concept of Hyper-Hybrid Cloud</h1>
                            <div className={styles.videowrapper}>
                                <iframe src="https://www.youtube.com/embed/LN6NemFL1lU" 
                                    title="What is Hyper-Hybrid Cloud?" frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowfullscreen>
                                </iframe>
                                <h3 className='text-center'>
                                    Hyper-Hybrid Cloud is a DevOps paradigm where Hyper-Cloud means - Multi-Cloud,
                                    Hybrid Cloud means Cloud + on prem servers.
                                </h3>
                                <h3 className='text-center'>
                                    Hence, when a resource such as Server, or Load-Balancer or any other cloud resource
                                    <caps> natively</caps> supports deployment and migration capabilities on multiple cloud or/and on-prem
                                    servers it is said to follow the Hyper-Hybrid Cloud paradigms.  
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className={`row`}>
                        <div className='col-12'>
                            <hr />
                            <h1 className={`text-center`} id={styles.vision}>Vision - The Open Cloud Network</h1>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <h3 className={styles.question}>What is Open Cloud?</h3>
                            <p>
                                We define, Open Cloud Network as a network of connected servers not governed or maintained 
                                by any organization. An open network of computes where any data center or computer can join
                                to become a server and start hosting applications.
                            </p>
                            <p>
                                The most promising feature is that an open cloud network will have thousands of locations 
                                and the network will intelligently and automatically balance application hosting to optimise 
                                latency, cost, and <caps> guarantee an absolute 100% uptime.</caps>
                            </p>
                            {/* <p>
                                Imagine a cloud network backed by the 
                                <caps> concept </caps> of blockchain to guarentee that every 
                                application is always hosted in the network.
                            </p> */}
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <h3 className={styles.question}>Possibilities of Open Cloud</h3>
                            <p>
                                Open Cloud Network will be a reality by the end of this decade. 
                                It will provide possibilities which will open different avenues in cloud domain:
                            </p>
                            <ul>
                                <li>
                                    An intelligent network capable to intelligently managing the traffic and deployments. 
                                </li>
                                <li>
                                    A drastic drop in cloud expense.
                                </li>
                                <li>
                                    New and independent micro data centers emerging across the globe. 
                                </li>
                                <li>
                                    More advanced but simpler DevOps approach to handle deployments.
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <h3 className={styles.question}>Why did we build Hydraenium?</h3>
                            <p>
                                On cloud, the most basic unit of compute is a VM. A VM can be used to host databases, caches, 
                                load-balancers, DNS etc. Hence we started with building a VM which can be the backbone of the entire 
                                Open Cloud Network.
                            </p>
                            <p>
                                For open cloud to be successful, it was important to have a cloud VM which can exist on
                                multiple cloud and on on-prem servers which can be migrated from one cloud platform to another.
                                Such that the network can leverage multiple locations and an guarantee an absolute 100% uptime. 
                            </p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <h3 className={styles.question}>How does Hydraenium help for Open Cloud Network?</h3>
                            <p>
                                Hydraenium by default follows the paradigms for Hyper-Hybrid Cloud. As the technology matures 
                                and the remaining gaps are filled-in, it can easily co-exist on multiple data centers at the same time
                                allowing it to be a compute for Open Cloud Network.
                            </p>
                            <p>
                                Hydraenium solves - scaling immediately, multiple compute issue, migration, and co-existing on multiple-cloud 
                                at the same time. This clubbed together is enough to give the first version of Open Cloud Network.
                            </p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <hr />
                            <h1 className={`text-center`} id={styles.vision}>The Team</h1>
                        </div>
                    </div>
                    <div className='row' id={styles.team}>
                        <div className='col-xl-4 col-lg-4 col-md-12'>
                            <div className='row'>
                                <div className='col-xl-12 col-lg-12 col-md-5 col-sm-12 text-center'>
                                    <img src='../images/tuhin_sengupta_hydraenium.jpg' className={`${styles.profilePhoto}`} />
                                </div>
                                <div className='col-xl-12 col-lg-12 col-md-7 col-sm-12'>
                                    <h3>Tuhin Sengupta</h3>
                                    {/* <h4>Linux, DevOps, Cloud and Networking</h4> */}
                                    <h5>
                                        Tuhin  is responsible for all the R&#38;D in developing Hydraenium technology.
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-12'>
                            <div className='row'>
                                <div className='col-xl-12 col-lg-12 col-md-5 col-sm-12 text-center'>
                                    <img src='../images/binayaka_hydraenium.jpg' className={`${styles.profilePhoto}`} />
                                </div>
                                <div className='col-xl-12 col-lg-12 col-md-7 col-sm-12'>
                                    <h3>Binayaka Chakraborty</h3>
                                    {/* <h4>Hydraoid API and Architecture</h4> */}
                                    <h5>
                                        Binayaka is responsible for building and maintaining Hydraoid Architecture and APIs.
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-12'>
                            <div className='row'>
                                <div className='col-xl-12 col-lg-12 col-md-5 col-sm-12 text-center'>
                                    <img src='../images/veer_shrivastav_hydraenium.jpg' className={`${styles.profilePhoto}`} />
                                </div>
                                <div className='col-xl-12 col-lg-12 col-md-7 col-sm-12'>
                                    <h3>Veer S Shrivastav</h3>
                                    {/* <h4>Product Research, Strategy, and Community Managment</h4> */}
                                    <h5>
                                        Veer is responsible product research, building strategy and managing community.
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
			</main>
			<Footer></Footer>
		</>
  	)
}

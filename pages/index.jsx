import Head from 'next/head';
import Banner from '../page-components/banner';
import SideProfile from '../page-components/side-profile';

export default function Home() {

  	return (
		<>
			<Head>
				<title>Veer Shrivastav</title>
				<meta name="description" content="Veer Shrivastav is an Entrepreneur, Technologist and Explorer." />
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main>
					<div className='container'>
						<div className='row'>
							<div className='col-sm-12 col-md-4 col-lg-3 d-none d-md-block'>
								<SideProfile />
							</div>
							<div className='col-sm-12 col-md-8 col-lg-9'>
								<Banner />
								<div>
									<h1>I am Great...</h1>
								</div>
							</div>
						</div>
					</div>
			</main>
			<footer></footer>
		</>
  	)
}

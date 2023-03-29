import Head from 'next/head';
import MainBanner from '../page-components/home/banner';
import MainMenu from '../page-components/navbar.module';
import CodeSnippet from '../page-components/home/code-snippet';
import SupportedOn from '../page-components/home/supported';
import NativeK8S from '../page-components/home/native-k8s';
import ContainerExplaination from '../page-components/home/container-explain';
import Frigga from '../page-components/home/frigga';
import Footer from '../page-components/footer.module';
import Features from '../page-components/home/features';
import { useState, useEffect, useRef, useCallback } from 'react';

export default function Home() {

	const [codeModalStatus, setCodeModalStatus] = useState(0);

	const [windowDimensions, setWindowDimensions] = useState({width:0, height:0}); //For window dimensions
	const [pageYOffset, _setPageY] = useState(0); //This gets the current page scroll from top
	const pageYRef = useRef (pageYOffset);
	const setPageY = (data) => {
		pageYRef.current = data;
		_setPageY(data);
	};
	
	const [pageXOffset, _setPageX] = useState(0); //This gets the current page scroll from left
	const pageXRef = useRef (pageXOffset);
	const setPageX = (data) => {
		pageXRef.current = data;
		_setPageX(data);
	};

	useEffect(() => {
        setWindowDimensions(getWindowDimensions());
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
    }, []);

    const handleScroll = useCallback((e) => {
		console.log('handlescroll called');
		setPageY(window.pageYOffset);
		setPageX(window.pageXOffset);
	}, [pageYOffset]);

    const handleResize = (event) => {
        setWindowDimensions(getWindowDimensions());
    }

    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return { width, height };
    }

  	return (
		<>
			<Head>
				<title>Hydraenium | Hydraenium.org</title>
				<meta name="description" content="Hydraenium is a containerzied VM, which supports all the paradigms of Hyper-Hybrid Cloud. 
				Hydraenium runs on top of your cloud computes, and optimizes it's resources for better performance. Also, 
				it can split when the load comes helping in unplanned spikes." />
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<MainMenu pageY={pageYOffset} />
			<main>
				<MainBanner onGetStarted={() => setCodeModalStatus(true)} />
				<CodeSnippet display={codeModalStatus} onModalClose={() => setCodeModalStatus(false)} />
				<ContainerExplaination pageY={pageYOffset}/>
				<SupportedOn></SupportedOn>
				<Features></Features>
				<NativeK8S onGetStarted={() => setCodeModalStatus(true)}></NativeK8S>
				<Frigga></Frigga>
			</main>
			<Footer></Footer>
		</>
  	)
}

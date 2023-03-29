import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { useEffect, useState } from 'react';

export default function MainMenu({pageY, toggle=true}) {

    const [menuFixed, setFixed] = useState(false);
    const [navClassName, setNavClassName] = useState('menu d-none');

    /** This should be configured on what should happen on scroll */
    useEffect(() => {
        if (!toggle) {
            setNavClassName('menu scrolled');
        } else {
            let scrollTop = Math.min(0, window.pageYOffset - (window.innerHeight/2.5));
            setFixed(!(scrollTop < 0));
            setNavClassName((!(scrollTop < 0)) ? 'menu scrolled' : 'd-none menu');
        }
    }, [pageY]);

  	return (
        <Navbar className={navClassName} variant='dark' expand="lg" fixed={menuFixed ? 'top' : undefined}>
            <Container className='container'>
                <Navbar.Brand href="/">
                    <Image src='./images/Hydraenium-Logo-Full.png' className='logoIcon d-none d-sm-none d-md-block' alt={'Hydraenium Official Logo'} />
                    <Image src='./images/Hydraenium-Icon.png' className='logoIcon d-md-none' alt={'Hydraenium Official Logo'} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-menu" />
                <Navbar.Collapse id="main-menu" className='justify-content-center'>
                    <Nav>
                        <Nav.Link href="/docs" target="_blank">Docs</Nav.Link>
                        <Nav.Link href="/events" target="_blank">Events</Nav.Link>
                        <Nav.Link href="/blogs" target="_blank">Blogs</Nav.Link>
                        <Nav.Link href="/forum" target="_blank">Forum</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
import styles from '../../styles/banner.module.scss';
import HydraeniumLogo from '../images/hydraenium-logo';
import HydraeniumIcon from '../images/hydraenium-icon';
import { Button } from 'react-bootstrap';
import { useEffect, useRef } from 'react';

//const MainBanner = forwardRef<HTMLDivElement>((props, ref)=> {
export default function MainBanner ({onGetStarted}) {
    const canvasRef = useRef(null);
    let canvas;
    let ctx;
    var stars, FPS, x, mouse;

    useEffect(() => {
        canvas = canvasRef.current;
        ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        stars = [], // Array that contains the stars
        FPS = 60, // Frames per second
        mouse = {
            x: 0,
            y: 0
        };

        if (canvas.width > 1200) {
            x = 120;
        } else if (canvas.width > 900) {
            x = 100; // Number of stars
        } else if (canvas.width > 768) {
            x = 80; // Number of stars
        } else if (canvas.width > 576) {
            x = 60; // Number of stars
        } else {
            x = 40; // Number of stars
        }

        for (var i = 0; i < x; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1 + 1,
                vx: Math.floor(Math.random() * 50) - 25,
                vy: Math.floor(Math.random() * 50) - 25
            });
        }

        canvas.addEventListener('mousemove',updateMouseLocation);

        start();
    }, []);

    const start = () => {
        draw();
        update();
        requestAnimationFrame(start);
    }

    const updateMouseLocation = (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    }

    const draw = () => {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.globalCompositeOperation = "lighter";
        
        for (var i = 0, x = stars.length; i < x; i++) {
            var s = stars[i];
            
            ctx.fillStyle = "#777";
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillStyle = '#777';//'#4D9CB9';
            ctx.stroke();
        }
        
        ctx.beginPath();

        for (var i = 0, x = stars.length; i < x; i++) {
            var starI = stars[i];
            ctx.moveTo(starI.x,starI.y);

            if(distance(mouse, starI) < 150)
                ctx.lineTo(mouse.x, mouse.y);

            for (var j = 0, x = stars.length; j < x; j++) {
                var starII = stars[j];
                if(distance(starI, starII) < 150) {
                //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
                ctx.lineTo(starII.x,starII.y); 
                }
            }
        }

        ctx.lineWidth = 0.05;
        ctx.strokeStyle = '#777';
        ctx.stroke();
    }

    const distance = (point1, point2 ) => {
        var xs = 0;
        var ys = 0;
       
        xs = point2.x - point1.x;
        xs = xs * xs;
       
        ys = point2.y - point1.y;
        ys = ys * ys;
       
        return Math.sqrt( xs + ys );
    }

    const update = () => {
        for (var i = 0, x = stars.length; i < x; i++) {
          var s = stars[i];
        
          s.x += s.vx / FPS;
          s.y += s.vy / FPS;
          
          if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
          if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
        }
    }

    const redirectDocs = () => {
        window.open('/docs', '_blank').focus();
    }
      
    
    return (
        <div className={styles.hero}>
            <canvas id={styles.background} className='h-100' ref={canvasRef}></canvas>
            <div className={'container h-100'}>
                <div className='row d-flex h-100 align-items-center'>
                    <div className='col-12 d-flex justify-content-center'>
                        <div className={`${styles.banner} d-flex d-flex flex-col`} >
                            <HydraeniumIcon className={styles.hydraeniumIcon} />
                            <HydraeniumLogo className={`${styles.hydraeniumLogo} d-flex`} />
                            <h1 className='text-center'>
                                Full Linux VM on Kubernetes
                            </h1>
                            <h3 className={`text-center`}>
                            Hydraenium as a containerized Linux operating system with 
                            embedded DevOps intelligence to optimize Scale, Cost, Convenience, and Reliability.
                            </h3>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-6 text-end'>
                                        <Button onClick={onGetStarted} className={`${styles.getStarted} float-right`} variant='warning' size="lg">
                                            <i className="bi bi-terminal-fill"></i> Get Started
                                        </Button>
                                    </div>
                                    <div className='col-6'><Button onClick={redirectDocs} className={`${styles.getStarted} info-bg-subtle`} variant='danger' size="lg">
                                        <i class="bi bi-book-half"></i> Read Docs
                                    </Button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
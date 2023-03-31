import styles from '../styles/banner.module.scss';
import { useEffect, useRef, useState } from 'react';
import useContainerDimensions from '../lib/hooks/useContainerDimensions';

export default function Conways() {
    
    const CELL_SIZE = 2;
    const boardRef = useRef();
    const [vmin, setVMin] = useState(0);
    // const { boardWidth, boardHeight } = useContainerDimensions(boardRef);
    const [boardWidth, setBoardWidth] = useState(0);
    const [boardHeight, setBoardHeight] = useState(0);
    const [hCells, setHCell] = useState(0);
    const [vCells, setVCell] = useState(0);
    const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
    const [board, setBoard] = useState(null);
    const [cells, setCells] = useState(null);

    useEffect(() => {
        window.removeEventListener("resize", handleResize);
        setWindowDimensions(getDimensions());
        setBoardHeight(boardRef.current.offsetHeight);
        setBoardWidth(boardRef.current.offsetWidth);
    }, []);

    useEffect(() => {
        calculateCells();
    }, [windowDimensions]);

    useEffect(() => {
        makeEmptyBoard();
    }, [vCells, hCells]);

    useEffect(() => {
        console.log('Baord is..',  board);
        if (board) {
            makeCells();
        }
    }, [board])

    const handleResize = () => {
        setWindowDimensions(getDimensions());
        setBoardHeight(boardRef.current.offsetHeight);
        setBoardWidth(boardRef.current.offsetWidth);
    }

    const getDimensions = () => { return {
        width: window.innerWidth,
        height: window.innerHeight
    }}

    const calculateCells = () => {
        //find the smaller side
        let min = (windowDimensions.width > windowDimensions.height) ? windowDimensions.height : windowDimensions.width;
        //100vmin = side. Hence, 1vmin = side/100px.
        let vmin = min/100;
        setVMin(vmin);
        console.log('vmin', vmin);
        console.log('number cells width', boardWidth, CELL_SIZE);
        setHCell(boardWidth/(CELL_SIZE*vmin));
        setVCell(boardHeight/(CELL_SIZE*vmin));
        return;
    }

    const makeEmptyBoard = () => {
        let board = [];
        console.log('VCells', vCells, 'HCells', hCells);
        for (let y = 0; y < vCells; y++) {
            board[y] = [];
            for (let x = 0; x < hCells; x++) {
                board[y][x] = false;
            }
        }
        console.log('yoyo ... ',board);
        setBoard(board);
    }

    const makeCells = () => {
        let cells = [];
        console.log('Board is here...', board, vCells, hCells);
        for (let y = 0; y < vCells; y++) {
            for (let x = 0; x < hCells; x++) {
                if (board[y][x]) {
                    cells.push({ x, y });
                }      
            }    
        }
        setCells(cells);  
    }

  	return (
        <div ref={boardRef} id={styles.board} style={{backgroundSize: `${CELL_SIZE}vmin ${CELL_SIZE}vmin`}}>
        </div>
  	);
}

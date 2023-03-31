import styles from '../styles/banner.module.scss';
import { useEffect, useRef, useState } from 'react';
import {randomInteger} from '../lib/random';

function Cells ({x,y}) {
    const CELL_SIZE = 1;

    return (
        <div className={styles.cell} style={{  
            position: 'absolute',     
            left: `${CELL_SIZE * x}vmin`,
            top: `${CELL_SIZE * y}vmin`,
            width: `${CELL_SIZE}vmin`,
            height: `${CELL_SIZE}vmin`,
        }} data-x={x} data-y={y} />
    );
}

export default function Conways() {
    
    const CELL_SIZE = 1;
    const boardRef = useRef();
    const [vmin, setVmin] = useState(0);
    const [board, setBoard] = useState([]);
    const [cells, setCells] = useState([]);


    const [start, setStart] = useState(false);
    
    useEffect(() => {
        const {hCells, vCells} = calculateSize();
        let {cells, board} = randomDots(buildBoard(hCells, vCells), hCells, vCells);
        setCells(cells);
        setBoard(board);

        return () => {
            setStart(true);
        }
    },[]);

    useEffect(() => {
        if (start) {
            const timeout = setTimeout(() => {nextCycle()}, 100);
            
            return () => {
                clearTimeout(timeout);
            }
        }
    }, [start]);

    useEffect(() => {
        if (start) {
            const timeout = setTimeout(() => {nextCycle()}, 100);
            return () => {
                clearTimeout(timeout);
            }
        }
    }, [cells, board]);

    const calculateSize = () => {
        //Calculate the vMin
        let vMin = ((window.innerWidth > window.innerHeight) ? window.innerHeight : window.innerWidth)/100;
        setVmin(vMin);
        
        //Calculate the number of boxes on the board
        let boardHeight = boardRef.current.offsetHeight;
        let boardWidth = boardRef.current.offsetWidth;

        return {
            hCells: Math.floor(boardWidth / (CELL_SIZE*vMin)),
            vCells: Math.floor(boardHeight / (CELL_SIZE*vMin))
        };
    }

    const buildBoard = (hCells, vCells) => {
        let board = [];
        console.log(hCells, vCells);
        for (let i=0; i < vCells; i++) {
            board[i] = [];
            for (let j=0; j<hCells; j++) {
                board[i][j] = false;
            }
        }
        return board;
    }

    const randomDots = (board, h,v) => {
        let totalNumber = Math.ceil(h*v*0.1);
        let cells = [];
        let i=0;
        while (i < totalNumber) {
            i++;
            let y = randomInteger(0, v-1);
            let x = randomInteger(0, h-1);
            if (!board[y][x]) {
                board[y][x] = true;
                cells.push({x:x,y:y});
            }
        }
        return {cells, board};
    }

    const nextCycle = () => {
        let cells = [];
        console.log('.....', board.length, board[0].length);
        for (let j=0; j<board.length; j++) {
            for (let i=0; i<board[j].length; i++) {
                let count = countLiveCells(j,i);
                if (board[j][i]) { 
                    if (count < 2) {
                        board[j][i] = false;
                    } else if (count === 2 || count === 3) {
                        cells.push({x:i, y:j});
                        board[j][i] = true;
                    } else if (count > 3) {
                        board[j][i] = false;
                    }
                } else {
                    if (count === 3) { //become alive
                        board[j][i] = true;
                        cells.push({x:i, y:j});
                    }
                }
            }
        }
        setCells(cells);
        setBoard(board);
    }

    const countLiveCells = (j,i) => {
        let liveCount = 0;
        if (j != 0) {
            if (i != 0) {
                liveCount += board[j-1][i-1] ? 1 : 0;
                liveCount += board[j][i-1] ? 1 : 0;
            }
            if (i < board[j].length-1) {
                liveCount += board[j-1][i+1] ? 1 : 0;
                liveCount += board[j][i+1] ? 1 : 0;
            }
            liveCount += board[j-1][i] ? 1 : 0;
        }
        if (j < board.length-1) {
            if (i != 0) {
                liveCount += board[j+1][i-1] ? 1 : 0;
            }
            if (i < board[j].length-1) {
                liveCount += board[j+1][i+1] ? 1 : 0;
            }
            liveCount += board[j+1][i] ? 1 : 0;
        }
        return liveCount;
    }

  	return (
        <div ref={boardRef} id={styles.board} style={{backgroundSize: `${CELL_SIZE}vmin ${CELL_SIZE}vmin`}}>
            {cells.map(cell => {
                return (<Cells key={`x${cell.x}y${cell.y}`} x={cell.x} y={cell.y}  />);
            })}
        </div>
  	);
}
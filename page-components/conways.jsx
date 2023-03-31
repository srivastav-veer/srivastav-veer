import styles from '../styles/banner.module.scss';

export default function Conways() {
    
    const CELL_SIZE = 1;

  	return (
        <div id={styles.board} style={{backgroundSize: `${CELL_SIZE}vmin ${CELL_SIZE}vmin`}}>
        </div>
  	);
}

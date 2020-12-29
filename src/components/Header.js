import {memo} from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <div>
		    <h1 className={styles.baslik}>#yapıver</h1>
		    <h2 className={styles.baslik2}>bugünün işini yarına bırakma..</h2>
	    </div>
    )
}

export default memo(Header)

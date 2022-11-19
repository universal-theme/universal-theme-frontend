import { Outlet } from 'react-router-dom';
import { Toolbar } from './toolbar';
import styles from './main-app.module.css';

export const MainApp = () => {
    return <div className={styles.app}>
        <Toolbar />
        <main className={styles.contentView}>
            <Outlet />
        </main>
    </div>;
}
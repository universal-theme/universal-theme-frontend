import { Outlet } from 'react-router-dom';
import styles from './main-app.module.css';

export const MainApp = () => {
    return <div className={styles.app}>
        <header className={styles.appHeader}>
            <nav>
                <ul>
                    <li>profile</li>
                </ul>
            </nav>
        </header>
        <main className={styles.contentView}>
            <Outlet />
        </main>
    </div>;
}
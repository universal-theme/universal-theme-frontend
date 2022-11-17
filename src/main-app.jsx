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
            <div>main content</div>
        </main>
    </div>;
}
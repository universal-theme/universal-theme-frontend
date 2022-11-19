import { Link } from "react-router-dom";

export const Home = () => {
    const activeTheme = {
        name: "Default Theme",
        id: 0,
    };
    return <div>
        current theme: <Link to={`/edit/${activeTheme.id}`}>{activeTheme.name}</Link>
    </div>;
};

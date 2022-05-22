import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import styles from '../styles/Home.module.css';
import { withSSRAuth } from "../utils/withSSRAuth";
import { setupAPIClient } from "../services/api";
import { destroyCookie } from "nookies";
import { useCan } from "../hooks/useCan";
import { Can } from "../components/Can";

export default function Dashboard() {
    const { user, signOut } = useContext(AuthContext);

    const userCanSeeMetrics = useCan({
        permissions: ['metrics.list'],
    })

    return (
        <div className={styles.container}>
            <h1>Dashboard</h1>
            <main className={styles.main}>
                <p>{user?.email}</p>
                <Can permissions={['metrics-list']}>
                    <div>Métricas</div>
                </Can>
            </main>
            <button onClick={signOut}>SignOut</button>
        </div>
    );
};

export const getServerSideProps = withSSRAuth(async (ctx) => {
    const apiClient = setupAPIClient(ctx);

    try {
        const response = await apiClient.get('/me');
    } catch (err) {
        destroyCookie(ctx, 'nextauth.token');
        destroyCookie(ctx, 'nextauth.refreshToken');
        
        return { 
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
})
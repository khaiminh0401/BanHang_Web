import Grid from '@components/Grid';
import Nav from '@components/Nav';
import Article from '@components/Article';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import UserLayout from '@layout/UserLayout';
function MyApp({ Component, pageProps }) {
    const Layout = Component.Layout || UserLayout;
    return (
        <Layout>
                <Component {...pageProps} />
        </Layout>

    );
}

export default MyApp;
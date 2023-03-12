import Grid from '@components/Grid';
import Nav from '@components/Nav';
import Article from '@components/Article';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import UserLayout from '@layout/UserLayout';
import { useEffect } from 'react';
function MyApp({ Component, pageProps }) {
    useEffect(() => {
        require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, [])

    const Layout = Component.Layout || UserLayout;
    return (
        <Layout>
                <Component {...pageProps} />
        </Layout>

    );
}

export default MyApp;
import Grid from '@components/Grid';
import Nav from '@components/Nav';
import Article from '@components/Article';
function AdminLayout({ children }) {
    return (
        <Grid>
            <Nav />
            <Article>
                {children}
            </Article>
        </Grid>
    );
}

export default AdminLayout;
import { Head, Main, NextScript, Html } from "next/document";

function Home() {
    return (
        <Html>
            <Head>
                <title>ZuHot</title>
                <script src="https://kit.fontawesome.com/d5aa26e7fe.js" crossorigin="anonymous"></script>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>

    );
}

export default Home;
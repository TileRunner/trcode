import '../styles/globals.css'
import './wi/wordinfo.css'
import './wm/mastermind.css'
import './pb/prisonbreak.css'
import './fyb/fyb.css'
import './morpho/morpho.css'
import './tm/tm.css'
import Head from 'next/head'

function MyApp({Component,pageProps}) {
    return (
        <>
            <Head>
                <link 
                    rel="stylesheet" 
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" 
                    crossOrigin="anonymous"
                    />
                <link /* I added material icons */
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                    />
                <script 
                    src="https://code.jquery.com/jquery-3.5.1.slim.min.js" 
                    crossOrigin="anonymous"
                    />
                <script 
                    src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" 
                    crossOrigin="anonymous"
                    />
                <script 
                    src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" 
                    crossOrigin="anonymous"
                    />
                <link /* I added w3.css */
                    rel="stylesheet"
                    href="https://www.w3schools.com/w3css/4/w3.css"
                    />
                <link /* I have my own css file on github so I can change the UI but still have to deploying this app to see changes */
                    rel="stylesheet"
                    href="https://tilerunner.github.io/trcss.css"
                    />
                {/* <script
                    // for some reason these fontawesome icons are sometimish about whether to show up or not.
                    // I switched to material-icons instead.
                    // src="https://kit.fontawesome.com/77514d28aa.js" // Rod
                    // src="https://kit.fontawesome.com/47e7c5fc23.js" // Christopher
                    src="https://kit.fontawesome.com/TileRunner.js" // Christopher
                    crossOrigin="anonymous"
                    /> */}
        <title>Tile Runner</title>
        <link rel="icon" href="/tileTR.ico" />
        <meta name="description" content="Tile Runner - Fun with words" />
        <meta property="og:title" content="Tile Runner" />
        <meta property="og:description" content="A few word games and a word lookup feature" />
        <meta property="og:image" content="/tileTR.png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta name="twitter:title" content="Tile Runner - Fun with words" />
        <meta name="twitter:image" content="/tileTR.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content="A few word games a and a word lookup feature" />
        <meta property="og:url" content="https://tilerunner.herokuapp.com" />
        <meat property="og:site_name" content="Tile Runner" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
            </Head>
            <Component {...pageProps}/>
        </>
    );
}

export default MyApp;

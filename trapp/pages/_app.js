import '../styles/globals.css'
import '../styles/menu.css'
import './wi/wordinfo.css'
import './wm/mastermind.css'
import './pb/prisonbreak.css'
import './fyb/fyb.css'
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
                <link /* I added GoogleFonts using Font Pairings mentioned as popular on W3CSchools */
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Open Sans|Merriweather"
                    />
                <link /* I added w3.css */
                    rel="stylesheet"
                    href="https://www.w3schools.com/w3css/4/w3.css"
                    />
                {/* <script
                    // for some reason these fontawesome icons are sometimish about whether to show up or not.
                    // I switched to material-icons instead.
                    // src="https://kit.fontawesome.com/77514d28aa.js" // Rod
                    // src="https://kit.fontawesome.com/47e7c5fc23.js" // Christopher
                    src="https://kit.fontawesome.com/TileRunner.js" // Christopher
                    crossOrigin="anonymous"
                    /> */}
            </Head>
            <Component {...pageProps}/>
        </>
    );
}

export default MyApp;

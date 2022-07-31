import '../styles/globals.css';
import '../styles/trcss.css';
import './wi/wordinfo.css';
import './pb/prisonbreak.css';
import './fyb/fyb.css';
import Head from 'next/head';
import React from 'react';
import PropTypes from "prop-types";

function MyApp({Component,pageProps}) {
    return (
        <>
            <Head>
                <link 
                    rel="stylesheet" 
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" 
                    crossOrigin="anonymous"
                    />
                <link
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
                <link
                    rel="stylesheet"
                    href="https://www.w3schools.com/w3css/4/w3.css"
                    />
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

MyApp.propTypes = {
    Component: PropTypes.any,
    pageProps: PropTypes.any
}
export default MyApp;

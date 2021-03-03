import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {BrowserView} from 'react-device-detect'
import React, { useState } from 'react';

export default function Home() {
  const [descPb, setDescPb] = useState(false);

  const toggleDescPb = () => {
    setDescPb(!descPb);
  }
  return (
    <div className="container">
      <Head>
        <title>Tile Runner App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="row">
        <h1>My coded stuff</h1>
      </div>
      <div className="row">
        <Link href={`/wm/mastermind`}>
          <a>Word Mastermind
            <span class="material-icons">psychology</span>
          </a>
        </Link>
      </div>
      <div className="row">
        <Link href={`/wi/wordinfo`}>
          <a>Word Info<span class="material-icons">biotech</span></a>
        </Link>
      </div>
      <BrowserView>
        <div className="row">
          <Link href={`/pb/prisonbreak2`}>
            <a>Prison Break (under construction)<span class="material-icons">fingerprint lock_clock carpenter lock_open run_circle</span></a>
          </Link>
          <button id="toggleDescribePb" className="mybutton"
            onClick={() => toggleDescPb()}
          >
            {descPb ? "Hide rules" : "Show rules"}
          </button>
          {descPb ?
            <div className="container">
              <div className="row">
                <h1>Prison Break Rules</h1>
              </div>
              <div className="row">
                <p>Prison Break is a two player crossword style game.</p>
              </div>
              <div className="row">
                <ul>
                  <li>You play two games, one as the Prisoners and one as the Guards. Whoever frees the most prisoners wins.</li>
                  <li>When playing as the Prisoners, go to the lobby and enter a game id and start a new game. Tell your opponent the game id.</li>
                  <li>When playing as the Guards, go to the lobby and enter the game id that your opponent gave you and join the game.</li>
                  <li>Prisoners always play first.</li>
                  <li>The first word played must touch the centre square.</li>
                  <li>To free a prisoner, the Prisoners must play a tile on one of the special 💫 squares.</li>
                  <li>A player may continue to make words when the opponent rack is empty (there is no point for Guards to do so).</li>
                  <li>The game ends when both players agree it ends.</li>
                  <li>Due to licensing restrictions, this game does not validate words against any lexicon.</li>
                </ul>
              </div>
            </div>
          :
            <></>
          }
        </div>
      </BrowserView>
    </div>
  )
}

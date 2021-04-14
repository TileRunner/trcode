import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {BrowserView} from 'react-device-detect'
import React, { useState } from 'react';

export default function Home() {
  const [descWm, setDescWm] = useState(false); // describe word mastermind
  const [descWi, setDescWi] = useState(false); // describe word info
  const [descPb, setDescPb] = useState(false); // describe prison break

  const toggleDescWm = () => {
    setDescWm(!descWm);
  }

  const toggleDescWi = () => {
    setDescWi(!descWi);
  }

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
        <h1 className="myHeadingFont">Menu</h1>
      </div>
      <div className="row">
        <Link href={`/wm/mastermind`}>
          <a>
            <h2 className="mySubHeadingFont">Word Mastermind
              <span className="material-icons">psychology</span>
            </h2>
          </a>
        </Link>
        <button id="toggleDescribeWm" className={descWm ? "mybutton" : "mymaterialicon"}
          onClick={() => toggleDescWm()}
        >
          {descWm ? "Hide info" : <i className="material-icons">help_outline</i>}
        </button>
        {descWm ?
          <div className="container">
            <div className="row myinfo">
              <h1 className="myHeadingFont">Word Mastermind Information</h1>
            </div>
            <div className="row myinfo">
              <p>Word Mastermind is a single player code cracking game.</p>
            </div>
            <div className="row myinfo">
              <ul>
                <li>The computer picks a random word.</li>
                <li>You enter guesses until you guess correctly.</li>
                <li>The computer tells you how many letters are correct and how many are in the correct position.</li>
                <BrowserView>
                  <li>The computer shows you word info for guessed words.</li>
                </BrowserView>
                <li>The computer will start with length 2, and add 1 each round up to length 8. Then it starts a new set back at 2.</li>
                <li>Due to licensing restrictions, this uses a 'common English lexicon' developed by some word game enthusiasts.</li>
              </ul>
            </div>
          </div>
        :
          <></>
        }
      </div>
      <div className="row">
        <Link href={`/wi/wordinfo`}>
          <a>
            <h2 className="mySubHeadingFont">Word Info
              <span className="material-icons">biotech</span>
            </h2>
          </a>
        </Link>
        <button id="toggleDescribeWi" className={descWi ? "mybutton" : "mymaterialicon"}
          onClick={() => toggleDescWi()}
        >
          {descWi ? "Hide info" : <i className="material-icons">help_outline</i>}
        </button>
        {descWi ?
          <div className="container">
            <div className="row myinfo">
              <h1 className="myHeadingFont">Word Info Information</h1>
            </div>
            <div className="row myinfo">
              <p>Enter search criteria and get information on the matching words.</p>
            </div>
            <div className="row myinfo">
              <ul>
                <li>Anagrams - words that use the exact same letters.</li>
                <li>Inserts - words that can be made by inserting a single letter.</li>
                <li>Drops - words that can be made by dropping a single letter.</li>
                <li>Swaps - words that can be made by swapping a single letter.</li>
                <li>Due to licensing restrictions, this uses a 'common English lexicon' developed by some word game enthusiasts.</li>
              </ul>
            </div>
          </div>
        :
          <></>
        }
      </div>
      <BrowserView>
        <div className="row">
          <Link href={`/pb/prisonbreak2`}>
            <a>
              <h2 className="mySubHeadingFont">
                Prison Break
                <span className="material-icons">run_circle</span>
              </h2>
            </a>
          </Link>
          <button id="toggleDescribePb" className={descPb ? "mybutton" : "mymaterialicon"}
            onClick={() => toggleDescPb()}
          >
            {descPb ? "Hide info" : <i className="material-icons">help_outline</i>}
          </button>
          {descPb ?
            <div className="container">
              <div className="row myinfo">
                <h1 className="myHeadingFont">Prison Break Information</h1>
              </div>
              <div className="row myinfo">
                <p>Prison Break is a two player crossword style game.</p>
              </div>
              <div className="row myinfo">
                <ul>
                  <li>You play two games, one as the Prisoners and one as the Guards. Whoever frees the most prisoners wins.</li>
                  <li>Prisoners always play first.</li>
                  <li>The first word played must touch the centre square.</li>
                  <li>To free a prisoner, the Prisoners must play a tile on one of the special <span className="material-icons pbSquareEscapeHatch">run_circle</span> squares.</li>
                  <li>When a <span className="pbSquareUsedByGuards">&nbsp;?&nbsp;</span> is played it represents any letter and does not have to remain as the same letter throughout the game.</li>
                  <li>The <span className="pbSquareUsedByGuards u">Q</span> tile can represent "Q" or "QU", does not have to be the same in both directions, and does not have to remain at the same designation throughout the game.</li>
                  <li>The game ends if a player empties their rack.</li>
                  <li>The game ends if all the special <span className="material-icons pbSquareEscapeHatch">run_circle</span> squares are used.</li>
                  <li>The game ends if both players pass.</li>
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

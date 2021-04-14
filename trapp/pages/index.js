import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {BrowserView, MobileOnlyView} from 'react-device-detect'
import React, { useState } from 'react';

export default function Home() {
  const [descWm, setDescWm] = useState(false); // describe word mastermind
  const [descWi, setDescWi] = useState(false); // describe word info
  const [descPb, setDescPb] = useState(false); // describe prison break

  return (
    <div>
      <Head>
        <title>Tile Runner App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="myMenuHeader myHeadingFont">Menu</h1>
      <table className="myMenuTable">
        <BrowserView>
          <WMOption descWm={descWm} setDescWm={setDescWm}/>
          <WIOption descWi={descWi} setDescWi={setDescWi}/>
          <PBOption descPb={descPb} setDescPb={setDescPb}/>
        </BrowserView>
        <MobileOnlyView>
          <WMOption descWm={descWm} setDescWm={setDescWm}/>
          <WIOption descWi={descWi} setDescWi={setDescWi}/>
        </MobileOnlyView>
      </table>
    </div>
  )
}

const WMOption = (props) => {
  const toggleDescWm = () => {
    props.setDescWm(!props.descWm);
  }

  return (
    <>
      <tr>
        <td className="myMenuTd">
          <Link href={`/wm/mastermind`}>
            <a>
              <h2 className="mySubHeadingFont">Word Mastermind
                <span className="material-icons">psychology</span>
              </h2>
            </a>
          </Link>
        </td>
        <td className="myMenuTd">
          <button id="toggleDescribeWm" className={props.descWm ? "mybutton" : "mymaterialicon"}
            onClick={() => toggleDescWm()}
          >
            {props.descWm ? "Hide info" : <i className="material-icons">help_outline</i>}
          </button>
        </td>
      </tr>
      {props.descWm ?
        <tr>
          <td className="myMenuTd myinfo" colSpan="2">
            <p className="desc">Word Mastermind is a single player code cracking game.</p>
            <ul className="bullet">
              <li>The computer picks a random word.</li>
              <li>You enter guesses until you guess correctly.</li>
              <li>The computer tells you how many letters are correct and how many are in the correct position.</li>
              <BrowserView>
                <li>The computer shows you word info for guessed words.</li>
              </BrowserView>
              <li>The computer will start with length 2, and add 1 each round up to length 8. Then it starts a new set back at 2.</li>
              <li>Due to licensing restrictions, this uses a 'common English lexicon' developed by some word game enthusiasts.</li>
            </ul>
          </td>
        </tr>
      :
        <></>
      }
    </>
  )
}

const WIOption = (props) => {
  const toggleDescWi = () => {
    props.setDescWi(!props.descWi);
  }

  return (
    <>
      <tr>
      <td className="myMenuTd">
        <Link href={`/wi/wordinfo`}>
          <a>
            <h2 className="mySubHeadingFont">Word Info
              <span className="material-icons">biotech</span>
            </h2>
          </a>
        </Link>
      </td>
      <td className="myMenuTd">
        <button id="toggleDescribeWi" className={props.descWi ? "mybutton" : "mymaterialicon"}
          onClick={() => toggleDescWi()}
        >
          {props.descWi ? "Hide info" : <i className="material-icons">help_outline</i>}
        </button>
      </td>
    </tr>
    {props.descWi ?
      <tr>
        <td className="myMenuTd myinfo" colSpan="2">
          <p className="desc">Word Info is a utility to get information on words.</p>
          <ul className="bullet">
            <li>Anagrams - words that use the exact same letters.</li>
            <li>Inserts - words that can be made by inserting a single letter.</li>
            <li>Drops - words that can be made by dropping a single letter.</li>
            <li>Swaps - words that can be made by swapping a single letter.</li>
            <li>Due to licensing restrictions, this uses a 'common English lexicon' developed by some word game enthusiasts.</li>
          </ul>
        </td>
      </tr>
    :
      <></>
    }
   </>
  )
}


const PBOption = (props) => {
  const toggleDescPb = () => {
    props.setDescPb(!props.descPb);
  }

  return (
    <>
      <tr>
      <td className="myMenuTd">
        <Link href={`/pb/prisonbreak2`}>
          <a>
            <h2 className="mySubHeadingFont">
              Prison Break
              <span className="material-icons">run_circle</span>
            </h2>
          </a>
        </Link>
      </td>
      <td className="myMenuTd">
        <button id="toggleDescribePb" className={props.descPb ? "mybutton" : "mymaterialicon"}
          onClick={() => toggleDescPb()}
        >
          {props.descPb ? "Hide info" : <i className="material-icons">help_outline</i>}
        </button>
      </td>
    </tr>
    {props.descPb ?
      <tr>
        <td colSpan="2" className="myMenuTd myinfo">
          <span className="desc">Prison Break is a two player crossword style game.</span>
          <ul className="bullet">
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
        </td>
      </tr>
    :
      <></>
    }
   </>
  )
}
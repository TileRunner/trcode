import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {BrowserView, MobileOnlyView} from 'react-device-detect'
import React, { useEffect, useState } from 'react';

const hideButtonClassName = 'w3-button w3-green w3-hover-black w3-border w3-animate-left';
const showButtonClassName = 'w3-right mymaterialicon w3-green w3-animate-right';
const menuItemWidthNormal = '320px';
const descriptionCard = 'w3-card-4 w3-green w3-cell w3-animate-right';

export default function Home() {
  const [descWm, setDescWm] = useState(false); // describe word mastermind
  const [descWi, setDescWi] = useState(false); // describe word info
  const [descPb, setDescPb] = useState(false); // describe prison break
  const [descFyb, setDescFyb] = useState(false); // describe fry your brain
  const [coderMsg, setCoderMsg] = useState('Loading');
  const [coderMsg2, setCoderMsg2] = useState('Loading');
  const getCoderMsg = async () => {
    let url = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:5000/evtest' : 'https://tilerunner.herokuapp.com/evtest'
    const res = await fetch(url);
    const jres = await res.json();
    setCoderMsg(`${jres.evtest}`);
    setCoderMsg2(`${jres.lextest}`);
  }
  useEffect(() => {
    getCoderMsg();
  },[])

  return (
    <div>
      <Head>
        <title>Tile Runner App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w3-container w3-teal">
        <h1 className="myHeadingFont">Menu</h1>
        <h2>{coderMsg}</h2>
      </div>
      <div className="w3-container w3-margin-left">
        <div className="w3-blue">
        <h1>The Enhanced North American Benchmark LEexicon, millenial edition</h1>
        <p>This site uses the ENABLE2K lexicon, a public domain word list that I gratefully acknowledge.</p>
        </div>
        <WMOption descWm={descWm} setDescWm={setDescWm}/>
        <WIOption descWi={descWi} setDescWi={setDescWi}/>
        <BrowserView>
          <PBOption descPb={descPb} setDescPb={setDescPb}/>
        </BrowserView>
        <FYBOption descFyb={descFyb} setDescFyb={setDescFyb}/>
      </div>
      <div className="w3-container w3-teal">
        <h1>Have fun!</h1>
        <h2>{coderMsg2}</h2>
      </div>
    </div>
  )
}

const WMOption = (props) => {
  const toggleDescWm = () => {
    props.setDescWm(!props.descWm);
  }

  return (
    <div className="w3-cell-row" style={{width: props.descWm ? '100%' : menuItemWidthNormal}}>
      <div className="w3-cell">
        <Link href={`/wm/mastermind`}>
          <a>
            <h2 className="mySubHeadingFont">Word Mastermind</h2>
          </a>
        </Link>
      </div>
      <div className={`w3-cell ${props.descWm ? "w3-cell-middle" : ""}`}>
        <button id="toggleDescribeWm" className={props.descWm ? hideButtonClassName : showButtonClassName}
          onClick={() => toggleDescWm()}
        >
          {props.descWm ? "Hide info" : <i className="material-icons">help_outline</i>}
        </button>
      </div>
      {props.descWm ?
        <div className={descriptionCard}>
          <ul className="w3-ul commonFontFamily">
            <li><h2 className="CommenHeaderFontFamily">Word Mastermind is a single player code cracking game.</h2></li>
            <li>The computer picks a random word.</li>
            <li>You enter guesses until you guess correctly.</li>
            <li>The computer tells you how many letters are correct and how many are in the correct position.</li>
            <li>The computer will start with length 2, and add 1 each round up to length 8. Then it starts a new set back at 2.</li>
            <BrowserView>
              <li>The computer shows you word info for guessed words.</li>
            </BrowserView>
          </ul>
        </div>
      :
        <></>
      }
    </div>
  )
}

const WIOption = (props) => {
  const toggleDescWi = () => {
    props.setDescWi(!props.descWi);
  }

  return (
    <div className="w3-cell-row" style={{width: props.descWi ? '100%' : menuItemWidthNormal}}>
      <div className="w3-cell">
        <Link href={`/wi/wordinfo`}>
          <a>
            <h2 className="mySubHeadingFont">Word Info</h2>
          </a>
        </Link>
      </div>
      <div className={`w3-cell ${props.descWi ? "w3-cell-middle" : ""}`}>
        <button id="toggleDescribeWi" className={props.descWi ? hideButtonClassName : showButtonClassName}
          onClick={() => toggleDescWi()}
        >
          {props.descWi ? "Hide info" : <i className="material-icons">help_outline</i>}
        </button>
      </div>
      {props.descWi ?
        <div className={descriptionCard}>
          <ul className="w3-ul commonFontFamily">
            <li><h2 className="commonHeaderFontFamily">Word Info is a utility to get information on words.</h2></li>
            <li>Anagrams - words that use the exact same letters.</li>
            <li>Inserts - words that can be made by inserting a single letter.</li>
            <li>Drops - words that can be made by dropping a single letter.</li>
            <li>Swaps - words that can be made by swapping a single letter.</li>
          </ul>
        </div>
      :
        <></>
      }
    </div>
  )
}

const PBOption = (props) => {
  const toggleDescPb = () => {
    props.setDescPb(!props.descPb);
  }

  return (
    <div className="w3-cell-row" style={{width: props.descPb ? '100%' : menuItemWidthNormal}}>
      <div className="w3-cell">
        <Link href={`/pb/prisonbreak`}>
          <a>
            <h2 className="mySubHeadingFont">Prison Break</h2>
          </a>
        </Link>
      </div>
      <div className={`w3-cell ${props.descPb ? "w3-cell-middle" : ""}`}>
        <button id="toggleDescribePb" className={props.descPb ? hideButtonClassName : showButtonClassName}
          onClick={() => toggleDescPb()}
        >
          {props.descPb ? "Hide info" : <i className="material-icons">help_outline</i>}
        </button>
      </div>

      {props.descPb ?
          <div className={descriptionCard}>
            <ul className="w3-ul commonFontFamily">
              <li><h2 className="commonHeaderFontFamily">Prison Break is a two player crossword style game.</h2></li>
              <li>You play two games, one as the Prisoners and one as the Guards. Whoever frees the most prisoners wins.</li>
              <li>Prisoners always play first.</li>
              <li>The first word played must touch the centre square.</li>
              <li>To free a prisoner, the Prisoners must play a tile on one of the special <span className="material-icons pbSquareEscapeHatch">run_circle</span> squares.</li>
              <li>When a <span className="pbSquareUsedByGuards">&nbsp;?&nbsp;</span> is played it represents any letter and does not have to remain as the same letter throughout the game.</li>
              <li>The <span className="pbSquareUsedByGuards u">Q</span> tile can represent "Q" or "QU", does not have to be the same in both directions, and does not have to remain at the same designation throughout the game.</li>
              <li>The game ends if a player empties their rack.</li>
              <li>The game ends if all the special <span className="material-icons pbSquareEscapeHatch">run_circle</span> squares are used.</li>
              <li>The game ends if both players pass.</li>
            </ul>
          </div>
      :
        <></>
      }
    </div>
  )
}

const FYBOption = (props) => {
  const toggleDescFyb = () => {
    props.setDescFyb(!props.descFyb);
  }

  return (
    <div className="w3-cell-row" style={{width: props.descFyb ? '100%' : menuItemWidthNormal}}>
      <div className="w3-cell">
        <Link href={`/fyb/fryyourbrain`}>
          <a>
            <h2 className="mySubHeadingFont">Fry Your Brain</h2>
          </a>
        </Link>
      </div>
      <div className={`w3-cell ${props.descPb ? "w3-cell-middle" : ""}`}>
        <button id="toggleDescribeFyb" className={props.descFyb ? hideButtonClassName : showButtonClassName}
          onClick={() => toggleDescFyb()}
        >
          {props.descFyb ? "Hide info" : <i className="material-icons">help_outline</i>}
        </button>
      </div>

      {props.descFyb ?
          <div className={descriptionCard}>
            <ul className="w3-ul commonFontFamily">
              <li><h2 className="commonHeaderFontFamily">Fry Your Brain is a two to six player word game.</h2></li>
              <li>Under Construction</li>
              <li>A tile pool is provided, starting with 3 letters, and players take turns.</li>
              <li>When it is your turn, make a word that has all the letters in the tile pool, plus any amount of additional letters.</li>
              <li>When a player fails to make a word on their turn, the other players take part in the free for all.</li>
              <li>In the free for all, the goal is to submit the shortest answer you can. All players with the shortest of the answers get points.</li>
              <li>The points given equals the number of letters in the tile pool the last time someone gave a valid answer for that round.</li>
              <li>Rounds continue until someone reaches the target number of points for the game.</li>
            </ul>
          </div>
      :
        <></>
      }
    </div>
  )
}
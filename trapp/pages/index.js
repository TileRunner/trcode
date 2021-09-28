import Head from 'next/head'
// import styles from '../styles/Home.module.css'
// import Link from 'next/link'
import {BrowserView, _MobileOnlyView} from 'react-device-detect'
import React, { _useEffect, useState } from 'react';
import WordMastermind from './wm/mastermind';
import WordInfo from './wi/wordinfo';
import PrisonBreak from './pb/prisonbreak';
import FryYourBrain from './fyb/fryyourbrain';

export default function Home() {
  const [whereto, setWhereto] = useState('menu');
  // const [coderMsg, setCoderMsg] = useState('Loading');
  // const [coderMsg2, setCoderMsg2] = useState('Loading');
  // const getCoderMsg = async () => {
  //   let url = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 'http://localhost:5000/evtest' : 'https://tilerunner.herokuapp.com/evtest'
  //   const res = await fetch(url);
  //   const jres = await res.json();
  //   setCoderMsg(`${jres.evtest}`);
  //   setCoderMsg2(`${jres.lextest}`);
  // }
  // useEffect(() => {
  //   getCoderMsg();
  // },[])

  return (
    <div>
      {whereto === 'menu' && <Menu setWhereto={setWhereto}></Menu>}
      {whereto === 'wm' && <WordMastermind setWhereto={setWhereto}></WordMastermind>}
      {whereto === 'wi' && <WordInfo setWhereto={setWhereto}></WordInfo>}
      {whereto === 'pb' && <PrisonBreak setWhereto={setWhereto}></PrisonBreak>}
      {whereto === 'fyb' && <FryYourBrain setWhereto={setWhereto}></FryYourBrain>}
    </div>
  )
}

const Menu = (props) => {
  const menuOptionClassName = 'w3-cell';
  const menuOptionClassName2 = 'w3-cell';
  const menuButtonClassName = 'w3-button w3-green w3-hover-black w3-border w3-round-xxlarge w3-margin';
  const hideButtonClassName = 'w3-button w3-black w3-border w3-animate-left w3-margin';
  const showButtonClassName = 'w3-button w3-hover-black mymaterialicon w3-animate-right w3-round-xxlarge w3-margin';
  const descriptionCard = 'w3-green w3-animate-right';
  
  const [descWm, setDescWm] = useState(false); // describe word mastermind
  const [descWi, setDescWi] = useState(false); // describe word info
  const [descPb, setDescPb] = useState(false); // describe prison break
  const [descFyb, setDescFyb] = useState(false); // describe fry your brain

  const WMOption = (props) => {
    const toggleDescWm = () => {
      props.setDescWm(!props.descWm);
    };

    return (
      <div className="w3-row">
        <div className={menuOptionClassName}>
          <button className={menuButtonClassName}
            onClick={() => {props.setWhereto('wm');}}
          >
            Word Mastermind
          </button>
        </div>
        <div className={menuOptionClassName2}>
          <button id="toggleDescribeWm" className={props.descWm ? hideButtonClassName : showButtonClassName}
            onClick={() => toggleDescWm()}
          >
            {props.descWm ? "Hide info" : <i className="material-icons">help_outline</i>}
          </button>
        </div>
      </div>
    )
  }

  const WIOption = (props) => {
    const toggleDescWi = () => {
      props.setDescWi(!props.descWi);
    }

    return (
      <div className="w3-row">
        <div className={menuOptionClassName}>
          <button className={menuButtonClassName}
            onClick={() => {props.setWhereto('wi');}}
          >
            Word Info
          </button>
        </div>
        <div className={menuOptionClassName2}>
          <button id="toggleDescribeWi" className={props.descWi ? hideButtonClassName : showButtonClassName}
            onClick={() => toggleDescWi()}
          >
            {props.descWi ? "Hide info" : <i className="material-icons">help_outline</i>}
          </button>
        </div>
      </div>
    )
  }

  const PBOption = (props) => {
    const toggleDescPb = () => {
      props.setDescPb(!props.descPb);
    }

    return (
      <div className="w3-row">
        <div className={menuOptionClassName}>
          <button className={menuButtonClassName}
            onClick={() => {props.setWhereto('pb');}}
          >
            Prison Break
          </button>
        </div>
        <div className={menuOptionClassName2}>
          <button id="toggleDescribePb" className={props.descPb ? hideButtonClassName : showButtonClassName}
            onClick={() => toggleDescPb()}
          >
            {props.descPb ? "Hide info" : <i className="material-icons">help_outline</i>}
          </button>
        </div>
      </div>
    )
  }

  const FYBOption = (props) => {
    const toggleDescFyb = () => {
      props.setDescFyb(!props.descFyb);
    }

    return (
      <div className="w3-row">
        <div className={menuOptionClassName}>
          <button className={menuButtonClassName}
            onClick={() => {props.setWhereto('fyb');}}
          >
            Fry Your Brain
          </button>
        </div>
        <div className={menuOptionClassName2}>
          <button id="toggleDescribeFyb" className={props.descFyb ? hideButtonClassName : showButtonClassName}
            onClick={() => toggleDescFyb()}
          >
            {props.descFyb ? "Hide info" : <i className="material-icons">help_outline</i>}
          </button>
        </div>
      </div>
    )
  }

  const DescribeWordMastermind = <div className={descriptionCard}>
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
  </div>;

  const DescribeWordInfo = <div className={descriptionCard}>
    <ul className="w3-ul commonFontFamily">
      <li><h2 className="commonHeaderFontFamily">Word Info is a utility to get information on words.</h2></li>
      <li>Anagrams - words that use the exact same letters.</li>
      <li>Inserts - words that can be made by inserting a single letter.</li>
      <li>Drops - words that can be made by dropping a single letter.</li>
      <li>Swaps - words that can be made by swapping a single letter.</li>
    </ul>
  </div>;

  const DescribePrisonBreak = <div className={descriptionCard}>
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
  </div>;

  const DescribeFryYourBrain = <div className={descriptionCard}>
    <ul className="w3-ul commonFontFamily">
      <li><h2 className="commonHeaderFontFamily">Fry Your Brain is a word game that can be contested by two to six players.</h2></li>
      <li>A tile pool is provided, starting with 3 letters. Players take turns.</li>
      <li>When it is your turn, make a word that has all the letters in the tile pool, plus any amount of additional letters.</li>
      <li>When a player fails to make a valid word on their turn, the other players take part in the free-for-all.</li>
      <li>In the free-for-all, the goal is to submit the shortest answer you can. All players with the shortest of the answers get points.</li>
      <li>The points given equals the number of letters in the tile pool the last time someone gave a valid answer for that round.</li>
      <li>Rounds continue until someone reaches the target number of points for the game.</li>
    </ul>
  </div>;

  return (
    <div>
      <Head>
        <title>Tile Runner App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w3-container w3-teal">
        <h1 className="myHeadingFont">Menu</h1>
        {/* <h2>{props.coderMsg}</h2> */}
      </div>
      <div>
          <WMOption descWm={descWm} setDescWm={setDescWm} setWhereto={props.setWhereto}/>
          <WIOption descWi={descWi} setDescWi={setDescWi} setWhereto={props.setWhereto}/>
          <BrowserView>
            <PBOption descPb={descPb} setDescPb={setDescPb} setWhereto={props.setWhereto}/>
          </BrowserView>
          <FYBOption descFyb={descFyb} setDescFyb={setDescFyb} setWhereto={props.setWhereto}/>
      </div>
      {descWm && DescribeWordMastermind}
      {descWi && DescribeWordInfo}
      {descPb && DescribePrisonBreak}
      {descFyb && DescribeFryYourBrain}
      <div className="w3-blue">
        <h1>The ENABLE2K lexicon</h1>
        <p>This site uses the Enhanced North American Benchmark LEexicon, millenial edition, a public domain word list that I gratefully acknowledge.</p>
      </div>
      <div className="w3-black">
        <h1>extendsclass.com</h1>
        <p>This site uses Free JSON storage made available by Cyril Bois from France. <a href='https://extendsclass.com/contact'>Click here for more info</a>. Thanks Cyril!</p>
      </div>
    </div>
  )

}
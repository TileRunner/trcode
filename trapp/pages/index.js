import {isMobile} from 'react-device-detect'
import React, { useState } from 'react';
import WordMastermind from './wm/mastermind';
import WordInfo from './wi/wordinfo';
import PrisonBreak from './pb/prisonbreak';
import FryYourBrain from './fyb/fryyourbrain';
import FryYourBrainSolo from './fyb/fybSolo';
import ScrabbleClub from './sc/scrabbleclub';
import Morpho from './morpho/morpho';
import Transmogrify from './tm/tm';

export default function Home() {
  const [whereto, setWhereto] = useState('menu');

  return (
    <div>
      {whereto === 'menu' && <Menu setWhereto={setWhereto}></Menu>}
      {whereto === 'wm' && <WordMastermind setWhereto={setWhereto}></WordMastermind>}
      {whereto === 'wi' && <WordInfo setWhereto={setWhereto}></WordInfo>}
      {whereto === 'pb' && <PrisonBreak setWhereto={setWhereto}></PrisonBreak>}
      {whereto === 'fyb' && <FryYourBrain setWhereto={setWhereto}></FryYourBrain>}
      {whereto === 'fybsolo' && <FryYourBrainSolo setWhereto={setWhereto}></FryYourBrainSolo>}
      {whereto === 'sc' && <ScrabbleClub setWhereto={setWhereto}></ScrabbleClub>}
      {whereto === 'morpho' && <Morpho setWhereto={setWhereto}></Morpho>}
      {whereto === 'tm' && <Transmogrify setWhereto={setWhereto}></Transmogrify>}
    </div>
  )
}

const Menu = (props) => {
  // Menu option toggle description flags
  const [descWm, setDescWm] = useState(false); // describe word mastermind
  const [descWi, setDescWi] = useState(false); // describe word info
  const [descPb, setDescPb] = useState(false); // describe prison break
  const [descFyb, setDescFyb] = useState(false); // describe fry your brain
  const [descFybsolo, setDescFybsolo] = useState(false); // describe fry your brain solo
  const [descSc, setDescSc] = useState(false); // describe scrabble club
  const [descMorpho, setDescMorpho] = useState(false); // describe morpho
  const [descTm, setDescTm] = useState(false); // describe transmogrify
  // Acknowledgements description toggles
  const [descEnable2k, setDescEnable2k] = useState(false); // describe ENABLE2K
  const [descFriends, setDescFriends] = useState(false); // describe friends
  const [descPhotos, setDescPhotos] = useState(false); // describe photo takers

  const MenuOption = (props) => {
    const toggleDescFlag = () => {
      props.setDescFlag(!props.descFlag);
    }

    return (
      <div>
          <button className="trButton"
            onClick={() => {props.setWhereto(props.targetWhereto);}}
          >
            {props.optionText}
          </button>
          &nbsp;
          <span id="toggleDescribeFlag" onClick={() => toggleDescFlag()}>
            <i className="material-icons trInfoIcon">info</i>
          </span>
      </div>
    )
  }

  const DescribeWordMastermind = <div>
    Word Mastermind has moved to here: <a href='https://tilerunner.github.io/word-mastermind/'>link</a>
  </div>;

  const DescribeWordInfo = <div className="trParagraph">
    <div className="trSubtitle">Word Info is a utility to get information on words.</div>
    <ul>
      <li>Anagrams - words that use the exact same letters.</li>
      <li>Inserts - words that can be made by inserting a single letter.</li>
      <li>Drops - words that can be made by dropping a single letter.</li>
      <li>Swaps - words that can be made by swapping a single letter.</li>
    </ul>
  </div>;

  const DescribePrisonBreak = <div className="trParagraph">
    <div className="trSubtitle">Prison Break is a two player crossword style game.</div>
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
    </ul>
  </div>;

  const DescribeFryYourBrain = <div className="trParagraph">
    <div className="trSubtitle">Fry Your Brain is a word game that can be contested by two to six players.</div>
    <ul>
      <li>A tile pool is provided, starting with 3 letters. Players take turns.</li>
      <li>When it is your turn, make a word that has all the letters in the tile pool, plus any amount of additional letters.</li>
      <li>You cannot reuse a word from the same round.</li>
      <li>You cannot merely add an S to a valid word from the same round, unless that word ends in S.</li>
      <li>When a player fails to make a valid word on their turn, the other players take part in the free-for-all.</li>
      <li>In the free-for-all, the goal is to submit the shortest answer you can. All players with the shortest of the answers get points.</li>
      <li>The points given equals the number of letters in the tile pool the last time someone gave a valid answer for that round.</li>
      <li>Rounds continue until someone reaches the target number of points for the game.</li>
    </ul>
  </div>;

  const DescribeFryYourBrainSolo = <div className="trParagraph">
    <div className="trSubtitle">Fry Your Brain Solo is a practise ground for Fry Your Brain</div>
    <ul>
      <li>A new tile pool is started with 3 letters.</li>
      <li>Make a word that has all the letters in the tile pool, plus any additional letters, or pass.</li>
      <li>A letter will be added to the pool after each word or pass, or a new tile pool will be started.</li>
      <li>The display will indicate whether each made word is valid or not.</li>
      <li>The display will show the shortest answer, using alphabetical order as the tiebreak.</li>
      <li>Unlike regular Fry Your Brain, you may reuse a word or simply add or remove an S at the end.</li>
    </ul>
  </div>;

  const DescribeScrabbleClub = <div className="trParagraph">
    Scrabble Club has moved to here: <a href='https://tilerunner.github.io/scrabble-club/'>link</a>
  </div>;

  const DescribeMorpho = <div className="trParagraph">
    Morpho has moved to here: <a href='https://tilerunner.github.io/morpho/'>link</a>
  </div>

  const DescribeTransmogrify = <div className="trParagraph">
    <p>Like Morpho, but you can also insert a letter, drop a letter, or anagram the word.</p>
  </div>

  const Acknowledge = (props) => {
    const toggleDescFlag = () => {
      props.setDescFlag(!props.descFlag);
    }

    return (
      <div>
          {props.ackText}&nbsp;
          <span onClick={() => toggleDescFlag()}>
            <i className="material-icons trInfoIcon">info</i>
          </span>
      </div>
    )
  }

  const DescribeEnable2k = <div className="trParagraph trEmphasis">
    <p>This site uses the Enhanced North American Benchmark LEexicon, millenial edition, a public domain word list that I gratefully acknowledge.</p>
    <p>I took some words out to try and keep things family friendly, but there still could be some bad words.</p>
  </div>

  const DescribeFriends = <div className="trParagraph trEmphasis">
    <p>Danielle, Emese, Cesar, Lennon, Bev, Noah, Rach, Sarah, Rod, Sonya, Nolan, Shyrai, Agnes, Jessica, Cheryl, ...</p>
    <p>Thanks for technical help, feedback, suggestions, or simply having fun here. <i className="material-icons heart">favorite</i></p>
  </div>

  const DescribePhotos = () => {
    const [artindex, setArtindex] = useState(1);
    const artindexMax = 4;
  
    function moveLeft() {
      if (artindex === 1) {
        setArtindex(artindexMax);
      } else {
        setArtindex(artindex-1);
      }
    }
    function moveRight() {
      if (artindex === artindexMax) {
        setArtindex(1);
      } else {
        setArtindex(artindex+1);
      }
    }
    return (<div className="artworkDiv">
      <div>
        <button onClick={() => {moveLeft();}} className="moveLeftButton">&lt;</button>
        <span>Drawings by Lennon Sykes.</span>
        <button onClick={() => {moveRight();}} className="moveRightButton">&gt;</button>
      </div>
      <div className={`artwork${artindex}`}></div>
    </div>);
  }

  const MenuOptionKmMarkers = () => <div className="trParagraph">
    Hamilton to Cambridge Rail Trail:
    <a href="https://1drv.ms/u/s!AoRKcQVZC5rH4XIvB_r0uq414KU2?e=aSSkK1" target="_blank"> Km Marker Videos</a>
  </div>

  return (
    <div className="trBackground">
      <div className="trParagraph">
        <div className="trTitle">Tile Stuff</div>
      </div>
      <div className="trParagraph">
        <div className="mainMenuOptions">
            <MenuOption key='bvmoWm' descFlag={descWm} setDescFlag={setDescWm} setWhereto={props.setWhereto} targetWhereto='wm' optionText='Word Mastermind'/>
            <MenuOption key='bvmoWi' descFlag={descWi} setDescFlag={setDescWi} setWhereto={props.setWhereto} targetWhereto='wi' optionText='Word Info'/>
            <MenuOption key='bvmoFyb' descFlag={descFyb} setDescFlag={setDescFyb} setWhereto={props.setWhereto} targetWhereto='fyb' optionText='Fry Your Brain'/>
            <MenuOption key='bvmoFybSolo' descFlag={descFybsolo} setDescFlag={setDescFybsolo} setWhereto={props.setWhereto} targetWhereto='fybsolo' optionText='FYB Solo Mode'/>
            <MenuOption key='bvmoMorpho' descFlag={descMorpho} setDescFlag={setDescMorpho} setWhereto={props.setWhereto} targetWhereto='morpho' optionText='Morpho'/>
            <MenuOption key='bvmoTm' descFlag={descTm} setDescFlag={setDescTm} setWhereto={props.setWhereto} targetWhereto='tm' optionText='Transmogrify'/>
            {!isMobile && <MenuOption key='bvmoPb' descFlag={descPb} setDescFlag={setDescPb} setWhereto={props.setWhereto} targetWhereto='pb' optionText='Prison Break'/>}
            {!isMobile && <MenuOption key='bvmoSc' descFlag={descSc} setDescFlag={setDescSc} setWhereto={props.setWhereto} targetWhereto='sc' optionText='Scrabble Club'/>}
        </div>
        {descWm && DescribeWordMastermind}
        {descWi && DescribeWordInfo}
        {descPb && DescribePrisonBreak}
        {descFyb && DescribeFryYourBrain}
        {descFybsolo && DescribeFryYourBrainSolo}
        {descSc && DescribeScrabbleClub}
        {descMorpho && DescribeMorpho}
        {descTm && DescribeTransmogrify}
      </div>
      <div className="trParagraph">
        <div className="trTitle">
            Runner Stuff
        </div>
        <MenuOptionKmMarkers></MenuOptionKmMarkers>
      </div>
      <div>
        <div className="trTitle">
          Special Thanks
        </div>
        <div className="trParagraph">
          <div className="acknowledgements">
            <Acknowledge ackText='ENABLE2K' descFlag={descEnable2k} setDescFlag={setDescEnable2k}/>
            <Acknowledge ackText='Friends' descFlag={descFriends} setDescFlag={setDescFriends}/>
            <Acknowledge ackText='Art Work' descFlag={descPhotos} setDescFlag={setDescPhotos}/>
          </div>
          {descEnable2k && DescribeEnable2k}
          {descFriends && DescribeFriends}
          {descPhotos && <DescribePhotos/>}
        </div>
      </div>
    </div>
  )
}
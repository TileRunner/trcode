import {BrowserView, MobileOnlyView} from 'react-device-detect'
import React, { useState } from 'react';
import WordMastermind from './wm/mastermind';
import WordInfo from './wi/wordinfo';
import PrisonBreak from './pb/prisonbreak';
import FryYourBrain from './fyb/fryyourbrain';
import FryYourBrainSolo from './fyb/fybSolo';
import ScrabbleClub from './sc/scrabbleclub';
import Morpho from './morpho/morpho';

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
  // Acknowledgements description toggles
  const [descEnable2k, setDescEnable2k] = useState(false); // describe ENABLE2K
  const [descFriends, setDescFriends] = useState(false); // describe friends
  const [descPhotos, setDescPhotos] = useState(false); // describe photo takers

  const MenuOption = (props) => {
    const toggleDescFlag = () => {
      props.setDescFlag(!props.descFlag);
    }

    return (
      <tr>
        <td>
          <button className="trButton"
            onClick={() => {props.setWhereto(props.targetWhereto);}}
          >
            {props.optionText}
          </button>
        </td>
        <td>
          <button id="toggleDescribeFlag" className="trButton"
            onClick={() => toggleDescFlag()}
          >
            {props.descFlag ? "Hide info" : "Show info"}
          </button>
        </td>
      </tr>
    )
  }

  const DescribeWordMastermind = <div className="trParagraph">
    <div className="trSubtitle">Word Mastermind is a single player code cracking game.</div>
    <ul>
      <li>The computer picks a random word.</li>
      <li>You enter guesses until you guess correctly.</li>
      <li>The computer tells you how many letters are correct and how many are in the correct position.</li>
      <li>The computer will start with length 2, and add 1 each round up to length 8. Then it starts a new set back at 2.</li>
      <BrowserView>
        <li>The computer shows you word info for guessed words.</li>
      </BrowserView>
    </ul>
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
    <div className="trSubtitle">The Scrabble Club page is Scrabble Club stuff</div>
  </div>;

  const DescribeMorpho = <div className="trParagraph">
    <h1>UNDER CONSTRUCTION</h1>
  </div>

  const Acknowledge = (props) => {
    const toggleDescFlag = () => {
      props.setDescFlag(!props.descFlag);
    }

    return (
      <tr>
        <td>
            {props.ackText}
        </td>
        <td>
          <button className="trButton"
            onClick={() => toggleDescFlag()}
          >
            {props.descFlag ? "Hide info" : "Show info"}
          </button>
        </td>
      </tr>
    )
  }

  const DescribeEnable2k = <div className="trParagraph trEmphasis">
    <p>This site uses the Enhanced North American Benchmark LEexicon, millenial edition, a public domain word list that I gratefully acknowledge.</p>
  </div>

  const DescribeFriends = <div className="trParagraph trEmphasis">
    <p>Danielle, Emese, Cesar, Lennon, Bev, Noah, Rach, Sarah, Rod, Sonya, Nolan, Shyrai, Agnes, Jessica, Cheryl, ...</p>
    <p>Thanks for technical help, feedback, suggestions, or simply having fun here. <i className="material-icons heart">favorite</i></p>
  </div>

  const DescribePhotos = <div className="trParagraph trEmphasis">
    <p>Morpho larva Photo by Egor Kamelev from Pexels</p>
    <p>Morpho cocoon (part of) Photo by <a href="https://unsplash.com/@scw1217?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Suzanne D. Williams</a> on <a href="https://unsplash.com/s/photos/morpho-cocoon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
    <p>Morpho butterlfy Photo by <a href="https://unsplash.com/@scw1217?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Suzanne D. Williams</a> on <a href="https://unsplash.com/s/photos/morpho-cocoon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
  </div>

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
        <BrowserView>
          <table>
            <tbody>
              <MenuOption descFlag={descWm} setDescFlag={setDescWm} setWhereto={props.setWhereto} targetWhereto='wm' optionText='Word Mastermind'/>
              <MenuOption descFlag={descWi} setDescFlag={setDescWi} setWhereto={props.setWhereto} targetWhereto='wi' optionText='Word Info'/>
              <MenuOption descFlag={descPb} setDescFlag={setDescPb} setWhereto={props.setWhereto} targetWhereto='pb' optionText='Prison Break'/>
              <MenuOption descFlag={descFyb} setDescFlag={setDescFyb} setWhereto={props.setWhereto} targetWhereto='fyb' optionText='Fry Your Brain'/>
              <MenuOption descFlag={descFybsolo} setDescFlag={setDescFybsolo} setWhereto={props.setWhereto} targetWhereto='fybsolo' optionText='FYB Solo Mode'/>
              <MenuOption descFlag={descSc} setDescFlag={setDescSc} setWhereto={props.setWhereto} targetWhereto='sc' optionText='Scrabble Club'/>
              <MenuOption descFlag={descMorpho} setDescFlag={setDescMorpho} setWhereto={props.setWhereto} targetWhereto='morpho' optionText='Morpho'/>
            </tbody>
          </table>
        </BrowserView>
        <MobileOnlyView>
          <table>
            <tbody>
              <MenuOption descFlag={descWm} setDescFlag={setDescWm} setWhereto={props.setWhereto} targetWhereto='wm' optionText='Word Mastermind'/>
              <MenuOption descFlag={descWi} setDescFlag={setDescWi} setWhereto={props.setWhereto} targetWhereto='wi' optionText='Word Info'/>
              <MenuOption descFlag={descFyb} setDescFlag={setDescFyb} setWhereto={props.setWhereto} targetWhereto='fyb' optionText='Fry Your Brain'/>
              <MenuOption descFlag={descFybsolo} setDescFlag={setDescFybsolo} setWhereto={props.setWhereto} targetWhereto='fybsolo' optionText='FYB Solo Mode'/>
              <MenuOption descFlag={descMorpho} setDescFlag={setDescMorpho} setWhereto={props.setWhereto} targetWhereto='morpho' optionText='Morpho'/>
            </tbody>
          </table>
        </MobileOnlyView>
        {descWm && DescribeWordMastermind}
        {descWi && DescribeWordInfo}
        {descPb && DescribePrisonBreak}
        {descFyb && DescribeFryYourBrain}
        {descFybsolo && DescribeFryYourBrainSolo}
        {descSc && DescribeScrabbleClub}
        {descMorpho && DescribeMorpho}
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
          <table>
            <tbody>
              <Acknowledge ackText='ENABLE2K' descFlag={descEnable2k} setDescFlag={setDescEnable2k}/>
              <Acknowledge ackText='Friends' descFlag={descFriends} setDescFlag={setDescFriends}/>
              <Acknowledge ackText='Photos By' descFlag={descPhotos} setDescFlag={setDescPhotos}/>
            </tbody>
          </table>
          {descEnable2k && DescribeEnable2k}
          {descFriends && DescribeFriends}
          {descPhotos && DescribePhotos}
        </div>
      </div>
    </div>
  )
}
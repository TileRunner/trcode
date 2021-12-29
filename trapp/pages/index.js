import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import {BrowserView, MobileOnlyView} from 'react-device-detect'
import React, { useState } from 'react';
import WordMastermind from './wm/mastermind';
import WordInfo from './wi/wordinfo';
import PrisonBreak from './pb/prisonbreak';
import FryYourBrain from './fyb/fryyourbrain';

export default function Home() {
  const [whereto, setWhereto] = useState('menu');

  return (
    <div>
      {whereto === 'menu' && <MobileOnlyView><Menu ismobile="Y" setWhereto={setWhereto}></Menu></MobileOnlyView>}
      {whereto === 'menu' && <BrowserView><Menu ismobile="N" setWhereto={setWhereto}></Menu></BrowserView>}
      {whereto === 'wm' && <WordMastermind setWhereto={setWhereto}></WordMastermind>}
      {whereto === 'wi' && <WordInfo setWhereto={setWhereto}></WordInfo>}
      {whereto === 'pb' && <PrisonBreak setWhereto={setWhereto}></PrisonBreak>}
      {whereto === 'fyb' && <MobileOnlyView><FryYourBrain ismobile="Y" setWhereto={setWhereto}></FryYourBrain></MobileOnlyView>}
      {whereto === 'fyb' && <BrowserView><FryYourBrain ismobile="N" setWhereto={setWhereto}></FryYourBrain></BrowserView>}
    </div>
  )
}

const Menu = (props) => {
  // Menu option toggle description flags
  const [descWm, setDescWm] = useState(false); // describe word mastermind
  const [descWi, setDescWi] = useState(false); // describe word info
  const [descPb, setDescPb] = useState(false); // describe prison break
  const [descFyb, setDescFyb] = useState(false); // describe fry your brain
  // Acknowledgements description toggles
  const [descEnable2k, setDescEnable2k] = useState(false); // describe ENABLE2K
  const [descExtendsClass, setDescExtendsClass] = useState(false); // describe extendsclass.com
  const [descFriends, setDescFriends] = useState(false); // describe friends

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

  const DescribeExtendsClass = <div className="trParagraph trEmphasis">
    <p>This site uses Free JSON storage made available by Cyril Bois from France. <a href='https://extendsclass.com/contact'>Click here for more info</a>. Thanks Cyril!</p>
  </div>

  const DescribeFriends = <div className="trParagraph trEmphasis">
    <p>Danielle, Emese, Cesar, Lennon, Bev, Noah, Rach, Sarah, Rod, Sonya, Nolan, Shyrai, Agnes, ...</p>
    <p>Thanks for technical help, feedback, suggestions, or simply having fun here. <i className="material-icons heart">favorite</i></p>
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
              </tbody>
          </table>
        </BrowserView>
        <MobileOnlyView>
          <table>
            <tbody>
              <MenuOption descFlag={descWm} setDescFlag={setDescWm} setWhereto={props.setWhereto} targetWhereto='wm' optionText='Word Mastermind'/>
              <MenuOption descFlag={descWi} setDescFlag={setDescWi} setWhereto={props.setWhereto} targetWhereto='wi' optionText='Word Info'/>
              <MenuOption descFlag={descFyb} setDescFlag={setDescFyb} setWhereto={props.setWhereto} targetWhereto='fyb' optionText='Fry Your Brain'/>
            </tbody>
          </table>
        </MobileOnlyView>
        {descWm && DescribeWordMastermind}
        {descWi && DescribeWordInfo}
        {descPb && DescribePrisonBreak}
        {descFyb && DescribeFryYourBrain}
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
            <Acknowledge ackText='extendsclass.com' descFlag={descExtendsClass} setDescFlag={setDescExtendsClass}/>
            <Acknowledge ackText='Friends' descFlag={descFriends} setDescFlag={setDescFriends}/>
            </tbody>
          </table>
          {descEnable2k && DescribeEnable2k}
          {descExtendsClass && DescribeExtendsClass}
          {descFriends && DescribeFriends}
        </div>
      </div>
    </div>
  )
}
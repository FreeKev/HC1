import React from 'react'
import { Link } from 'gatsby'
import Video from '../components/video'
import VideoDouble from '../components/videoDouble'

const myHero = () => (
  <div>
    {console.log(whaz[Object.keys(whaz)[0]])}
    <div className="myhero">
      <h3>HolyCulture</h3>
      <p><i>Salt & light in all of life.</i></p>
      <a href="#recent-videos" id="recent-videos" className="nounderline"><div className="arrow-down"></div></a>
    </div>
    <div className="transition-up center">
    <h1 className="mb0">Recent Videos</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <a>See All Videos</a><br /><br />
    </div>
    <ul className="video-list">
      <Video vidData={whaz} />
      <VideoDouble vidData={whaz} />
      <Video vidData={whaz} />
    </ul>
    <div className="transition-down" />
  </div>
)

const whaz = {
    "video1": {
      "date": "120788",
      "title": "A Grammatical Error in the Quran",
      "subtitle": "Acts17Apologetics",
      "url": "https://www.youtube.com/watch?v=PihTYLAVrxI"
    },
    "video2": {
      "date": "120789",
      "title": "Countering Muslim Claims",
      "subtitle": "Contra Islam, Pt. 4",
      "url": "https://www.youtube.com/watch?v=NejPzdhDISU"
    }
}

export default myHero

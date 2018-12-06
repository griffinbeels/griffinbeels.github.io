import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';

//imports of all of the images
import FalcoImage from './icons/neutral Falco.png';
import FoxImage from './icons/neutral Fox.png';
import SheikImage from './icons/neutral Sheik.png';
import MarthImage from './icons/neutral Marth.png';
import CaptainFalconImage from './icons/neutral Captain Falcon.png';
import JigglypuffImage from './icons/neutral Jigglypuff.png';
import IceClimbersImage from './icons/neutral Ice Climbers.png';
import PeachImage from './icons/neutral Peach.png';
import PikachuImage from './icons/neutral Pikachu.png';
import SamusImage from './icons/neutral Samus.png';
import DrMarioImage from './icons/neutral Doctor Mario.png';
import YoshiImage from './icons/neutral Yoshi.png';
import LuigiImage from './icons/neutral Luigi.png';
import MarioImage from './icons/neutral Mario.png';
import LinkImage from './icons/neutral Link.png';
import YoungLinkImage from './icons/neutral Young Link.png';
import DonkeyKongImage from './icons/neutral Donkey Kong.png';
import GanondorfImage from './icons/neutral Ganondorf.png';
import RoyImage from './icons/neutral Roy.png';
import GameAndWatchImage from './icons/neutral Game and Watch.png';
import MewtwoImage from './icons/neutral Mewtwo.png';
import ZeldaImage from './icons/neutral Zelda.png';
import NessImage from './icons/neutral Ness.png';
import PichuImage from './icons/neutral Pichu.png';
import BowserImage from './icons/neutral Bowser.png';
import KirbyImage from './icons/neutral Kirby.png';



//TODO (FilteredList): create a produce list using the 'const' variable keyword
const characters = [
    {name: "Falco", type: "Spacies", rank: 2, icon: FalcoImage, weight: "Medium"},
    {name: "Kirby", type: "Floaties", rank: 26, icon: KirbyImage, weight: "Light"},
    {name: "Fox", type: "Spacies", rank: 1, icon: FoxImage, weight: "Medium"},
    {name: "Ganondorf", type: "Floaties", rank: 18, icon: GanondorfImage, weight: "Heavy"},
    {name: "Link", type: "Fast Fallers", rank: 15, icon: LinkImage, weight: "Medium"},
    {name: "Young Link", type: "Fast Fallers", rank: 16, icon: YoungLinkImage, weight: "Medium"},
    {name: "Captain Falcon", type: "Fast Fallers", rank: 5, icon: CaptainFalconImage, weight: "Medium"},
    {name: "Jigglypuff", type: "Floaties", rank: 6, icon: JigglypuffImage, weight: "Light"},
    {name: "Mewtwo", type: "Floaties", rank: 21, icon: MewtwoImage, weight: "Medium"},
    {name: "Ice Climbers", type: "Floaties", rank: 7, icon: IceClimbersImage, weight: "Medium"},
    {name: "Peach", type: "Floaties", rank: 8, icon: PeachImage, weight: "Medium"},
    {name: "Mario", type: "Floaties", rank: 14, icon: MarioImage, weight: "Medium"},
    {name: "Pikachu", type: "Floaties", rank: 9, icon: PikachuImage, weight: "Medium"},
    {name: "Donkey Kong", type: "Fast Fallers", rank: 17, icon: DonkeyKongImage, weight: "Heavy"},
    {name: "Roy", type: "Floaties", rank: 19, icon: RoyImage, weight: "Medium"},
    {name: "Samus", type: "Floaties", rank: 10, icon: SamusImage, weight: "Heavy"},
    {name: "Mr. Game & Watch", type: "Floaties", rank: 20, icon: GameAndWatchImage, weight: "Light"},
    {name: "Zelda", type: "Floaties", rank: 22, icon: ZeldaImage, weight: "Medium"},
    {name: "Dr. Mario", type: "Floaties", rank: 11, icon: DrMarioImage, weight: "Medium"},
    {name: "Pichu", type: "Floaties", rank: 24, icon: PichuImage, weight: "Light"},
    {name: "Yoshi", type: "Floaties", rank: 12, icon: YoshiImage, weight: "Heavy"},
    {name: "Luigi", type: "Floaties", rank: 13, icon: LuigiImage, weight: "Medium"},
    {name: "Bowser", type: "Floaties", rank: 25, icon: BowserImage, weight: "Heavy"},
    {name: "Ness", type: "Floaties", rank: 23, icon: NessImage, weight: "Medium"},
    {name: "Sheik", type: "Floaties", rank: 3, icon: SheikImage, weight: "Medium"},
    {name: "Marth", type: "Floaties", rank: 4, icon: MarthImage, weight: "Medium"},
];


class App extends Component {
    render() {
        return (
    			<div className="App">
                    <FilteredList items = {characters}/>
          </div>
        );
    }
}

export default App;

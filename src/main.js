import './style.scss';

import Motd from './Motd';
import Tabs from './Tabs'
import CollectEnergy from './CollectEnergy';

const tabs = new Tabs();
const motd = new Motd();
const collectEnergy = new CollectEnergy();
tabs.init();
motd.init();
collectEnergy.init();
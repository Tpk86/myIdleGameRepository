import Motd from './Motd';
import './style.scss';
import Tabs from './Tabs'

const tabs = new Tabs();
const motd = new Motd();
tabs.init();
motd.init();
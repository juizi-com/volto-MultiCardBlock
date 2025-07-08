These files get added to the customizations/components/Blocks folder

To register MultiCardBlock block, add to src/index.js

import iconSVG from '@plone/volto/icons/select-all.svg';
import { Edit as MultiCardEdit, View as MultiCardView} from './components/Blocks/MultiCardBlock';

const applyConfig = (config) => {

	//MultiCardBlock
	config.blocks.blocksConfig.multiCard = {
	    id: 'multiCard',
	    title: 'Multi Card',
	    icon: iconSVG,
	    group: 'common',
	    view: MultiCardView,
	    edit: MultiCardEdit,
	    restricted: false,
	    mostUsed: true,
	    sidebarTab: 1,
	  };

	return config;
};

export default applyConfig;

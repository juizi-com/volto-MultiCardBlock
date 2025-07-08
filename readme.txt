These files get added to the customizations/components/Blocks folder

To register MultiCardBlock block, add to src/index.js

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
import App from './App.html';

import whiteFish from './data/new-republic-white-fish.js';

const app = new App({
	target: document.body,
	data: {
		name: 'world',
		topics: {
			whiteFish: whiteFish
		},
		topic: "whiteFish",
		service: "azure"
	}
});

export default app;
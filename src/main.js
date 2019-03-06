import App from './App.html';

import whiteFish from './data/new-republic-white-fish.js';

const app = new App({
	target: document.body,
	data: {
		topics: {
			whiteFish: whiteFish
		},
		activeTopic: "whiteFish",
		activeService: "google"
	}
});

export default app;
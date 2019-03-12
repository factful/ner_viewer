import App from './App.html';

import whiteFish from './data/new-republic-white-fish.js';
import deathOnBorder from './data/occrp-death-on-the-border.js';

const app = new App({
	target: document.body,
	data: {
		topics: {
			whiteFish: whiteFish,
			deathOnBorder: deathOnBorder
		},
		activeTopic: "whiteFish",
		activeService: "google",
		activeEntity: null,
		activeLabel: null
	}
});

export default app;
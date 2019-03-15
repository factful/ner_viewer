import App from './App.html';

import whiteFish from './data/new-republic-white-fish.js';
import deathOnBorder from './data/occrp-death-on-the-border.js';

let topics = {
	whiteFish: whiteFish,
	deathOnBorder: deathOnBorder
};
let initialTopic = Object.keys(topics)[0];
let initialService = Object.keys(topics[initialTopic])[1];

const app = new App({
	target: document.body,
	data: {
		topics: topics,
		activeTopic: initialTopic,
		activeService: initialService
	}
});

export default app;
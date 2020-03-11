# Makefile

install:
	npm install

start:
	node bin/brain-games.js

publish:
	sudo npm publish --dry-run

link:
	sudo npm link

lint:
	npx eslint .
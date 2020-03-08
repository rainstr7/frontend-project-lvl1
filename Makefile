# Makefile

install:
	npm install

start:
	node bin/brain-games.js

publish:
	sudo npm publish --dry-run

make link:
	sudo npm link

make lint:
	npx eslint .
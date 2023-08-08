brain-games:
		node bin/brain-games.js

install:
		npm ci

publish:
		npm publish --dry-run

lint:
		npx eslint .

test:
		node --experimental-vm-modules node_modules/jest/bin/jest.js

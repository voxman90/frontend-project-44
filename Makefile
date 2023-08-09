brain-calc:
		node bin/brain-calc.js

brain-even:
		node bin/brain-gcd.js

brain-games:
		node bin/brain-games.js

brain-gcd:
		node bin/brain-gcd.js

brain-progression:
		node bin/brain-progression.js

install:
		npm ci

lint:
		npx eslint .

publish:
		npm publish --dry-run && sudo npm link

test:
		node --experimental-vm-modules node_modules/jest/bin/jest.js

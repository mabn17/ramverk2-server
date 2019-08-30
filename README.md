# Express TypeScript Server
An express server for [Ramverk2 *v2*](https://dbwebb.se/kurser/ramverk2-v2)

# Badges
[![Build Status](https://travis-ci.org/mabn17/ramverk2-server.svg?branch=master)](https://travis-ci.org/mabn17/ramverk2-server)

[![Build Status](https://scrutinizer-ci.com/g/mabn17/ramverk2-server/badges/build.png?b=master)](https://scrutinizer-ci.com/g/mabn17/ramverk2-server/build-status/master) [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/mabn17/ramverk2-server/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/mabn17/ramverk2-server/?branch=master) [![Code Coverage](https://scrutinizer-ci.com/g/mabn17/ramverk2-server/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/mabn17/ramverk2-server/?branch=master)

# Installation
1. Clone the repo `git clone git@github.com:mabn17/ramverk2-server.git`.
2. Install the dependencies `cd ramverk2-server && npm install`
3. Change your enviremental variables inside `config/env/` *(You have to rename `.env.e.production` to `.env.production` if you want to use it in production mode)*
3. Start the app `npm start`

## Requirements
1. [Docker](https://www.docker.com/)
2. [Sqlite3](https://www.sqlite.org/index.html)
3. [MongoDB](https://www.mongodb.com/)

# Testing 
1. `npm test` - To see reports from the unittests.  
2. `npm run test1` - Tests on the lastest npm version. 
3. `npm run test2` - Tests on the lastest npm version 10.  
4. `npm run test3` - Tests on the lastest npm version 8.
5. `npm run test4` - Tests on the lastest npm version 6.

## API Documentation
1. [Me](src/routes/doc/Me.md) - Index route (Sqlite3)
2. [Authentication](src/routes/doc/Auth.md) - Login & Register route(Sqlite3)
3. [Reports](src/routes/doc/Report.md) - Create new and Get all/spesific reports (Sqlite3)
4. [Chat](src/routes/doc/Message.md) - Save and get chat messages (MongoDB)

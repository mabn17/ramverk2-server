CREATE TABLE IF NOT EXISTS users (
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    birthday DATE DEFAULT NULL,
    UNIQUE(email)
);

CREATE TABLE IF NOT EXISTS site_texts (
    title VARCHAR(255) NOT NULL,
    `data` TEXT NOT NULL,
    UNIQUE(title)
);

CREATE TABLE IF NOT EXISTS report_texts (
    title VARCHAR(255) NOT NULL,
    `data` TEXT NOT NULL,
    UNIQUE(title)
);

INSERT INTO site_texts(title, `data`) VALUES (
 "me",
 "# Min me-sida i kursen Ramverk2 v2

Hej, Mitt namn är Martin Borg. Jag är 23 år gammal, född och uppvuxen här i Karlskrona. Jag är det enda barnet, min mor är från Polen och min far är från Sverige. Jag gick ut tekniska linjen i Ehrensvärdska gymnasiet med specialisering datorteknik.
 
Jag är mycket motiverad och vill gärna lära mig allt jag behöver för att utföra ett bra arbete. Därför ser jag min kommande utbildning här på BTH som en bra plattform för mitt framtida yrkesval.

Jag är en positiv, social person som trivs med att arbeta på egen hand såväl som i grupper. Jag är trygg i att ta beslut samt följa dem. Jag har de ungas energi och de äldres lugn och respekt och räds inte att arbeta hårt för att nå resultat. Jag är en utåtriktad, flexibel och snäll person som gillar att hjälpa och lystna på andra.

På fritiden gillar jag att umgås med mina vänner och min familj. Jag gillar allt som har att göra med datorer. Mina största intressen är spel, film och musik."
);

INSERT INTO report_texts (title, `data`) VALUES
(
  "1",
  "# Angular Website
A frontend for [Ramverk2 *v2*](https://dbwebb.se/kurser/ramverk2-v2)

# Badges
[![Build Status](https://travis-ci.org/mabn17/ramverk2-client.svg?branch=master)](https://travis-ci.org/mabn17/ramverk2-client)

[![Build Status](https://scrutinizer-ci.com/g/mabn17/ramverk2-client/badges/build.png?b=master)](https://scrutinizer-ci.com/g/mabn17/ramverk2-client/build-status/master) [![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/mabn17/ramverk2-client/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/mabn17/ramverk2-client/?branch=master) [![Code Coverage](https://scrutinizer-ci.com/g/mabn17/ramverk2-client/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/mabn17/ramverk2-client/?branch=master)

## Requirements
[Server](https://github.com/mabn17/ramverk2-server) - Click for more informtaion on how to install and set up.

## Installation
1. Clone the repo `git clone git@github.com:mabn17/ramverk2-client.git`.
2. Install the dependencies `npm install`
3. Start the app `npm start`

## Testing
1. To see reports from the unittests `npm test`
2. Tests with Selenium `npm run test:ci`

## Routes
***/*** - Home  
***/add/redovisa/:kmom*** - Eddit given report (requires authenticated user to send), redirects to /add/redovisa if there is no matching title.  
***/add/redovisa*** - Add report (requires authenticated user to send)  
***/chat*** - Chat using sockets  
***/redovisa/:kmom*** - To see a spesific report  
***/om*** - The about page  
***/login*** - The login page  
***/register*** - The registration page  
***/\*\**** - Catching unknown routes with an error message

### Github
More information and the sourcecode can be found at [https://github.com/mabn17/ramverk2-client](https://github.com/mabn17/ramverk2-client)."
),
(
  "2",
 "### 2"
);
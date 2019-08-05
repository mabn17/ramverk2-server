CREATE TABLE IF NOT EXISTS users (
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
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
  "kmom01",
  "###Berätta utförligt om din syn på nodejs backend ramverk och berätta vilket ramverk du valde och varför.
Inget Svar ..

###Berätta om din katalogstruktur och hur du organiserade din kod, hur tänkte du?
Inget Svar ..

###Använde du någon form av scaffolding som ditt valda ramverk erbjuder?
Inget Svar ..

###Vad är din TIL för detta kmom?
Inget Svar .."
),
(
 "kmom02",
 "###Vilket JavaScript-ramverk valde du och varför?
Inget Svar *KMOM02*..

###Hur gick det att sedan implementera din me-sida i ramverket?
Inget Svar *KMOM02*..

###Vilka fördelar ser du med ett JavaScript ramverk jämfört med vanilla JavaScript?
Inget Svar *KMOM02*..

###Vilka lärdomar gjorde du dig när du implementerade autentisering med JWT på servern?
Inget Svar *KMOM02*..

###Vad är din TIL för detta kmom?
Inget Svar *KMOM02*.."
);
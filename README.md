# co-node-trello
This module is a [co](https://github.com/visionmedia/co) and generator compatible wrapper around the [node-trello](https://github.com/adunkman/node-trello) module by [adunkman](https://github.com/adunkman).

The only difference between this module and the node-trello module (aside from working with generators) is that you need to instantiate it upon require, like so:

```
var settings = require("./settings.js");
var trello = require('../')(settings.key, settings.token);
```
Where settings is a file that exports a two Strings, your key and your token (instructions for generating below).

Additionally, you must run node with the --harmony flag, and it will only work on node v0.11.7 and up.

[View Trello’s API documentation online][apidocs]. For information on Trello’s API development, visit [their Trello board][trellotrello], of course.

[apidocs]: https://trello.com/docs/
[trellotrello]: https://trello.com/board/trello-public-api/4ed7e27fe6abb2517a21383d

## Install
```
npm install co-node-trello
```

### Getting your key and token
* [Generate your developer key][devkey] and supply it as the first constructor parameter.
* To read a user’s private information, get a token by directing them to `https://trello.com/1/connect?key=<PUBLIC_KEY>&name=MyApp&response_type=token` replacing, of course, &lt;PUBLIC_KEY&gt; with the public key obtained in the first step.
* If you never want the token to expire, include `&expiration=never` in the url from the previous step.
* If you need write access as well as read, `&scope=read,write` to the request for your user token.

[devkey]: https://trello.com/1/appKey/generate

## Example Code
```javascript
var co = requrie('co');
var settings = require('./settings.js');
var trello = require('../')(settings.key, settings.token);

co(function* () {
  var member = yield trello.get("/1/members/me");
  console.log(member);

  // URL arguments are passed in as an object.
  var openCards = yield t.get("/1/members/me", { cards: "open" });
  console.log(openCards);
})();
```

## License
Released under [MIT](https://github.com/adunkman/node-trello/blob/master/LICENSE.md).

## Thank you to..
Tj for [Co library](http://github.com/visionmedia/co)

adunkmans's [node-trello library](https://github.com/adunkman/node-trello)

leukhin's [co-request](https://github.com/leukhin/co-request) for the example of how to wrap


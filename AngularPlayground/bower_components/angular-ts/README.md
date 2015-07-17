angular-ts
==

This repository makes the AngularJS TypeScript definitions from [DefinitelyTyped](https://github.com/borisyankov/DefinitelyTyped) available on [Bower](http://bower.io) as `angular-ts`. If you want AngularJS type definitions by you're not using Bower, get the type definitions from the DefinitelyTyped repository as they will always be at least as current as my copy and quite likely ahead.

This repository will be periodically refreshed from DefinitelyTyped as changes are made.

Getting the AngularJS type definitions
--
Method 1:
`bower install angular-ts`

Method 2:

Add `angular-ts` to your bower.json `"dependencies"` list:

    {
      "name": "myApp",
      "version": "0.1.0",
      "dependencies": {
        "angular-ts": "latest"
      }
    }

TypeScript and AngularJS versions
--
I make no promises regarding the version of TypeScript and AngularJS currently supported by these type definitions. However, I have noticed that, as of this writing, DefinitelyTyped is targeted to the latest stable versions of both TypeScript and AngularJS. I have no plans to support multiple versions (although I may create tags as necessary) as this is just a copy of a subset of DefinitelyTyped.

Documentation
--
The original README.md is here: https://github.com/borisyankov/DefinitelyTyped/blob/master/angularjs/README.md

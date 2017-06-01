# Provider Directory

React with TypeScript App

## Why?

1. I know React would be good for this data display task
2. I wanted to learn more about React, it's seems more popular than the alternatives
3. I wanted to do it with TypeScript & ES6:
    - I started using TypeScript again after using it with an [Angular tutorial](https://github.com/3ygun/tutorial-tour-of-heroes)
    - Greatly prefer static type checking and more manageable JavaScript...
    - I'd only gone through a single [React with TypeScript tutorial](https://github.com/3ygun/tutorial-react-with-ts) and my ~2 other React projects [WatsonTA](https://github.com/signofthehorns/watson-ta) and another job interview
4. Lastly, use the beautiful [Create React App](https://github.com/facebookincubator/create-react-app)

## Process

**NOTE**: Git log should give you a similar story :D
1. I worked on getting the basic Components I wanted up `App`, `ProviderEditor`, and `ProviderDisplay`
2. Added CSS styling with Bootstrap 4
    - Although it's still in alpha the stylings are WAY better than Bootstrap 3 so I tend to use it currently in longing
3. Worked on displaying of the `Provider` data in `ProviderDisplay` and `ProviderCard`
4. Implemented `ProviderEditor` to add `Provider`s
5. Realized these new `Provider`s we're being loaded into the `ProviderDisplay`
    - **Realized**: Later I discovered what I'd done wrong for the `setState(...)` approach BUT when to #6 because I didn't know that at the time
6. Added [MobX](https://mobx.js.org/) for state management to solve the problems experienced after #5
    - Followed [MobX vs Redux](https://www.robinwieruch.de/redux-mobx-confusion/) and the experience from [React with TypeScript tutorial](https://github.com/3ygun/tutorial-react-with-ts) to choose MobX over Redux
7. Implemented removal of `Provider`s
8. Restyled everything
9. Implemented required fields
10. Implemented sorting
11. Implemented searching

## What would be next steps?

- TESTING
    - Starting with the `ProviderManager` then moving to the React Components
- Cleanup and refractoring (`ProviderManager` could be cleaner)


## Completed

- [x] Should load the data below into the existing data section on page load.
- [x] Should have the ability to create providers that will immediately prepend to the list on submit.
- [x] Should have the ability to remove selected providers from the list.
- [x] Should have the ability to sort the list by any of the fields, both ascending and descending.
- [x] Type ahead searching is a nice to have.
- [x] Should not require a web server, and should be able to run offline.
- [x] Last Name, First Name and Email Address are required fields.
- [x] Match the spirit of the mock up but artistic freedom is encouraged.
    - [x] Be prepared to discuss the design choices you make.
- [x] All data exchanges should be in JSON format.

## Used Material

- Starting
    - Followed this tutorial to setup the app [TypeScript React Starter](https://github.com/Microsoft/TypeScript-React-Starter)
- MobX
    - [contacts-mvc/mobx-react-typescript](https://github.com/contacts-mvc/mobx-react-typescript)
        - Followed this to convert the app to MobX to get the `ProviderEditor` and `ProviderDisplay` to work together
    - [MobX -- Getting Start](https://mobx.js.org/getting-started.html)
    - [Why MobX over Redux?](https://www.robinwieruch.de/redux-mobx-confusion/)
        - Basically, MobX looked simpler and I was having a hard time contemplating what the Redux code I'd written from [TypeScript React Starter](https://github.com/Microsoft/TypeScript-React-Starter) was doing. Still took a long time to get the app into a MobX state.

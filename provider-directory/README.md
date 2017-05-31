# Provider Directory

React with TypeScript App

## Completed

- [x] Should load the data below into the existing data section on page load.
- [x] Should have the ability to create providers that will immediately prepend to the list on submit.
- [ ] Should have the ability to remove selected providers from the list.
- [ ] Should have the ability to sort the list by any of the fields, both ascending and descending.
- [ ] Type ahead searching is a nice to have.
- [ ] Should not require a web server, and should be able to run offline.
- [ ] Last Name, First Name and Email Address are required fields.
- [ ] Match the spirit of the mock up but artistic freedom is encouraged.
    - [ ] Be prepared to discuss the design choices you make.
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

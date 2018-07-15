# React test app for NOTHS

*  I decided to use a simple custom webpack/react setup instead of react-create-app to show I can setup the base.

*  I kept with three main components App, Basket and Product to keep things simple. I would have with extra time created smaller components so thing's like Price, Button, Image and layout items could be reused and more customisable.

*  I went with using css as the main styling approach for speed, but with more time I would have made everything a bit neater and used styled-components or something like SASS in order to setup reusable items such as spacing, font, colours

* With a bit more time I would have created better naming using BEM and reusable names for the layout/grid structure.

*  Redux was used to hold a constant state and one point of truth for the basket, which stores the items added to it and the total value of these items.

* Products are mapped using mockData, but if used properly this would be done by calling an end point through redux for the products data and stored in Redux.

## Additional things I would have done

* Create layout components e.g. Products/ Grid
* Create smaller, more reusable components such Price and Image
* Implement styled-components and or style pre-processor SASS
* Auto prefixing
* Accessibility

## How to run

first install node_modules folder.
```sh
npm install
```

to run development build with local server
```sh
npm run start
```

For production build
```sh
npm run build
```

For running tests
```sh
npm run test
```
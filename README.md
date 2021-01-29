## Install Packages
yarn or npm install

## Run the app
If using git bash:  
    yarn && yarn dev
    or
    npm install
    npm run dev

if powerShell
    yarn
    yarn dev

## React-JSS
Note how I use React-JSS to ensure that all css is relevant to the component that calls it only.
You can have the same classname through the app, in different components, but ReactJSS will ensure
that the classes are renamed and mangled for each style.ts file in the app.
This helps stop manually having to update (s)css, worry about collions and use !important everywhere.

## This is a small demo to show how you can use a web worker in React.  
The webworker generates prime numbers based on the limit of numbers sent in.
Take alook at the PrimeNumbers container and you can see how the worker is implemented.
It's not a perfect implementation as I have run into strange behaviour when another webworker is 
created.


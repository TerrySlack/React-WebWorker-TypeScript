## Install Packages
yarn or npm install

## Run the app
    yarn && yarn dev (bash)
    yarn then yarn dev (powershell)
    or
    npm install
    npm run dev


## React-JSS
I use React-JSS to ensure that all css is scoped to the component that calls it only.
You can have the same classname through the app, in different components, but ReactJSS will ensure
that the classes are renamed and mangled for each style.ts file in the app.
Short term goal is to not use React-JSS, and implement css modules
## This is a small demo to show how you can use a web worker in React.  
The webworker generates prime numbers based on the limit of numbers sent in.
Take alook at the PrimeNumbers container and you can see how the worker is implemented.
It's not a perfect implementation as I have run into strange behaviour when another webworker is 
created.


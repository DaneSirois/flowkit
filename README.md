# Flowkit.js
Flowkit.js - a React/Redux starter-kit and architecture

# The Architecture:

 |----- Interface ----|
 v          |         v
View >>> Partial >> Module > Component

This architecture follows a uni-directional hierarchy. Each compartment can only import from the compartments beneath it. The exception to this rule being Partials which are able to build from other partials. Ideally this shouldn't happen, but I have come across cases where I've needed to and hence why the exception is made.

### Views:
Views are what map to your routes. They typically represent entire pages, and are built from a combination of Partials, Modules, and Components. Ideally they are stateless, however this is a preference and not a rule.

## Partials:
Partials represent higher level divisions of your application. They are *always* stateful, and compose themselves from a combination of Modules, Components and occasionally other Partials. Often times Partials are expressed as being UI elements such as navbars, sidebars, and footers. A rule of thumb to follow when deciding whether or not something should exist as a Partial is that if you find yourself with a module thats needing to import another module it should be upgraded.

## Modules:
Modules specialize in individual areas of your app. They are masters of their own domain, and build themselves out of Components. They take data as props along side keeping track of their own internal state. In a lot of cases you will find your Modules to be reusable. Connections to your Interfaces can be made here.

## Components:
Components are completely stateless. They are solely dependent on props which makes them completely reusable.

## Dependencies
- react
- redux
- react-redux
- react-dom
- react-router
- npm-redux-interfaces
- css-modules
- postcss
- css-loader
- babel
- webpack

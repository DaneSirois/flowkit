# Flowkit.js
> A React/Redux starter-kit & architecture

### Index
1. [Installation](#installation)
2. [Usage](#usage)
3. [The architecture](#the-architecture)
4. [Naming convention](#naming-convention)
5. [Author](#author)
6. [License](#license)
7. [Dependencies](#dependencies)

## Installation
1. Fork this repository
2. Clone your forked copy

## Usage

**Running the dev-server:**
1. `npm install`
2. `npm start`

**Running tests:**
1. `npm test`

## The Architecture

Flowkit's architecture follows a one-directional hierarchy. It is organized into different divisions called "departments". Each department is only able import from the departments below it. Redux takes its place in the form of **Interfaces** (see: [npm-redux-interfaces](https://www.npmjs.com/package/npm-redux-interfaces)). **Interfaces** exist independently from the rest of your application and are accessible from anywhere throughout your app (although part of the convention is that **Components** do not make any store connections). Part of the inspiration for this project was the idea that your architecture should be a reflection of the way that the data flows throughout your React application.

<img src="https://i.imgur.com/jDwQaBf.jpg" alt="architecture" width="500px"/>

### Department structure:
All departments follow the same structure.

Each department contains a `_index.js` file, a `.module.css` file, and a `__tests__` folder. The idea is that everything that you need when working on a specific domain is right there in one spot.

An example of a hypothetical "Dashboard" view department could look like:
```
views
└───Dashboard
    ├───__tests__
    │    └───Dashboard_index.test.js
    ├───Dashboard_index.js
    └───Dashboard_style.module.css
```

### Interfaces:
Interfaces are where the entirety of your Redux logic lives. Each interface is completely self contained hosting both the actions, and reducers for a given domain. The idea behind them is that they provide a public API for your stores in which the rest of your application can interact with. The main benefit to them is that they let you dispatch actions and access state from anywhere throughout your application.

To learn more about redux interfaces, see the documentation for the underlying library: ([npm-redux-interfaces](https://www.npmjs.com/package/npm-redux-interfaces))

### Views:
Views are what map to your routes. They typically represent entire pages. They are built from a combination of **Partials**, **Modules**, and **Components**. Ideally they are stateless, however this is a preference and not a rule. Store connections are permitted, but it is preferred that the data fetching happens within your **Partials** as it keeps all of the logic self contained.

#### Properties:
- They can make store connections
- They can be stateful (usually are not)

#### Imports:
  - **Partials**
  - **Modules**
  - **Components**

### Partials:
Partials represent the higher level feature groupings of your application. They are often stateful, and commonly have a store connection. They compose themselves out of a combination of **Modules**, and **Components**.

A rule of thumb to follow when trying to decide if something should exist as either a **Module**, or **Partial**, is to always start by assuming that it is first a module. A sure indicator that it is time to "promote" it is when you find yourself with a **Module** needing to import from another **Module**. This is forbidden within the context of this architecture.

#### Properties:
- They can make store connections
- They can be stateful

#### Imports:
  - **Modules**
  - **Components**

### Modules:
Modules specialize in specific areas of your application. They are relatively self contained, only building themselves from **Components**. In many cases, you will find your **Modules** to be reusable. Connections to your **Interfaces** can be made here.

#### Properties:
- They can make store connections
- They can be stateful (usually are)
- They must not import other modules

#### Imports:
  - **Components**

### Components:
Components are pretty much completely self contained. They represent the lowest level building blocks of your application. Some examples of these would be wrappers for things like `<input>`, and `<button>` tags. Their functionality is nearly solely dependent upon `props` making them extremely reusable. They have no external store connections, as well as minimal (if any) external dependencies. The idea is that these can easily be distributed and shared across other Flowkit projects with minimal refactoring required.

#### Properties:
- They can be stateful
- They can *not* make store connections
- They have minimal (if any) external dependencies

#### Imports:
  - **Nothing**

## Naming Convention
Flowkit uses a custom naming convention that's a bit outside what you would normally see within a typical React application. The idea was that your file/component names are essentially the API of the architecture. As a result, they should be contextual in that they should provide context as to where the file is located within the app. This brings scalability improvements as it becomes easier to find specific files within your editors search tools as the app grows.

### Folder naming:
Department names use PascalCasing where the first letter of each word is capitalized. This pattern is carried out through all of the files that reside within.

### File naming:
File names begin with a prefix of the name of the department that they reside in. The prefix inherits the same PascalCasing of the parent.

Following the prefix, files are given a suffix to describe the contents within. The suffix portion uses camelCasing where every succeeding word begins with an uppercase.

It is convention for every department to have an "index" file which represents the entry point for its folder. It is common for a departments logic to exist entirely in that singular file.

An underscore is used to separate the prefix from the suffix.

An example of a complete file name found in a hypothetical "Post" module might look like:

```
modules/Post/Post_index.js
```

### Export naming:
When naming the export for your departments files, it is convention to append a suffix to the name declaring what type of file it is.

An example of an `_index.js` files export found in a hypothetical "PostList" partial would look like:

```js
// partials/PostList/PostList_index.js

export class PostList_partial extends React.Component {
  ...
}

export default PostList_partial;
```

When importing the file, you follow the same convention:

```js
import PostList_partial from '@partials/PostList/PostList_index';

render() {
  return (
    <div>
      <PostList_partial />
    </div>
  );
}
```

## Author
- **[Dane Sirois](https://www.linkedin.com/in/dane-sirois/)**

## License
- **[MIT](https://opensource.org/licenses/MIT)**

## Dependencies

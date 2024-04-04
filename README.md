# React.js Developer Roadmap

## Why Learn React?

 - Reason most peope learn React : hype,job,trend and building UI.
 - Why you should learn : to build and manage complex frontend.

## When to learn React.js ?

 - After mastering Javascript.
 - Most projects doesn't need React in their initial phase. One must be aware of the fact when using a certain tech is overkill.

## Why React was created by Facebook ?

**Problem : Phatom Message Problem:** The problem  relates to the inconsistency in updating message counts in Facebook's chat feature. Specifically, when a user reads a message in the chat, the message count for that particular conversation doesn't get updated. This inconsistency can lead to user frustration as they might continue to see an unread message count even after they've already read the messages.It occurs because application state and DOM is not in sync.

React was created by Facebook to address the challenges they were facing with their large and dynamic codebase. One of the main problems they encountered was known as the "Phantom DOM" or "Phantom Event Handling" problem.

The term "Phantom DOM" refers to the inefficiency in handling the Document Object Model (DOM) updates in web applications. Traditional web development involves directly manipulating the DOM whenever the application state changes. This process can be inefficient because updating the DOM is relatively slow, especially when dealing with large and complex UIs.

Additionally, managing event handlers in a complex UI can lead to unpredictable behavior and memory leaks. When components are added or removed dynamically, event handlers can become "orphans" or "phantoms" – they remain attached to elements even after the elements are removed from the DOM, leading to potential memory leaks and degraded performance.

## How React solves the Problem ?

React addressed these issues by introducing several key concepts:

1. **Virtual DOM**: React introduced the concept of a virtual DOM, which is an in-memory representation of the actual DOM. When the state of a React component changes, React doesn't immediately update the real DOM. Instead, it updates the virtual DOM and then compares it with the previous version to determine the minimal set of changes needed to update the real DOM efficiently. This approach significantly reduces the number of DOM manipulations and improves performance.

2. **Declarative Syntax** : React promotes a declarative programming style, where developers describe the desired state of the UI rather than imperatively specifying how to achieve it. This makes the code more predictable and easier to reason about, reducing the likelihood of introducing bugs related to DOM manipulation.

3. **Component-Based Architecture**: React encourages the decomposition of UIs into smaller, reusable components. Each component encapsulates its own state and behavior, making it easier to manage and reason about complex UIs. Additionally, React's one-way data flow ensures that changes to the state of a component propagate predictably through the component hierarchy.

## What was the initial reaction of React ?

- In its intial phase , it is one of the most hated library because of its complexity.
- Khan Academy and Unsplash were the first company to adopt the React.js library and spreading the good word about them.
- Over the time , with many improvements , it is now the most loved Javascript library for building and managing complex UI.

##  React: A JavaScript Library for Building User Interfaces

- **Component-Based:** React follows a component-based architecture where UIs are broken down into reusable components. Each component encapsulates its own state and behavior, making it easier to manage and maintain large-scale applications.

- **Declarative:** React allows developers to describe how the UI should look and behave in a declarative manner. This means developers specify the desired outcome, and React takes care of updating the UI to match that desired state.

- **Virtual DOM:** React utilizes a virtual representation of the DOM (Document Object Model) called the Virtual DOM. When changes are made to the UI, React updates the Virtual DOM first, then efficiently updates the real DOM by only modifying the necessary parts. This approach minimizes DOM manipulation and improves performance.

- **One-Way Data Binding:** React enforces a unidirectional data flow, meaning data flows in a single direction within the component hierarchy. This simplifies data management and reduces the likelihood of bugs caused by unpredictable state changes.

- **JSX (JavaScript XML):** React introduces JSX, a syntax extension that allows developers to write HTML-like code within JavaScript. JSX makes it easier to write and understand React components by blending HTML structure with JavaScript logic.

- **Reconciliation:** React efficiently updates the UI by performing a process called reconciliation. When the state of a component changes, React compares the new Virtual DOM with the previous one and determines the minimal set of changes needed to update the real DOM, optimizing performance.

- **Rich Ecosystem:** React has a vast ecosystem of libraries, tools, and community-driven resources that enhance development productivity. From state management libraries like Redux to testing frameworks like Jest, React's ecosystem offers everything developers need to build robust applications.

- **Lightweight:** As a library, React focuses on providing specific functionality for building user interfaces without imposing a strict structure or dictating the overall architecture of the application. Developers can integrate React into existing projects or use it alongside other libraries and tools as needed.

## Topics to learn in Core React.js

 - core of React(state or UI Manipulation , JSX)
 - component reusability
 - reusing of components(props and props drilling)
 - how to propagate chage(hooks)

## Additional Addon to React.js
 
 - Router(React doesn't have router).
 - State Management(React doesn't have state management in initial phase)
    - Redux
    - Redux Toolkit
    - Zustand
    - Context API
 - Class based components(to if required , to able to read legacy code)
 - Backen as a Service Apps Projects(social media app, ecommerce app , blog app)




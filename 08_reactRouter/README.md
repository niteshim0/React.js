# Introduction to React Router

React Router is a popular routing library for React applications. It allows you to manage the navigation and rendering of different components based on the URL in your single-page application (SPA). React Router enables you to create a declarative routing system, where you define the routes and associated components in a structured manner.

## Key Features

1. **Declarative Routing**: React Router provides components like `BrowserRouter`, `Route`, `Switch`, and `Link` that allow you to declare the routing structure of your application in a declarative way.

2. **Nested Routing**: You can nest routes within each other to create a hierarchical structure, allowing for more complex navigation patterns.

3. **Dynamic Routing**: React Router supports dynamic routing, where route parameters can be passed as props to components, enabling dynamic content based on the URL.

4. **History Management**: It manages browser history and allows for navigation using browser back and forward buttons. React Router also provides programmatic navigation methods for more advanced use cases.

5. **Code Splitting and Lazy Loading**: React Router supports code splitting and lazy loading of components, which helps in optimizing performance by loading only the required components for each route.

6. **Server-Side Rendering (SSR) Support**: React Router is compatible with server-side rendering (SSR) frameworks like Next.js, allowing for seamless server-side rendering of routes.



# Link vs <a href="">

## Why Use Link?

- **Prevents Full Page Reload**: 
  - When you use the `<a>` tag with an `href` attribute to navigate between routes in a single-page application (SPA), it triggers a full page reload.
- **Loss of State**:
  - With a full page reload, the state of your React application is lost, leading to a jarring user experience.
- **Breaks SPA Behavior**:
  - React Router's `Link` component ensures navigation happens within the context of your React application without causing full page reloads.
- **Maintains History and Browser Behavior**:
  - `Link` manages the application's history and preserves browser behavior, such as the ability to use the browser's back and forward buttons.
- **Performance**:
  - `Link` is optimized for React applications and offers better performance compared to traditional `<a>` tags.

## Example Usage:

```jsx
import { Link } from 'react-router-dom';

// Instead of:
// <a href="/about">About</a>

// Use:
<Link to="/about">About</Link>
```

# Difference Between Link and NavLink Components in React Router

The primary difference between `Link` and `NavLink` components in React Router is how they handle the styling of active links.

## Link

- The `Link` component is the most basic routing component provided by React Router. It is used to create navigation links within your application.
- It renders an anchor (`<a>`) tag with the specified `to` prop as the value of the `href` attribute.
- It does not provide any built-in styling for indicating the active route.

## NavLink

- The `NavLink` component extends the functionality of the `Link` component by adding additional features, particularly for styling active links.
- It accepts the same props as `Link`, but it also accepts additional props such as `activeClassName`, `activeStyle`, `exact`, and `isActive`.
- The `activeClassName` and `activeStyle` props allow you to apply custom styles to the link when it corresponds to the current active route.
- The `exact` prop, when set to `true`, ensures that the styles are applied only when the link's path matches the entire URL.
- The `isActive` prop allows you to define a custom function to determine if the link should be considered active based on the current route.

# Notes on useParams in React Router

## Introduction
In React Router, `useParams` is a custom hook used for accessing URL parameters in functional components. It provides an easy way to extract dynamic parameters from the URL path and use them within your components.

## Usage
1. **Importing useParams**:
   - First, import the `useParams` hook from `react-router-dom`:

   ```jsx
   import { useParams } from 'react-router-dom';
   ```

2. **Accessing URL Parameters**:
   - Inside your functional component, call useParams() to access the parameters from the URL:
   ```jsx
   const { parameterName } = useParams();
   ```

### Example : 
- Consider a scenario where you have a route defined as /users/:userId, where userId is a dynamic parameter. You can use useParams to access the userId parameter in your component:

```jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();

  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {userId}</p>
    </div>
  );
};

export default UserProfile;

```

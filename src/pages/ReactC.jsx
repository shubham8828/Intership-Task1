import React from "react";
import "./ReactC.css";
const ReactC = () => {

  const handleClick = () => {
    window.open(
      'https://legacy.reactjs.org/docs/getting-started.html',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="react-overview-container">
      <h1>React Overview</h1>

      <section>
        <h2>1. Core Concepts</h2>

        <div>
          <h3>1.1. Components</h3>
          <p>
            <strong>Definition:</strong> Components are the building blocks of a
            React application. They allow you to split the UI into independent,
            reusable pieces.
          </p>
          <h4>Types:</h4>
          <ul>
            <li>
              <strong>Functional Components:</strong> These are JavaScript
              functions that return React elements. Introduced with React 16.8,
              hooks enable functional components to manage state and lifecycle
              events.
              <pre>
                <code>{`
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
                `}</code>
              </pre>
            </li>
            <li>
              <strong>Class Components:</strong> These are ES6 classes that
              extend React.Component and have a render() method that returns
              React elements.
              <pre>
                <code>{`
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
                `}</code>
              </pre>
            </li>
          </ul>
        </div>

        <div>
          <h3>1.2. JSX (JavaScript XML)</h3>
          <p>
            <strong>Definition:</strong> JSX is a syntax extension that allows
            writing HTML-like code inside JavaScript. It makes the code easier
            to understand and write.
          </p>
          <pre>
            <code>{`
const element = <h1>Hello, world!</h1>;
            `}</code>
          </pre>
        </div>

        <div>
          <h3>1.3. State and Props</h3>
          <p>
            <strong>State:</strong> State is an object that holds the dynamic
            data of a component. It is managed within the component (local
            state).
          </p>
          <pre>
            <code>{`
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return <h2>It is {this.state.date.toLocaleTimeString()}.</h2>;
  }
}
            `}</code>
          </pre>
          <p>
            <strong>Props:</strong> Props are inputs to a React component. They
            are passed from a parent component to a child component and are
            immutable.
          </p>
          <pre>
            <code>{`
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
            `}</code>
          </pre>
        </div>

        <div>
          <h3>1.4. Lifecycle Methods</h3>
          <p>
            <strong>Class Components:</strong> In class components, lifecycle
            methods like componentDidMount(), componentDidUpdate(), and
            componentWillUnmount() allow you to hook into different stages of a
            component’s lifecycle.
          </p>
          <pre>
            <code>{`
class Clock extends React.Component {
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
}
            `}</code>
          </pre>
          <p>
            <strong>Functional Components:</strong> With hooks, you can manage
            lifecycle events using useEffect.
          </p>
          <pre>
            <code>{`
useEffect(() => {
  const timerID = setInterval(() => tick(), 1000);
  return () => clearInterval(timerID);
}, []);
            `}</code>
          </pre>
        </div>
      </section>

      <section>
        <h2>2. React Hooks</h2>
        <p>
          Introduced in React 16.8, hooks allow functional components to have
          state and other React features.
        </p>

        <div>
          <h3>2.1. Common Hooks</h3>
          <ul>
            <li>
              <strong>useState:</strong> Manages state in functional components.
              <pre>
                <code>{`
const [count, setCount] = useState(0);
                `}</code>
              </pre>
            </li>
            <li>
              <strong>useEffect:</strong> Performs side effects in functional
              components (similar to lifecycle methods).
              <pre>
                <code>{`
useEffect(() => {
  document.title = \`You clicked \${count} times\`;
}, [count]);
                `}</code>
              </pre>
            </li>
            <li>
              <strong>useContext:</strong> Allows passing data deeply through a
              component tree without explicitly threading props through every
              level.
            </li>
            <li>
              <strong>useReducer:</strong> Manages complex state logic, similar
              to useState but with a reducer function.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>3. Component Composition</h2>
        <p>
          React components can be composed together to build complex UIs.
          Components can contain other components as children and can be nested.
        </p>
        <pre>
          <code>{`
                      function App() {
                        return (
                          <div>
                            <Header />
                            <Content />
                            <Footer />
                          </div>
                        );
                      }
          `}</code>
        </pre>
      </section>

      <section>
        <h2>4. React Router</h2>
        <p>
          React Router is a standard library for routing in React. It enables
          navigation among different views of various components in a React
          application, and it keeps the UI in sync with the URL.
        </p>
        <pre>
          <code>{`
                    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

                    function App() {
                      return (
                        <Router>
                          <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                          </Routes>
                        </Router>
                      );
                    }
          `}</code>
        </pre>
      </section>

      <section>
        <h2>5. State Management</h2>
        <ul>
          <li>
            <strong>Local State:</strong> Managed within individual components.
          </li>
          <li>
            <strong>Context API:</strong> Provides a way to share values between
            components without passing props manually through every level.
            <pre>
              <code>{`
                      const ThemeContext = React.createContext('light');
              `}</code>
            </pre>
          </li>
          <li>
            <strong>Redux:</strong> A popular state management library used with
            React to manage complex state across large applications.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. React Performance</h2>
        <ul>
          <li>
            <strong>Reconciliation:</strong> React’s diffing algorithm
            efficiently updates the DOM by comparing the current tree with the
            previous one and applying only the minimal changes needed.
          </li>
          <li>
            <strong>Virtual DOM:</strong> React uses a virtual DOM to optimize
            rendering performance by minimizing direct DOM manipulations.
          </li>
        </ul>
      </section>

      <section>
        <h2>7. React Ecosystem</h2>
        <ul>
          <li>
            <strong>Next.js:</strong> A React framework for building
            server-rendered or statically exported React applications.
          </li>
          <li>
            <strong>Gatsby:</strong> A static site generator for React that
            builds fast websites by pulling data from APIs, databases, and
            files.
          </li>
          <li>
            <strong>Material-UI:</strong> A popular React UI framework with a
            comprehensive set of components.
          </li>
        </ul>
      </section>

      <section>
        <h2>8. Development Tools</h2>
        <ul>
          <li>
            <strong>React Developer Tools:</strong> A browser extension that
            allows developers to inspect the React component hierarchy, props,
            and state.
          </li>
          <li>
            <strong>Create React App (CRA):</strong> A tool to quickly set up a
            new React project with a good default configuration.
          </li>
        </ul>
      </section>

      <section>
        <h2>9. Best Practices</h2>
        <ul>
          <li>
            <strong>Component Reusability:</strong> Write reusable components to
            avoid repetition.
          </li>
          <li>
            <strong>State Lifting:</strong> Lift state up to the nearest common
            ancestor when it needs to be shared between components.
          </li>
          <li>
            <strong>Performance Optimization:</strong> Use React.memo to prevent
            unnecessary re-renders, and use the useCallback and useMemo hooks
            for expensive calculations.
          </li>
        </ul>
      </section>

      <section>
        <h2>10. React and SEO</h2>
        <p>
          React, by default, is client-side rendered, which can cause issues
          with SEO since search engines may struggle to index content that is
          not immediately available. Solutions like server-side rendering (SSR)
          with Next.js and static site generation with Gatsby address these
          issues.
        </p>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>
          React is a powerful and flexible library for building user interfaces.
          Its component-based architecture, along with hooks, allows developers
          to create complex and interactive web applications efficiently. The
          React ecosystem is vast, with many tools and libraries that enhance
          its functionality, making it a great choice for modern web
          development.
        </p>
      </section>
      <div className="read-more">
        <button className='read-more-btn' onClick={handleClick}>Read More</button>
      </div>
    </div>
  );
};

export default ReactC;

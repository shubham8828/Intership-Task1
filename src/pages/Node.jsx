import React from "react";
import "./NodeC.css"; // Use the same CSS file

function Node() {

  
  const handleClick = () => {
    window.open(
      'https://nodejs.org/docs/latest/api//',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="node-overview-container">
      <h1>Node.js Overview</h1>

      <section className="node-intro">
        <h2>What is Node.js?</h2>
        <p>
          Node.js is a JavaScript runtime built on Chrome's V8 JavaScript
          engine. It allows developers to run JavaScript on the server-side,
          enabling the development of scalable and high-performance web
          applications. Node.js is known for its non-blocking, event-driven
          architecture, which makes it particularly well-suited for handling
          I/O-bound tasks, such as network requests and file system operations.
        </p>
      </section>

      <section className="node-features">
        <h2>Key Features of Node.js</h2>
        <ul>
          <li>
            <strong>Event-Driven, Non-Blocking I/O:</strong> Node.js uses an
            event-driven, non-blocking I/O model that makes it lightweight and
            efficient. This allows it to handle multiple operations concurrently
            without blocking the execution of the code.
          </li>
          <li>
            <strong>Single-Threaded:</strong> Node.js operates on a single
            thread, but it can handle multiple operations in parallel due to its
            event loop mechanism. This makes it capable of managing a large
            number of connections simultaneously.
          </li>
          <li>
            <strong>NPM (Node Package Manager):</strong> Node.js comes with NPM,
            a powerful package manager that provides access to thousands of
            open-source libraries and modules. This helps in speeding up the
            development process by allowing developers to reuse code.
          </li>
          <li>
            <strong>Cross-Platform:</strong> Node.js is cross-platform, meaning
            it can run on Windows, macOS, and Linux, making it a versatile
            choice for developers working in diverse environments.
          </li>
        </ul>
      </section>

      <section className="node-use-cases">
        <h2>Common Use Cases for Node.js</h2>
        <ul>
          <li>
            <strong>Real-Time Applications:</strong> Node.js is ideal for
            developing real-time applications, such as chat apps, online gaming,
            and collaborative tools, where instant updates are critical.
          </li>
          <li>
            <strong>APIs and Microservices:</strong> Node.js is often used to
            build RESTful APIs and microservices, thanks to its lightweight
            nature and support for handling multiple connections.
          </li>
          <li>
            <strong>Single Page Applications (SPAs):</strong> Node.js can be
            used with frameworks like React or Angular to build SPAs, where the
            backend is responsible for serving API endpoints.
          </li>
          <li>
            <strong>Server-Side Rendering (SSR):</strong> Node.js is also used
            for server-side rendering of JavaScript applications, providing
            improved performance and SEO benefits.
          </li>
        </ul>
      </section>

      <section className="node-community">
        <h2>Node.js Community and Ecosystem</h2>
        <p>
          Node.js has a vibrant and active community that contributes to its
          growth and evolution. The ecosystem is vast, with numerous frameworks
          (like Express.js), libraries, and tools available to enhance
          development productivity. The community-driven approach ensures that
          Node.js continues to evolve with new features and improvements.
        </p>
      </section>

      <section className="conclusion">
        <h2>Conclusion</h2>
        <p>
          Node.js is a powerful and versatile platform that has revolutionized
          server-side development with JavaScript. Its non-blocking
          architecture, along with a rich ecosystem, makes it a popular choice
          for modern web applications. Whether you're building real-time
          applications, APIs, or server-side rendered pages, Node.js provides
          the tools and community support needed for success.
        </p>
      </section>
      <div className="read-more">
        <button className='read-more-btn' onClick={handleClick}>Read More</button>
      </div>
    </div>
  );
}

export default Node;

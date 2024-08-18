import React from 'react';
import './Express.css'; // Use the same CSS file

function Express() {
  
  const handleClick = () => {
    window.open(
      'https://expressjs.com/en/5x/api.html',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="express-overview-container">
      <h1>Express.js Overview</h1>

      <section className="express-intro">
        <h2>What is Express.js?</h2>
        <p>
          Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies the process of handling HTTP requests and responses, managing middleware, and setting up routes. Express.js is known for its performance and simplicity, making it a popular choice for developing server-side applications in the Node.js ecosystem.
        </p>
      </section>

      <section className="express-features">
        <h2>Key Features of Express.js</h2>
        <ul>
          <li>
            <strong>Middleware Support:</strong> Express.js allows the use of middleware functions to handle requests, responses, and errors. This modular approach makes it easy to add functionality and manage application logic.
          </li>
          <li>
            <strong>Routing:</strong> Express.js provides a powerful routing system that allows you to define and manage routes for your application. This makes it straightforward to handle different HTTP methods and paths.
          </li>
          <li>
            <strong>Template Engines:</strong> Express.js supports various template engines, such as Pug, EJS, and Handlebars, enabling server-side rendering of dynamic content.
          </li>
          <li>
            <strong>Easy Integration:</strong> Express.js integrates seamlessly with other Node.js modules and libraries, making it easy to connect to databases, authentication systems, and more.
          </li>
        </ul>
      </section>

      <section className="express-use-cases">
        <h2>Common Use Cases for Express.js</h2>
        <ul>
          <li>
            <strong>Web Applications:</strong> Express.js is commonly used to build web applications, providing a robust foundation for handling HTTP requests, routing, and middleware.
          </li>
          <li>
            <strong>RESTful APIs:</strong> Express.js is ideal for creating RESTful APIs due to its lightweight nature and support for handling various HTTP methods and endpoints.
          </li>
          <li>
            <strong>Single Page Applications (SPAs):</strong> Express.js can be used to serve the backend for SPAs, providing API endpoints that interact with frontend frameworks like React or Angular.
          </li>
          <li>
            <strong>Microservices:</strong> Express.js is well-suited for developing microservices, thanks to its modular architecture and ease of integration with other services.
          </li>
        </ul>
      </section>

      <section className="express-community">
        <h2>Express.js Community and Ecosystem</h2>
        <p>
          Express.js has a large and active community that contributes to its development and offers extensive support. The ecosystem includes a wide range of plugins, middleware, and integrations that extend Express.js’s functionality. With comprehensive documentation and numerous tutorials available, the community plays a significant role in the framework’s adoption and growth.
        </p>
      </section>

      <section className="conclusion">
        <h2>Conclusion</h2>
        <p>
          Express.js is a powerful and versatile framework that streamlines the development of Node.js applications. Its minimalist design, middleware support, and robust routing capabilities make it a go-to choice for building web servers, APIs, and microservices. Express.js's strong community and ecosystem further support its widespread use and continued evolution.
        </p>
      </section>
      <div className="read-more">
        <button className='read-more-btn' onClick={handleClick}>Read More</button>
      </div>
    </div>
  );
}

export default Express;

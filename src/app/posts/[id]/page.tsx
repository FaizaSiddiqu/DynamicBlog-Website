"use client";
import React from "react";
import CommentSection from "@/components/CommentSection";
import AutherCard from "@/components/AutherCard";


const posts = [
  {
    id: "1",
    title: "Exploring the Fundamentals of HTML: The Backbone of the Web",
    description: `HTML, or HyperText Markup Language, is the foundational building block of the World Wide Web. It is the standard language used to create and design web pages and applications. Understanding HTML is crucial for anyone looking to dive into web development, as it provides the structure and content of a webpage. In this blog, we will explore the basics of HTML, its elements, structure, and how it integrates with other technologies like CSS and JavaScript to create dynamic and visually appealing websites.

What is HTML?
HTML stands for HyperText Markup Language. It is a markup language used to define the structure of web content. HTML uses a system of tags and attributes to mark up text, images, links, and other elements to be displayed on a web browser. These tags tell the browser how to display the content, providing the essential framework for a webpage.

The Basic Structure of an HTML Document
An HTML document is made up of various elements that are enclosed within tags. These tags are typically written in pairs, with an opening tag and a closing tag. The basic structure of an HTML document includes the following essential elements:

<!DOCTYPE html>: This declaration defines the document type and version of HTML being used.
<html>: This tag encloses the entire HTML document.
<head>: Contains meta-information about the document, such as the title, character set, and links to stylesheets or scripts.
<title>: Sets the title of the webpage, which appears on the browser tab.
<body>: Encloses the main content of the webpage, including text, images, links, and other media.
Here is a simple example of a basic HTML document structure:

html
Copy code
<!DOCTYPE html>
<html>
<head>
    <title>My First Webpage</title>
</head>
<body>
    <h1>Welcome to My Webpage</h1>
    <p>This is a paragraph of text on my first webpage.</p>
</body>
</html>
HTML Elements and Tags
HTML elements are the building blocks of an HTML document. Each element consists of a start tag, content, and an end tag. For example, the paragraph element is represented as follows:

html
Copy code
<p>This is a paragraph.</p>
Common HTML Tags
Here are some commonly used HTML tags:

<h1> to <h6>: Headings, with <h1> being the largest and <h6> the smallest.
<p>: Paragraph tag used for blocks of text.
<a>: Anchor tag used to create hyperlinks.
<img>: Image tag used to embed images.
<ul>, <ol>, <li>: Tags used to create unordered and ordered lists.
<div>: Division tag used as a container for other elements.
<span>: Inline container used for styling a small part of text.
Attributes in HTML
Attributes provide additional information about an element and are always included in the opening tag. For example, the src attribute in the <img> tag specifies the path to the image file:

html
Copy code
<img src="image.jpg" alt="A beautiful scenery">
Some common attributes include:

href: Used with <a> to specify the URL of the link.
src: Used with <img> to specify the image source.
alt: Used with <img> to provide alternative text.
id: Used to uniquely identify an element.
class: Used to assign one or more class names to an element for styling purposes.
Structuring Content with HTML
HTML allows you to structure your content effectively using various tags. Here are some key structural elements:

Headings and Paragraphs
Headings (<h1> to <h6>) are used to define headings in a webpage. They are crucial for SEO and improving the accessibility of the page. Paragraphs (<p>) are used to define blocks of text.

Lists
HTML supports both ordered (<ol>) and unordered (<ul>) lists, with list items (<li>) defining each item in the list.

html
Copy code
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>

<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
Links and Images
Links are created using the <a> tag, and images are embedded using the <img> tag.

html
Copy code
<a href="https://www.example.com">Visit Example</a>
<img src="image.jpg" alt="Description of image">
Tables
Tables are used to display data in a tabular format using the <table> tag, along with <tr> for table rows, <th> for table headers, and <td> for table data.

html
Copy code
<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
    </tr>
</table>
HTML Forms
Forms are a crucial part of interactive websites, allowing users to input data. HTML forms are created using the <form> tag, with various input elements such as text fields, radio buttons, checkboxes, and submit buttons.

html
Copy code
<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <input type="submit" value="Submit">
</form>
HTML5 New Elements
HTML5 introduced several new elements that enhance the semantic meaning of the document. Some of these include:

<article>: Represents a self-contained piece of content.
<section>: Defines a section in the document.
<nav>: Used for navigation links.
<aside>: Represents content related to the main content.
<footer>: Defines the footer for a document or section.
Integrating HTML with CSS and JavaScript
While HTML provides the structure, CSS (Cascading Style Sheets) is used to style and layout the content, and JavaScript adds interactivity.

CSS Integration
CSS can be added directly within an HTML document using the <style> tag, or it can be linked externally using the <link> tag.

html
Copy code
<head>
    <link rel="stylesheet" href="styles.css">
</head>
JavaScript Integration
JavaScript can be added directly within an HTML document using the <script> tag, or it can be linked externally using the <script> tag with the src attribute.

html
Copy code
<body>
    <script src="script.js"></script>
</body>
Conclusion
HTML is the cornerstone of web development, providing the essential structure and content for web pages. By mastering HTML, you lay the foundation for learning CSS and JavaScript, enabling you to create visually appealing and interactive websites. Whether you are a beginner or looking to refine your skills, understanding HTML is the first step in your web development journey.





You said:
`,
    imageURL: "../images/html.jpg",
  },

  {
    id: "2",
    title: "Introduction to TypeScript: Enhancing JavaScript with Strong Typing",
    description:
      `TypeScript is a statically typed superset of JavaScript, developed by Microsoft. It extends JavaScript by adding optional static types, making it easier to catch errors during development and improve code maintainability. TypeScript compiles down to plain JavaScript, ensuring compatibility with all browsers and JavaScript environments.

Key Features of TypeScript
Static Typing: TypeScript introduces types to JavaScript, allowing developers to specify data types for variables, function parameters, and return values. This reduces runtime errors and improves code clarity.
Interfaces: Interfaces define the shape of objects, ensuring that objects adhere to a specific structure, which is helpful in large codebases.
Generics: TypeScript supports generics, enabling the creation of reusable and flexible components that work with various data types.
Modules: TypeScript uses ES6-style modules, facilitating better code organization and reusability.
Benefits of TypeScript
Improved Code Quality: By catching errors early during development, TypeScript helps maintain cleaner, more reliable code.
Better Tooling: TypeScript offers excellent support in IDEs, with features like autocompletion, refactoring, and advanced error detection.
TypeScript is an essential tool for modern web development, bridging the gap between developer productivity and application scalability.

`,
    imageURL: "../images/typescript.jpg",
  },

  {
    id: "3",
    title: "Tailwind CSS: A Utility-First Framework for Rapid UI Development",
    description:
      `Tailwind CSS is a utility-first CSS framework that revolutionizes the way developers build web interfaces. Unlike traditional CSS frameworks like Bootstrap or Foundation, which provide pre-designed components, Tailwind offers a collection of low-level utility classes that can be combined to create unique, custom designs without ever writing custom CSS.

Why Use Tailwind CSS?
Flexibility: Tailwind's utility classes give developers the freedom to design without being constrained by predefined components. Each utility class corresponds to a specific CSS property, making it easy to build complex designs from scratch.

Efficiency: Since Tailwind CSS allows you to compose designs directly in your HTML, it reduces the need for writing custom CSS, thereby speeding up the development process. You can see the visual changes immediately as you tweak the utility classes.

Responsive Design: Tailwind makes responsive design straightforward with its built-in responsive modifiers. By adding prefixes like sm:, md:, lg:, and xl:, you can apply different styles at various screen sizes without writing additional media queries.

Customization: Tailwind is highly customizable. Developers can extend or modify the default configuration using the tailwind.config.js file. You can define custom colors, spacing, fonts, and more, ensuring that your designs match your brand's identity.

Key Features of Tailwind CSS
Utility-First Classes: Tailwind provides a wide array of utility classes for controlling layout, spacing, typography, colors, and more. For example, p-4 applies padding, text-center centers text, and bg-blue-500 sets a blue background.

Dark Mode: Tailwind supports dark mode out of the box. You can define dark mode styles using the dark: prefix, which makes it simple to implement light and dark themes.

Grid and Flexbox Utilities: Tailwind offers powerful utilities for building flexible, responsive layouts using CSS Grid and Flexbox, making it easier to create complex grid systems and align items as needed.

Tailwind CSS is an invaluable tool for developers who prefer a more hands-on approach to UI design. Its utility-first philosophy fosters creativity and efficiency, empowering developers to craft responsive and highly customizable designs quickly. Whether you're building a simple website or a complex web application, Tailwind CSS provides the tools you need to create stunning, user-friendly interfaces without the bloat of traditional CSS frameworks.

`,
    imageURL: "../images/tailwind.png",
  },

  {
    id: "4",
    title: "Next.js: The React Framework for Production",
    description: `Next.js is a powerful React framework that enables developers to build fast, scalable, and SEO-friendly web applications. Created by Vercel, Next.js simplifies the development process by offering a variety of built-in features like server-side rendering (SSR), static site generation (SSG), and API routes.

Why Choose Next.js?
Performance: Next.js optimizes performance out of the box. Its server-side rendering ensures that pages are pre-rendered at the server level, delivering content faster to the client. This leads to better user experience and improved SEO.

Ease of Use: Setting up a Next.js project is straightforward. It offers a zero-configuration experience, allowing developers to focus on building features rather than setting up tools and configurations. The framework provides sensible defaults and automatically optimizes your application.

SEO Optimization: Unlike traditional single-page applications (SPAs), Next.js supports server-side rendering and static site generation, making it easier to create SEO-friendly web pages. These features allow search engines to index the content effectively, boosting visibility.

File-Based Routing: Next.js introduces a file-based routing system, where each file in the pages directory automatically becomes a route. This eliminates the need for complex routing configurations, making it easier to manage and scale your application.

Key Features of Next.js
Server-Side Rendering (SSR): Next.js can render your pages on the server side, ensuring that content is available as soon as the user requests it. This leads to faster initial load times and improved SEO performance.

Static Site Generation (SSG): With SSG, Next.js generates static HTML pages at build time, which can be cached and served instantly. This is perfect for content-heavy sites like blogs or e-commerce stores, where performance and speed are critical.

API Routes: Next.js allows you to create serverless API routes directly within your application. This means you can handle server-side logic, such as database queries or authentication, without needing a separate backend server.

Built-In CSS Support: Next.js supports global and module-based CSS out of the box, allowing you to style your components easily. It also supports popular CSS-in-JS libraries like styled-components and emotion.

Next.js is a robust framework that streamlines React development for production. With its focus on performance, scalability, and developer experience, Next.js has become the go-to solution for building modern web applications. Whether you're creating a personal blog, a corporate website, or a complex web app, Next.js offers the tools and flexibility to bring your vision to life.`,
    imageURL: "../images/next.jpg",
  },

  {
    id: "5",
    title: "Artificial Intelligence: Transforming the Future",
    description:
      `Artificial Intelligence (AI) is a rapidly evolving field that is reshaping the way we live, work, and interact with the world. At its core, AI refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human cognition, such as learning, problem-solving, decision-making, and language understanding.

What is Artificial Intelligence?
AI involves creating systems that can perform tasks autonomously, often mimicking human capabilities. This includes machine learning (ML), a subset of AI where algorithms learn from data to make predictions or decisions without being explicitly programmed for every scenario. Deep learning, a more advanced form of ML, utilizes neural networks to process complex data inputs like images, speech, and text.

Applications of AI
Healthcare: AI is revolutionizing healthcare with applications in diagnostics, personalized medicine, and robotic surgery. AI algorithms can analyze medical data to predict diseases, suggest treatments, and improve patient outcomes.

Finance: In finance, AI is used for fraud detection, risk management, algorithmic trading, and personalized banking services. It helps in analyzing vast amounts of data to make informed financial decisions.

Transportation: Autonomous vehicles are one of the most exciting developments in AI. Companies like Tesla, Waymo, and others are developing self-driving cars that can navigate and operate with minimal human intervention.

Customer Service: AI-powered chatbots and virtual assistants are transforming customer service by providing instant support, answering queries, and resolving issues efficiently.

Retail: AI helps in enhancing the retail experience through personalized recommendations, inventory management, and automated checkouts.

Ethical Considerations
As AI becomes more integrated into our daily lives, ethical considerations are becoming increasingly important. Issues such as data privacy, bias in AI algorithms, job displacement, and the potential misuse of AI technology are critical areas of concern. Ensuring that AI systems are transparent, fair, and accountable is crucial for building trust and safeguarding human rights.

The Future of AI
The future of AI holds immense potential. From enhancing human capabilities with augmented intelligence to developing general AI that can perform any intellectual task a human can, the possibilities are vast. AI is expected to drive innovation in every sector, leading to smarter cities, efficient industries, and better quality of life.

Artificial Intelligence is a powerful tool that is transforming our world. As we continue to explore its capabilities, it is essential to balance innovation with ethical considerations to ensure that AI serves humanity's best interests. The journey of AI has just begun, and its impact will undoubtedly shape the future of technology and society.`,
    imageURL: "../images/ai.jpg",
  },

  {
    id: "6",
    title: "Consistency is the key to success",
    description: `In the pursuit of success, many individuals look for shortcuts, magical formulas, or overnight transformations. However, one of the most underestimated yet powerful factors in achieving long-term success is consistency. Consistency is the practice of maintaining a steady and regular approach towards a goal, regardless of the challenges and setbacks encountered along the way. It is the glue that holds effort and progress together, ultimately leading to success.

Why is Consistency Important?
Builds Habits: Consistency helps in developing positive habits. When you repeatedly perform an action, it becomes a part of your routine. Over time, these small, consistent actions compound, creating significant results.

Increases Self-Discipline: Being consistent requires a high level of self-discipline. It teaches you to stay focused and committed to your goals, even when motivation wanes. Self-discipline is a critical trait for achieving long-term success.

Enhances Learning and Growth: Consistency allows for continuous learning and improvement. When you regularly engage in a task, you become better at it. The gradual improvements may seem small initially, but they accumulate over time, leading to mastery.

Builds Trust and Reliability: In professional and personal relationships, consistency builds trust. People rely on those who are consistent because they know what to expect. This reliability opens doors to new opportunities and strengthens connections.

Motivates through Momentum: Consistency generates momentum. As you keep working towards your goals, the progress you make fuels further motivation, creating a positive feedback loop. This momentum makes it easier to keep moving forward, even in tough times.

Overcoming Challenges to Consistency
Maintaining consistency is not always easy. Life’s unpredictable nature, distractions, and setbacks can make it challenging. Here are a few strategies to stay consistent:

Set Clear Goals: Define what you want to achieve and break it down into smaller, manageable tasks.
Create a Routine: Establish a daily schedule that includes time for your goals.
Stay Accountable: Share your goals with others or track your progress to stay accountable.
Embrace Flexibility: Allow room for adjustments without losing sight of your overall objectives.

Consistency is the key that unlocks the door to success. It is not about making monumental efforts in a short period but about taking steady, deliberate actions over time. By staying consistent, you build resilience, discipline, and the momentum needed to achieve your goals. Remember, success is not a sprint; it's a marathon that requires persistent effort and unwavering dedication.`,
    imageURL: "../images/success.jpg",
  },
];

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10"> Post Not Found</h2>
    );
  }

  const renderParagrapghs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify ">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-orange-900 text-center">
        {post.title}
      </h1>

      {post.imageURL && (
        <img
          src={post.imageURL}
          alt={post.title}
          className="w-full rounded-md mt-4 h-auto"
        />
      )}

      <div className="mt-6 text-lg  text-slate-600">
        {renderParagrapghs(post.description)}
      </div>

      <CommentSection postId={post.id} />
      <AutherCard />
    </div>
  );
}

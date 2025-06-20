const data = [
  {
    category: "HTML & HTML5 📄",
    questions: [
      {
        q: "What is the difference between <div> and <span>?",
        a: "<div> is a block-level element for layout; <span> is inline for styling small text sections."
      },
      {
        q: "How does the alt attribute improve accessibility?",
        a: "It provides alternative text for images, useful for screen readers and users with slow connections."
      },
      {
        q: "What is the difference between id and class?",
        a: "id is unique per page; class can be reused on multiple elements for styling or JS hooks."
      },
      {
        q: "What are semantic HTML elements?",
        a: "Tags like <header>, <article>, etc., that convey meaning and improve accessibility and SEO."
      },
      {
        q: "What is the purpose of the <canvas> element?",
        a: "It allows drawing graphics via JavaScript for games, charts, and animations."
      },
      {
        q: "How do async and defer affect script loading?",
        a: "async: runs as soon as loaded; defer: waits until DOM is parsed before running."
      },
      {
        q: "What are <meta> tags used for?",
        a: "They define metadata like charset, viewport, and SEO info for the browser."
      },
      {
        q: "What are data-* attributes used for?",
        a: "They store custom data in HTML, accessible via JavaScript using dataset."
      },
      {
        q: "What is the difference between src and srcset in <img>?",
        a: "src is a default image; srcset provides multiple options for different resolutions."
      },
      {
        q: "How does the <picture> element help with responsive images?",
        a: "It allows specifying different image sources for various devices or formats."
      },
      {
        q: "How does a browser render HTML?",
        a: "It parses HTML/CSS into DOM/CSSOM, builds the render tree, and paints the page."
      },
      {
        q: "What’s the difference between HTML and XHTML?",
        a: "HTML is lenient; XHTML is strict and XML-based requiring closed tags and valid nesting."
      },
      {
        q: "How can HTML enforce strict typing like XHTML?",
        a: "Use strict syntax rules and <!DOCTYPE html> or XML-compliant structure."
      },
      {
        q: "What types of offline storage does HTML5 offer?",
        a: "localStorage, sessionStorage, and IndexedDB for storing data on the client."
      },
      {
        q: "How does the sandbox attribute in <iframe> enhance security?",
        a: "It restricts iframe capabilities like running scripts or accessing parent page."
      },
      {
        q: "How can you prevent search engines from indexing links in HTML?",
        a: "Use rel='nofollow', meta robots tags, or block with robots.txt."
      },
      {
        q: "What is the Critical Rendering Path?",
        a: "It’s the process the browser follows to render content, from HTML/CSS to pixels."
      },
      {
        q: "How do you optimize images and scripts in HTML for performance?",
        a: "Use lazy loading, defer scripts, and serve compressed/responsive images."
      },
      {
        q: "What are contenteditable, hidden, and draggable attributes?",
        a: "contenteditable makes content editable; hidden hides it; draggable enables drag-and-drop."
      },
      {
        q: "What are Web Components and how does Shadow DOM help?",
        a: "Web Components are reusable; Shadow DOM encapsulates their styles/structure."
      },
      {
        q: "How does ARIA enhance HTML accessibility?",
        a: "ARIA roles/labels describe elements for screen readers, aiding disabled users."
      },
      {
        q: "What is progressive enhancement in HTML?",
        a: "Start with core functionality, then add enhancements for modern browsers."
      },
      {
        q: "What is the difference between relative and absolute URLs?",
        a: "Relative is based on current path; absolute includes full domain and protocol."
      },
      {
        q: "What are the different types of DOM?",
        a: "Standard DOM, Virtual DOM (used in frameworks), and Shadow DOM (for components)."
      },
      {
        q: "What is Microdata in HTML5?",
        a: "Microdata is a way to embed machine-readable metadata in HTML using itemprop, itemscope, etc."
      }
    ]
  },
  {
    category: "CSS & SCSS 🎨",
    subcategories: [
      {
        subcategory: "Core CSS Concepts ✅",
        questions: [
          {
            q: "What is the difference between inline, internal, and external CSS?",
            a: "Inline styles are written directly in the HTML element using the 'style' attribute. Internal styles are within a <style> tag in <head>. External CSS is linked via <link> to a .css file."
          },
          {
            q: "Explain the Box Model in CSS and how box-sizing affects it.",
            a: "The box model includes content, padding, border, and margin. 'box-sizing: border-box' includes padding and border in the total width."
          },
          {
            q: "What is the default value of box-sizing and how does content-box differ from border-box?",
            a: "'content-box' excludes padding and border from width; 'border-box' includes them, making layout more predictable."
          },
          {
            q: "What are the different position values in CSS and when should each be used?",
            a: "'static', 'relative', 'absolute', 'fixed', 'sticky' — used for document flow, offset positioning, and fixed or scrolling behaviors."
          },
          {
            q: "What’s the difference between relative, absolute, fixed, and sticky positioning?",
            a: "'relative' offsets from normal position, 'absolute' positions to nearest ancestor, 'fixed' sticks to viewport, 'sticky' toggles between relative and fixed."
          }
        ]
      },
      {
        subcategory: "Selectors & Specificity 🎯",
        questions: [
          {
            q: "What are the different types of CSS selectors?",
            a: "Basic (e.g. div), class (.btn), ID (#main), attribute ([type='text']), pseudo-classes (:hover), pseudo-elements (::before)."
          },
          {
            q: "How does CSS specificity work and how is it calculated?",
            a: "Specificity hierarchy: Inline (1000) > ID (100) > Class (10) > Element (1)."
          },
          {
            q: "What is the !important rule and when should it be used?",
            a: "Overrides specificity rules. Use sparingly to avoid conflicts."
          },
          {
            q: "What are pseudo-classes and pseudo-elements? Give examples.",
            a: "Pseudo-classes target states like :hover, :focus. Pseudo-elements create elements like ::before, ::after."
          },
          {
            q: "What is the difference between :nth-child() and :nth-of-type()?",
            a: ":nth-child() counts all types of children; :nth-of-type() filters by tag type."
          }
        ]
      },
      {
        subcategory: "Variables & Inheritance 🧬",
        questions: [
          {
            q: "What are CSS custom properties (variables) and how are they used?",
            a: "Defined with --name and used with var(--name). Example: --main-color: red; color: var(--main-color)."
          },
          {
            q: "How does CSS inheritance work? What properties are naturally inherited?",
            a: "Text-related properties (color, font) inherit by default. Others require explicit inheritance."
          },
          {
            q: "What’s the difference between initial, inherit, and unset?",
            a: "'initial' resets to default, 'inherit' takes from parent, 'unset' behaves like inherit or initial based on the property."
          }
        ]
      },
      {
        subcategory: "CSS Layout Fundamentals 🧱",
        questions: [
          {
            q: "What layout methods are available in CSS?",
            a: "float, inline-block, flexbox, grid, positioning — each serves different layout needs."
          },
          {
            q: "What is the difference between Flexbox and Grid layout systems?",
            a: "Flexbox is 1D (row or column), Grid is 2D (rows and columns)."
          },
          {
            q: "When should you use Flexbox over Grid, and vice versa?",
            a: "Flexbox for linear alignments, Grid for structured, two-dimensional layouts."
          },
          {
            q: "How does the flex shorthand work (flex-grow, flex-shrink, flex-basis)?",
            a: "Example: flex: 1 0 auto; defines grow, shrink, and base size for flexibility."
          },
          {
            q: "What is the purpose of minmax(), auto-fill, and auto-fit in CSS Grid?",
            a: "They define flexible track sizes and control how columns fill available space."
          }
        ]
      },
      {
        subcategory: "Flex & Grid – In Depth 🧩",
        questions: [
          {
            q: "How does flex-basis interact with width and grow/shrink properties?",
            a: "flex-basis sets initial size before growing or shrinking based on available space."
          },
          {
            q: "What happens if you use align-items: stretch vs center in Flexbox?",
            a: "'stretch' makes items fill the cross-axis; 'center' aligns them centrally."
          },
          {
            q: "How does implicit and explicit grid work in CSS Grid?",
            a: "Explicit grids are defined in CSS. Implicit grids are auto-generated based on content."
          },
          {
            q: "How does grid auto-placement behave with dense vs sparse packing?",
            a: "'dense' fills in available gaps more tightly, while 'sparse' keeps order."
          }
        ]
      },
      {
        subcategory: "Responsive Design & Units 📱",
        questions: [
          {
            q: "What’s the difference between em, rem, %, vh, vw units?",
            a: "em/rem are font-relative. %, vh, vw are relative to parent or viewport."
          },
          {
            q: "How do media queries work and what are common breakpoints?",
            a: "Use @media rules for width changes. Common breakpoints: 576px, 768px, 992px, 1200px."
          },
          {
            q: "How would you make an element responsive using only CSS?",
            a: "Use percentage widths, relative units, and media queries."
          },
          {
            q: "What are some strategies for building a responsive navigation menu?",
            a: "Use Flex/Grid layout, hide/show toggles with media queries."
          },
          {
            q: "What are clamp(), min(), and max() functions used for?",
            a: "They define responsive ranges like font-size: clamp(1rem, 2vw, 2rem)."
          }
        ]
      },
      {
        subcategory: "Responsive Images & Themes 🖼️",
        questions: [
          {
            q: "What are the differences between src, srcset, and the \<picture\> tag?",
            a: "srcset serves multiple resolutions; picture allows art direction"
          },
          {
            q: "How can you implement dark mode or theming using only CSS?",
            a: "Use custom properties and @media (prefers-color-scheme: dark)"
          },
          {
            q: "How can you build a layout that supports both LTR and RTL directions?",
            a: "Use logical properties (margin-inline-start) or [dir='rtl'] overrides."
          },
          {
            q: "What’s the best way to handle responsive typography in CSS?",
            a: "Use rem units, clamp(), or media queries."
          }
        ]
      },
      {
        subcategory: "Flexbox & Grid Layouts 🧩",
        questions: [
          {
            q: "What is the difference between Flexbox and Grid layout systems?",
            a: "Flexbox is 1D (row or column), Grid is 2D (rows and columns)."
          },
          {
            q: "When should you use Flexbox over Grid, and vice versa?",
            a: "Flexbox for linear alignments, Grid for structured, two-dimensional layouts."
          },
          {
            q: "How does the flex shorthand work (flex-grow, flex-shrink, flex-basis)?",
            a: "Example: flex: 1 0 auto; defines grow, shrink, and base size for flexibility."
          },
          {
            q: "What is the purpose of minmax(), auto-fill, and auto-fit in CSS Grid?",
            a: "They define flexible track sizes and control how columns fill available space."
          }
        ]
      },
      {
        subcategory: "CSS Units & Media Queries 📏",
        questions: [
          {
            q: "What’s the difference between em, rem, %, vh, vw units?",
            a: "em/rem are font-relative. %, vh, vw are relative to parent or viewport."
          },
          {
            q: "How do media queries work and what are common breakpoints?",
            a: "Use @media rules for width changes. Common breakpoints: 576px, 768px, 992px, 1200px."
          },
          {
            q: "How would you make an element responsive using only CSS?",
            a: "Use percentage widths, relative units, and media queries."
          },
          {
            q: "What are clamp(), min(), and max() functions used for?",
            a: "They define responsive ranges like font-size: clamp(1rem, 2vw, 2rem)."
          }
        ]
      },
      {
        subcategory: "Theming & Dark Mode 🌙",
        questions: [
          {
            q: "How can you implement dark mode or theming using only CSS?",
            a: "Use custom properties and @media (prefers-color-scheme: dark)."
          },
          {
            q: "How can you build a layout that supports both LTR and RTL directions?",
            a: "Use logical properties (margin-inline-start) or [dir='rtl'] overrides."
          },
          {
            q: "What’s the best way to handle responsive typography in CSS?",
            a: "Use rem units, clamp(), or media queries."
          }
        ]
      },
      {
        subcategory: "CSS Architecture & Methodologies 🏗️",
        questions: [
          {
            q: "What is BEM (Block Element Modifier) and how does it help in large projects?",
            a: "It gives a naming pattern like .block__element--modifier for modular styles."
          },
          {
            q: "What are the pros and cons of utility-first CSS (like Tailwind)?",
            a: "Pros: fast development, consistent design. Cons: verbose HTML, steep learning."
          },
          {
            q: "How can you organize CSS for scalability in large projects?",
            a: "Use methodologies like BEM, split files by component, use variables."
          }
        ]
      },
      {
        subcategory: "CSS Transitions & Animations 🎞️",
        questions: [
          {
            q: "What’s the difference between transition and animation?",
            a: "Transition changes between states; animation defines keyframe sequences."
          },
          {
            q: "What is the role of @keyframes and how are they used?",
            a: "@keyframes defines animation steps. Used with animation-name and animation-duration."
          },
          {
            q: "How can you improve performance when using CSS animations?",
            a: "Use transform and opacity, avoid properties that trigger reflow (like height)."
          }
        ]
      },
      {
        subcategory: "CSS Menus & Navigation 📚",
        questions: [
          {
            q: "How would you build a responsive hamburger menu using CSS?",
            a: "Use media queries to show/hide menu and toggle visibility with checkbox hack or JS."
          },
          {
            q: "What techniques can be used to make dropdown menus accessible and responsive?",
            a: "Use ARIA roles, tab/focus handling, and visible states via hover/focus."
          }
        ]
      },
      {
        subcategory: "CSS Stacking & Positioning 📏",
        questions: [
          {
            q: "What is a stacking context in CSS and what causes a new one to form?",
            a: "A stacking context controls z-index. Created by position, z-index, transforms."
          },
          {
            q: "How do z-index and positioning affect stacking?",
            a: "Only positioned elements (relative, absolute, fixed) use z-index."
          },
          {
            q: "How can you implement a sticky header that hides on scroll and reappears?",
            a: "Use position: sticky or JS with scroll listeners."
          }
        ]
      },
      {
        subcategory: "CSS Browser Compatibility & Pitfalls 🚧",
        questions: [
          {
            q: "What are some common pitfalls with Flexbox or Grid when supporting older browsers?",
            a: "Lack of support for newer features like gap in Flexbox, auto-fit, and logical properties."
          }
        ]
      },
      {
        subcategory: "SCSS Basics & Core Concepts ✂️",
        questions: [
          {
            q: "What is SCSS and how does it differ from CSS?",
            a: "SCSS is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). It allows for variables, nesting, and mixins, which are not possible in regular CSS."
          },
          {
            q: "How do you install and configure Sass/SCSS?",
            a: "Sass/SCSS can be installed via npm, yarn, or directly downloading the .scss files. Configuration depends on the build tool or editor you are using."
          },
          {
            q: "What are the key features of SCSS syntax?",
            a: "SCSS syntax is a superset of CSS, which means that every valid CSS stylesheet is a valid SCSS stylesheet. It also supports variables, nesting, and mixins."
          },
          {
            q: "How do you compile SCSS to CSS?",
            a: "SCSS can be compiled to CSS using the Sass compiler, which can be run from the command line, or through build tools like Webpack, Gulp, or Grunt."
          },
          {
            q: "What are variables in SCSS and how do you use them?",
            a: "Variables in SCSS are defined with a dollar sign, like $primary-color: blue;. They are used to store values that you want to reuse throughout your stylesheet."
          }
        ]
      },
      {
        subcategory: "SCSS Features 🎯",
        questions: [
          {
            q: "What are mixins in SCSS and how do you use them?",
            a: "Mixins are blocks of code that can be reused throughout your stylesheet. They are defined with the @mixin directive and can be included in other rulesets with the @include directive."
          },
          {
            q: "What are functions in SCSS and how do you use them?",
            a: "Functions in SCSS are used to perform operations and return values. They can be built-in functions like `lighten()` or custom functions defined with the `@function` directive."
          },
          {
            q: "What is the purpose of the & symbol in SCSS?",
            a: "The & symbol in SCSS is used to reference the parent selector. It is useful for nesting and creating complex selectors."
          },
          {
            q: "How do you use control directives like @if, @for, @each in SCSS?",
            a: "@if, @for, and @each are used to control the flow of your stylesheet. @if is used for conditional styles, @for and @each are used for looping through values or collections."
          },
          {
            q: "What are placeholders in SCSS and how do you use them?",
            a: "Placeholders are like classes that are not outputted to CSS unless they are extended. They are defined with the `%` symbol and are used to share a set of CSS properties between selectors."
          }
        ]
      },
      {
        subcategory: "Control & Logic in SCSS 🔄",
        questions: [
          {
            q: "How do you use @if, @else if, and @else in SCSS?",
            a: "@if, @else if, and @else are used to create conditional styles. They work similarly to JavaScript conditions."
          },
          {
            q: "What is the use of @for and @each loops in SCSS?",
            a: "@for and @each are used to iterate over a range of values or a collection. @for is used for numerical ranges, @each is used for lists or maps."
          },
          {
            q: "How do you use the @while loop in SCSS?",
            a: "@while is used to repeat a block of styles as long as a condition is true. It is similar to the while loop in programming languages."
          },
          {
            q: "What are the differences between @mixin and @extend?",
            a: "@mixin is used to create reusable blocks of styles that can take arguments. @extend is used to share a set of CSS properties from one selector to another."
          },
          {
            q: "How do you use the @import and @use rules in SCSS?",
            a: "@import is used to include other SCSS or CSS files. @use is a newer rule that loads a stylesheet and makes its mixins, functions, and variables available."
          }
        ]
      },
      {
        subcategory: "SCSS Project Structure & Organization 🗂️",
        questions: [
          {
            q: "How do you organize your SCSS files in a project?",
            a: "SCSS files can be organized by feature, by layout, or by component. It is important to have a clear and consistent structure."
          },
          {
            q: "What is the purpose of partials in SCSS?",
            a: "Partials are SCSS files named with a leading underscore, like `_variables.scss`. They are used to define variables, mixins, and other styles that you want to include in other SCSS files."
          },
          {
            q: "How do you manage dependencies between SCSS files?",
            a: "Dependencies between SCSS files can be managed using @import or @use rules. It is important to understand the order of imports and how they affect the final CSS."
          },
          {
            q: "What are some best practices for writing maintainable SCSS?",
            a: "Some best practices for writing maintainable SCSS include using variables for colors and fonts, nesting selectors logically, and using mixins for reusable styles."
          },
          {
            q: "How do you compile and minify SCSS for production?",
            a: "SCSS can be compiled and minified for production using the Sass compiler with the --style=compressed option, or through build tools like Webpack or Gulp."
          }
        ]
      },
      {
        category: "Design Concepts for Developers 🎨",
        questions: [
          {
            q: "How to achieve pixel-perfect implementation from Figma?",
            a: "Use Figma Inspect panel to measure spacing, font sizes, and color codes. Match exact dimensions using dev tools and grid systems."
          },
          {
            q: "What is Color Theory in design?",
            a: "It's the science of combining colors harmoniously. Includes primary, secondary, complementary colors, contrast, saturation, and brightness."
          },
          {
            q: "What are common Color Modes?",
            a: "Additive (RGB) for screens and Subtractive (CMYK) for print. Always use correct mode depending on medium."
          },
          {
            q: "How does Typography affect UI?",
            a: "Good typography improves readability and visual hierarchy. Pair fonts carefully using type scales, weight, and contrast."
          },
          {
            q: "What are layout principles developers should know?",
            a: "Balance, alignment, proximity, and spacing. Use grids (like 8pt system) to maintain consistency."
          },
          {
            q: "What is visual hierarchy?",
            a: "It’s arranging elements to show importance using size, contrast, color, or layout."
          },
          {
            q: "What is the Rule of Thirds in layout?",
            a: "A composition rule that places key elements along imaginary gridlines to create balanced designs."
          },
          {
            q: "Why is accessibility part of design?",
            a: "Accessible design ensures apps are usable by people with disabilities. Use semantic HTML, contrast ratios, and ARIA."
          },
          {
            q: "Tools to check design quality?",
            a: "Use browser dev tools, Figma specs, Contrast Checker, and tools like PerfectPixel for overlays."
          }
        ]
      },
      {
        category: "Useful Resources for UI 🎨",
        resources: [
          {
            name: "UI/UX Design Inspiration",
            links: [
              { title: "Behance", url: "https://www.behance.net" },
              { title: "Dribbble", url: "https://dribbble.com" },
              { title: "Awwwards", url: "https://www.awwwards.com" },
              { title: "Designer News", url: "https://www.designernews.co" }
            ]
          },
          {
            name: "Color Palette Tools",
            links: [
              { title: "Adobe Colors", url: "https://color.adobe.com" },
              { title: "Color Hunt", url: "https://colorhunt.co" }
            ]
          },
          {
            name: "Responsive Design Tools",
            links: [
              { title: "Can I Use", url: "https://caniuse.com" }
            ]
          },
          {
            name: "CSS Tricks",
            links: [
              { title: "CSS Tricks Website", url: "https://css-tricks.com" },
              { title: "Flexbox Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
              { title: "Grid Guide", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" }
            ]
          },
          {
            name: "Interactive Learning Tools",
            links: [
              { title: "Flexbox Froggy", url: "https://flexboxfroggy.com" },
              { title: "Grid Garden", url: "https://cssgridgarden.com" },
              { title: "Frontend Mentor", url: "https://www.frontendmentor.io" }
            ]
          }
        ]
      },
 
    ]
  },
  {
    category: "Design Concepts for Developers 🎨",
    questions: [
      {
        q: "How to achieve pixel-perfect implementation from Figma?",
        a: "Use Figma Inspect panel to measure spacing, font sizes, and color codes. Match exact dimensions using dev tools and grid systems."
      },
      {
        q: "What is Color Theory in design?",
        a: "It's the science of combining colors harmoniously. Includes primary, secondary, complementary colors, contrast, saturation, and brightness."
      },
      {
        q: "What are common Color Modes?",
        a: "Additive (RGB) for screens and Subtractive (CMYK) for print. Always use correct mode depending on medium."
      },
      {
        q: "How does Typography affect UI?",
        a: "Good typography improves readability and visual hierarchy. Pair fonts carefully using type scales, weight, and contrast."
      },
      {
        q: "What are layout principles developers should know?",
        a: "Balance, alignment, proximity, and spacing. Use grids (like 8pt system) to maintain consistency."
      },
      {
        q: "What is visual hierarchy?",
        a: "It’s arranging elements to show importance using size, contrast, color, or layout."
      },
      {
        q: "What is the Rule of Thirds in layout?",
        a: "A composition rule that places key elements along imaginary gridlines to create balanced designs."
      },
      {
        q: "Why is accessibility part of design?",
        a: "Accessible design ensures apps are usable by people with disabilities. Use semantic HTML, contrast ratios, and ARIA."
      },
      {
        q: "Tools to check design quality?",
        a: "Use browser dev tools, Figma specs, Contrast Checker, and tools like PerfectPixel for overlays."
      }
    ]
  },

  {
    category: "Useful Resources for UI 🎨",
    resources: [
      {
        name: "UI/UX Design Inspiration",
        links: [
          { title: "Behance", url: "https://www.behance.net" },
          { title: "Dribbble", url: "https://dribbble.com" },
          { title: "Awwwards", url: "https://www.awwwards.com" },
          { title: "Designer News", url: "https://www.designernews.co" }
        ]
      },
      {
        name: "Color Palette Tools",
        links: [
          { title: "Adobe Colors", url: "https://color.adobe.com" },
          { title: "Color Hunt", url: "https://colorhunt.co" }
        ]
      },
      {
        name: "Responsive Design Tools",
        links: [
          { title: "Can I Use", url: "https://caniuse.com" }
        ]
      },
      {
        name: "CSS Tricks",
        links: [
          { title: "CSS Tricks Website", url: "https://css-tricks.com" },
          { title: "Flexbox Guide", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
          { title: "Grid Guide", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" }
        ]
      },
      {
        name: "Interactive Learning Tools",
        links: [
          { title: "Flexbox Froggy", url: "https://flexboxfroggy.com" },
          { title: "Grid Garden", url: "https://cssgridgarden.com" },
          { title: "Frontend Mentor", url: "https://www.frontendmentor.io" }
        ]
      }
    ]
  },
               {
        category: "Javascript ｡🇯‌🇸‌",
        questions: [
 
        ]
      },
];


document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar-nav");
  const content = document.getElementById("questions-container");

  // Add scroll functionality to sidebar navigation
  sidebar.style.overflowY = "auto";
  sidebar.style.maxHeight = "100vh";

  // Function to create sidebar navigation
  function buildSidebar(data) {
    sidebar.innerHTML = ""; // Clear existing content

    data.forEach((category, categoryIndex) => {
      const categoryDiv = document.createElement("div");
      categoryDiv.className = "main-category";
      categoryDiv.textContent = category.category;

      const subcategoryList = document.createElement("div");
      subcategoryList.className = "subcategory-list collapsed";

      if (category.subcategories && category.subcategories.length > 0) {
        category.subcategories.forEach((subcategory, subcategoryIndex) => {
          const subcategoryDiv = document.createElement("div");
          subcategoryDiv.className = "subcategory";
          subcategoryDiv.textContent = subcategory.subcategory;

          subcategoryDiv.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent collapsing the main category
            displayQuestions(subcategory.questions);
          });

          subcategoryList.appendChild(subcategoryDiv);
        });

        categoryDiv.addEventListener("click", () => {
          subcategoryList.classList.toggle("collapsed"); // Toggle visibility of subcategories

          // Automatically display the first subcategory's questions when expanding
          if (!subcategoryList.classList.contains("collapsed")) {
            displayQuestions(category.subcategories[0].questions);
          }
        });
      } else if (category.resources) {
        categoryDiv.addEventListener("click", () => {
          displayResources(category.resources);
        });
      } else {
        categoryDiv.addEventListener("click", () => {
          displayQuestions(category.questions);
        });
      }

      categoryDiv.appendChild(subcategoryList);
      sidebar.appendChild(categoryDiv);

      // Automatically display the first main category's questions on the first load
      if (categoryIndex === 0) {
        displayQuestions(category.questions);
      }
    });
  }

  // Function to display questions in the main content area
  function displayQuestions(questions) {
    content.innerHTML = ""; // Clear existing content

    if (!questions || questions.length === 0) {
      const noQuestionsMessage = document.createElement("p");
      noQuestionsMessage.textContent = "No questions available for this category.";
      content.appendChild(noQuestionsMessage);
      return;
    }

    questions.forEach((question, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.className = "question";

      const questionTitle = document.createElement("h3");
      questionTitle.textContent = `${index + 1}. ${question.q}`;

      const questionAnswer = document.createElement("p");
      questionAnswer.textContent = question.a; // Display text as-is, skipping special characters

      // Add 'Search on Google' button dynamically
      const googleSearchButton = document.createElement("button");
      googleSearchButton.textContent = "Search on Google";
      googleSearchButton.style.marginTop = "0.5em";
      googleSearchButton.style.padding = "0.5em 1em";
      googleSearchButton.style.backgroundColor = "#4285F4";
      googleSearchButton.style.color = "white";
      googleSearchButton.style.border = "none";
      googleSearchButton.style.borderRadius = "5px";
      googleSearchButton.style.cursor = "pointer";
      googleSearchButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
      googleSearchButton.style.transition = "background-color 0.3s";

      googleSearchButton.addEventListener("mouseover", () => {
        googleSearchButton.style.backgroundColor = "#3367D6";
      });

      googleSearchButton.addEventListener("mouseout", () => {
        googleSearchButton.style.backgroundColor = "#4285F4";
      });

      googleSearchButton.addEventListener("click", () => {
        const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(question.q)}`;
        window.open(googleSearchURL, "_blank");
      });

      // Add 'Copy to Clipboard' button dynamically
      const copyButton = document.createElement("button");
      copyButton.textContent = "Copy to Clipboard";
      copyButton.style.marginTop = "0.5em";
      copyButton.style.marginLeft = "0.5em";
      copyButton.style.padding = "0.5em 1em";
      copyButton.style.backgroundColor = "#6c757d";
      copyButton.style.color = "white";
      copyButton.style.border = "none";
      copyButton.style.borderRadius = "5px";
      copyButton.style.cursor = "pointer";
      copyButton.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
      copyButton.style.transition = "background-color 0.3s";

      copyButton.addEventListener("mouseover", () => {
        copyButton.style.backgroundColor = "#5a6268";
      });

      copyButton.addEventListener("mouseout", () => {
        copyButton.style.backgroundColor = "#6c757d";
      });

      copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(question.q).then(() => {
          showToaster("Question copied to clipboard!");
        });
      });

      questionDiv.appendChild(questionTitle);
      questionDiv.appendChild(questionAnswer);
      questionDiv.appendChild(googleSearchButton);
      questionDiv.appendChild(copyButton);
      content.appendChild(questionDiv);
    });
  }

  function displayResources(resources) {
    content.innerHTML = ""; // Clear existing content

    if (!resources || resources.length === 0) {
      const noResourcesMessage = document.createElement("p");
      noResourcesMessage.textContent = "No resources available for this category.";
      content.appendChild(noResourcesMessage);
      return;
    }

    resources.forEach((resource) => {
      const resourceDiv = document.createElement("div");
      resourceDiv.className = "resource";

      const resourceTitle = document.createElement("h3");
      resourceTitle.textContent = resource.name;

      const resourceLinks = document.createElement("ul");
      resource.links.forEach((link) => {
        const linkItem = document.createElement("li");
        const linkAnchor = document.createElement("a");
        linkAnchor.href = link.url;
        linkAnchor.target = "_blank";
        linkAnchor.textContent = link.title;
        linkItem.appendChild(linkAnchor);
        resourceLinks.appendChild(linkItem);
      });

      resourceDiv.appendChild(resourceTitle);
      resourceDiv.appendChild(resourceLinks);
      content.appendChild(resourceDiv);
    });
  }

  // Function to show toaster notification
  function showToaster(message) {
    const toaster = document.createElement("div");
    toaster.textContent = message;
    toaster.style.position = "fixed";
    toaster.style.bottom = "20px";
    toaster.style.left = "20px"; // Changed to left corner
    toaster.style.backgroundColor = "rgba(108, 117, 125, 0.8)"; // Transparent background similar to copy button
    toaster.style.color = "white";
    toaster.style.padding = "10px 20px";
    toaster.style.borderRadius = "5px";
    toaster.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    toaster.style.zIndex = "1000";
    toaster.style.transition = "opacity 0.5s ease";
    document.body.appendChild(toaster);

    setTimeout(() => {
      toaster.style.opacity = "0";
      setTimeout(() => {
        document.body.removeChild(toaster);
      }, 500);
    }, 2000);
  }

  // Add scroll-to-top button
  const scrollToTopButton = document.createElement("button");
  scrollToTopButton.textContent = "Scroll to Top";
  scrollToTopButton.style.position = "fixed";
  scrollToTopButton.style.bottom = "20px";
  scrollToTopButton.style.right = "20px";
  scrollToTopButton.style.padding = "10px 20px";
  scrollToTopButton.style.backgroundColor = "#007BFF";
  scrollToTopButton.style.color = "white";
  scrollToTopButton.style.border = "none";
  scrollToTopButton.style.borderRadius = "5px";
  scrollToTopButton.style.cursor = "pointer";
  scrollToTopButton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  scrollToTopButton.style.transition = "background-color 0.3s";

  scrollToTopButton.addEventListener("mouseover", () => {
    scrollToTopButton.style.backgroundColor = "#0056b3";
  });

  scrollToTopButton.addEventListener("mouseout", () => {
    scrollToTopButton.style.backgroundColor = "#007BFF";
  });

  scrollToTopButton.addEventListener("click", () => {
    content.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.body.appendChild(scrollToTopButton);

  // Initialize sidebar
  buildSidebar(data);
});

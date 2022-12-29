function GreetingPlugin(options) {
  // Set default values for the options that are not provided
  this.options = options;
  this.options.delay = this.options.delay || 2000;
  this.options.fontSize = this.options.fontSize || "24px";
  this.options.textColor = this.options.textColor || "#fff";
  this.options.bgColor = this.options.bgColor || "black";

  // Initialize the plugin
  this.init = function() {
    // Get name from URL query string and capitalize it
    var name = getQueryVariable("name");

    if (!name.length) return;
    
    name = name.charAt(0).toUpperCase() + name.slice(1);
    name = decodeURIComponent(name);

    // Get the greeting text and append the name
    var greetingText = this.options.greeting || "Hello";
    greetingText += " " + name;

    // Create the greeting element
    var greeting = document.createElement("div");
    // greeting.innerHTML = greetingText;

    // Set the inline styles for the greeting element
    greeting.style.cssText = "width: 100%; height: 100%; position: fixed; top: 0; left: 0; font-size: " + this.options.fontSize + "; color: " + this.options.textColor + "; text-transform: uppercase; overflow: visible; background-color: " + this.options.bgColor + "; z-index: 1000; text-align: center; line-height: 100vh; transition: all .5s ease-in; pointer-events: none; cursor: pointer;";

    // If the greeting element has the fade-out class, set the opacity to 0
    if (greeting.classList.contains("fade-out")) {
      greeting.style.opacity = "0";
    }

    // Add the greeting element to the document
    document.body.appendChild(greeting);
    greeting.id = "greeting";

   // Display each letter of the greeting text one after the other
    var i = 0;
    var interval = setInterval(function() {
      greeting.innerHTML += greetingText[i];
      i++;
      if (i >= greetingText.length) {
        clearInterval(interval);
      }
    }, 100); // Display each letter after a 100ms delay

    // Fade out the greeting after the specified delay
    setTimeout(function() {
      greeting.style.opacity = "0";
    }, this.options.delay);
  };
}

// Function to get a query variable from the URL
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}
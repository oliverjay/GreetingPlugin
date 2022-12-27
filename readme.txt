Greeting Plugin
The GreetingPlugin is a JavaScript plugin that displays a greeting message to visitors on a webpage. The greeting message consists of a customizable greeting text and the name of the visitor, which is extracted from the URL query string.

Features
Customizable greeting text and font size
Customizable text color and background color
Option to set a delay before fading out the greeting message
Usage
To use the plugin, you need to include the JavaScript file in your webpage and create a new GreetingPlugin object with the desired options. Then, you can initialize the plugin by calling the init function.

<!-- Include the plugin JavaScript file -->
<script src="greeting-plugin.js"></script>

<script>
  // Define the options object
  var options = {
    greeting: "Hello",
    fontSize: 36,
    textColor: "#fff",
    bgColor: "black",
    delay: 3000
  };

  // Instantiate the plugin
  var greetingPlugin = new GreetingPlugin(options);

  // Initialize the plugin
  greetingPlugin.init();
</script>


Options
The following options are available for the GreetingPlugin:

greeting (string, default: "Hello"): The greeting text to display.
fontSize (number, default: 24): The font size of the greeting text, in pixels.
textColor (string, default: "#fff"): The color of the greeting text.
bgColor (string, default: "black"): The background color of the greeting message.
delay (number, default: 2000): The delay, in milliseconds, before fading out the greeting message.
Example
Here is an example of how to use the GreetingPlugin to display a greeting message that says "Hello Jane" in 36px font, with a white text color and a black background, and that fades out after 3 seconds:



// Define the options object
var options = {
  greeting: "Hello",
  fontSize: 36,
  textColor: "#fff",
  bgColor: "black",
  delay: 3000
};

// Instantiate the plugin
var greetingPlugin = new GreetingPlugin(options);

// Initialize the plugin
greetingPlugin.init();
const string = "My name is Virat virat virat ";
document.write(string + "<br>");

const result = string.split('virat').join('Anushka');
document.write(result+ "<br>");

const regex = /virat/gi;

const Text = result.replace(regex, 'Anushka');
document.write(Text);

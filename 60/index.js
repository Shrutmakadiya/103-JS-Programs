const message = 'This is a long message<br> \
that spans across multiple lines<br> \
in the code.'
document.write(message + "<br>")
const a = message.split("<br>")
const b = a.join('\n')
document.write(b)
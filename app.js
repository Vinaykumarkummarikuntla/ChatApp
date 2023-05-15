const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/login', (req, res) => {
    
    res.send('<form onSubmit="localStorage.setItem(\'username\', document.getElementById(\'username\').value)" action="/" method="POST"><input id="username" type="text" name="title"></input><button type="submit">Login</button></form>');

})


// app.post('/',(req, res) => {
//     console.log('req.body.username', req.body.username);
//     res.send('<form onSubmit = document.getElementById(\'username\').value = "localStorage.getItem()       action ="/"  method = "POST" ></form><input type="hidden" name="username">  <input type="text" name="messages"><button type="submit">Send</button></form> ')

// });


app.listen(3000)
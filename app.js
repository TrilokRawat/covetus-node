const express = require('express');
const productRouter = require('./router/productRouter')
const jwt = require('jsonwebtoken');
const cors = require('cors')
require('./db/db');


const port = process.env.port || 3000;
const app = express();
app.use(cors());
app.use(express.json({limit: '50mb', extended: true}));
app.use('/api/product',productRouter)

app.get('/', (req, res) => {
res.send('app started succesfully');
});

app.post('/getToken', async (req, res) => {
	console.log(req.body)
  try {
       const jwtdata = await jwt.sign({_id: req.body.id.toString()}, "thisismy secretKey" )
    	res.send({error: false, token: jwtdata});
    } catch (error) {
        console.log(error)
        res.status(400).send({error: 'Something went wrong'})
    }
});




app.listen(port,() => {
    console.log('server connected at 3000');
});



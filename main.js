const express = require("express");
const request = require("request");
const app = express()
app.use(express.json())
const port = process.env.PORT || 5000;


app.get('/year', (req, res)=>{
	console.log("OUT")
	request(
		'http://numbersapi.com/random/year',
		(err, response, body) => {
			if (err) return res.status(300).send({message: err})

			return res.send(body)
		}
	)
})


app.get('/date', (req, res)=>{
	console.log("OUT")
	request(
		'http://numbersapi.com/random/date',
		(err, response, body) => {
			if (err) return res.status(300).send({message: err})

			return res.send(body)
		}
	)
})


app.get('/math', (req, res)=>{
	console.log("OUT")
	request(
		'http://numbersapi.com/random/math',
		(err, response, body) => {
			if (err) return res.status(300).send({message: err})

			return res.send(body)
		}
	)
})
app.listen(port, () => console.log("WORK"))
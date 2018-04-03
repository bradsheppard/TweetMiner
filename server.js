const axios = require('axios');
const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const API_URL = 'https://api.twitter.com';
const ACCESS_TOKEN = 'AAAAAAAAAAAAAAAAAAAAAFH13gAAAAAACD5ZD2SXN4iJacP0A51i9JSj%2BC8%3DH0kmDxjjwiG93n2KUfYEKUCv3SlQPMZLS4wpSvl1dVunLSrFQb';

app.prepare()
    .then(() => {
        const server = express();

        const config = {
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`
            }
        };

        server.get('/api/tweets/:searchTerm', (req, res) => {
            const searchTerm = req.params.searchTerm;
            axios.get(`${API_URL}/1.1/search/tweets.json?q=${searchTerm}&lang=en&result_type=popular`, config)
                .then(response => {
                    res.json(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        });

        server.get('*', (req, res) => {
            return handle(req, res)
        });

        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`)
        })
    });
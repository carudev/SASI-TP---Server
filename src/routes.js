const express = require('express');


//const Router = require ('Router');

const SessionController = require('./controllers/SessionController');

// const DashboardController = require('./controllers/DashboardController');


const routes = express.Router();


routes.post('/sessions', SessionController.Store);


// routes.get('/dashboard', DashboardController.show);

// routes.post('spots/:spot_id/bookings', BookingController.store);

module.exports = routes;
//module.exports = Router;

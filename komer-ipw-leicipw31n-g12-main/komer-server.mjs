// File responsibilities
// 1 - Include the API modules that configure the server, and provide them its dependencies
// 2 - Launch the server and wait for requests
import express from 'express'
import cors from 'cors'


// Import gamesApi and all its direct and indirect dependencies
//import dataInit from './games-data_elastic.mjs'
import dataInit from './lib/games-data_mem.mjs'
const gamesData = dataInit()

import servicesInit from './lib/games-services.mjs'
const services = servicesInit(gamesData)

// games-api returns router
import gamesApiInit from './lib/games-api.mjs'
const gamesApi = gamesApiInit(services)


// Create and initialize the Express application
const app = express()
const PORT = 1212

app.use(cors())
app.use(express.json())
app.use(gamesApi)

// Listen for API request
app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))


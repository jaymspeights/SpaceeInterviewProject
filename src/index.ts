import { runStartup } from './services/StartupService';
import express from 'express';

import api from './routes/api';

var app = express();
app.use('/api', api);

runStartup()
.then(() => {
    app.listen(8080);
})
.catch(err => {
    console.error("Something fatal happened", err);
});
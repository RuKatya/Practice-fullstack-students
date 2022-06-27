import express from 'express';
const app = express();
const port = process.env.PORT || 5687;

app.use(express.static("public"));
app.use(express.json());

import productsRout from './router/productsRout';
app.use('/api', productsRout)





app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

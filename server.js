require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');

const errorHandler = require('_middleware/error-handler');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// api routes
app.use('/admin', require('./main/users/users.controller'));
app.use('/battalion', require('./main/admin/battalion/battalion.controller'));
app.use('/unit', require('./main/admin/unit/unit.controller'));
app.use('/canteen', require('./main/admin/canteen/canteen.controller'));
// app.use('/ocr' , require('./main/_ocr/ocr.controller'));

app.use(express.static('uploads'))

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 8000;
app.listen(port, () => console.log('Server listening on port ' + port));
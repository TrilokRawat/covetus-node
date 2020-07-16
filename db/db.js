const mongoose = require('mongoose');
const dbname = 'covetus'
const url = 'mongodb+srv://trilokrawat:mongotestapp@cluster0-nvdzx.mongodb.net/' + dbname + '?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true,
    useFindAndModify: false })

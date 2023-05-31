import mongoose from "mongoose";

mongoose.connect('mongodb+srv://admin:admin@cluster0.wyogam1.mongodb.net/day6?retryWrites=true&w=majority')
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(err));

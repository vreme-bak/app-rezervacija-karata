const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect(`${process.env.MONGOURL}`)
    .then(() => console.log("Uspešno je uspostavljena veza sa bazom."));
};

module.exports = connect;

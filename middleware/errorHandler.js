function errorHandler(err, req, res, next) {
    console.error(err);
    res.status(500);
    res.send({ error: err });
};

module.exports = { errorHandler };
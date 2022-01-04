const logger = require("../util/logger");

function errorHandler(err, req, res, next) {
    res.status(500).json(err);
    logger.error(`${res.statusMessage} - ${req.method} - ${req.originalUrl} - ${req.ip}`);
};

module.exports = { errorHandler };
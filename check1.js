
function check1(req, res, next) {
    if (!req.query.username) {
        return res.status(400).json({ message: 'Paramètre "username" manquant' });
    }
    next();
}
module.exports = check1;
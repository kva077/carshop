const tokenService = require("../services/token.service");

module.exports = (req, res, next) => {
    if (req.method === "OPTIONS") {
        return next();
    }

    try {
        //Bearer rhgiuergfwefnfwejnfewoojf (значение токена)
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const data = tokenService.validateAccess(token);
        if (!data) {
            return res.status(401).json({ message: "Токен не валидный" });
        }

        // data выводит текущего пользователя
        //{ _id: '63e349ecfa61c67e24355c63', iat: 1675847201, exp: 1675850801 }
        //{ _id: '63e366b171242683cc7bdbf5', iat: 1675847345, exp: 1675850945 }

        req.user = data;

        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized" });
    }
};

const pages = {

    home: (req, res) => {
        home(req, res)
    }
}


function home(req, res) {
    res.send("respuesta");
}

module.exports = pages;
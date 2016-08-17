//in controllers/User
let controller = (req, res) => {
    res.render('index');
}

module.exports = {
    route: '/',
    controller: controller

}

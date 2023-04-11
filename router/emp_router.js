const router = require("express").Router();

const controller = require("../controller/emp_controller");

router.post('/addemp',controller.createemp);
router.get('/getAllemp',controller.getallemp);
router.get('/getemp/:id',controller.getempByempid);
router.patch('/updateemp',controller.updateemp);
router.delete('/deleteemp/:id',controller.deleteemp);


module.exports = router;
const service = require("../service/emp_service");

const createemp = (req, res) => {
    const body = req.body;
    service.createemp(body, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: 0,
                message: "Database connection errror"
            });
        }
        return res.status(200).json({
            success: 1,
            data: results
        });
    });
}

const getallemp = (req,res) =>{
     const page = parseInt(req.query.page) || 1;
     const pageSize = parseInt(req.query.pageSize) || 10;
  
      const offset = (page - 1) * pageSize;
       service.getallemp(offset, pageSize,(err,results)=>{
        if (err) {
            console.log(err);
            return;
          }

          return res.json({
            success: 1,
            data: results
          });
       });
}

const getempByempid = (req,res) =>{
    const id = req.params.id;
    
    service.getempByempid(id,(err,results)=>{
        if (err) {
            console.log(err);
            return;
          }
        if (!results) {
            return res.json({
              success: 0,
              message: "Record not Found"
            });
          }
          return res.json({
            success: 1,
            data: results
          });
    });
}

const updateemp = (req,res)=>{
    const body = req.body;
    service.updateemp(body,(err,results)=>{
        if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            data: "updated successfully"
          });
    });
}

const deleteemp = (req,res)=>{
    const id = req.params.id;
    service.deleteemp(id,(err,results)=>{
        if (err) {
            console.log(err);
            return;
          }
        if (!results) {
            return res.json({
              success: 0,
              message: "Record Not Found"
            });
          }
          return res.json({
            success: 1,
            data: "employee deleted successfully"
          });
    });
}
module.exports = {
    createemp,
    getallemp,
    getempByempid,
    updateemp,
    deleteemp,
}
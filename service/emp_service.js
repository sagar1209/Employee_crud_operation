const pool = require("../config/db");

const createemp = (data,callBack) =>{
        pool.query(
            `insert into employees(Id,Employee_name,Job_title,phone_Number,Email,Address,City,State,P_contact_name,P_contact,P_Relationship,S_contact_name,S_contact,S_Relationship) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.Id,
                data.Employee_name,
                data.Job_title,
                data.phone_Number,
                data.Email,
                data.Address,
                data.City,
                data.State,
                data.P_contact_name,
                data.P_contact,
                data.P_Relationship,
                data.S_contact_name,
                data.S_contact,
                data.S_Relationship,
            ],
            (error, results, fields) => {
                if (error) {
                  callBack(error);
                }
                return callBack(null, results);
              }

        );
    }

const getallemp = (offset, pageSize,callBack) =>{
    pool.query(
        `SELECT * FROM employees  LIMIT ? OFFSET ?`,
        [pageSize,offset],
        (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
    );
}

const getempByempid= (id,callBack) =>{
    pool.query(
        `SELECT * FROM employees where Id = ?`,
        [id],
        
        (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
    );
}

const updateemp = (data,callBack)=>{
    pool.query(
        `update employees set Employee_name=?, Job_title=?, phone_Number=?, Email=?, Address=?, City=?,State=?,P_contact_name=?,P_contact=?,P_Relationship=?,S_contact_name=?,S_contact=?,S_Relationship=? where Id = ?`,
        [
            data.Employee_name,
            data.Job_title,
            data.phone_Number,
            data.Email,
            data.Address,
            data.City,
            data.State,
            data.P_contact_name,
            data.P_contact,
            data.P_Relationship,
            data.S_contact_name,
            data.S_contact,
            data.S_Relationship,
            data.id,
        ],
        (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
    );
}

const deleteemp = (id,callBack) =>{
     pool.query(`delete from employees where Id = ?`,
     [id],
     (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
     )
}

module.exports ={
    createemp,
    getallemp,
    getempByempid,
    updateemp,
    deleteemp,
}
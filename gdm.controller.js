const path = require('path');
const model = require('./gdm.model');


module.exports = {
    needs: () => upload,
    api : {
        getData : (req, res) => {
            console.log("==============================================");
            console.log('getData 컨트롤러 연결 성공!');

            // return res.send("test done!");
             const query = req.query;
             model.api.getData( query, data => {
                 return res.send(data);
             })
        },
        getOneData : (req, res) => {
            console.log("==============================================");
            console.log('getOneData 컨트롤러 연결 성공!');

            // return res.send("test done!");
             const query = req.query;
             model.api.getOneData( query, data => {
                 return res.send(data);
             })
        },
        getRecentDataOne : (req, res) => {
            console.log("==============================================");
            console.log('getRecentDataOne 컨트롤러 연결 성공!');

            const query = req.query;
            model.api.getRecentDataOne( query, data => {
                return res.send(data);
            })
        },
        addData : (req, res) => {
            console.log("==============================================");
            console.log('addData 컨트롤러 연결 성공!');

            const body = req.body;
            console.log(body);
            model.api.addData( body, data => {
                if(data) res.send(true);
            })
        },
        deleteData : (req, res) => {
            console.log('deleteData 컨트롤러 연결 성공!');

            const body = req.body;
            console.log(body);
            model.api.deleteData( body, data => {
                if(data) res.send(data);
            })
        },
        // deleteData : (req, res) => {
        //     console.log('deleteData 컨트롤러 연결 성공!');
        
        //     model.api.deleteData( data => {
        //         return res.send(data);
        //     })
        // },
    } 
} 
var express = require('express');
var router = express.Router();

var supplierdb = 
    [
        {supplierid:'100', companyname:'Pivotal', country:'United States', status:"good"},
        {supplierid:'101', companyname:'Microsoft', country:'United States'},
        {supplierid:'102', companyname:'Kovai Ltd', country:'England'}
    ];


/* POST enrichment request */
router.post('/', function(req, res) {

    var order = req.body;

    //lookup customer and add to order
    var supplier = supplierdb.find(c => c.supplierid === order.supplierid);
    order.supplier = supplier;

    console.log(order);

    res.send(order);
});

module.exports = router;
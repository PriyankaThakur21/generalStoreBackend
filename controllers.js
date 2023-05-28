const Items = require('./models');

exports.postItems = async (req, res, next)=>{
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const quantity = req.body.quantity;
    console.log(req.body);
    try{
    const data = await Items.create({
        name: name,
        description: description,
        price: price,
        quantity: quantity
    });
    res.json(data);
}
catch(error){
    console.log(error);
}
}

exports.getItems = async (req, res, next)=>{
    try{
    const items = await Items.findAll();
    res.status(201).json(items);
    }
    catch(error){
        console.log(error);
    }
}

exports.delete1 = async(req, res, next)=>{
    try{
        const itemid =req.params.itemId;
        const update = await Items.findByPk(itemid);
            update.quantity = `${update.quantity-1}`;
            return update.save()
            .then((resolve)=>{
                res.json(resolve);
            })
    }
    catch(error){
        console.log(error);
    }
}

exports.delete2 = async(req, res, next)=>{
    try{
        const itemid =req.params.itemId;
        const update = await Items.findByPk(itemid);
            update.quantity = `${update.quantity-2}`;
            return update.save()
            .then((resolve)=>{
                res.json(resolve);
            })
    }
    catch(error){
        console.log(error);
    }
}

exports.delete3 = async(req, res, next)=>{
    try{
        const itemid =req.params.itemId;
        const update = await Items.findByPk(itemid);
            update.quantity = `${update.quantity-3}`;
            return update.save()
            .then((resolve)=>{
                res.json(resolve);
            })
    }
    catch(error){
        console.log(error);
    }
}
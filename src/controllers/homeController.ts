import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User';

export const home = async (req: Request, res: Response)=>{

    //let usuarios = await User.find({}); // Consulta de mais de um registro

    //let usuarios = await User.findOne({ email: "gabriel@hotmail.com" }) //encontrar por email

    //let usuarios = await User.findById('6214197dc056013678acd5e6') //encontrar por email

    // let usuarios = await User.find({
    //     firstName: "Vitor",
    //     //email: 'victor@hotmail.com'
    // })

    // let usuarios = await User.find({
    //     interests: "tecnologia"
    // })

    /*
        gt = greater than
        gte = greater or equal
        lt = lower than
        lte = lower than or equal
    */
    // let usuarios = await User.find({
    //     age: {$gt: 18, $lt: 60}
    // })

    //Ordenação
    /*
        1 = crescente
        -1 = decrescente
    */
    // let usuarios = await User.find({
    //     age: {$gt: 18}
    // }).sort({ "name.firstName": 1 }) 

    //Limitar Resultados
    // let usuarios = await User.find({
    //     age: {$gt: 18}
    // }).limit(2)

    //Lógica de paginação
    let usuarios = await User.find({
        age: {$gt: 18}
    }).skip(2).limit(2)



    console.log("Usuario:", usuarios);
    
    let age: number = 90;
    let showOld: boolean = false;

    if(age > 50) {
        showOld = true;
    }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: []
    });
};
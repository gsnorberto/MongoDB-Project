import { Request, Response } from 'express';

import { Product } from '../models/Product';
import User from '../models/User';

export const home = async (req: Request, res: Response) => {

   //************* ATUALIZAÇÃO DE DADOS *************
   // await User.updateMany(
   //    { age: {$lte: 20}}, //condição
   //    { age: 18 } //dados para alteração
   // )

   // await User.updateOne(
   //    { email: 'victor@hotmail.com' }, //condição
   //    { age: 49 } //dados para alteração
   // )

   // let victor = await User.findOne({ email: "victor@hotmail.com" })
   // victor ? victor.name.lastName = 'Teste' : null
   // victor ? victor.age = 54 : null
   // await victor?.save();

   //***************** DELETAR DADOS ****************
   //let Luca = User.deleteOne({email: 'Luca@outlook.com'})

   
   // *************** CONSULTAS NO BD ***************

   let users = await User.find({}); // Consulta de mais de um registro

   // Filtrar *********************************
   /*
       gt = greater than, gte = greater or equal, lt = lower than, lte = lower than or equal

      // let usuarios = await User.find({ age: {$gt: 18, $lt: 60} })
      // let usuarios = await User.findOne({ email: "gabriel@hotmail.com" }) //encontrar por email
      // let usuarios = await User.findById('6214197dc056013678acd5e6') //encontrar por email
      // let usuarios = await User.find({ firstName: "Vitor", email: 'victor@hotmail.com' })
      // let usuarios = await User.find({ interests: "tecnologia" })
   */

   // Ordenação *******************************
   /*
      let usuarios = await User.find({
         age: {$gt: 18}
      }).sort({ "name.firstName": 1 })  // 1 = crescente , -1 = decrescente
   */

   // Limitar Resultados **********************
   /*
      let usuarios = await User.find({
         age: {$gt: 18}
      }).limit(2)
   */

   // Lógica de paginação *********************
   /*
       let usuarios = await User.find({
           age: {$gt: 18}
       }).skip(2).limit(2)
   */
   // console.log("Usuario:", usuarios);

   // **************** INSERÇÃO NO BD *********************
   // Método 1: Usando o Create
   /*
       let newUser = await User.create({
           name: { firstName: "Monaliza", lastName: "Santana" },
           email: 'mona@gmail.com',
           age: 50,
           interests: ['arte', 'pizza']
       });
   /*
   //Método 2: RECOMENDADO
   /*
       let newUser = new User();
       newUser.name = { firstName: 'André', lastName: 'Soares'};
       newUser.email = 'andre@hotmail.com';
       newUser.age = 45;
       newUser.interests = ['Programação', 'teste2', 'teste3']
       let resultado = await newUser.save();
   */

   let age: number = 90;
   let showOld: boolean = false;

   if (age > 50) {
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
      frasesDoDia: [],
      users,
   });
};
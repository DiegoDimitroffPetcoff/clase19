import { CONNREFUSED } from "dns";
import mongoose from "mongoose";
import * as model from "./src/models/estudiantes.js";

CRUD();

async function CRUD() {
  try {
    const url = "mongodb://localhost:27017/colegio";
    let rta = await mongoose.connect(url, {
      useNewUrlparser: true,
      useUnifiedTopology: true,
    });
    console.log(`base de datos corriendo: ${url}`);

    // console.log('CREATE');
    // const alumnos =  { nombre: 'Valeria', apellido: 'Ayala', edad: 26, dni: '30423398', curso: '1A', nota: 9 };
    // const createModel = new model.alumnosCollections(alumnos)
    // const create = await createModel.save();
    // --------------------------------------------------------
    //     console.log('ESTUDIANTES ORDENADOS POR ORDEN ALFABETICO');
    //     let read = await model.alumnosCollections.find(
    //         {},
    //         {apellido:1,nombre:1, _id:0}).sort({nombre:1});
    //     console.log(read);

    // // --------------------------------------------------------
    //   console.log('ESTUDIANTE mas joven');
    // let masJoven = await model.alumnosCollections.find(
    //     {},
    //     {dni:1,edad:1,nombre:1, _id:0}).sort({edad:1});
    // console.log(masJoven);
    // // --------------------------------------------------------
    //     console.log('ESTUDIANTE del curso 2A');
    //     let dosA = await model.alumnosCollections.find(
    //         {curso:'2A'},
    //         {curso:1,nombre:1, _id:0});
    //     console.log(dosA);
    // // --------------------------------------------------------
    // console.log('El segundo estudiante mas Joven');
    // let unoA = await model.alumnosCollections.find(
    //     {},
    //     {edad:1,nombre:1, _id:0}).sort({edad:1}).skip(2).limit(1);
    // console.log(unoA);
    // // --------------------------------------------------------
    // console.log('Nombre Apellido y curso. Ordenado por Apellido de manera descendiente');
    // let apellidoDesc = await model.alumnosCollections.find(
    //     {},
    //     {apellido:1,nombre:1, curso:1, _id:0}).sort({apellido:-1});
    // console.log(apellidoDesc);
    // // --------------------------------------------------------
    // console.log('Estudiantes que sacaron 10');
    // let estudDiez = await model.alumnosCollections.find(
    //     {nota: 10},
    //     {apellido:1,nombre:1, _id:0});
    // console.log(estudDiez);
    // --------------------------------------------------------
    // console.log("Estudiantes que sacaron 10");
    // let promedio = await model.alumnosCollections
    //   .find({}, { nota: 1, _id: 0 })
    //   .skip(1);

    // const notas = [];

    // for (let i = 0; i < promedio.length; i++) {
    //   notas.push(promedio[i].nota);
    // }
    // console.log(notas);
    // const count = 0;
    // for (let i = 0; i < notas.length; i++) {
    //   count = count + notas[i];
    // }

    // // --------------------------------------------------------

    // console.log('CAMBIAR DNI DE DIEGO');
    // let updateDNI = await model.alumnosCollections.updateOne(
    //     {nombre: 'Diego'},
    //     {$set: {dni: 34703057}});
    // console.log(updateDNI);

    // // --------------------------------------------------------

    // console.log("Alumnos con notas superiores a 7");
    //   let nota = await model.alumnosCollections
    //     .find({}, { nombre: 1, apellido: 1, nota: 1, _id: 0 })
    //     .skip(1);
    // let array = [];
    // nota.forEach((element) => {
    //   if (element.nota > 7) {
    //     array.push(element);
    //   }
    // });console.log(array);
    // COMO SE PUEDE HACER PARA UTILIZAR EL ELEMENTO DEVUELTO..en este caso el array??

    // // ------------------------------------------------------
    // let nota = await model.alumnosCollections
    //   .find({}, { nombre: 1, apellido: 1, nota: 1, _id: 0 })
    //   .skip(1);
    // let array = [];
    // nota.forEach((element) => {
    //   array.push(element);
    // });

    // let acumulador = 0;
    // let promedio = 0;
    // for (let index = 0; index < array.length; index++) {
    //   acumulador += array[index].nota;
    //   promedio = acumulador / array.length;
    // }
    
    // console.log(`El promedio dado entre todos los alumnos es de ${promedio}`);


    // // ------------------------------------------------------
    // // console.log('AGREGAR UN CAMPO INGRESO');
    // let ingreso = await model.alumnosCollections.updateMany(
    //     {"__v" : 0},
    //     {$set:{ingreso: false}});
    // console.log(ingreso);
    // let check = await model.alumnosCollections.find(
    //   {});

 // // ------------------------------------------------------
    // console.log('ELIMINAR A ALGUIEN POR ID');
    // let idEliminado = await model.alumnosCollections.deleteOne(
    //     {"_id" : "6286df39a613bb6b5b659e11"});
    //     console.log(idEliminado);




  } catch (error) {
    console.log(`Se produjo un error: ${Error}`);
  }
}

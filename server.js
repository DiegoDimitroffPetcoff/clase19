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
    //       console.log('ESTUDIANTE mas joven');
    //     let masJoven = await model.alumnosCollections.find(
    //         {},
    //         {edad:1,nombre:1, _id:0}).sort({edad:1});
    //     console.log(masJoven);
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
    console.log("Estudiantes que sacaron 10");
    let promedio = await model.alumnosCollections
      .find({}, { nota: 1, _id: 0 })
      .skip(1);

    const notas = [];

    for (let i = 0; i < promedio.length; i++) {
      notas.push(promedio[i].nota);
    }
    console.log(notas);
    const count = 0;

    for (let i = 0; i < notas.length; i++) {
      count = count + notas[i];
    }
    console.log(notas);
  } catch (error) {
    console.log(`Se produjo un error: ${Error}`);
  }
}

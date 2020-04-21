// Require de FS
const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

let heroesController = {

    "home"   : (req,res)=>{
               res.send(heroes)},

    "detalle": (req,res) => {
                // Acá lo primero será encontrar al héroe que corresponda
                let heroe = heroes.find(x=>x.id==req.params.id);
                if(!heroe){
                    res.send("No encontre a tu heroe")
                }else{
                    res.send(`Hola, mi nombre es ${heroe.nombre} y soy ${heroe.profesion}`);
                }},

    "id"     :  (req,res) => {
                // Acá lo primero será encontrar al héroe que corresponda
                let heroe = heroes.find(x=>x.id==req.params.id);
                if(!heroe){
                    res.send("No encontre al heroe para mostrarte su biografia")
                }else{
                    if(req.params!=undefined && req.params.ok=='ok'){
                        res.send(`${heroe.nombre}: ${heroe.resenia}`);
                    }else{
                        res.send(`${heroe.nombre}`+'\n'+'\n'+
                        "Lamento que no desees saber mas de mi :(");
                    }
                }
                }
};

module.exports=heroesController;
require("./config/config");

const express = require('express');
const app = express();

const bp = require('body-parser');
//Cada petición que haga, siempre pasa por esta línea (middleware)
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());

app.get("/usuario", (req, res) => {
    res.json("getUsuario");
});

app.post("/usuario", (req, res) => {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "El nombre es obligatorio."
        });
    } else {
        res.json(body);
    }

});

app.put("/usuario/:code", (req, res) => {
    let code = req.params.code;
    res.json({
        id: code
    });
});

app.delete("/usuario", (req, res) => {
    res.json("deleteUsuario");
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando el puerto ${ process.env.PORT }`);
});

//Procesar la información y serializarlo en JSON
//npm body-parser
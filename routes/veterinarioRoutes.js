import express from "express";
import {
    registrar,
    perfil,
    confirmar
} from '../controllers/veterinarioController.js'

const router = express.Router();

router.post('/', registrar );

router.post('/', (req,res)=>{
    res.json({"MSG":"HOLA"})
} );

router.get('/confirmar/:token', confirmar)

router.get('/perfil', perfil);

export default router;
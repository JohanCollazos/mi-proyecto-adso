import { Router } from 'express';
import { asyncHandler } from '../middlewares/asyncHandler.js';
import {
    createDevUser,
    // getDevUserByEmail,        esto es una funcion que no aparece en devusercontroller si quiero la funcion tengo que crearla
    // getDevUserById,
    verifyDevUser
} from '../controllers/devUserController.js';

const router = Router();

// El orden importa: /by-email debe ir ANTES de /:id, o Express tomaría "by-email" como un id
router.post('/', asyncHandler(createDevUser));
// router.get('/by-email', asyncHandler(getDevUserByEmail));
// router.get('/:id', asyncHandler(getDevUserById));
router.patch('/:id/verify', asyncHandler(verifyDevUser));

export default router;
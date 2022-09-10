import Express from 'express';
import { createContacto, deleteContacto, getContacto, getContactos, updateContacto } from '../controllers/AgendaController.js';

const router = Express.Router();

// mostrar todos los contactos
router.get('/', getContactos)

// mostrar un contacto
router.get('/:id', getContacto)

// crear un contacto
router.post('/', createContacto)

// actualizar un contacto
router.put('/:id', updateContacto)

// eliminar un contacto
router.delete('/:id', deleteContacto)

export default router;
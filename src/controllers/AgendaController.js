// Importando el modelo de Agenda
import AgendaModel from "../models/AgendaModel.js";

/*----------  METODOS CRUD MASNA  ----------*/

// Metodo para listar todos los contactos
export const getContactos = async(req, res) => {
    try {
        const contactos = await AgendaModel.findAll()
        res.json(contactos)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Metodo para listar un contacto
export const getContacto = async(req, res) => {
    try {
        const contacto = await AgendaModel.findOne({ where: { id: req.params.id } })
        res.json(contacto)
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Metodo para crear un contacto
export const createContacto = async(req, res) => {
    // try {
    //     const contacto = await AgendaModel.create(req.body)
    //     res.json(contacto)
    // } catch (error) {
    //     res.json({ message: error.message })
    // }
    try {
        await AgendaModel.create(req.body)
        res.status(201).json({ message: "Contacto creado correctamente" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Metodo para actualizar un contacto
export const updateContacto = async(req, res) => {
    try {
        await AgendaModel.update(req.body, { 
            where: { id: req.params.id } 
        })
        res.json({ 
            message: "Contacto actualizado correctamente" 
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

// Metodo para eliminar un contacto
export const deleteContacto = async(req, res) => {
    try {
        await AgendaModel.destroy({ where: { id: req.params.id } })
        res.json({ 
            message: "Contacto eliminado correctamente" 
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}
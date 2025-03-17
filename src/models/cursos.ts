import {Schema, model, models } from "mongoose"

const cursosSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    modalidad: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Cursos = models.Cursos || model("Cursos", cursosSchema);

export default Cursos;
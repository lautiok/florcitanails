import Curso from '../../../models/cursos';
import { connectDB } from '../../../utils/mongodb';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { title, description, modalidad } = await req.json();

    if (!title || !description || !modalidad) {
        return NextResponse.json(
            { error: 'Faltan datos obligatorios' },
            { status: 400 }
        );
    }

    try{
        await connectDB();
        
        const curso = await Curso.create({
            title,
            description,
            modalidad,
        });
        const savedCurso = await curso.save();
        return NextResponse.json(savedCurso);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Error al registrar' }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectDB();
        const cursos = await Curso.find();
        return NextResponse.json(cursos);
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: 'Error al obtener cursos' },
            { status: 500 }
        );
    }
}


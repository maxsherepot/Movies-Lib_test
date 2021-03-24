import { v4 as uuidv4 } from 'uuid';



export default function Movie(values) {
    const newMovie = {
        title: values.title,
        imageUrl: values.imageUrl,
        description: values.description,
        id: uuidv4()
    };

    return newMovie;
};

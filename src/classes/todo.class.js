

export class Todo{

    static fromJson( { id, tarea, completado, creado } ){ // ? regeresar las propiedades "Todo" 
        const tempTodo = new Todo( tarea );               // ? al Json del local storage

        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }

    constructor( tarea ) {
        this.tarea = tarea;

        this.id = new Date().getTime(); //1234135425
        this.completado = false;
        this.creado = new Date();
    }

}
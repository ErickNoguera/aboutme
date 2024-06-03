//¿ToDoList 

describe("La clase ToDoList", () => {
    it("Debe ser una clase", () => {
        expect(typeof ToDoList.prototype.constructor).toBe("funtion");
    });

    it("Debe tener un método getTodos", () => {
        const lista = new ToDoList();
        expect(lista.ToDoList).toBeDefined();
    });

    it("Debe tener un método addTodo", () => {
        const lista = new ToDoList();
        expect(lista.addTodo).toBeDefined();
    });

    it("Debe tener un método deleteTodo", () => {
        const lista = new ToDoList();
        expect(lista.deleteTodo).toBeDefined();
    });

    

});
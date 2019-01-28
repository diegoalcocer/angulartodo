// var model = {
//     user: "Adam",
//     items: [{action: "Buy flowers", done:false},
//     {action: "Get Shoes", done:false}]
// };
export class Model {
    user: any;
    items: any;
    constructor(){
        this.user = "Diego";
        this.items = [new TodoItem("Buy Flowers", false), new TodoItem("Get Shoes", false), new TodoItem("Create Web App", true)]
    }
}
export class TodoItem{
    action: any;
    done: any;
    constructor(action: string, done: boolean){
        this.action = action;
        this.done = done;
    }
}
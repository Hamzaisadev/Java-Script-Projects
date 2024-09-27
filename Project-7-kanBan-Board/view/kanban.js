import Column from "../Project-7-kanBan-Board/view/column.js";

export default class Kanban{
    constructor(root){
        this.root = root;

        Kanban.columns().forEach(column =>{
            const columnView = new Column(column.id, column.title)

            this.root.appendChild(columnView.element.root)
        })

    }

    static columns(){
        return[
            {
                id: 1,
                title: "Not Started",
                
            },
            {
                id: 2,
                title: "In Progress",
                
            },
            {
                id: 3,
                title: "Completed",
                
            },
        ]
    }
}
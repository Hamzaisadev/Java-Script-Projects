import kanbanAPI from "../api/kanbanAPI.js";
import Dropzone from "./dropzone.js";

export default class Item {
    constructor(id, content) {
        const bottomDropZone = Dropzone.createdropzone()



        this.element = {}
        this.element.root = Item.createRoot()
        this.element.input = this.element.root.querySelector(".kanbanItemInput")

        this.element.root.dataset.id = id;
        if (this.element.input) {
            this.element.input.textContent = content;
        } else {
            console.error("Element with class 'kanbanItemInput' not found");
        }
        this.content = content;
        this.element.root.appendChild(bottomDropZone)

        const onBlur = () =>{
            const newContent = this.element.input.textContent.trim()

            if (newContent == this.content){
                return
            }
            this.content = newContent
            kanbanAPI.updateItem(id,{
                content: this.content
            })
        }
        this.element.input.addEventListener("blur", onBlur)
        
        this.element.root.addEventListener("dblclick",()=>{
            const check = confirm("Are You Sure You Want To Delete This Item")
            if (check){
                kanbanAPI.deleteItem(id)
                

                this.element.input.removeEventListener("blur", onBlur())
                this.element.root.parentElement.removeChild(this.element.root)
            }
        })
        this.element.root.addEventListener("dragstart",e=>{
            e.dataTransfer.setData("text/plain",id)

        })
        this.element.input.addEventListener("drop", e =>{
            e.preventDefault()
        })
    }

    static createRoot() {
        const root = document.createElement("div");
        root.classList.add("kanbanitems");
        root.setAttribute("draggable", "true");

        const input = document.createElement("div");
        input.classList.add("kanbanItemInput");
        input.setAttribute("contenteditable", "true");

        root.appendChild(input);

        return root;
    }
}
import kanbanAPI from "../Project-7-kanBan-Board/api/kanbanAPI.js"
import Item from "../Project-7-kanBan-Board/view//item.js";
import Dropzone from "../Project-7-kanBan-Board/view//dropzone.js";


export default class Column{
    constructor(id, title){
        const topDropZone =  Dropzone.createdropzone()


        this.element ={}
        this.element.root =Column.createRoot()
        this.element.title = this.element.root.querySelector(".kanbanColumnTitle")
        this.element.items = this.element.root.querySelector(".kanbanColumnItems")
        this.element.addItem = this.element.root.querySelector(".itemAddButton")


        this.element.root.dataset.id = id
        this.element.title.textContent = title
        this.element.items.appendChild(topDropZone)

        this.element.addItem.addEventListener("click",()=>{
            const newitem = kanbanAPI.insertItem(id, "")
            this.renderItem(newitem)
        })

        kanbanAPI.getItem(id).forEach(item => {
            this.renderItem(item)
            
        });

    }

    static createRoot(){
        const range = document.createRange()
        range.selectNode(document.body)
        return range.createContextualFragment(
           ` <div class="kanbanColumn">
            <div class="kanbanColumnTitle"></div>
            <div class="kanbanColumnItems">
            </div>
            <button class="itemAddButton">+ Add</button>

        </div>`
        ).children[0]

    }


    renderItem(data){
        const item = new Item(data.id, data.content)
        this.element.items.appendChild(item.element.root)

    }
}
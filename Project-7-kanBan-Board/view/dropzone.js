import kanbanAPI from "/Java-Script-Projects/api/kanbanAPI.js"
import Column from "/Java-Script-Projects/column.js"

export default class Dropzone{
    static createdropzone(){
        const range = document.createRange()
        range.selectNode(document.body)
        const dropZone = range.createContextualFragment(
           ` <div class="kanbanDropzone"></div>`
        ).children[0]

        dropZone.addEventListener("dragover",e=>{
            e.preventDefault()
            dropZone.classList.add(".kanbanDropzone","active")
        })
        dropZone.addEventListener("dragleave",()=>{
            
            dropZone.classList.remove(".kanbanDropzone","active")
        })

        dropZone.addEventListener("drop",e=>{
            e.preventDefault()
            dropZone.classList.remove(".kanbanDropzone","active")
            const columnElement = dropZone.closest(".kanbanColumn")
            const columnId = Number(columnElement.dataset.id)
            console.log(columnElement,columnId)
            const dropZoneInColumn =Array.from(columnElement.querySelectorAll(".kanbanDropzone"))
            const droppedIndex= dropZoneInColumn.indexOf(dropZone)
            const itemId = Number(e.dataTransfer.getData("text/plain"))
            const droppedItemElement = document.querySelector(`[data-id="${itemId}"]`)
            const insertAfter = dropZone.parentElement.classList.contains("kanbanitems") ? dropZone.parentElement : dropZone
            insertAfter.after(droppedItemElement)

            kanbanAPI.updateItem(itemId,{
                columnId,
                position: droppedIndex
            })
        })

        return dropZone
    }
}
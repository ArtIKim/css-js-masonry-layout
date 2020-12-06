const gallery = document.querySelector('.gallery__container')
const galleryItems = document.querySelectorAll('.gallery__item')

function createMasonryLayout(container, items, columns) {
    container.classList.add('masonry__layout', `columns-${columns}`)

    const columnElements = []

    for (let i = 1; i <= columns; i++) {
        const column = document.createElement('div')
        column.classList.add('masonry__column', `column-${i}`)
        container.appendChild(column)
        columnElements.push(column)
    }

    for (let j = 0; j < Math.ceil(items.length / columns); j++) {
        for (let k = 0; k < columns; k++) {
            const item = items[j * columns + k]
            item.classList.add('masonry__item')
            columnElements[k].appendChild(item)
        }
    }
}

createMasonryLayout(gallery, galleryItems, 3)
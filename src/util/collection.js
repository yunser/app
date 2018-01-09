import storage from './storage'

let collection = {
    getAll() {
        let collections = storage.get('collections')
        if (!collections) {
            collections = []
        }
        return collections
    },
    add(item) {
        item.id = '' + new Date().getTime()
        let collections = this.getAll()
        collections.unshift(item)
        storage.set('collections', collections)
    },
    update(id, article) {
        let collections = this.getAll()
        for (let i = 0; i < collections.length; i++) {
            if (collections[i].id === id) {
                collections[i].title = article.title
                collections[i].content = article.content
                break
            }
        }
        storage.set('collections', collections)
    },
    getById(id) {
        let collections = this.getAll()
        for (let i = 0; i < collections.length; i++) {
            if (collections[i].id === id) {
                return collections[i]
            }
        }
        return null
    },
    remove(item) {
        let collections = this.getAll()
        for (let i = 0; i < collections.length; i++) {
            if (collections[i].id === item.id) {
                collections.splice(i, 1)
                break
            }
        }
        storage.set('collections', collections)
    }
}

export default collection

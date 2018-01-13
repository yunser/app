import storage from './storage'

class Db {
    constructor(name, size) {
        this.name = name
        this.size = size || -1
    }

    getAll() {
        let list = storage.get(this.name)
        if (!list) {
            list = []
        }
        return list
    }

    add(item) {
        item.id = '' + new Date().getTime()
        let list = this.getAll()
        list.unshift(item)
        if (this.size !== -1) {
            list = list.slice(0, this.size)
        }
        storage.set(this.name, list)
    }

    update(id, item) {
        let list = this.getAll()
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === id) {
                list[i] = item
                break
            }
        }
        storage.set(this.name, list)
    }

    getById(id) {
        let list = this.getAll()
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === id) {
                return list[i]
            }
        }
        return null
    }

    remove(item) {
        let list = this.getAll()
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === item.id) {
                list.splice(i, 1)
                break
            }
        }
        storage.set(this.name, list)
    }
}

export default Db

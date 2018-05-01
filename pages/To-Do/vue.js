new Vue({
    el: '#app',
    data: {
        title: 'Simple Todo',
        lists: [
            {id: 1, item: 'Learn Vue'},
            {id: 2, item: 'Make MONEY'},
            {id: 3, item: 'Testing'}
        ],
        newItem: '',
    },

    methods: {
        addItem: function () {
            //Generate Id Based on number of items in to-do list, getting it from the data property
            let id = this.lists.length + 1
            if (this.newItem.trim() !== '') {
                //Create new list
                const newList = {id: id, item: this.newItem}
                this.lists.push(newList)
                //Set new item back to empty
                this.newItem = ''
            }
        }
    }
})
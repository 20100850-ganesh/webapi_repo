import AccountRepository from './Repository';

export default class extends AccountRepository {

    constructor() {
        super();
        this.index = 1;
        this.data = {};
    }
    persist(accountEntity) {
        const row = Object.assign({}, accountEntity);
        const rowId = this.index++;
        row.id = rowId;
        this.data[rowId] = row;
        return row;
    }
    merge(accountEntity) {
        let row = this.data[accountEntity.id];
        if (!row) {
            // Create a new row if it doesn't exist
            row = {};
            this.data[accountEntity.id] = row;
        }
        Object.assign(row, accountEntity);
        return Promise.resolve(row);
    }


    remove(userId) {
        delete this.data[userId];
        return Promise.resolve();
    }
    get(userId) {
        return Promise.resolve(this.data[userId]);
    }
    getByEmail(userEmail) {
        const users = this.dataAsArray();
        return Promise.resolve(users.find(user => user.email === userEmail));
    }
    find() {
        return Promise.resolve(this.dataAsArray());
    }
    dataAsArray() {
        return Object.keys(this.data).map(key => this.data[key]);
    }
}

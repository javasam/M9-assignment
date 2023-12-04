async function fetchUsers() {
    let users = [];
    const response = await fetch('../data/employees.json')
    const data = await response.json()
    for (let emp of data.employees) {
        users.push(new Person(emp.id, emp.name, emp.ext, emp.email, emp.dep))
    }
    return users
}

class Person {
    id;
    name;
    ext;
    email;
    dep;
    constructor(id, name, ext, email, dep) {
        this.id = id;
        this.name = name;
        this.ext = ext;
        this.email = email;
        this.dep = dep;
    }

}
export default fetchUsers();
let fogoDeChao = {
    address: '',
    phoneNumber: '',
    averageReview: ''
}
//console.log(fogoDeChao)//prints whole object
//console.log(fogoDeChao.averageReview)//dot operator accessess individual fields within an object

//random create 30 students
let physicsClass = []
let studentYear = ['Freshman', 'Sophmore', 'Junior', 'Senior']
let physicsStudent = {}

for (let i = 0; i < 30; i++) {
     // make sure student id doesnt already exist
    let id = Math.round(Math.random() * 1000000)

    for(let j = 0; j < physicsClass.length; j++) {
        if(physicsClass[j].id == id) {
            id = Math.round(Math.random() * 1000000)
        }
    }
    physicsStudent = {
        id: id,
        gpa: Math.random() * 4,
        year: studentYear[Math.floor(Math.random() * 4)] 
    }
    // make sure student id doesnt already exist
    

    physicsClass.push(physicsStudent)
}

console.log(physicsClass)




//console.log("%d", 3.12324232)




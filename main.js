const myBtn = document.querySelector('[name="addStudentBtn"]');

myBtn.addEventListener("click", addStudentInfo)

let studentInfo = []



function addStudentInfo() {
    let nameInput = document.getElementById('name').value
    let surnameInput = document.getElementById('secondName').value
    let ageInput = document.getElementById('age').value
    let studentObj = {
        surname: 'surname',
        name: 'name',
        age: 'age'
    }

    studentObj.surname = surnameInput
    studentObj.name = nameInput
    studentObj.age = ageInput

    studentInfo.push(Object.values(studentObj))
   
    
    document.getElementById('name').value =""
    document.getElementById('secondName').value =""
    document.getElementById('age').value =""


    console.log(studentInfo);

    showStudents()
}
function showStudents() {
     
    let studentsInfoGroup = document.getElementById('studentInfoList')
    studentsInfoGroup.innerHTML = ""

    for(let i=0; i < studentInfo.length; i++) {
        let groupList = `
    <div class="studentInfoList">
        ${i+1.}. ${studentInfo[i]}
    </div>`

    studentsInfoGroup.innerHTML = studentsInfoGroup.innerHTML + groupList
    }
}
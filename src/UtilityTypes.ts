//Utility types

//Partial
interface Assignment{
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

const updateAssignment = (assignemnt: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {...assignemnt, ...propsToUpdate}
}

const assign1: Assignment = {
    studentId: "CS1",
    title: 'Project management',
    grade: 0
}
console.log(updateAssignment(assign1, {grade: 95}))

const assignGraded: Assignment = updateAssignment(assign1, {grade: 95})


//Readonly and Required
const recordAssignment = (assignment: Required<Assignment>): Assignment =>{
    //Write on db
    return assignment
}
const assignVerified: Readonly<Assignment> = {...assignGraded, verified: true}
// recordAssignment(assignVerified) //Type error Readonly vs Required
recordAssignment({...assignGraded, verified: true})

//Record 
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF"
}

type Students = 'Sara' | 'Amy'
type Grades = 'A' | 'B' | 'C' | 'D' | 'U'
interface Assignments{
    assign1: number,
    assign2: number
}

const finalGrades: Record<Students, Grades> = {
    Sara: 'A',
    Amy: 'C'
}

const studGrades: Record<Students, Assignments> = {
    Sara: {assign1: 74, assign2: 68},
    Amy: {assign1: 56, assign2: 52}
}

//Pick & Omit
type AssignmentValue = Pick<Assignment, 'studentId' | 'grade'>
const score: Assignment = {
    studentId: 'CS5', grade: 70,
    title: ""
}

type AssignmentPreview = Omit<Assignment, 'grade' | 'verified'>
const preivew: AssignmentPreview = {studentId: 'CS15', title: 'Final project'}

//Exclude & Extract
type LowGrade = Exclude<Assignment, 'U'>
type HighGrades = Extract<Assignment, 'A' | 'B'>

//Nonnullable
type AllPossibleGrades = 'Dave' | 'John' | null | undefined
type namesOnly = NonNullable<AllPossibleGrades>

//ReturnType
type newAssign = {title: string, points: number}
const createNewAssign = (title: string, points: number): newAssign => {
    return {title, points}
}
type newAssign1 = ReturnType<typeof createNewAssign>
const assign3: newAssign1 = createNewAssign('Utility types', 100)
console.log(assign3)

//Paramenters
type assignParams = Parameters<typeof createNewAssign>
const assign4Args: assignParams = ['Generics', 100]
const assign4: newAssign1 = createNewAssign(...assign4Args)
console.log(assign4)


//Awaited - helps with ReturnType of a promise
interface User{
    id: number,
    name: string,
    username: string,
    email: string
}

const fetchUser = async (): Promise<User[]> => {
    const data = await fetch('http://....')
    .then(res => {return res.json()}).catch(err => {
        if(err instanceof Error) console.log(err.message)
    })

    return data
}

type FetchUserReturnType = Awaited<ReturnType<typeof fetchUser>>
fetchUser().then(users => {console.log(users)})
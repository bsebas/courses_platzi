class Courses {
    constructor({ name, clases = [], isFree = false, lang = "español" }) {
        this._name = name;
        this.clases = clases;
    }
    get name() {
        return this._name
    }
    set changeName(newName = "") {
        if (newName !== "Curso malito") {
            this._name = newName
        }
    }
}

const progBasic = new Courses({ name: "Curso de programacion basica", clases: {} });
const progHtml = new Courses({ name: "Curso de programacion basica", clases: {}, lang = 'ingles' })

class LearningPath {
    constructor({ nameCourse, professors = [], courses = [] }) {
        this.nameCourse = nameCourse;
        this.professors = professors;
        this.courses = courses;
    }
}

const pathWeb = new LearningPath({ nameCourse: "Escuela de desarrollo web", professors: ["dada", "saf"] })
console.log(pathWeb.nameCourse)

class Student {
    constructor({ name, age, socialMedia = {}, approvedCourses = [] }) {
        this.name = `${name}`;
        this.age = `${age}`;
        this.approvedCourses = `${approvedCourses}` || [];
        this.socialMedia = `${socialMedia}`;
    }
    newCourse(newCourse) {
        this.listCourses.push(newCourse);
    }
}

class FreeStudent extends Student {
    constructor(s) {
        super(s);
    }
    approvedCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse)
        } else {
            console.warn(`Lo sentimos ${this.name}`)
        }
    }
}
class BasicStudent extends Student {
    constructor(s) {
        super(s);
    }
    approvedCourse(newCourse) {
        if (newCourse.lang !== 'ingles') {
            this.approvedCourses.push(newCourse)
        } else {
            console.warn(`Lo sentimos ${this.name}`)
        }
    }
}
class ExpertStudent extends Student {
    constructor(s) {
        super(s);
    }
    approvedCourse(newCourse) {
        this.approvedCourses.push(newCourse)
    }
}

const juanita = new Student({ name: 'Juanita', age: 22, socialMedia: { twitter: "juanita12" } });
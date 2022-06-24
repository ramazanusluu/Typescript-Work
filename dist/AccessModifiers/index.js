class Lesson {
    constructor(_grade1, _grade2) {
        this.grade1 = _grade1;
        this.grade2 = _grade2;
    }
    GetLessonAverage() {
        console.log("Lesson Average" + (this.grade1 + this.grade2) / 2);
    }
    setGrade1(value) {
        this.grade1 = value;
    }
    setGrade2(value) {
        this.grade2 = value;
    }
}
let _lesson = new Lesson(55, 60);
// _lesson.grade1 = 10;
// _lesson.grade2 = 60;
_lesson.setGrade1(80);
_lesson.setGrade2(100);
_lesson.GetLessonAverage();

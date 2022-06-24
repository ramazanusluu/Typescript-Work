class Grade {
    GetLessonAverage() {
        return (this.lessonGrade1 + this.lessonGrade2) / 2;
    }
    get LessonGrade1() {
        return this.LessonGrade1;
    }
    get LessonGrade2() {
        return this.LessonGrade2;
    }
    set LessonGrade1(value) {
        if (value > 100) {
            this.lessonGrade1 = 100;
        }
        else if (value < 0) {
            this.lessonGrade1 = 0;
        }
        else {
            this.lessonGrade1 = value;
        }
    }
    set LessonGrade2(value) {
        if (value > 100) {
            this.lessonGrade2 = 100;
        }
        else if (value < 0) {
            this.lessonGrade2 = 0;
        }
        else {
            this.lessonGrade2 = value;
        }
    }
}
let _grade = new Grade();
// _grade.lessonGrade1 = 100;
// _grade.lessonGrade2 = 50;
_grade.LessonGrade1 = 500;
_grade.LessonGrade2 = -5;
let result = _grade.GetLessonAverage();
console.log(result);

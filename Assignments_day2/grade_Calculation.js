let score=90;

let grade;
function gradeCalculation(score) {
    

    switch (true) {
        case(score>=90&& score<=100):
        grade='A'
        break;
        case(score>=80&& score<90):
        grade='B'
        break;    
        case(score>=70&& score<80):
        grade='C'
        break; 
        case(score>=50&& score<70):
        grade='D'
        break;   
        default:
        grade='F'
        break;
    }
    return grade;
}

gradeCalculation(grade);
grade =gradeCalculation(score);
console.log("grade is"+grade);




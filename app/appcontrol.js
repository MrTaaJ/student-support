function pred () {
    const totalInputCourses={firstYear:{semesterOne:[],
        semesterTwo:[],
        semesterThree:[]
    },secondYear:{semesterOne:[],
        semesterTwo:[],
        semesterThree:[]
    },thirdYear:{semesterOne:[],
        semesterTwo:[],
        semesterThree:[]
    }

    
    
    };
    let yearLevel = {semesterOne:[],
        semesterTwo:[],
        semesterThree:[]
    }

    //Collect the data and save it into the year Level
    function appendData () {
        yearLevel = {};
    }

    const inputCourses = [{strength:3, unit:2, grade:0},
        {strength:2, unit:2, grade:0},
        {strength:3, unit:2, grade:0},
        {strength:3, unit:3, grade:0},
        {strength:3, unit:3, grade:0},
        {strength:1, unit:3, grade:0},
        {strength:3, unit:2, grade:0},
        {strength:2, unit:2, grade:0}
    ];

    // totalInputCourses.fourthYear.semesterOne=inputCourses;
    // console.log(totalInputCourses.fourthYear.semesterOne)

    //Collect each course
    const inputCourse= {semester:"", strength:0, unit:0, grade:0};
    const strength =[1,2,3];
    const  grade = [5,4,3,2,1,0];
    const propose = 3.7;

    //Add the course unit
    const courseUnitSum = inputCourses.map((course)=>{return course.unit}).reduce((first, second)=>{return first + second});
    console.log(courseUnitSum);

    const propWeight = (propose * courseUnitSum).toFixed();
    console.log(`The needed weight: ${propWeight}`)

    const courseWeightTotal = (courses) => {
        const wTotal = courses.map((course)=>{
            return course.grade * course.unit
        }).reduce((a,b)=>{return a+b})
        return wTotal;
    };

    let i = 0;
    let ip = 0;
    let jp = 2;
    let kp = 4;

    function highestGP (){
        const wTotal = inputCourses.map((course)=>{
            return 5 * course.unit
        }).reduce((a,b)=>{return a+b})
        return wTotal;
    }
    
    function coursePred (){
        const propCourses = [];
        inputCourses.forEach((course)=>{
            const propCourse = {strength:0, unit:0, grade:0};
            if(course.strength === 3){
                propCourse.grade = 5;
                propCourse.unit = course.unit;
                propCourse.strength = course.strength;
            }else if (course.strength === 2){
                propCourse.grade = 3;
                propCourse.unit = course.unit;
                propCourse.strength = course.strength;
            }else if (course.strength === 1){
                propCourse.grade = 1;
                propCourse.unit = course.unit;
                propCourse.strength = course.strength;
            }
            propCourses.push(propCourse);
        });
        console.log(propCourses);

        let tempCalcWeight = courseWeightTotal(propCourses);

        var det = 1;
        while(tempCalcWeight<propWeight){
            for(let i = 0; i<propCourses.length; i++){
                console.log("before")
                if(propCourses[i].strength === det){
                    if(propCourses[i].grade<5){
                        propCourses[i].grade = propCourses[i].grade + 1;
                        propCourses[i].strength = propCourses[i].strength +1;
                    }
                };
  
                tempCalcWeight = courseWeightTotal(propCourses);
                if(tempCalcWeight>propWeight){i=inputCourses.length}
            }
            det += 1;
            // if(det>5){det=1};
        }

        console.log(tempCalcWeight);
        let diff = tempCalcWeight - propWeight;

        var diffDet = diff;
        while (diff>1){
            for(let ej = 0; ej<inputCourses.length; ej++){
                if((inputCourses[ej].unit == diffDet) && (propCourses[ej].grade>1) ){propCourses[ej].grade = propCourses[ej].grade - 1}
                tempCalcWeight = courseWeightTotal(propCourses);
                if((tempCalcWeight - propWeight)<diffDet){ej=inputCourses.length}
            }
            diffDet -= 1;
            if((tempCalcWeight - propWeight)<=1){diff=1}
            console.log(`This is the last: ${tempCalcWeight}`);
        }
        console.log(propCourses);
        
        if ((tempCalcWeight - propWeight)===1){
            for(let fj = 0; fj<inputCourses.length; fj++){
                if((inputCourses[fj].unit === 2) && (propCourses[fj].grade<5) ){
                    propCourses[fj].grade = propCourses[fj].grade + 1;
                };
                tempCalcWeight = courseWeightTotal(propCourses);
                if(((tempCalcWeight - propWeight) === 3) && (propCourses[fj].grade>1)){
                    propCourses[fj].grade = propCourses[fj].grade - 1;
                    ej=inputCourses.length
                }
            }
        }
        return tempCalcWeight;
    }
    let CalcWeight;
    if ( highestGP () > propose){
        CalcWeight = coursePred ()
    };
    
    return (CalcWeight/courseUnitSum).toFixed(2);
}

console.log(pred());

//Using filter with object array will return every element within the object but map will only map out the needful
//Receive strength, put them in an array of object that has strength. Then filter according to strength to find the G.P.
// Use Extend class for the prediction.




// var weight = score * unit;
// tetry.username = nme;
// tetry.score = weight;
// testy.push(tetry);
// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    if (typeof mass=== "number" && typeof height=== "number" && mass>0 && height>o){
        return mass/(height*height);
    }
    else {
        return "INVAILD INPUT";
    }
}

module.exports = BMICalculator;

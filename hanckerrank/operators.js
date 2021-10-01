function solve(meal_cost, tip_percent, tax_percent) {
    
    let Total_cost,tip,tax;
    tip=tip_percent/100*meal_cost
    tax=tax_percent/100*meal_cost
    Total_cost=meal_cost+tip+tax

    console.log(Math.round(Total_cost))
    


}
solve(12.00,20,8)

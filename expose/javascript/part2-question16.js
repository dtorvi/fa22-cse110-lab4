let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12, 
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
for (let propVal in statistics){
    if(propVal[0] == 'r' || statistics[propVal] %2 !==0){
        console.log(statistics[propVal]);
    }
}
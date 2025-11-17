
//Problem 1
function formatValue(X: string | number | boolean): string | number | boolean {
    if (typeof X === 'string') {
        return X.toUpperCase();
    } else if (typeof X === 'number') {
        return X * 10;
    }else{
        return !X
    }
}

//Problem 2
function getLength(value : string | any[]):number{
    if(typeof value ==='string' ){
        return value.length
    }else{
        return value.length
    }

}

//Problem 3
class Person{
    name:string;
    age:number;

    constructor(name:string ,age:number){
        this.name=name
        this.age=age
    }

    getDetails(): string{
        return (`'Name:${this.name}, Age:${this.age}';`)
    }
}


// Problem 4
type RatedItem = {
    title: string;
    rating: number;
};

function filterByRating(items: RatedItem[]): RatedItem[] {
    return items.filter(item => item.rating >= 4 && item.rating <= 5);
};





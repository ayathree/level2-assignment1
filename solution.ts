
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

//Problem 5
type UserItem={
    id:number;
    name:string;
    email:string;
    isActive:boolean;
}
function filterActiveUsers (items:UserItem[]):UserItem[]{
    return items.filter(item=>item.isActive === true);

};


//Problem 6
interface Book{
    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean;
}
function printBookDetails(book:Book):void{
    const avaibility = book.isAvailable? 'Yes' : 'No';
    console.log(`Title:${book.title}, Author:${book.author}, Published:${book.publishedYear}, Available:${avaibility}`)

}

//Problem 7
function getUniqueValues(x:(string|number)[],y:(string|number)[]):(string|number)[]{
    const result:(string|number)[]=[];
    for(let i=0;i<x.length;i++){
        let found=false;
        for(let j=0;j<result.length;j++){
            if (result[j]===x[i]){
                found=true;
                break
            };
        };
        if(!found){
            result.push(x[i])
        }
    }
    for(let i=0;i<y.length;i++){
        let found=false;
        for(let j=0;j<result.length;j++){
            if(result[j]===y[i]){
                found=true;
                break
            };
        };
        if(!found){
            result.push(y[i])
        }
    }
    return result;

}

//Problem 8
interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number; 
}

function calculateTotalPrice(products: Product[]): number {
    if (products.length === 0) {
        return 0;
    }
    
    const individualTotals = products.map(product => {
        const basePrice = product.price * product.quantity;
        
        if (product.discount !== undefined && product.discount > 0) {
            const discountAmount = basePrice * (product.discount / 100);
            return basePrice - discountAmount;
        }
        
        return basePrice;
    });
    
    return individualTotals.reduce((sum, price) => sum + price, 0);
}




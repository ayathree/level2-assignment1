

function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === 'string') {
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value * 10;
    }else if(typeof value ==='boolean' ) {
        if(value=true){
            return false
        }else{
            return true
        }
    }else{
        return value;
    }
}


function getLength(value : string | any[]):number{
    if(typeof value ==='string' ){
        return value.length;
    }
    if (Array.isArray(value)) {
    return value.length; 
    }
    else{
        return 0;
    }

}


class Person{
    name:string;
    age:number;

    constructor(name:string ,age:number){
        this.name=name
        this.age=age
    }

    getDetails(): string{
        return (`'Name:${this.name}, Age:${this.age}'`)
    }
}



function filterByRating(items: {
    title: string;
    rating: number;
}[]): {
    title: string;
    rating: number;
}[] {
    return items.filter(item => item.rating >= 4 && item.rating <= 5);
}


function filterActiveUsers(items: {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}[]): {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}[] {
    return items.filter(item => item.isActive === true);
}


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


function getUniqueValues(x:(string|number)[],y:(string|number)[]):(string|number)[]{
    const result:(string|number)[]=[];
    for(let i=0;i<x.length;i++){
        let found=false;
        for(let j=0;j<result.length;j++){
            if (result[j]===x[i]){
                found=true;
                break;
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
                break;
            };
        };
        if(!found){
            result.push(y[i])
        }
    }
    return result;

}


function calculateTotalPrice(products: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}[]): number {
    if (products.length === 0) {
        return 0;
    }
    
    const individualTotals = products.map(product => {
        const basePrice = product.price * product.quantity;
        
        if (product.discount !== undefined && product.discount > 0 && product.discount <= 100) {
            const discountAmount = basePrice * (product.discount / 100);
            return basePrice - discountAmount;
        }
        
        return basePrice;
    });
    
    return individualTotals.reduce((sum, price) => sum + price, 0);
}





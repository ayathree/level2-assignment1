
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

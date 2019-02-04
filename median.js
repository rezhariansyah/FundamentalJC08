function Median(arr){
    var arrHasilSorting = arr.sort(function(a,b){return a-b})
    if(arrHasilSorting.length % 2 ==0){
        var indeks1 = arrHasilSorting.length / 2 
        var indeks2 = indeks1 - 1
        return (arrHasilSorting[indeks1] + arrHasilSorting[indeks2]) / 2

    }else{
        var indeksTengah = parseInt(arrHasilSorting.length / 2) 
        return arrHasilSorting[indeksTengah]
    }
}

var arr = [1,4,12,24,12,9,8,29]
console.log(arr.sort(function(a,b){
    return a-b
}))
console.log(Median(arr))
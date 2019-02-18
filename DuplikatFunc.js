
var a = []

var sortDup = ( arr, fn) => {
    for(let i = 0 ; i < arr.length ; i++ ){
        for(let j = i +1 ; j < arr.length ; j ++){
            if(fn(arr[i], arr[j]) < 0){
                var temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp;
            }
        }
    }
    return arr
}

// console.log(sortDup(a,function(a,b){return a -b}))



// function duplikarFilter(a,fn){
//     var newArr = []
//     for(var i = 0;i<a.length;i++){
//         if( fn(a[i])){
//             newArr.push(a[i])
//         }
//     }
    
//     return newArr
// // }

// // var arr = [4,3,2,1,5]


// // var ABbCcc=(str)=>{
// //     var hasil=''
// //     var arr=str.split('')
// //     for(i=0;i<arr.length;i++){
// //         for(j=0;j<=i;j++){
// //             if(j==0){
// //                 hasil+=arr[i].toUpperCase()
// //             }
// //             else {
// //                 hasil+=arr[i].toLowerCase()
// //             }
// //         }
// //         hasil+='-'
// //     }
// //     // hasil=hasil.slice(0,(hasil.length-1))
// //     return hasil
// // }
// // console.log(ABbCcc("abcdef"))

















// // function ABbCcc(){
// //     return 'F-Gg-Jjj-Iiii'
// // }














// // console.log(ABbCcc('fgji'))













// multipleString('jkl')  // J-Kk-Lll


// function multipleString(str){ 
//     var arr = str.split('')  // arr =['j','k','l']
//     var hasil = ""   // hasil = j-kk-lll
//     for(var i = 0; i<arr.length ; i++){
//         for(var j = 0; j <= i;j++){
//             if(j == 0){
//                 hasil += arr[i].toUpperCase() 
//             }else{
//                 hasil += arr[i].toLowerCase()
//             }
//         }
//         hasil += '-'
//     }
//     return hasil.slice(0,hasil.length-1)
    
// }



// var anonimus = function(val){
//     return val * 2
// }
// var a = [4,2,5,7,1]

// // console.log(a.filter(anonimus))


// function filterDuplikat(arr,fn){   //arr = a // fn = anonimus
//     var newArr = []
//     for(var i =0 ; i < arr.length;i++){  // i =1
//         if(fn(arr[i])){
//             newArr.push(arr[i])
// //         }
// //     }
// //     return newArr
// // }

// // console.log(filterDuplikat(a,anonimus));







// function mapDuplikat(arr,fn){   
//     var newArr = []
//     for(var i = 0 ; i< arr.length ; i++){
//         var num = fn(arr[i])
//         newArr.push(num)
//     }
//     return newArr
// }

// mapDuplikat(a, function(val){
//     return val *2
// })




// var a = [4,2,5,7,1] 


// console.log(a.sort())


// sortDuplikat(a,function(a,b){return a - b})

// function sortDuplikat(arr,fn){
//     for(var i = 0; i< arr.length ; i++){
        
//     }
// }


function kelipatanTiga(num1,num2){
    var hasil = ''
    for(var i =num1; i<=num2 ; i++){
        if(i % 3 ==0){
            hasil += i + ','
        }
    }


    return hasil.slice(0,hasil.length-1)
}











// console.log(kelipatanTiga(1,10))











function deretBilangan(num){
    var hasil = ''
    var total = 0
    for(var i =1 ; i<= num ; i++){
        hasil += i + '+'
        total += i
    }
    var a = hasil.slice(0,hasil.length-1)
     a += ' = ' + total
     return a
}

// console.log(deretBilangan(5))






function kelipatantiga(start,end){
    var arr = []
    for(var i = start ; i<=end ; i++){
        if( i % 3 ==0){
            arr.push(i)
        }
    }
    return arr.join('-')
}

// console.log(kelipatantiga(5,15))



function DeretBilangan(num){
    var isi = ''
    var total = 0
    for(var i =1 ; i<= num; i++){
        isi += i + '+'
        total += i  // total = 3
    }
    isi = isi.slice(0,isi.length-1)
    isi += ' = ' + total
    return isi
}

// console.log(DeretBilangan(6))









// var bebek = 1000


    function hitungBebek(bulan){
        var bebek = 1000
        for(var i = 1 ; i<=bulan ; i++){
            bebek = (bebek - (bebek*20/100)) *2
        }
        return bebek
    }

    console.log(hitungBebek(1))
    console.log(hitungBebek(2))
    console.log(hitungBebek(3))



// 1 = 1600
// 2 = (1600 - 320) * 2











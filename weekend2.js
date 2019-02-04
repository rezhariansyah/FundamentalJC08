function jumlahAlpha(str){  // abc
    var a = str.split('')  // ['a','b','c']
    var huruf = '0abcdefghijklmnopqrstuvwxyz'.split('')
    var jumlah = 0  // 3 +3
    for(var i = 0 ; i < a.length ; i++){  // a.length = 3
        jumlah += parseInt(huruf.indexOf('b'))
    }
    return jumlah
}

// console.log(jumlahAlpha('abc'))


function jumlahAlphaGanjil(str){
    var a = str.split('')
    var huruf = '0abcdefghijklmnopqrstuvwxyz'.split('')
    var jumlah = 0 // 19 +5 +5
    for(var i = 0 ; i < a.length ; i++){
        if((i+1) % 2 != 0){
            jumlah += parseInt(huruf.indexOf(a[i]))
        }
        
    }
    return jumlah
}

// console.log(jumlahAlphaGanjil('steve'))



function jumlahAlphaIndexGenap(str){
    var a = str.split('')
    var huruf = '0abcdefghijklmnopqrstuvwxyz'.split('')
    var jumlah = 0 // 2
    for(var i = 0 ; i < a.length ; i++){
        if(huruf.indexOf('b') % 2 ==0){
            jumlah += parseInt(huruf.indexOf(a[i]))
        }
        
    }
    return jumlah
}

console.log(jumlahAlphaIndexGenap('aebcd'))
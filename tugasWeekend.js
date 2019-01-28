var hapusVokal = (str) => {
    return str.replace( /a|i|u|e|o/g  , '')
}

function parkir(jam){ // 1
    biaya = 0
    jam <= 2 ? biaya += jam*2000 : biaya += (2*2000) + ((jam-2)*500)
    return 'Anda Parkir Selama ' + jam + ' Anda Harus Bayar ' + biaya
}

function ganjilGenap (int){
    hasil = ''
    int % 2 ==0 ? hasil = 'genap' : hasil = 'ganjil'
    return int + ' Adalah Bilangan ' + hasil
}

function angkaTerbesar(a,b,c){
    hasil = 0
    // a>b && a>c ? hasil = a : b>a && b>c ? hasil = b : hasil = c
    if(a>=b && a>=c){
        hasil = a
    }else if(b>=a && b>=c){
        hasil = b
    }else{
        hasil = c
    }
    return hasil
}

// console.log(angkaTerbesar(5,4,4))

// function filterString(arr){
//     return arr.filter((val) => typeof(val) != 'string')
// }

function removeChar(str){
    return str.slice(1,-1)
}

console.log(removeChar('Purwadhika Startup')) // purwadhika




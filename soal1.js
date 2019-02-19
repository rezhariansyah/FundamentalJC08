var berapatahun = (awal , percent , newComer , target) => { // 1500000
    var tahun = 0
    percent = percent / 100 //0,5
    do{
        awal = awal + (awal*percent) + newComer // sisa = 35 + 18 + 5 // 58
        tahun ++ // tahun = 3
    }while(awal < target)

    return 'Kota akan mencapai ' + target + ' dalam ' + tahun + ' tahun'

}

console.log(berapatahun(1500000, 2.5 ,10000,2000000))
console.log(berapatahun(10, 50 ,5,50))



function segitigaPasc(n=5){
    var result = [];
        result[0] = [1];         
        result[1] = [1,1];
    for (var row = 2; row < n; row++){ // row =3 , n = 5
        result[row] = [1]; 
        for (var col = 1; col <= row -1; col++){
            result[row][col] = result[row-1][col] + result[row-1][col-1];
        }
        result[row].push(1);
    }
    return result
}
    



var print = segitigaPasc(5)

var output = ''
for(var i = 0 ; i<print.length;i++){
    for(var spasi = print.length; spasi > i; spasi --){
        output += ' '
    }
    output += print[i].join(' ')
    output += '\n'
}














// parameter 1 = jumlah penduduk awal
// parameter 2 = persen penduduk melahirkan tiap tahunnya
// parameter 3 = pendatang setiap tahunnya
// parameter 4 = target penduduk

// console.log(berapatahun(100,50,50,200))
// console.log(berapatahun(1000,0.5,50,1200))
// console.log(berapatahun(1500000,2.5,10000,2000000))

// 







// var satu = '|\n|'
// var dua = 

// console.log(satu)
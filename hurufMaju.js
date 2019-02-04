function tambah(str,num){
    var a = str.toLowerCase().split('')
    var huruf = 'abcdefghijklmnopqrstuvwxyz'.split('')
    var newHuruf =''
    for(var i = 0 ; i < a.length ; i++){
        var indeks = (huruf.indexOf(a[i])) + num
        while(indeks > 25){
            indeks = indeks - 26
        }
        newHuruf += huruf[indeks]

    }
    return newHuruf
}

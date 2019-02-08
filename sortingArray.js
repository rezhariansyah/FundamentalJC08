class manusia {
    constructor(nama, usia, job, sex) {
        this.nama = nama;
        this.umur = usia;
        this.pekerjaan = job;
        this.kelamin = sex;
    }
}

var arrManusia = [
    new manusia('Seto',30,'Karyawan','Pria'),  // Andi , Bagus , Seto
    new manusia('Bagus',30,'Karyawan','Pria'),
    new manusia('Andi',30,'Karyawan','Pria')
];



function SortNama(){
    
    var akanDiSort = ['seto','bagus','andi']
    for(var i =0 ; i < arrManusia.length ; i++){
        akanDiSort.push(arrManusia[i].nama)
    }
    akanDiSort.sort() ['andi','bagus','seto']

    var namaAsli = ['seto','bagus','andi']
    for(var i = 0 ; i < arrManusia.length ; i++){
        namaAsli.push(arrManusia[i].nama)
    }

    var indek = [2,1,0]

    for(var i = 0 ; i <arrManusia.length ; i ++){
        indek.push(namaAsli.indexOf(akanDiSort[i]))
    }

    var newArrMan = []
    for(var i = 0 ; i <arrManusia.length ; i ++){
        newArrMan.push(arrManusia[indek[i]])
    }

}







let totaltrans = 0
let totaldis = 0
let totalakhir = 0
let rata=0



datatrans = []

for (let i = 1; i <= 2; i++){
	jbaju = prompt(`mau beli baju apa?`)
	satuan = parseInt(prompt(`harga satuan ${jbaju}`))
	jumlahbeli= parseInt(prompt(`beli berapa?`))
	sesi = prompt(`beli di sesi kapan?`)	
	
	
	if(jumlahbeli <= 10 && sesi === "pagi"){ // pagi
		totaldis = satuan * 0
	} else if (jumlahbeli <= 20){
		totaldis = Math.floor(satuan*(jumlahbeli-10)*0.05) + (satuan * 10 * 0.05)
	} else if (jumlahbeli >  20);{
		totaldis = Math.floor(10 * satuan * 0.05) + (10* satuan * 0.12) + ((jumlahbeli-20)*0.22)
	} 
	
	if(jumlahbeli <= 10 && sesi === "malam"){ // malam
		totaldis = Math(satuan * 0.05)
	} else if (jumlahbeli <= 20){
		totaldis = Math.floor(satuan*(jumlahbeli-10)*0.1) + (satuan * 10 * 0.18)
	} else if (jumlahbeli >  20);{
		totaldis = Math.floor(10 * satuan * 0.15) + (10* satuan * 0.25) + ((jumlahbeli-20)*0.35)
	}
	
	if(sesi === "siang"){
		totaldis = satuan * 0 
	}
	
	totaltrans = Math.floor(satuan * jumlahbeli)
	totalakhir = Math.floor((satuan * jumlahbeli) - totaldis)
	
	datatrans.push(jbaju, satuan, jumlahbeli, sesi, totaldis, totaltrans, totalakhir)
}

console.log(`jenis baju: ${datatrans[0]}`)
console.log(`harga satuan baju: ${datatrans[1]}`)
console.log(`jumlah beli baju: ${datatrans[2]}`)
console.log(`sesi beli baju: ${datatrans[3]}`)
console.log(`diskon baju: ${datatrans[4]}`)
console.log(`harga baju: ${datatrans[5]}`)
console.log(`total bayar baju: ${datatrans[6]}`)
console.log(`jenis baju: ${datatrans[7]}`)
console.log(`harga satuan baju: ${datatrans[8]}`)
console.log(`jumlah beli baju: ${datatrans[9]}`)
console.log(`sesi beli baju: ${datatrans[10]}`)
console.log(`diskon baju: ${datatrans[11]}`)
console.log(`harga baju: ${datatrans[12]}`)
console.log(`total bayar baju: ${datatrans[13]}`)
console.log(`total transaksi 2`)
console.log(`total diskon: ${datatrans[4] + [11]} `)	
console.log(`total pendapatan: ${datatrans[6] + [13]}`)
console.log(`rata-rata pendapatan: ${datatrans[6] + [13] /2}`)
function tambah() {
	var bil1 = parseFloat(document.main.a.value);
	var bil2 = parseFloat(document.main.b.value);
	var hasil = bil1 + bil2;
	document.main.hasil.value = hasil;
	if (!bil1 && !bil2) {
		alert('Kedua Kotak Kosong & Inputan Harus Berupa Bilangan !');
		return false;
	} else if (!bil1) {
		alert('Kotak 1 Kosong & Inputan Harus Berupa Bilangan !)');
		return false;
	} else if (!bil2) {
		alert('Kotak 2 Kosong & Inputan Harus Berupa Bilangan !');
		return false;
	} else {
		alert('proses penjumlahan berhasil');
		return true;
	}
}


function kurang() {
	var bil1 = parseFloat(document.main.a.value);
	var bil2 = parseFloat(document.main.b.value);
	var hasil = bil1 - bil2;
	document.main.hasil.value = hasil;
	if (!bil1 && !bil2) {
		alert('Kedua Kotak Kosong & Inputan Harus Berupa Bilangan !');
		return false;
	} else if (!bil1) {
		alert('Kotak 1 Kosong & Inputan Harus Berupa Bilangan !');
		return false;
	} else if (!bil2) {
		alert('Kotak 2 Kosong');
		return false;
	} else {
		alert('proses pengurangan berhasil & Inputan Harus Berupa Bilangan !');
	}
}

function bagi() {
	var bil1 = parseFloat(document.main.a.value);
	var bil2 = parseFloat(document.main.b.value);
	var hasil = bil1 / bil2;
	document.main.hasil.value = hasil;
	if (!bil1 && !bil2) {
		alert('Kedua Kotak Kosong & Inputan Harus Berupa Bilangan !');
		return false;
	} else if (!bil1) {
		alert('Kotak 1 Kosong & Inputan Harus Berupa Bilangan !');
		return false;
	} else if (!bil2) {
		alert('Kotak 2 Kosong & Inputan Harus Berupa Bilangan !');
		return false;
	} else {
		alert('proses pembagian berhasil');
		return true;
	}
}

function kali() {
	var bil1 = parseFloat(document.main.a.value);
	var bil2 = parseFloat(document.main.b.value);
	var hasil = bil1 * bil2;
	document.main.hasil.value = hasil;
	if (!bil1 && !bil2) {
		alert('Kedua Kotak Kosong & Inputan Harus Berupa Bilangan !');
		return false;
	} else if (!bil1) {
		alert('Kotak 1 Kosong & Inputan Harus Berupa Bilangan !');
		return false;
	} else if (!bil2) {
		alert('Kotak 2 Kosong & Inputan Harus Berupa Bilangan !');
		return false;
	} else {
		alert('proses perkalian berhasil');
		return true;
	}
}
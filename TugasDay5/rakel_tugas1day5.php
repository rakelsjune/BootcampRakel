<html>
<head>
    <title>Kalkulator Gaji Bersih Nih Boss</title>
</head>
<body>

<h2>Kalkulator Gaji Bersih Nih Bos!!!</h2>

<form action="" method="post">
    <label for="gajiPokok">Gaji Pokok:</label>
    <input type="text" id="gajiPokok" name="gajiPokok" required><br>
    <label for="tunjangan">Tunjangan:</label>
    <input type="text" id="tunjangan" name="tunjangan" required><br>
    <label for="potongan">Potongan:</label>
    <input type="text" id="potongan" name="potongan" required><br><br>
    <input type="submit" value="Cek Perhitungan">
</form>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $gajiPokok = $_POST['gajiPokok'];
    $tunjangan = $_POST['tunjangan'];
    $potongan = $_POST['potongan'];

    // Validasi input pengguna
    if (is_numeric($gajiPokok) && is_numeric($tunjangan) && is_numeric($potongan) &&
        $gajiPokok >= 0 && $tunjangan >= 0 && $potongan >= 0) {

        // Menghitung gaji bersih
        echo hitungGanber($gajiPokok, $tunjangan, $potongan);
    } else {
        echo "wajib diisi";
    }
}

function hitungGanber($gajiPokok, $tunjangan, $potongan) {
    $gajiBruto = $gajiPokok + $tunjangan - $potongan;
    $pajakPenghasilan = $gajiBruto * 0.10;
    $asuransiKesehatan = $gajiBruto * 0.05;
    $gajiBersih = $gajiBruto - $pajakPenghasilan - $asuransiKesehatan;

    $hasil = "<h3>Rincian Perhitungan sebagai berikut :</h3>";
    $hasil .= "Gaji Bruto: Rp" . number_format($gajiBruto, 2) . "<br>";
    $hasil .= "Pajak Penghasilan (10%): Rp" . number_format($pajakPenghasilan, 2) . "<br>";
    $hasil .= "Asuransi Kesehatan (5%): Rp" . number_format($asuransiKesehatan, 2) . "<br>";
    $hasil .= "Gaji Bersih: Rp" . number_format($gajiBersih, 2);

    return $hasil;
}
?>

</body>
</html>
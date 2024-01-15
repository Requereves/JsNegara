const harga = 10000;
const beli = 2;
const diskon = 0.35;
const diskon1 = 0.05;
const nilai = harga * beli;
// const hitung = nilai * diskon;

if(beli >= 3) {

   const bayar1 = harga * diskon;

   console.log(
      ` ${bayar1}`
      );
      
   } else {

      const bayar2 = harga * diskon1;

          console.log(
           ` ${bayar2}`
      );
   }
      
            // const tagihan = 100000;
            // const tip = 0.25;
            // const nilaiTip = tagihan * tip;
            // console.log(
            //     `tagihan sejumlah ${tagihan}, tip ${nilaiTip}, total bayar ${tagihan * nilaiTip}`
            // );
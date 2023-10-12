import React from 'react'

const ShowProducts = () => {
    let merch = JSON.parse(localStorage.getItem("merch"));

    function formatRupiah(money) {
        return new Intl.NumberFormat('id-ID',
          { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
        ).format(money);
    }

  return (
    <div>
        {!merch["Tumbler"] ? "" : (
            merch["Tumbler"].map((item, index) => (
                <div key={index} className='flex items-center w-[70vw] max-w-[700px]'>
                  <img className='w-[20vw] my-[10px] max-w-[200px]' src="https://firebasestorage.googleapis.com/v0/b/sharings1-fce7a.appspot.com/o/Tumblr.png?alt=media&token=027c0cc1-d94b-4190-9eb7-0dd07cc6d875&_gl=1*rsg5fh*_ga*NDcwNzY2NDA3LjE2OTY4NzEwMDg.*_ga_CW55HF8NVT*MTY5Njg3MTAwNy4xLjEuMTY5Njg3MjU3Ni4yMy4wLjA." alt=""/>
                  <div className='ml-[3vw] font-sniglet flex flex-col content-between'>
                    <div>
                      <p className='text-xl'>Tumbler</p>
                      <p className='text-l mb-[5px]'>{formatRupiah(item.price)}</p>
                    </div>
                    <div>
                      Jumlah: {item.quantity}
                    </div>
                  </div>
                </div>
            ))
        )}
        {!merch["StickerPack"] ? "" : (
            merch["StickerPack"].map((item, index) => (
                <div key={index} className='flex items-center w-[70vw] max-w-[700px]'>
                  <img className='w-[20vw] my-[10px] max-w-[200px]' src="https://firebasestorage.googleapis.com/v0/b/sharings1-fce7a.appspot.com/o/Sticker.png?alt=media&token=08d2fcc6-b674-454e-85e7-8461f743fcfb&_gl=1*1j82oo3*_ga*NDcwNzY2NDA3LjE2OTY4NzEwMDg.*_ga_CW55HF8NVT*MTY5Njg3MTAwNy4xLjEuMTY5Njg3MjU4Ny4xMi4wLjA." alt=""/>
                  <div className='ml-[3vw] font-sniglet flex flex-col content-between'>
                    <div>
                      <p className='text-xl'>Sticker Pack</p>
                      <p className='text-l mb-[5px]'>{formatRupiah(item.price)}</p>
                    </div>
                    <div>
                      Jumlah: {item.quantity}
                    </div>
                  </div>
                </div>
            ))
        )}
        {!merch["KeychainFPsi"] ? "" : (
            merch["KeychainFPsi"].map((item, index) => (
                <div key={index} className='flex items-center w-[70vw] max-w-[700px]'>
                  <img className='w-[20vw] my-[10px] max-w-[200px]' src="https://firebasestorage.googleapis.com/v0/b/sharings1-fce7a.appspot.com/o/Keychain%20FPsi.png?alt=media&token=764279e9-fa30-467b-a3e6-1d8176d15214&_gl=1*c7iv4c*_ga*NDcwNzY2NDA3LjE2OTY4NzEwMDg.*_ga_CW55HF8NVT*MTY5Njg3MTAwNy4xLjEuMTY5Njg3MTE0NS40Ni4wLjA." alt=""/>
                  <div className='ml-[3vw] font-sniglet flex flex-col content-between'>
                    <div>
                      <p className='text-xl'>Keychain FPsi</p>
                      <p className='text-l mb-[5px]'>{formatRupiah(item.price)}</p>
                    </div>
                    <div>
                      Jumlah: {item.quantity}
                    </div>
                  </div>
                </div>
            ))
        )}
        {!merch["KeychainUI"] ? "" : (
            merch["KeychainUI"].map((item, index) => (
                <div key={index} className='flex items-center w-[70vw] max-w-[700px]'>
                  <img className='w-[20vw] my-[10px] max-w-[200px]' src="https://firebasestorage.googleapis.com/v0/b/sharings1-fce7a.appspot.com/o/Keychain%20UI.png?alt=media&token=6dc4bcfa-81de-4ba2-9764-46ff5f9f0512&_gl=1*11gudx5*_ga*NDcwNzY2NDA3LjE2OTY4NzEwMDg.*_ga_CW55HF8NVT*MTY5Njg3MTAwNy4xLjEuMTY5Njg3MTE2OS4yMi4wLjA." alt=""/>
                  <div className='ml-[3vw] font-sniglet flex flex-col content-between'>
                    <div>
                      <p className='text-xl'>Keychain UI</p>
                      <p className='text-l mb-[5px]'>{formatRupiah(item.price)}</p>
                    </div>
                    <div>
                      Jumlah: {item.quantity}
                    </div>
                  </div>
                </div>
            ))
        )}
        {!merch["KeychainIto"] ? "" : (
            merch["KeychainIto"].map((item, index) => (
                <div key={index} className='flex items-center w-[70vw] max-w-[700px]'>
                  <img className='w-[20vw] my-[10px] max-w-[200px]' src="https://firebasestorage.googleapis.com/v0/b/sharings1-fce7a.appspot.com/o/Keychain%20Ito.png?alt=media&token=6c5fcf97-8ca1-4fb6-b6bc-4c0f719fb923&_gl=1*x0n3m*_ga*NDcwNzY2NDA3LjE2OTY4NzEwMDg.*_ga_CW55HF8NVT*MTY5Njg3MTAwNy4xLjEuMTY5Njg3MTE1OS4zMi4wLjA." alt=""/>
                  <div className='ml-[3vw] font-sniglet flex flex-col content-between'>
                    <div>
                      <p className='text-xl'>Keychain Ito</p>
                      <p className='text-l mb-[5px]'>{formatRupiah(item.price)}</p>
                    </div>
                    <div>
                      Jumlah: {item.quantity}
                    </div>
                  </div>
                </div>
            ))
        )}
        {!merch["WhiteTshirt"] ? "" : (
            merch["WhiteTshirt"].map((item, index) => (
                <div key={index} className='flex items-center w-[70vw] max-w-[700px]'>
                  <img className='w-[20vw] my-[10px] max-w-[200px]' src="https://firebasestorage.googleapis.com/v0/b/sharings1-fce7a.appspot.com/o/Kaos%20Putih.png?alt=media&token=cb2a2aa0-9f57-4dff-ad82-eeadcdf720d8&_gl=1*xzln46*_ga*NDcwNzY2NDA3LjE2OTY4NzEwMDg.*_ga_CW55HF8NVT*MTY5Njg3MTAwNy4xLjEuMTY5Njg3MTEzNi41NS4wLjA." alt=""/>
                  <div className='ml-[3vw] font-sniglet flex flex-col content-between'>
                    <div>
                      <p className='text-xl'>White T-shirt</p>
                      <p className='text-xs'>Ukuran: {item.size}</p>
                      <p className='text-xs'>Lengan: {item.lengan}</p>
                      <p className='text-l mb-[5px]'>{formatRupiah(item.price)}</p>
                    </div>
                    <div>
                      Jumlah: {item.quantity}
                    </div>
                  </div>
                </div>
            ))
        )}
        {!merch["BlackTshirt"] ? "" : (
            merch["BlackTshirt"].map((item, index) => (
                <div key={index} className='flex items-center w-[70vw] max-w-[700px]'>
                  <img className='w-[20vw] my-[10px] max-w-[200px]' src="https://firebasestorage.googleapis.com/v0/b/sharings1-fce7a.appspot.com/o/Kaos%20Hitam.png?alt=media&token=9e6daf71-2ad3-4b62-9830-4474909defa7&_gl=1*10ujbzu*_ga*NDcwNzY2NDA3LjE2OTY4NzEwMDg.*_ga_CW55HF8NVT*MTY5Njg3MTAwNy4xLjEuMTY5Njg3MTEyNC40LjAuMA.." alt=""/>
                  <div className='ml-[3vw] font-sniglet flex flex-col content-between'>
                    <div>
                      <p className='text-xl'>Black T-shirt</p>
                      <p className='text-xs'>Ukuran: {item.size}</p>
                      <p className='text-xs'>Lengan: {item.lengan}</p>
                      <p className='text-l mb-[5px]'>{formatRupiah(item.price)}</p>
                    </div>
                    <div>
                      Jumlah: {item.quantity}
                    </div>
                  </div>
                </div>
            ))
        )}
        {!merch["Bundle1"] ? "" : (
            merch["Bundle1"].map((item, index) => (
                <div key={index} className='flex items-center w-[70vw] max-w-[700px]'>
                  <img className='w-[20vw] my-[10px] max-w-[200px]' src="https://firebasestorage.googleapis.com/v0/b/sharings1-fce7a.appspot.com/o/Bundle%201.png?alt=media&token=883b7c23-f19e-4874-a717-98160569b5b3&_gl=1*6v1uyg*_ga*NDcwNzY2NDA3LjE2OTY4NzEwMDg.*_ga_CW55HF8NVT*MTY5Njg3MTAwNy4xLjEuMTY5Njg3MTA5My4zNS4wLjA." alt=""/>
                  <div className='ml-[3vw] font-sniglet flex flex-col content-between'>
                    <div>
                      <p className='text-xl'>Bundle 1</p>
                      <p className='text-xs'>Keychain: {item.keychain}</p>
                      <p className='text-l mb-[5px]'>{formatRupiah(item.price)}</p>
                    </div>
                    <div>
                      Jumlah: {item.quantity}
                    </div>
                  </div>
                </div>
            ))
        )}
        {!merch["Bundle2"] ? "" : (
            merch["Bundle2"].map((item, index) => (
                <div key={index} className='flex items-center w-[70vw] max-w-[700px]'>
                  <img className='w-[20vw] my-[10px] max-w-[200px]' src="https://firebasestorage.googleapis.com/v0/b/sharings1-fce7a.appspot.com/o/Bundle%202.png?alt=media&token=2b1d359d-cb93-43a3-a373-58af3fcd48aa&_gl=1*zwyty4*_ga*NDcwNzY2NDA3LjE2OTY4NzEwMDg.*_ga_CW55HF8NVT*MTY5Njg3MTAwNy4xLjEuMTY5Njg3MTEwMy4yNS4wLjA." alt=""/>
                  <div className='ml-[3vw] font-sniglet flex flex-col content-between'>
                    <div>
                      <p className='text-xl'>Bundle 2</p>
                      <p className='text-xs'>Keychain: {item.keychain}</p>
                      <p className='text-xs'>Ukuran: {item.size}</p>
                      <p className='text-xs'>Lengan: {item.lengan}</p>
                      <p className='text-l mb-[5px]'>{formatRupiah(item.price)}</p>
                    </div>
                    <div>
                      Jumlah: {item.quantity}
                    </div>
                  </div>
                </div>
            ))
        )}
        {!merch["Bundle3"] ? "" : (
            merch["Bundle3"].map((item, index) => (
                <div key={index} className='flex items-center w-[70vw] max-w-[700px]'>
                  <img className='w-[20vw] my-[10px] max-w-[200px]' src="https://firebasestorage.googleapis.com/v0/b/sharings1-fce7a.appspot.com/o/Bundle%203.png?alt=media&token=99e6b084-640b-4a88-bdba-1172c877ab61&_gl=1*11wpo3u*_ga*NDcwNzY2NDA3LjE2OTY4NzEwMDg.*_ga_CW55HF8NVT*MTY5NzEwNTY5MS4yLjEuMTY5NzEwNTc2NC41OC4wLjA." alt=""/>
                  <div className='ml-[3vw] font-sniglet flex flex-col content-between'>
                    <div>
                      <p className='text-xl'>Bundle 3</p>
                      <p className='text-xs'>Keychain: {item.keychain}</p>
                      <p className='text-xs'>Ukuran: {item.size}</p>
                      <p className='text-xs'>Lengan: {item.lengan}</p>
                      <p className='text-l mb-[5px]'>{formatRupiah(item.price)}</p>
                    </div>
                    <div>
                      Jumlah: {item.quantity}
                    </div>
                  </div>
                </div>
            ))
        )}
    </div>
  )
}

export default ShowProducts
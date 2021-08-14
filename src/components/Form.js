import React from 'react'

function Form(){
  return(
    <div>
      <label for="asalsekolah active:outline:none">Asal Sekolah</label>
      <input type="text" class="rounded" id="asalsekolah" />
      <label for="nomortelepon">Nomor Telepon</label>
      <input type="text" class="rounded" id="nomortelepon" />
      <label for="alamat">Alamat</label>
      <input type="text" class="rounded" id="alamat" />
    </div>
  )
}

export default Form
export default function validateInfo(values) {
  let errors = {};
  if (!values.asalsekolah.trim()) {
    errors.asalsekolah = "Asal Sekolah dibutuhkan";
  }

  if (!values.contactperson.trim()) {
    errors.contactperson = "Contact Person dibutuhkan";
  }
  if (!values.cabanglomba.trim()) {
    errors.cabanglomba = "Cabang Lomba dibutuhkan";
  }
  if (!values.pelatih.trim()) {
    errors.pelatih = "Pelatih dibutuhkan";
  }

  if (!values.nomortelepon) {
    errors.nomortelepon = "Nomor Telepon dibutuhkan";
  } else if (!/^(\+62|62|0)8[1-9][0-9]{6,9}$/g.test(values.nomortelepon)) {
    //https://www.huzefril.com/posts/regex/regex-nomor-handphone/
    errors.nomortelepon = "Nomor Telepon tidak valid";
  }
  if (!values.nomorteleponcp) {
    errors.nomorteleponcp = "Nomor Telepon dibutuhkan";
  } else if (!/^(\+62|62|0)8[1-9][0-9]{6,9}$/g.test(values.nomorteleponcp)) {
    //https://www.huzefril.com/posts/regex/regex-nomor-handphone/
    errors.nomorteleponcp = "Nomor Telepon tidak valid";
  }
  if (!values.nomorteleponpelatih) {
    errors.nomorteleponpelatih = "Nomor Telepon dibutuhkan";
  } else if (!/^(\+62|62|0)8[1-9][0-9]{6,9}$/g.test(values.nomorteleponpelatih)) {
    //https://www.huzefril.com/posts/regex/regex-nomor-handphone/
    errors.nomorteleponpelatih = "Nomor Telepon tidak valid";
  }
  
  if (!values.alamat.trim()) {
      errors.alamat = "Alamat dibutuhkan";
    }
    
    if (!values.kodepos) {
        errors.kodepos = "Kode Pos dibutuhkan";
    } else if (!/^\d{5}(?:[-\s]\d{5})?$/g.test(values.kodepos)) {
        //https://stackoverflow.com/questions/578406/what-is-the-ultimate-postal-code-and-zip-regex
        errors.kodepos = "Kode Pos tidak valid";
    }
    
    if (!values.email) {
      errors.email = "Email dibutuhkan";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
      //https://www.huzefril.com/posts/regex/regex-nomor-handphone/
      errors.email = "Email tidak valid";
    }

  return errors;
}


//https://www.youtube.com/watch?v=KGFG-yQD7Dw
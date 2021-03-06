import { useState, useEffect } from "react";

const useForm = (validate, callback) => {
  const [values, setValues] = useState({
    jenjang: "",
    asalsekolah: "",
    nomortelepon: "",
    alamat: "",
    provinsi: "",
    kota: "",
    kecamatan: "",
    kodepos: "",
    contactperson: "",
    email: "",
    nomorteleponcp: "",
    cabanglomba: "",
    pelatih: "",
    nomorteleponpelatih: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);
  return { handleChange, values, handleSubmit, errors };
};

export default useForm;

import React from "react";
import useForm from "./useForm";
import validate from "./validateInfo";

const FormSekolah = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    validate,
    submitForm
  );
  return (
    <div>
      <form action="#" method="POST" onSubmit={handleSubmit}>
        <div className="rounded-2xl sm:overflow-hidden sm:flex bg-white shadow-lg">
          <div className="px-4 py-5 bg-highlight space-y-6 sm:p-6 w-full">
            <div>
              <label
                htmlFor="jenjang"
                className="block text-sm font-medium text-primary"
              >
                Jenjang Sekolah
              </label>
              <select
                id="jenjang"
                name="jenjang"
                autoComplete="jenjang"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-900 focus:border-indigo-900 sm:text-sm"
                value={values.jenjang}
                onChange={handleChange}
              >
                <option disabled selected value>
                  Pilih Jenjang Sekolahmu
                </option>
                <option>SMA</option>
                <option>SMP</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="asalsekolah"
                className="block text-sm font-medium text-gray-700"
              >
                Asal Sekolah
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="asalsekolah"
                  name="asalsekolah"
                  className="shadow-sm focus:ring-indigo-900 focus:border-indigo-900 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  value={values.asalsekolah}
                  onChange={handleChange}
                />
                {errors.asalsekolah && (
                  <p className="text-xs text-red-500">{errors.asalsekolah}</p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="nomortelepon"
                className="block text-sm font-medium text-gray-700"
              >
                Nomor Telepon
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  id="nomortelepon"
                  name="nomortelepon"
                  className="shadow-sm focus:ring-indigo-900 focus:border-indigo-900 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  value={values.nomortelepon}
                  onChange={handleChange}
                />
                {errors.nomortelepon && (
                  <p className="text-xs text-red-500">{errors.nomortelepon}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="alamat"
                className="block text-sm font-medium text-gray-700"
              >
                Alamat
              </label>
              <div className="mt-1">
                <textarea
                  id="alamat"
                  name="alamat"
                  rows={2}
                  className="shadow-sm focus:ring-indigo-900 focus:border-indigo-900 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  placeholder="12, Jl. Tanjung Duren Raya No.4"
                  defaultValue={""}
                  value={values.alamat}
                  onChange={handleChange}
                />
                {errors.alamat && (
                  <p className="text-xs text-red-500">{errors.alamat}</p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="provinsi"
                className="block text-sm font-medium text-gray-700"
              >
                Provinsi
              </label>
              <div className="mt-1">
                <select
                  id="provinsi"
                  name="provinsi"
                  autoComplete="provinsi"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-900 focus:border-indigo-900 sm:text-sm"
                  value={values.provinsi}
                  onChange={handleChange}
                >
                  <option disabled selected value>
                    Pilih Provinsi
                  </option>
                  <option>DKI Jakarta</option>
                  <option>Tangerang</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="kota"
                className="block text-sm font-medium text-gray-700"
              >
                Kota/Kabupaten
              </label>
              <div className="mt-1">
                <select
                  id="kota"
                  name="kota"
                  autoComplete="kota"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-900 focus:border-indigo-900 sm:text-sm"
                  value={values.kota}
                  onChange={handleChange}
                >
                  <option disabled selected value>
                    Pilih Kota
                  </option>
                  <option>Jakarta Pusat</option>
                  <option>Jakarta Barat</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-10 gap-3">
              <div className="col-span-7">
                <label
                  htmlFor="kecamatan"
                  className="block text-sm font-medium text-gray-700"
                >
                  Kecamatan
                </label>
                <div className="mt-1">
                  <select
                    id="kecamatan"
                    name="kecamatan"
                    autoComplete="kecamatan"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-900 focus:border-indigo-900 sm:text-sm"
                    value={values.kecamatan}
                    onChange={handleChange}
                  >
                    <option disabled selected value>
                      Pilih Kecamatan
                    </option>
                    <option>Kemayoran</option>
                    <option>Tanjung Duren</option>
                  </select>
                </div>
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="kodepos"
                  className="block text-sm font-medium text-gray-700"
                >
                  Kode Pos
                </label>
                <div className="mt-1">
                  <input
                    type="number"
                    id="kodepos"
                    name="kodepos"
                    className="shadow-sm focus:ring-indigo-900 focus:border-indigo-900 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    value={values.kodepos}
                    onChange={handleChange}
                  />
                  {errors.kodepos && (
                    <p className="text-xs text-red-500">{errors.kodepos}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-5 space-y-6 sm:p-6 w-full">
            <div>
              <label
                htmlFor="contactperson"
                className="block text-sm font-medium text-gray-700"
              >
                Contact Person
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="contactperson"
                  name="contactperson"
                  className="shadow-sm focus:ring-indigo-900 focus:border-indigo-900 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  value={values.contactperson}
                  onChange={handleChange}
                />
                {errors.contactperson && (
                  <p className="text-xs text-red-500">{errors.contactperson}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3">
                <label
                  htmlFor="nomorteleponcp"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nomor Telepon/HP
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    +62
                  </span>
                  <input
                    type="number"
                    name="nomorteleponcp"
                    id="nomorteleponcp"
                    className="focus:ring-indigo-900 focus:border-indigo-900 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="89999999"
                    value={values.nomorteleponcp}
                    onChange={handleChange}
                  />
                </div>
                {errors.nomorteleponcp && (
                  <p className="text-xs text-red-500">
                    {errors.nomorteleponcp}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="cabanglomba"
                className="block text-sm font-medium text-gray-700"
              >
                Cabang Lomba
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="cabanglomba"
                  name="cabanglomba"
                  className="shadow-sm focus:ring-indigo-900 focus:border-indigo-900 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                  value={values.cabanglomba}
                  onChange={handleChange}
                />
                {errors.cabanglomba && (
                  <p className="text-xs text-red-500">{errors.cabanglomba}</p>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="pelatih"
                className="block text-sm font-medium text-gray-700"
              >
                Guru Pembimbing atau Pelatih
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="pelatih"
                  name="pelatih"
                  value={values.pelatih}
                  onChange={handleChange}
                  className="shadow-sm focus:ring-indigo-900 focus:border-indigo-900 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                />
                {errors.pelatih && (
                  <p className="text-xs text-red-500">{errors.pelatih}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3">
                <label
                  htmlFor="nomorteleponpelatih"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nomor Telepon/HP
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    +62
                  </span>
                  <input
                    type="number"
                    name="nomorteleponpelatih"
                    id="nomorteleponpelatih"
                    className="focus:ring-indigo-900 focus:border-indigo-900 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                    placeholder="89999999"
                    value={values.nomorteleponpelatih}
                    onChange={handleChange}
                  />
                </div>
                {errors.nomorteleponpelatih && (
                  <p className="text-xs text-red-500">
                    {errors.nomorteleponpelatih}
                  </p>
                )}
              </div>
            </div>

            <div className="px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormSekolah;

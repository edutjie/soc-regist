import React from "react";

function Form() {
  return (
    <div class="antialiased text-gray-900 px-6">
      <div class="max-w-xl mx-auto py-12 divide-y md:max-w-4xl">
        <div class="py-12">
          <h2 class="text-2xl font-bold">Formulir Pendaftaran Chronicles</h2>
          <p class="my-2 text-lg text-gray-600">Unravel Your Legacy</p>
          <form action="#" method="POST">
            <div className="shadow sm:rounded-md sm:overflow-hidden flex">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6 w-full">
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
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      required
                    />
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
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      required
                    />
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
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      placeholder="12, Jl. Tanjung Duren Raya No.4"
                      defaultValue={""}
                      required
                    />
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
                    <input
                      type="text"
                      id="provinsi"
                      name="provinsi"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="kecamatan"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Kecamatan
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="kecamatan"
                      name="kecamatan"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>
                <div>
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
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="jenjang"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Jenjang Sekolah
                  </label>
                  <select
                    id="jenjang"
                    name="jenjang"
                    autoComplete="jenjang"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  >
                    <option disabled selected value>
                      Pilih Jenjang Sekolahmu
                    </option>
                    <option>SMA</option>
                    <option>SMP</option>
                  </select>
                </div>
              </div>
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6 w-full">
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
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      required
                    />
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
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="89999999"
                        required
                      />
                    </div>
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
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      required
                    />
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
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                    />
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
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                        placeholder="89999999"
                      />
                    </div>
                  </div>
                </div>

                <div className="px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;

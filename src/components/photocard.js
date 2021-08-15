import React,{Component} from 'react'

class PictureCard extends Component{
  state ={
    profileImage1:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    profileImage2:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    profileImage3:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    profileImage4:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    profileImage5:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    profileImage6:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    profileImage7:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    profileImage8:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    profileImage9:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    profileImage10:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    profileImage11:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    profileImage12:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  }
   imageHandler1 = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
        if(reader.readyState === 2){
          this.setState({profileImage1: reader.result})
        }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  imageHandler2 = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
        if(reader.readyState === 2){
          this.setState({profileImage2: reader.result})
        }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  imageHandler3 = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
        if(reader.readyState === 2){
          this.setState({profileImage3: reader.result})
        }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  imageHandler4 = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
        if(reader.readyState === 2){
          this.setState({profileImage4: reader.result})
        }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  imageHandler5 = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
        if(reader.readyState === 2){
          this.setState({profileImage5: reader.result})
        }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  imageHandler6 = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
        if(reader.readyState === 2){
          this.setState({profileImage6: reader.result})
        }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  imageHandler7 = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
        if(reader.readyState === 2){
          this.setState({profileImage7: reader.result})
        }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  imageHandler8 = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
        if(reader.readyState === 2){
          this.setState({profileImage8: reader.result})
        }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  imageHandler9 = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
        if(reader.readyState === 2){
          this.setState({profileImage9: reader.result})
        }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  imageHandler10 = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
        if(reader.readyState === 2){
          this.setState({profileImage10: reader.result})
        }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  imageHandler11 = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
        if(reader.readyState === 2){
          this.setState({profileImage11: reader.result})
        }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  imageHandler12 = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
        if(reader.readyState === 2){
          this.setState({profileImage12: reader.result})
        }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  render(){
    const {profileImage1} = this.state
    const {profileImage2} = this.state
    const {profileImage3} = this.state
    const {profileImage4} = this.state
    const {profileImage5} = this.state
    const {profileImage6} = this.state
    const {profileImage7} = this.state
    const {profileImage8} = this.state
    const {profileImage9} = this.state
    const {profileImage10} = this.state
    const {profileImage11} = this.state
    const {profileImage12} = this.state

  
    return(
      <div class="grid grid-cols-4 gap-3">
      {/*1*/}
      <div class="m-auto border-solid border-2 p-3 rounded-2xl">
         <div class="">
            <div class="">
              <img src={profileImage1} alt="" id="img" class="w-28 h-28 mx-auto block bg-cover rounded-full"/>
            </div>
            <div class="block "> 
           <input type="file" class="hidden" name="image-upload" id="input1" accept="image/*" onChange={this.imageHandler1}/> 
           <label for="input1" class="rounded-full border-solid border-2 border-indigo-600 p-0.5 block mt-2 bg-indigo-600 text-white hover:bg-white hover:text-indigo-600 text-center">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
           </svg>
           Select Photo
           </label>
         </div>
            <div class="block">
              <label class="block">
                <input type="text" class="border-solid border-2 border-gray-300 mt-2 block rounded-md"/>
              </label>
            </div>
          </div>
      </div>
    {/*2*/}
      <div class="m-auto border-solid border-2 p-3 rounded-2xl">
         <div class="">
            <div class="">
              <img src={profileImage2} alt="" id="img" class="w-28 h-28 mx-auto block bg-cover rounded-2xl"/>
            </div>
            <div class="block "> 
           <input type="file" class="hidden" name="image-upload" id="input2" accept="image/*" onChange={this.imageHandler2}/> 
           <label for="input2" class="rounded-full border-solid border-2 border-indigo-600 p-0.5 block mt-2 bg-indigo-600 text-white hover:bg-white hover:text-indigo-600 text-center">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
           </svg>
           Select Photo
           </label>
         </div>
            <div class="block">
              <label class="block">
                <input type="text" class="border-solid border-2 border-gray-300 mt-2 block rounded-md"/>
              </label>
            </div>
          </div>
      </div>
    {/*3*/}
      <div class="m-auto border-solid border-2 p-3 rounded-2xl">
         <div class="">
            <div class="">
              <img src={profileImage3} alt="" id="img" class="w-28 h-28 mx-auto block bg-cover rounded-2xl"/>
            </div>
            <div class="block "> 
           <input type="file" class="hidden" name="image-upload" id="input3" accept="image/*" onChange={this.imageHandler3}/> 
           <label for="input3" class="rounded-full border-solid border-2 border-indigo-600 p-0.5 block mt-2 bg-indigo-600 text-white hover:bg-white hover:text-indigo-600 text-center">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
           </svg>
           Select Photo
           </label>
         </div>
            <div class="block">
              <label class="block">
                <input type="text" class="border-solid border-2 border-gray-300 mt-2 block rounded-md"/>
              </label>
            </div>
          </div>
      </div>
    {/*4*/}
        <div class="m-auto border-solid border-2 p-3 rounded-2xl">
           <div class="">
            <div class="">
              <img src={profileImage4} alt="" id="img" class="w-28 h-28 mx-auto block bg-cover rounded-2xl"/>
            </div>
            <div class="block "> 
           <input type="file" class="hidden" name="image-upload" id="input4" accept="image/*" onChange={this.imageHandler4}/> 
           <label for="input4" class="rounded-full border-solid border-2 border-indigo-600 p-0.5 block mt-2 bg-indigo-600 text-white hover:bg-white hover:text-indigo-600 text-center">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
           </svg>
           Select Photo
           </label>
         </div>
            <div class="block">
              <label class="block">
                <input type="text" class="border-solid border-2 border-gray-300 mt-2 block rounded-md"/>
              </label>
            </div>
          </div>
      </div>
    {/*5*/}
      <div class="m-auto border-solid border-2 p-3 rounded-2xl">
         <div class="">
            <div class="">
              <img src={profileImage5} alt="" id="img" class="w-28 h-28 mx-auto block bg-cover rounded-2xl"/>
            </div>
            <div class="block "> 
           <input type="file" class="hidden" name="image-upload" id="input5" accept="image/*" onChange={this.imageHandler5}/> 
           <label for="input5" class="rounded-full border-solid border-2 border-indigo-600 p-0.5 block mt-2 bg-indigo-600 text-white hover:bg-white hover:text-indigo-600 text-center">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
           </svg>
           Select Photo
           </label>
         </div>
            <div class="block">
              <label class="block">
                <input type="text" class="border-solid border-2 border-gray-300 mt-2 block rounded-md"/>
              </label>
            </div>
          </div>
      </div>
    {/*6*/}
      <div class="m-auto border-solid border-2 p-3 rounded-2xl">
         <div class="">
            <div class="">
              <img src={profileImage6} alt="" id="img" class="w-28 h-28 mx-auto block bg-cover rounded-2xl"/>
            </div>
            <div class="block "> 
           <input type="file" class="hidden" name="image-upload" id="input6" accept="image/*" onChange={this.imageHandler6}/> 
           <label for="input6" class="rounded-full border-solid border-2 border-indigo-600 p-0.5 block mt-2 bg-indigo-600 text-white hover:bg-white hover:text-indigo-600 text-center">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
           </svg>
           Select Photo
           </label>
         </div>
            <div class="block">
              <label class="block">
                <input type="text" class="border-solid border-2 border-gray-300 mt-2 block rounded-md"/>
              </label>
            </div>
          </div>
      </div>
    {/*7*/}
      <div class="m-auto border-solid border-2 p-3 rounded-2xl">
         <div class="">
            <div class="">
              <img src={profileImage7} alt="" id="img" class="w-28 h-28 mx-auto block bg-cover rounded-2xl"/>
            </div>
            <div class="block "> 
           <input type="file" class="hidden" name="image-upload" id="input7" accept="image/*" onChange={this.imageHandler7}/> 
           <label for="input7" class="rounded-full border-solid border-2 border-indigo-600 p-0.5 block mt-2 bg-indigo-600 text-white hover:bg-white hover:text-indigo-600 text-center">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
           </svg>
           Select Photo
           </label>
         </div>
            <div class="block">
              <label class="block">
                <input type="text" class="border-solid border-2 border-gray-300 mt-2 block rounded-md"/>
              </label>
            </div>
          </div>
      </div>
    {/*8*/}
      <div class="m-auto border-solid border-2 p-3 rounded-2xl">
         <div class="">
            <div class="">
              <img src={profileImage8} alt="" id="img" class="w-28 h-28 mx-auto block bg-cover rounded-2xl"/>
            </div>
            <div class="block "> 
           <input type="file" class="hidden" name="image-upload" id="input8" accept="image/*" onChange={this.imageHandler8}/> 
           <label for="input8" class="rounded-full border-solid border-2 border-indigo-600 p-0.5 block mt-2 bg-indigo-600 text-white hover:bg-white hover:text-indigo-600 text-center">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
           </svg>
           Select Photo
           </label>
         </div>
            <div class="block">
              <label class="block">
                <input type="text" class="border-solid border-2 border-gray-300 mt-2 block rounded-md"/>
              </label>
            </div>
          </div>
      </div>
    {/*9*/}
      <div class="m-auto border-solid border-2 p-3 rounded-2xl">
         <div class="">
            <div class="">
              <img src={profileImage9} alt="" id="img" class="w-28 h-28 mx-auto block bg-cover rounded-2xl"/>
            </div>
            <div class="block "> 
           <input type="file" class="hidden" name="image-upload" id="input9" accept="image/*" onChange={this.imageHandler9}/> 
           <label for="input9" class="rounded-full border-solid border-2 border-indigo-600 p-0.5 block mt-2 bg-indigo-600 text-white hover:bg-white hover:text-indigo-600 text-center">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
           </svg>
           Select Photo
           </label>
         </div>
            <div class="block">
              <label class="block">
                <input type="text" class="border-solid border-2 border-gray-300 mt-2 block rounded-md"/>
              </label>
            </div>
          </div>
      </div>
    {/*10*/}
    <div class="m-auto border-solid border-2 p-3 rounded-2xl">
      <div class="">
        <div class="">
          <img src={profileImage10} alt="" id="img" class="w-28 h-28 mx-auto block bg-cover rounded-2xl"/>
        </div>
        <div class="block "> 
        <input type="file" class="hidden" name="image-upload" id="input10" accept="image/*" onChange={this.imageHandler10}/> 
        <label for="input10" class="rounded-full border-solid border-2 border-indigo-600 p-0.5 block mt-2 bg-indigo-600 text-white hover:bg-white hover:text-indigo-600 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
        Select Photo
        </label>
      </div>
        <div class="block">
          <label class="block">
            <input type="text" class="border-solid border-2 border-gray-300 mt-2 block rounded-md"/>
          </label>
        </div>
      </div>
  </div>
    {/*11*/}
    <div class="m-auto border-solid border-2 p-3 rounded-2xl">
        <div class="">
          <div class="">
            <img src={profileImage11} alt="" id="img" class="w-28 h-28 mx-auto block bg-cover rounded-2xl"/>
          </div>
          <div class="block "> 
          <input type="file" class="hidden" name="image-upload" id="input11" accept="image/*" onChange={this.imageHandler11}/> 
          <label for="input11" class="rounded-full border-solid border-2 border-indigo-600 p-0.5 block mt-2 bg-indigo-600 text-white hover:bg-white hover:text-indigo-600 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          Select Photo
          </label>
        </div>
          <div class="block">
            <label class="block">
              <input type="text" class="border-solid border-2 border-gray-300 mt-2 block rounded-md"/>
            </label>
          </div>
        </div>
    </div>
    {/*12*/}
    <div class="m-auto border-solid border-2 p-3 rounded-2xl">
          <div class="">
            <div class="">
              <img src={profileImage12} alt="" id="img" class="w-28 h-28 mx-auto block bg-cover rounded-2xl"/>
            </div>
            <div class="block "> 
            <input type="file" class="hidden" name="image-upload" id="input12" accept="image/*" onChange={this.imageHandler12}/> 
            <label for="input12" class="rounded-full border-solid border-2 border-indigo-600 p-0.5 block mt-2 bg-indigo-600 text-white hover:bg-white hover:text-indigo-600 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
            Select Photo
            </label>
          </div>
            <div class="block">
              <label class="block">
                <input type="text" class="border-solid border-2 border-gray-300 mt-2 block rounded-md"/>
              </label>
            </div>
          </div>
      </div>
    </div>
    )
  }
}

export default PictureCard
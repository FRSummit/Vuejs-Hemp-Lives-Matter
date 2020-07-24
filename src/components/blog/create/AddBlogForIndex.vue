<template>
  <div class="add-new-for-index">
    <v-card class="elevation-12 v-card-edit">
      <v-toolbar color="primary" dark flat>
        <v-spacer />
        <v-toolbar-title>New Blog</v-toolbar-title>
        <v-spacer />
      </v-toolbar>
      <v-card-text class="v-card-text">
        <v-form @submit.prevent="onSubmit">
            <!-- title & summery -->
          <div class="name-field">
            <label class="field-label">Name of your blog</label>
            <v-text-field
              class="field-input"
              v-model="title"
              id="title"
              placeholder="Name of your blog"
              type="text"
            />
          </div>
          <div class="name-field">
            <label class="field-label">Short summery</label>
            <v-text-field
              class="field-input"
              v-model="summery"
              id="summery"
              placeholder="Short summery"
              type="text"
            />
          </div>

          <!-- img 1 -->
          <div class="name-field">
            <label class="field-label img-sec">Upload an image:</label>
            <input class="field-input" @change="previewImage" id="img1" type="file" accept="image/*"/>
            <div style="display: inline-block;">
                <p>Progress: {{uploadValue.toFixed()+"%"}}
                <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
            </div>
            <div v-if="imageData!=null">
                <img class="preview" :src="picture" style="width: 200px;">
                <br>
                <span @click="onUpload" class="img-up-btn">Upload</span>
            </div>
          </div>

          <!-- submit section -->
          <v-card-actions>
            <v-spacer />
            <v-btn type="submit" class="create-btn" color="primary">Create</v-btn>
            <v-spacer />
          </v-card-actions>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
    // name: 'Add Blog For Index',
    data() {
        return {
            title: null,
            summery: null,
            img1_url: null,  //For image upload
            picture: null,  //For image upload
            imageData: null,  //For image upload
            uploadValue: 0,  //For image upload
        }
    },
    created() {
    },
    methods: {
        onSubmit() {
            console.log(this.title + " " + this.summery + " " + this.img1_url)
            if(this.title === "" || this.title === null || this.summery === "" || this.summery === null) {
                console.log('null')
                if(this.title == "" || this.title === null) {
                document.getElementById('title').placeholder = 'Title must not be empty';
                } if(this.summery == "" || this.summery === null) {
                document.getElementById('summery').placeholder = 'Summery must not be empty';
                }
            }else {
                firebase.database().ref('index-blog-list').push({
                    title: this.title,
                    summery: this.summery + '...',
                    img1_url: this.img1_url
                })
                .then((data)=>{
                    this.createBlogForId(data.path.pieces_[1])
                    console.log(data.path.pieces_[1])
                })
                .catch((error)=>console.log(error))
                // window.location.reload();
            }
        },
        onUpload(){  //For image upload
            this.picture=null;
            const storageRef = firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
            storageRef.on(`state_changed`, snapshot => {
                this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
            },
            error=>{
                console.log(error.message)
            },
            () => {
                this.uploadValue=100;
                storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                    this.picture = url;
                    this.img1_url = url;
                    console.log(this.img1_url)
                });
                // console.log('This is the link : ' + storageRef.snapshot.ref.getDownloadURL());
                // console.log(storageRef.snapshot.ref.getDownloadURL().url);
            });
        },
        previewImage(event) {  //For image upload
            this.uploadValue=0;
            this.picture=null;
            this.imageData = event.target.files[0];
        },
        createBlogForId(id) {
            firebase.database().ref('Blog_' + id).push({
                    title: this.title,
                    summery: this.summery,
                    img1_url: this.img1_url
                })
                .then((data)=>{
                    console.log(data.path.pieces_[1])
                    this.title = '',
                    this.summery = '',
                    this.imageData = null
                })
                .catch((error)=>console.log(error))
        }
    }
}
</script>

<style scoped>
.v-card-text {
  width: 100%;
  padding: 20px;
  clear: both;
  box-shadow: inset 0 10px 0 0 rgba(0, 0, 0, 0.1);
  background: #dbdbdb url("../../../assets/images/bg.png") repeat;
  position: relative;
  overflow: hidden;
}
.add-new-for-index {
    width: 60%;
    margin: 0 auto;
}
.name-field {
    text-align: left;
}
label {
    font-size: 20px;
    font-weight: bold;
    color: #000;
}
.img-sec {
    width: 30%;
}
input {
    color: #000;
    margin-left: 10px;
    width: 30%;
}
.img-up-btn, .create-btn {
    color: #000;
    padding: 4px 12px;
    display: inline-block;
    font-size: 12px;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
    border: 2px #000 solid;
    text-align: center;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
}
.create-btn {
    color: #000 !important;
    padding: 4px 12px !important;
    background: transparent !important;
}

@media screen and (max-width: 1050px) {
}

@media screen and (max-width: 768px) {
}

@media screen and (max-width: 491px) {
}
</style>
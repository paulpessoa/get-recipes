<template>
    <div class="recipe-component">
        <div class="new-recipe-dialog">
            <div class="dialog-form">
                <h2>Create a new</h2>
                <form @submit.prevent="newRecipe">
                    <input v-model="title" type="text" placeholder="Title">
                    <input type="file" ref="fileInput" @change="handleFileChange">
                    <textarea v-model="description" placeholder="Description" />
                    <textarea v-model="ingredients" placeholder="Ingredients" />
                    <textarea v-model="steps" placeholder="Instructions" />
                    <div class="recipe-time">
                        <input v-model="preptime" type="number" placeholder="Prep: 50 minutos">
                        <input v-model="cooktime" type="number" placeholder="Cook: 20 minutos">
                    </div>
                    <div class="recipe-actions">
                        <button class="button-cancel" @click="close">Cancel</button>
                        <button class="button-save" type="submit">Save Recipe</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'NewRecipeComponent',
    data() {
        return {
            title: '',
            image: '', // Initially empty for uploaded file
            description: '',
            ingredients: '',
            steps: '',
            preptime: '',
            cooktime: '',
            file: null // Reference to the uploaded file
        }
    },
    methods: {
        close() {
            this.$emit('close');
        },
        handleFileChange(event) {
            // Get the uploaded file
            this.file = event.target.files[0];
        },
        async newRecipe() {
            if (!this.file) {
                console.error('Please select a file to upload.');
                return;
            }
            // Upload file to Supabase storage
            const uploadUrl = `${process.env.VUE_APP_SUPABASE_URL}/storage/v1/object/public/recipes/${this.file.name}`;
            const uploadData = new FormData();
            uploadData.append('apikey', process.env.VUE_APP_SUPABASE_APIKEY);
            uploadData.append('file', this.file);

            try {
                const uploadResponse = await axios.post(uploadUrl, uploadData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                // Update image URL with the uploaded file path
                this.image = uploadResponse.data.publicUrl;
            } catch (error) {
                console.error('Error uploading file:', error);
                return;
            }
            // Now that image URL is available, send the recipe data
            axios
                .post('/recipes', {
                    title: this.title.toLowerCase(),
                    image: this.image, // Use the uploaded image URL
                    description: this.description.toLowerCase(),
                    ingredients: this.ingredients.toLowerCase(),
                    steps: this.steps.toLowerCase(),
                    preptime: this.preptime,
                    cooktime: this.cooktime
                })
                .then(() => {
                    axios
                        .get('/recipes')
                        .then((response) => {
                            this.$store.commit('SET_RECIPES', response.data)
                            this.recipes = this.$store.state.recipes
                            response ? this.$emit('close') : console.log('error')
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                })
                .catch((error) => {
                    console.log(error)
                });
        }
    }
}
</script>


<style lang="scss" scoped>
@import "@/assets/scss/_reset.scss";
@import "@/assets/scss/_variables.scss";

.recipe-component {


    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.393);


    &>.new-recipe-dialog {
        min-width: 360px;
        max-width: 600px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 2em;
        background: $background-color;
        border-radius: 4px;
    }
}

.dialog-form {
    max-width: 450px;
    margin: 0 auto;

    h2 {
        text-align: center;
        justify-content: center;
        margin-bottom: 20px;
    }

    input {
        @include input-primary;
    }

    textarea {
        @include textarea-primary;
    }

    .recipe-time {
        display: flex;
        justify-content: space-evenly;

        input:nth-child(1) {
            margin-right: 20px;
        }
    }

    .recipe-actions {
        display: flex;
        flex-direction: column-reverse;

        button {
            margin: 10px 0;
        }

        .button-save {
            @include button-primary;
        }

        .button-cancel {
            @include button-cancel;
        }
    }
}
</style>

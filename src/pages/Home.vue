<template>
    <div class="container d-flex justify-content-center">
        <CardComponent v-for="book in books" :book="book"></CardComponent>
    </div>
</template>

<script>
    import CardComponent from '@/components/Card.vue'
import axios from 'axios';
    export default {
        name: 'HomePAge',
        components: {
            CardComponent
        },

        data() {
            return {
                books: []
            }
        },

        mounted() {
            // axios.httpsmethod("endpoint");
            axios
            .get('http://localhost:3000/books')
            // then : jika berhasil mengambil data maka akan melakukan aksi didim then
            .then((response) => {
                //ketika berhasil data yang si ambil axios akan di simpan
                this.books = response.data;
                console.log(this.books) 
            })
            .catch((err) => {
                console.log(err)
            });
        },
    };
</script>
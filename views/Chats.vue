<template>
    <div class="chat--menu">
        <p class="edit">Modifier</p>
        <div class="icons">
            <p class="icon--edit">C</p>
            <p class="icon--edit">E</p>
        </div>
    </div>
    <h1 class="chat--title">Discussions</h1>
    <div class="chat--search">
        <input type="text" placeholder="Chercher ici ...">
        <p class="filter--icon">P</p>
    </div>
    <div class="chat--bar">
        <p>Liste de diffusion</p>
        <p>Nouveau groupe</p>
    </div>
    <div class="chat--archived">
        <div class="chat--archived--container">
            <div class="chat--archived--box">
                <p class="archive--icon">I</p>
                <p class="archived--text">Archivés</p>
            </div>
            <p class="chat--message--number">223</p>
        </div>
    </div>
    <div class="messages" v-for="message in messageList" :key="message">
        <div class="message--container">
            <div class="container--picture">
                <img :src="message.userPicture" alt="">
            </div>
            <div class="container--message--inf">
                <div class="message--box">
                    <p class="name">{{message.name}}</p>
                    <p style="font-size: 13px;" class="chat--message">{{message.date}}</p>
                </div>
                <p class="chat--message" style="text-align: left;">{{message.message}}</p>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
    name: 'chat',
    computed: {
        ...mapState(['messageList'])
    }
}

</script>

<style>

*
{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.icons
{
    display:flex;
    gap: 20px;
}
.chat--menu
{
    position: fixed;
    top: 0;
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
}
.edit
{
    color: rgb(34, 102, 181);
    font-weight: 600;
}
.icon--edit
{
    color: rgb(34, 102, 181);
}
.chat{
    font-weight: 600;
}
.chat--title
{
    width: 100%;
    text-align: left;
    padding-left: 20px;
    font-weight: 800;
    padding-top: 60px
}
.chat--search
{
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.chat--search input
{
    width: 90%;
    border: none;
    border-radius: 5px;
    background-color: rgb(238, 238, 238);
    padding: 10px
}
.filter--icon
{
    color: rgb(34, 102, 181);
}
.chat--bar
{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px 20px 20px;
    color: rgb(34, 102, 181);
    font-weight: 500;
}
.chat--archived
{
    width: 100%;
    padding: 0 20px 20px 20px;
}
.chat--archived--container
{
    padding-top: 6px;
    border-top: 1px solid rgb(224, 224, 224);
    display: flex;
    justify-content: space-between;
}
.chat--archived--box
{
    display: flex;
    gap: 20px;
}
.chat--message--number
{
    color: rgb(34, 102, 181);
}
.archived--text
{
    font-weight: 800;
}
.container--picture
{
    height: 50px;
    width: 50px;
}
.messages
{
    padding: 15px 0
}
.message--container
{
    display: flex;
    padding: 0 20px;
    gap: 20px;
    align-items: center;
}
.container--picture img
{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50px;
}
.message--box
{
    display: flex;
    justify-content: space-between;
    width: 250px;
    margin-bottom: 5px;
}
.name
{
    font-weight: 700;
}
.chat--message
{
    color: rgb(143, 143, 143)
}

</style>
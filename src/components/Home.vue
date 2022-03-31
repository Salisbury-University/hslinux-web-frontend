<template>

    <head>

        

    </head>

    <body>

        <!--
            div holding the contents of the
            side bar where links will be       
        -->
        <div class="sideBar">
            This is the side bar
        </div>
        
        <!--
            div holding the contents of the files
        -->
        <div class="content">
            This is the main content stuff
        </div>
    </body>
</template>

<style>
    div.sideBar{
        position: fixed;
        top: 100px;
        left: 10px;
        width: 200px;
        
        border: 3px solid;
    }

    div.content{
        position: fixed;
        top: 100px;
        left: 300px;
        width: 1000px;

        border: 3px solid;
    }
</style>

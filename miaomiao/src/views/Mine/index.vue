<template>
    <div id="app">
        <topItem title="我的喵喵" />
            <div id="content">
                <Login />
            </div>
        <bottomItem />
    </div>
</template>

<script>
import topItem from '@/components/TopItem';
import bottomItem from '@/components/BottomItem'; 
import Login from '@/components/Login'; 
export default {
    name:'Mine',
    components: {
        topItem,
        bottomItem,
        Login 
}
}
</script>

<style>

</style>

<template>
    <div id="app">
        <topItem title="喵喵影院" />
            <div id="content">
                <div class="cinema_menu">
                    <div class="city_switch">
                        全城 <i class="iconfont icon-lower-triangle"></i>
                    </div>
                    <div class="brand_swtich">
                        品牌 <i class="iconfont icon-lower-triangle"></i>
                    </div>
                    <div class="feature_switch">
                        特色 <i class="iconfont icon-lower-triangle"></i>
                    </div>
                </div>
                <ciList />
            </div>
        <bottomItem />
    </div>
</template>

<script>
import topItem from '@/components/TopItem';
import bottomItem from '@/components/BottomItem'; 
import ciList from '@/components/CiList'; 

export default {
    name:'Cinema',
    components: {
        topItem,
        bottomItem,
        ciList
}
}
</script>

<style scoped>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
</style>

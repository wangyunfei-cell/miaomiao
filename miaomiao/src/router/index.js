import Vue from 'vue'
import Router from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'

Vue.use(Router)

export default new Router({

    routes: [
        movieRouter,
        mineRouter,
        cinemaRouter,
        {
            path: '/*',
            redirect: '/movie'
        }
    ]
})
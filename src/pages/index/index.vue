<template>
    <view class="index">
        <view>
        </view>
        {{ state.msg }}
        <view class="btn">
            <nut-button type="info" @click="handleClick('text', state.msg2, true)">点我</nut-button>
        </view>
        <div class="container">
            <div class="box">
                test
            </div>
            <button open-type="getPhoneNumber" @getphonenumber="getPhoneNumber" class="permission-button">获取用户信息</button>
        </div>
        <nut-toast :msg="state.msg" v-model:visible="state.show" :type="state.type" :cover="state.cover" />
    </view>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from 'vue';
import { getuserphonenumber } from '@/api'

const state = reactive({
    msg: '欢迎使用 NutUI3.0 开发小程序',
    msg2: '你成功了～',
    type: 'text',
    show: false,
    cover: false
});

const getPhoneNumber = async (e: any) => {
    console.log(e, 'e是什么')
    const code = e.detail.code
    const res = await getuserphonenumber({ code })
    console.log(code, 'code')
}

onMounted(() => {
    // const button = document.querySelector('.permission-button') as HTMLElement
    // console.log(button,'button')
    // button.click()

})

const handleClick = (type, msg, cover = false) => {
    console.log('执行没有')
    state.show = true;
    state.msg2 = msg;
    state.type = type;
    state.cover = cover;
};

</script>

<style lang="scss">
.index {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

.container {
    .box {
        color:$primary-color
    }
}
</style>

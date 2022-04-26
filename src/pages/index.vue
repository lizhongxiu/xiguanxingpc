
<template>
    <img alt="Vue logo" src="./../assets/logo.png" />
    <UsePinia msg="14124" v-model:selectValue="region" @selectAge="age1" />
    <br />
    <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
        <el-button>中文</el-button>
    </el-row>
</template>

<script lang="ts" setup>
const a = ref<Array<string>>(['12']);
let region = ref<string>('');
let age = ref(20);
onMounted(() => {
    console.log('onMounted');
});
const age1 = (val:number)=>{
    console.log(val)
}
watch(
    () => region.value,
    (newVal, oldVal) => {
        console.log(newVal, oldVal);
    },
    {
        immediate: true, // 立即执行
        deep: true // 深度监听
    }
);
watch(
    () => age.value,
    (newVal, oldVal) => {
        console.log(newVal, oldVal);
    },
    {
        immediate: true, // 立即执行
        deep: true // 深度监听
    }
);
</script>

<template>
    <el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="please select your zone" @change="change">
            <el-option label="shanghai" value="shanghai" />
            <el-option label="beijing" value="beijing" />
        </el-select>
        <el-select
            v-model="form.age"
            placeholder="please select your zone"
            @change="change1"
        >
            <el-option label="11" value="11" />
            <el-option label="22" value="22" />
        </el-select>
    </el-form-item>
</template>

<script lang="ts" setup>
import { useAttrs } from '@vue/runtime-core';
defineProps({
    msg: {}
});
let form = reactive({ region: '', age: 10 });
const emits = defineEmits(['update:selectValue', 'selectAge']);
const change = (val: any) => {
    emits('update:selectValue', val);
};
const change1 = (val: Number) => {
    emits('selectAge',val);
};
console.log(999, useAttrs());
</script>

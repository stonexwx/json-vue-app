<script lang="ts" setup>
import { FiledPropsDefine } from '../types'
const props = defineProps(FiledPropsDefine)
const handleChange = (e: any) => {
  props.onChange(e.target.value)
}
</script>

<template>
  <input type="text" :value="props.value" @input="handleChange" />
</template>

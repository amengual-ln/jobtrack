<template>
    <span class="rounded-full bg-white w-5 h-5 p-1">
        <Component :is="iconType[status]" />
    </span>
</template>

<script setup>
import { CheckIcon, EllipsisIcon } from './Icons'
</script>

<script>
export default {
    props: {
        status: String
    },
    data() {
        return {
            iconType: {
                wip: EllipsisIcon,
                ready: CheckIcon,
                done: CheckIcon
            }
        }
    }
}
</script>
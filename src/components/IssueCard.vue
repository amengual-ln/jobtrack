<template>
    <article @click="() => this.collapsed = !this.collapsed">
        <div class="flex justify-between items-center p-4 rounded-md bg-slate-200 z-5">
            <a :href="`https://catenon.atlassian.net/browse/${issue.id}`" target="_blank"
                class="text-blue-400 hover:underline">{{ issue.id }}</a>
            <span>{{ issue.registers.reduce((registeredHours, register) => registeredHours += register.hours, 0) }}
                horas</span>
            <StatusBadge :status="issue.status" />
        </div>
        <div v-if="!collapsed" class="flex flex-col gap-4 p-4 pt-5 -mt-1 rounded-b-md bg-slate-100">
            <div v-for="register in issue.registers" class="flex justify-between">
                <span>Registrado el {{ register.registeredAt }}</span>
                <span>{{ register.hours }} {{ register.hours > 1 ? 'horas' : 'hora' }}</span>
            </div>
        </div>
    </article>
</template>

<script setup>
import StatusBadge from './StatusBadge.vue'
</script>

<script>
import { markRaw } from 'vue';
export default {
    props: {
        issue: {}
    },
    data() {
        return {
            collapsed: true,
            StatusBadge: markRaw(StatusBadge)
        }
    }
}
</script>
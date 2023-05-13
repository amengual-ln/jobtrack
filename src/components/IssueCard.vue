<template>
    <article @click="() => this.collapsed = !this.collapsed">
        <div class="flex justify-between items-center p-4 rounded-md bg-slate-200 z-5">
            <a :href="`https://catenon.atlassian.net/browse/${issue.id}`" target="_blank"
                class="text-blue-400 hover:underline">{{ issue.id }}</a>
            <span>{{ registries.reduce((registeredHours, registry) => registeredHours += registry.hours, 0) }}
                horas</span>
            <StatusBadge :status="issue.status" />
        </div>
        <div v-if="!collapsed" class="flex flex-col gap-4 p-4 pt-5 -mt-1 rounded-b-md bg-slate-100">
            <div v-for="registry in registries" class="flex justify-between">
                <span>Registrado el {{ dayjs(registry.created_at).format('dddd DD [de] MMMM') }}</span>
                <span>{{ registry.hours }} {{ registry.hours > 1 ? 'horas' : 'hora' }}</span>
            </div>
        </div>
    </article>
</template>

<script setup>
import StatusBadge from './StatusBadge.vue'
import dayjs from 'dayjs'
import es from 'dayjs/locale/es'

dayjs.locale(es)
</script>

<script>
import { markRaw } from 'vue';
export default {
    props: ['issue', 'registries'],
    data() {
        return {
            collapsed: true,
            StatusBadge: markRaw(StatusBadge)
        }
    }
}
</script>
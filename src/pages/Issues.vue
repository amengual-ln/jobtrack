<template>
    <main class="mx-auto max-w-lg">
        <header class="m-4 flex flex-col items-center gap-1">
            <h1>JobTrack</h1>
            <h2>Issue Time Tracking</h2>
        </header>

        <section class="flex gap-2 justify-center items-baseline m-4">
            <span>$/hr</span>
            <h3 class="text-xl font-medium">15€</h3>
        </section>

        <section class="flex gap-2 justify-between items-baseline m-4">
            <div class="flex flex-col items-center">
                <span>Total hours: {{ registries?.reduce((subtotal, registry) => subtotal += registry.hours,
                    0) }}</span>
                <span>({{ registries?.reduce((subtotal, register) =>
                    subtotal += register.hours, 0) * 15 }}€)</span>
            </div>
            <div class="flex flex-col items-center">
                <span>Confirmed: {{ issues.reduce((confirmed, issue) => confirmed += issue.status === 'ready' ?
                    registries?.reduce((subtotal, register) =>
                        subtotal += register.hours, 0) : 0, 0) }}</span>
            </div>
            <div class="flex flex-col items-center">
                <span>Objective: 80</span>
                <span>(1200€)</span>
            </div>
        </section>

        <section class="flex flex-col gap-4 m-4">
            <IssueCard v-for="issue in issues" :key="issue.id" :issue="issue"
                :registries="registries.filter(registry => registry.issue_id === issue.id)" />
        </section>

        <button
            class="fixed bottom-0 right-0 flex justify-center items-center rounded-full bg-blue-400 text-white p-4 w-12 h-12 m-4 outline-none">
            <PlusIcon />
        </button>
    </main>
</template>
  
<script setup>
import { useIssueStore } from '../stores/IssueStore'
import { PlusIcon } from '../components/Icons'
import IssueCard from '../components/IssueCard.vue'

import { supabase } from '../service'

const issueStore = useIssueStore()

const { data: issues } = await supabase.from('issues').select()
const { data: registries } = await supabase.from('registries').select()

issueStore.issues = issues
issueStore.registries = registries

</script>
  
import { defineStore } from 'pinia'

export const useIssueStore = defineStore('IssueStore', {
    state: () => ({
        issues: [
            {
                id: 'THK-4255',
                status: 'ready',
                registers: [
                    {
                        registeredAt: '18/3',
                        hours: 4
                    }
                ]
            },
            {
                id: 'THK-4247',
                status: 'ready',
                registers: [
                    {
                        registeredAt: '17/3',
                        hours: 1
                    },
                    {
                        registeredAt: '16/3',
                        hours: 2
                    }
                ]
            },
            {
                id: 'THK-4250',
                status: 'wip',
                registers: [
                    {
                        registeredAt: '18/3',
                        hours: 8
                    }
                ]
            },
            {
                id: 'THK-4171',
                status: 'wip',
                registers: [
                    {
                        registeredAt: '18/3',
                        hours: 2
                    }
                ]
            },
            {
                id: 'THK-4261',
                status: 'wip',
                registers: [
                    {
                        registeredAt: '20/3',
                        hours: 2
                    },
                    {
                        registeredAt: '25/3',
                        hours: 6
                    }
                ]
            }
        ],
        registries: []
    })
})
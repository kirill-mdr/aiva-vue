import {createStore} from 'vuex'
import axios from "axios";

export default createStore({
    state: {
        predictedData: 0,
        isLoading: false,
        selectedSpec: 'Data Analyst',
        chartData: [],
        chartLabels: []
    },
    getters: {
        computedChartData(state) {
            return state.chartData
        },
        computedChartLabels(state) {
            return state.chartLabels
        },
    },
    mutations: {
        setLoading(state, bool) {
            state.isLoading = bool
        },
        setPredictedData(state, value) {
            state.predictedData = Math.ceil(value)
        },
        setSelectedSpec(state, value) {
            state.selectedSpec = value
        },
        setChartData(state, value) {
            state.chartData = value
        },
        setChartLabels(state, value) {
            state.chartLabels = value
        },
    },
    actions: {
        async predict({state, commit}, selectedParams) {
            try {
                commit('setLoading', true)
                const response = await axios.post(`http://176.113.83.99/api/predict`, selectedParams)
                commit('setPredictedData', response.data.result)


            } catch (e) {
                console.log(e)
            } finally {

                commit('setLoading', false)
            }
        },
        async getChartData({state, commit}, spec) {
            const chartParams = {
                spec: spec
            }
            const chartResponse = await axios.get('http://176.113.83.99/api/graph', {params: chartParams})
            commit('setChartLabels', chartResponse.data.result[0])
            commit('setChartData', chartResponse.data.result[1])
        }
    },
    modules: {}
})

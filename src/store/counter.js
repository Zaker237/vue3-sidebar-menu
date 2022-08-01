import { defineStore } from "pinia";

export const useCounterStore = defineStore({
	id: "counter",
	state: () => ({
		counter: 0
	}),
	getters: {
		count: (state) => state.counter
	},
	actions: {
		increment() {
			if(this.counter < 10){
				this.counter++;
			}
		},
		decrement() {
			if(this.counter >0){
				this.counter--;
			}
		}
	}
})
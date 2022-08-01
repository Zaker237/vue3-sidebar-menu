<template>
	<main class="home-page">
		<h1>Home</h1>
		<p>This is the home Page</p>
		<div class="container">
			<p class="text">Count: {{ countStore.count }}</p>
			<button class="button" @click="countStore.increment">Increment</button>
			<button class="button" @click="countStore.decrement">Decrement</button>
		</div>
	</main>
</template>

<script setup>
import { useCounterStore }  from "../store/counter";

const countStore = useCounterStore();

</script>

<style scoped>
.text {
	padding: 10px;
	margin: 10px;
}
.button {
	margin: 1rem;
	padding: 1rem;
	background-color: #4CAF50;
}
</style>
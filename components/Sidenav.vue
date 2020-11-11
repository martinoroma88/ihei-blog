<template>
	<ul class="space-y-3 text-sm">
		<li v-for="(item, i) in items" :key="i">
			<n-link class="link" :to="item.destination">{{item.title}}</n-link>
		</li>
	</ul>

	</nav>
</template>

<script>
	export default {
		data() {
			return {
				open: false,
				items: [
					{
						destination:"/", 
						title: "Accueil"
					},
					{
						destination:"/institut/",
						title: "L'Institut"
					},
					{
						destination:"/publications/",
						title: "Publications"
					},
					{
						destination:"/xxx",
						title: "Nav item four"
					},
					{
						destination:"/xxx",
						title: "Nav item"
					}
				]
			}
		},
		methods: {
			toggle() {
				this.open = !this.open;
			}
		},
		watch: {
			$route() {
				this.open = false;
			}
		}
	};
</script>

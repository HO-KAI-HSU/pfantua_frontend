<template>
	<div class="section-pagination-wrap">
		<nav class="mainnav">
			<ul>
				<li>
					<a v-on:click="prev(page)" v-if="page > 1">
						<span><</span>
					</a>
				</li>
				<li v-for="(i) in (pageList)" :key="i" :value="i">
					<a v-on:click="clicked(i)">
						<span v-if="i == page" class="now-page">{{i}}</span>
						<span v-else>{{i}}</span>
					</a>
				</li>
				<li>
					<a v-on:click="next(page)" v-if="page < pageTotal">
						<span>></span>
					</a>
				</li>
			</ul>
		</nav>
	</div>
</template>
<script>
export default {
	props: [
		"propsPage",
		"propsLimit",
		"propsTotal"
	],
  	data() {
		return {
       		page: 1,
			limit: 9,
	   		total: 0,
	   		pageTotal: 0,
			pageList : []
    	} 
  	},
	async mounted() {
		console.log("mounted");
		console.log(this.propsPage);
		console.log(this.propsLimit);
		this.page = this.propsPage;
		this.limit = this.propsLimit;
		this.pageTotal = Math.ceil(this.total / this.limit);	
		this.resetPageList(1);
	},
	watch: {
		propsTotal: function(val) {
			console.log("propsTotal : " + val);
			this.pageTotal = Math.ceil(val / this.limit);
			this.total = val
			this.resetPageList(this.page);
		},
	},
	methods: {
		clicked(i) {
			this.page = i;
			this.$emit('switchPage', i);
		},
		prev(i) {
			var nowPage = i - 1;
			this.resetPageList(nowPage);
			this.page = nowPage;
			this.$emit('switchPage', nowPage);
		},
		next(i) {
			var nowPage = i + 1;
			this.resetPageList(nowPage);
			this.page = nowPage;
			this.$emit('switchPage', nowPage);
		},
		resetPageList(nowPage) {
			console.log("resetPageList : " + nowPage);
			this.pageList = (nowPage <= 5 ? 
			Array.from({length: this.pageTotal}, (v, i) => i + 1) : 
			Array.from({length: 5}, (v, i) => (nowPage - 4 + i)));
		}
	}
}
</script>
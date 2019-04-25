// if (!nabu) { var nabu = {} }
// if (!nabu.page) { nabu.page = {} }
// if (!nabu.page.views) { nabu.page.views = {} }

// nabu.page.views.Kaai = Vue.extend({
// 	template: "#astad-kaai",
// 	props: {
// 		page: {
// 			type: Object,
// 			required: true
// 		},
// 		parameters: {
// 			type: Object,
// 			required: false
// 		},
// 		cell: {
// 			type: Object,
// 			required: true
// 		},
// 		edit: {
// 			type: Boolean,
// 			required: true
// 		}
// 	},
// 	data: function() {
// 		return {
// 			configuring: false
// 		}
// 	},
// 	computed: {
// 		fullUrl: function () {
// 			if (this.cell.state.url) {
// 				return "${server.root()}" + this.cell.state.url;
// 			}
// 			return null;
// 		}
// 	},
// 	methods: {
// 		configure: function() {
// 			this.configuring = true;	
// 		}
// 	}
// })
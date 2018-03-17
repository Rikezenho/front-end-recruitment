utils.install = function (Vue, options) {
	Vue.mixin({
		methods: {
			toCurrency(value) {
				return value.toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL',
				});
			},
		},
	})
};

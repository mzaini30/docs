markdown = () => {
	$('.marked').each(function(){
		$(this).html(marked($(this).html()))
	})
}
app = new Vue({
	el: '.vue',
	router: new VueRouter({
		routes: [
			{
				path: '/',
				component: {
					template: '#beranda',
					mounted(){
						markdown()
					}
				}
			},
			{
				path: '/hello',
				component: {
					template: '#hello',
					mounted(){
						markdown()
					}
				}
			}
		]
	})
})
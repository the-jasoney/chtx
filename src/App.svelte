<script>
	import { Styles } from 'sveltestrap';
	import { user } from './user.js'
	import router from 'page';

	import Header from './components/Header.svelte'

	import Home from './pages/Home.svelte';
	import Index from './pages/Index.svelte';
	import Login from './pages/Login.svelte';
	import Signup from './pages/Signup.svelte';

	let page;

	router.show('/', () => page = Index);
	router.show('/index', () => page = Index);
	router.show('/home', () => {
		if (!user.is) {
			router.redirect('/signup');
		} else {
			page = Home;
		}
	});
	router.show('/login' , () => {
		if (!user.is) {
			page = Login;
		} else {
			router.redirect('/home');
		}
	});
	router.show('/signup', () => {
		if (!user.is) {
			page = Signup;
		} else {
			router.redirect('/home');
		}
	});
	router.start();
</script>

<main>
	<p>this is test</p>
	<Header />
	<svelte:component this={page} />
	<Styles />
</main>


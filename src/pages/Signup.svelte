<script>
    import { user } from '../user.js';
    import login from './login.svelte';

    let username;
    let password;

    function signup() {
        user.create(username, password, ({ err }) => { 
            if (err) {
                alert(err);
            } else { 
                login();
                console.log(`new user: u ${username} p ${password}`) 
            }
        });
    }
</script>

<label for="username">Username</label>
<input type="text" name="username" bind:value={username} min_length="3" max_length="20" />

<label for="password">Password</label>
<input type="password" name="password" bind:value={password} />

<button on:click={ signup() }>signup</button>
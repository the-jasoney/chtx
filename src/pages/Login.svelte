<script>
    import { user } from '../user.js';

    let username;
    let password;

    export function login() {
        user.auth(username, password, ({ err }) => err && alert(err));
        console.log(`${username} signed up as ${password}`)
    }
</script>

<label for="username">Username</label>
<input type="text" name="username" bind:value={username} min_length="3" max_length="20" />

<label for="password">Password</label>
<input type="password" name="password" bind:value={password} />

<button onclick="login()">login</button>
<script>
    import { user, username } from '../user.js';
    import { 
        Navbar,
        NavbarBrand,
        NavbarToggler,
        Nav,
        NavItem,
        NavLink,
        Collapse
    } from 'sveltestrap';

    let isOpen = false;

    function handleUpdate(event) {
        isOpen = event.detail.isOpen;
    }

    function signout() {
        user.leave();
        username.set('')
    }
</script>

<header>
   <Navbar color="light" light expand="md">
        <NavbarBrand href="/">chtx</NavbarBrand>
        <NavbarToggler on:click={() => (isOpen = !isOpen)} />
        <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
            <Nav class="ms-auto" navbar>
                <NavItem>
                    <NavLink href="/">home</NavLink>
                </NavItem>
                {#if $username}
                    <NavItem>
                        <NavLink href="/msg/">msg</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/pst">pst</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink on:signout={signout}>signout</NavLink>
                    </NavItem>
                {:else}
                    <NavItem>
                        <NavLink href="/signup">signup</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/login">login</NavLink>
                    </NavItem>
                {/if}
                <NavItem>
                    <NavLink href="/contact_us"></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/faq">faq</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/privacy">privacy</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
   </Navbar>
</header>
<script>
    import Nav from './components/nav/Nav.svelte';
    import Content from './components/content/Content.svelte';
    let menuItems = [
        { link: '#', name: 'Docs' },
        { link: '#', name: 'Home' },
        { link: '#', name: 'Blog' },
    ];
</script>


<div class="flex flex-col h-screen w-screen">
  <Nav {menuItems} />
  <Content />
</div>

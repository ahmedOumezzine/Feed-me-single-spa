<template>
 <div> <main id="about" class="svelte-171asvm"><h2>About this site</h2> 
  <p>This website is a <a href="https://single-spa.js.org">single-spa</a> adaptation of the website created by <a href="https://twitter.com/thecamjackson">Cam Jackson</a> to demonstrate just one way that micro frontends can be implemented using <a href="https://svelte.dev">Svelte</a>.</p> 
  <p>Micro frontends is an architectural style where independently deliverable frontend applications are composed into a greater whole. It's useful for breaking up monolithic frontend codebases into smaller, simpler applications that can be delivered to production by multiple teams independently.</p> 
  <p>To read more about the technique, including a full explanation of how the code for this demo works, check out the <a href="https://martinfowler.com/articles/micro-frontends.html">long-form article that Cam wrote for martinfowler.com</a>.</p> 
  <p>If you just want to read the source code for yourself, it's all available on Github at <a href="https://github.com/svelte-micro-frontends">https://github.com/svelte-micro-frontends</a>.</p></main>  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

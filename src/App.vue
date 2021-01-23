<template>
  <div id="app">
    <div class="container">
      <Navigation />
      <transition name="router-anim">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
export default {

  components: {
    Navigation
  }
}
</script>

<style>

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

.router-anim-leave-active {
  animation: testLeave 0.6s ease;
  animation-fill-mode: forwards;
}

.router-anim-enter-active {
  animation: testEnter 0.6s ease;
  animation-delay: 0.6s;
  opacity: 0;
}

@keyframes testLeave {
  0% {transform: translateX(0); overflow: hidden; opacity: 1;}
  100% {transform: translateX(-5%); opacity: 0;}
}

@keyframes testEnter {
  0% {transform: translateX(-5%); overflow: hidden; opacity: 0;}
  100% {transform: translateX(0); opacity: 1;}
}
</style>

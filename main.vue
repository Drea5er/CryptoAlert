<template>
	<!-- App -->
	<div id="app">
		
		<!-- Statusbar -->
		<f7-statusbar></f7-statusbar>
		
		<!-- Right Panel -->
		<f7-panel right cover layout="dark">
			<f7-view id="right-panel-view" navbar-through :dynamic-navbar="true">
				<f7-navbar title="Right Panel" sliding></f7-navbar>
				<f7-pages>
					<f7-page>
						<f7-block>
							<p>Right panel content goes here</p>
						</f7-block>
						<f7-block-title>Load page in panel</f7-block-title>
						<f7-list>
							<f7-list-item link="/smpComp/" title="Price Comparison"></f7-list-item>
							<f7-list-item link="/form/" title="Form"></f7-list-item>
						</f7-list>
						<f7-block-title>Load page in main view</f7-block-title>
						<f7-list>
							<f7-list-item link="/smpComp/" title="Price Comparison" link-view="#main-view" link-close-panel></f7-list-item>
							<f7-list-item link="/form/" title="Form" link-view="#main-view" link-close-panel></f7-list-item>
						</f7-list>
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-panel>
		
		
		<!-- Main Views -->
		<f7-views>
			<f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
				<!-- Navbar -->
				<f7-navbar>

					<f7-nav-center sliding>Crypto Alert</f7-nav-center>
					
					<f7-nav-right>
						<f7-link icon="icon-bars" open-panel="right"></f7-link>
					</f7-nav-right>
	
				</f7-navbar>
				<!-- Pages -->
				<f7-pages>
					<f7-page>
						<f7-block-title>Home</f7-block-title>
						<f7-block inner>
						

						</f7-block>
						<f7-block-title>A simple App that so far just checks the price of one coin against a list of others 
						</p> Please be patient as the page first initializes as there are thousands of coins 
						</p> Choose Price Comparison from the menu
						</f7-block-title>
						 <f7-list>

							
						 </f7-list>
						<f7-block-title>Menu</f7-block-title>
						<f7-list>
							<f7-list-item link="/smpComp/" title="Price Comparison"></f7-list-item>
							<f7-list-item link="/coinAnalysis/" title="Coin Analysis"></f7-list-item>
							<f7-list-item link="/form/" title="Test Form"></f7-list-item>
							<f7-list-item link="/dynamic-route/blog/45/post/125/?foo=bar#about" title="Test Dynamic Route"></f7-list-item>
						</f7-list>
						
					
					</f7-page>
				</f7-pages>
			</f7-view>
		</f7-views>
		

	
	</div>
</template>

<script>

import Hello from './assets/vue/components/hello'
import SelectCoin from './assets/vue/components/selectCoin'

import store from './assets/js/store.js';





export default {
  name: 'app',
  components: {
   Hello,
   SelectCoin,
   store
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
	<f7-page>
		<f7-navbar title="Coin Anlysis" back-link="Back" sliding></f7-navbar>

		<f7-list>
						 
				<selectCoin></selectCoin>

		</f7-list>
		<f7-block-title>Footer</f7-block-title>
		<f7-list>
						 
			 Push up the list a bit

		</f7-list>
		
		
	</f7-page>
</template>

<script>
import SelectCoin from '../components/coinAnalysisComp'
	export default {
		  components: {
		SelectCoin
		}
	
	}
</script>
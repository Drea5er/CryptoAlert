<template>
  <div class="selectCoin">
	
		<h3>Main Coin to Index </h3>
	<a class="item-link smart-select smart-select-init" data-open-in="popup"  data-searchbar="true" data-searchbar-placeholder="Search Coin">
			<select v-model="main_coin" name="coin3"  >
				<option v-for="coin in availableCoins" v-bind:value="coin.Name">
					{{ coin.CoinName }}
				</option>


			</select>
			<div class="item-content">
				<div class="item-inner">
						<div class="item-title">Coin</div>
				</div>
			</div>
	</a>
	
	
	
	<h3>Coins to compare to Index </h3>
	<a class="item-link smart-select smart-select-init" data-open-in="popup"  data-searchbar="true" data-searchbar-placeholder="Search Coin">
			<select v-model="selectedCoins" name="coin2" multiple >
			    <option value="USD" selected>USD</option>
				<option v-for="coin in availableCoins" v-bind:value="coin.Name">
					{{ coin.CoinName }}
				</option>


			</select>
			<div class="item-content">
				<div class="item-inner">
						<div class="item-title">Coin</div>
				</div>
			</div>
	</a>

	 
	 <div>
      <button class="btn btn-primary" v-on:click="showCoinPrices">Search</button>
    </div>
	
<h1>1 &nbsp; <img v-bind:src="getPicURLbyName(main_coin)" width="44"/> &nbsp; {{ main_coin}} &nbsp;  =  </h1>

  
<div class="list media-list inset">
  <ul>
      <li v-for="(value, key, index) in prices " :key="key">
      <a href="#" class="item-link item-content">
	    <div v-if="prices" class="item-media"><img v-bind:src="getPicURLbyName(key)" width="44"/>  </div>

        <div class="item-inner">
          <div class="item-title-row">
            <div class="item-title">{{ value }}</div>
          </div>
          <div class="item-subtitle">{{ key }}</div>
        </div>
      </a>
    </li>
  </ul>
</div>

Another View

  <div class="list media-list">
  <ul >
    <li  v-for="(value, key, index) in prices " :key="key">
      <a href="#" class="item-link item-content">   
		<div v-if="prices" class="item-media"><img v-bind:src="getPicURLbyName(key)" width="44"/></div>
        <div class="item-inner">
          <div class="item-title">{{ key }}</div>
          <div class="item-after">{{ value }}</div>
        </div>

      </a>
    </li>
  </ul>
  </div>  

  
</div>
</template>

<script>
import axios from 'axios';
import store from '../../js/store.js';

let self;

export default {
  name: 'selectCoin',
    data () {
		return{
			selectedCoins:["BTC","LTC"],
			options: [],
			prices: [],
			errors: [],
			availableCoins:  [],
			main_coin: 'BTC',
			temp_coin: null,
			baseURL: '',
			search_coins: ''
		}
	},
  
  
	created() {
	
		self = this;
	
		this.options = [
			  { text: 'BTC', value: 'BTC' },
			  { text: 'XRP', value: 'XRP' },
			  { text: 'LTC', value: 'LTC' }
		];
		

		
			axios.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=' + 'BTC,USD,'+'ETH')
			.then(response => {
				this.prices = response.data;
			})
			.catch(e => {
				this.errors.push(e)
			})
			
			
			for (let i = 0; i <= this.selectedCoins.length-1; i++) {
				console.log(i);
				if(i==0)
				  {
					this.search_coins = this.selectedCoins[i];
					}
				else	
				{
					this.search_coins = this.search_coins + ',' + this.selectedCoins[i];
					}
			}	
			
			
			axios.get('https://min-api.cryptocompare.com/data/all/coinlist')
			.then(response => {
			    console.log(response);
				
	
				this.availableCoins = response.data.Data;
				this.baseURL = response.data.BaseImageUrl;
				
				store.avCoins = response.data.Data;
				
				for (let n of availableCoins) {
				console.log(n.ImageUrl);
				}
				
				
			})
			.catch(e => {
				this.errors.push(e)
			})
			
			this.selectedCoins = ["USD","BTC","LTC"];

	},
	 
	methods: {
	
			getPicURLbyIndex(index) {
				return this.baseURL + self.$data.availableCoins[index].ImageUrl;
				},
				
			getPicURLbyName(m_name) {
			
					if(m_name == 'USD')
					  return 'https://i.imgur.com/Pvoi62u.jpg';
					let m_return = this.baseURL + store.avCoins[m_name].ImageUrl;
					console.log('ELSE STATEMENT: return value = ' + m_return);
			
					return m_return;
				
				
				},

			
			showCoinPrices() {
				for (let i = 0; i <= this.selectedCoins.length-1; i++) {
					console.log(i);
					if(i==0)
						this.search_coins = this.selectedCoins[i];
					else	
						this.search_coins = this.search_coins + ',' + this.selectedCoins[i];
				}
				
				this.main_coin = this.main_coin.toUpperCase();
				
				axios.get('https://min-api.cryptocompare.com/data/price?fsym=' + this.main_coin + '&tsyms=' + this.search_coins)
				.then(response => {
					console.log(response.data);
					this.prices = response.data;
				})
				.catch(e => {
					this.errors.push(e)
				})
						
	
			
				
			}
	  
	}
}

</script>

<style scoped>

</style>
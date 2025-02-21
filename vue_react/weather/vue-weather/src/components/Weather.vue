<template>
    <div class="container">
      <!-- 导航 -->
      <!-- html5 语义化标签 -->
      <nav class="nav">
        <div class="time">{{localTime}}</div>
        <div class="city">切换城市</div>
      </nav>
      <main class="city-info">
        <div class="city-name">{{weatherData.city}}</div>
        <div class="weather">{{weatherData.weather}}</div>
        <h2 class="temp">
          <em>{{weatherData.temperature}}</em>C
        </h2>
        <div class="detail">
          <span>风力: {{weatherData.windPower}}级</span>
          <span>风向: {{weatherData.windDirection}}</span>
          <span>空气湿度: {{weatherData.humidity}}</span>
        </div>
      </main>
      <!-- 天气 -->
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue"
  import AMapLoader from '@amap/amap-jsapi-loader';
  const localTime = ref("00:00-------------")
  const weatherData = ref({
    city: "北京",
    weather: "晴",
    temperature: 20,
    windPower: 1,
    windDirection: "东北",
    humidity: 50
  })
  
  const init_map = async () => {
  try {
    await AMapLoader.load({
      key: import.meta.env.VITE_AMAP_API_KEY || '31be2687a61cd92f48d2d397af2ad4a9',
      version: "2.0",
      plugins: ['AMap.CitySearch']
    });

    console.log("AMap loaded successfully");

    // 确保插件名称正确，注意大小写
    AMap.plugin('AMap.CitySearch', function() {
      console.log("AMap.CitySearch plugin loaded successfully");
      
      let citySearch = new AMap.CitySearch();
      citySearch.getLocalCity(function(status, result) {
        console.log("getLocalCity called with status:", status, "result:", result);
        
        if (status === 'complete' && result.info === 'OK') {
          console.log("City found:", result.city);
          weatherData.value.city = result.city;
        } else {
          console.error("Failed to get local city:", status, result);
        }
      });
    });
  } catch (error) {
    console.error("Error loading AMap or plugin:", error);
  } 
  }
  // init_map();
  // 当组件挂载完成后执行
  onMounted(() => {
    init_map();
  })
  </script>
  
  <style scoped>
  .container {
    min-height: 100vh;
    background-color: #000;
    opacity: 0.6;
    color: #fff;
  }
  .nav {
    /* position: absolute; */
    overflow: auto;
    padding: 10px;
  }
  .city {
    float: right;
  }
  .time {
    float: left; 
  }
  .city-info {
    text-align: center;
  }
  .temp {
    font-size: 26px;
  }
  .temp em {
    font-size: 34px;
  }
  </style>
  
   

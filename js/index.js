// (function(){
  function weather(data){  //数据存储在data
      var dateWeek = document.getElementById('dateWeek');
      var dateYear = document.getElementById('dateYear');
      var location = document.getElementById('location');

      //天气图标
      var weather1 = document.getElementById('weather-1')
      var weatherTemp = document.getElementById('weather-temp')
      var weatherTitle = document.getElementById('weather-title')

      //从data拿出数据
      dateWeek.innerHTML = data.weather[0].date.slice(0,2)
      //从第一个开始取,取到第三个前面的为止
      dateYear.innerHTML = data.date;
      location.innerHTML = data.city;

      weather1.innerHTML = weatherIcon(1)
      weatherTemp.innerHTML = data.weather[0].temp.slice(0,2) + "℃";
      weatherTitle.innerHTML = data.weather[0].weather;

      var pm = document.getElementById('pm')
      var humidity = document.getElementById('humidity')
      var wind = document.getElementById('wind')

      pm.innerHTML = data.pm25;
      humidity.innerHTML = "无数据";
      wind.innerHTML = data.weather[0].wind;

      var day1 = document.getElementById('day1');
      var span1 =day1.getElementsByTagName("span");

      var day2 = document.getElementById('day2')
      var span2 =day2.getElementsByTagName("span");

      var day3 = document.getElementById('day3')
      var span3 =day3.getElementsByTagName("span");

      var day4 = document.getElementById('day4')
      var span4 =day4.getElementsByTagName("span");

      span1[0].innerHTML = weatherIcon(1);
      span1[1].innerHTML = data.weather[0].date.slice(0,2);
      span1[2].innerHTML = data.weather[0].temp

      span2[0].innerHTML = weatherIcon(2);
      span2[1].innerHTML = data.weather[1].date.slice(0,2)
      span2[2].innerHTML = data.weather[1].temp

      span3[0].innerHTML = weatherIcon(3);
      span3[1].innerHTML = data.weather[2].date.slice(0,2)
      span3[2].innerHTML = data.weather[2].temp

      span4[0].innerHTML = weatherIcon(4);
      span4[1].innerHTML = data.weather[3].date.slice(0,2)
      span4[2].innerHTML = data.weather[3].temp



      //切换天气图标,t为第t天
      function weatherIcon(t){
          if(data.weather[t - 1].icon1.search("yin")!= -1){
              //不等于-1说明有这个数据
              return "&#xe612;"
          }
          if(data.weather[t - 1].icon1.search("duoyun")!= -1){
              //不等于-1说明有这个数据
              return "&#xe630;"
          }
          if(data.weather[t - 1].icon1.search("qing")!= -1){
              //不等于-1说明有这个数据
              return "&#xe607;"
          }
          if(data.weather[t - 1].icon1.search("xiaoyu")!= -1){
              //不等于-1说明有这个数据
              return "&#xe6c4;"
          }
          if(data.weather[t - 1].icon1.search("dayu")!= -1 || data.weather[0].icon1.search("baoyu")!= -1){
              //不等于-1说明有这个数据
              return "&#xe608;"
          }
          if(data.weather[t-1].icon1.search("zhongyu")!= -1){
              //不等于-1说明有这个数据
              return "&#xe62f;"
          }
          if(data.weather[t-1].icon1.search("zhenyu")!= -1){
              //不等于-1说明有这个数据
              return "&#xe62f;"
          }
          if(data.weather[t-1].icon1.search("yujiaxue")!= -1){
              //不等于-1说明有这个数据
              return "&#xe64d;"
          }
          if(data.weather[t-1].icon1.search("baoyu")!= -1){
              //不等于-1说明有这个数据
              return "&#xe608;"
          }
          if(data.weather[t-1].icon1.search("yangsha")!= -1){
              //不等于-1说明有这个数据
              return "&#xe63c;"
          }
      }

  }
    window.onload = function(){
        // alert('...')
        var btn = document.getElementById('texts');
        var city = document.getElementById('city');

        //默认衢州
        var script = document.createElement("script");
                script.src = `https://api.asilu.com/weather/?city=${"衢州"}&callback=weather`;
                //https://api.heweather.net/s6/weather/now?location=${city.value}&key=4693ff5ea653469f8bb0c29638035976

                //根据输入数据插入到页面中
                document.body.appendChild(script) 

        btn.onclick = function(){
            //给一个判断
            if(city.value){
                var script = document.createElement("script");
                script.src = `https://api.asilu.com/weather/?city=${city.value}&callback=weather`;
                //https://api.heweather.net/s6/weather/now?location=${city.value}&key=4693ff5ea653469f8bb0c29638035976

                //根据输入数据插入到页面中
                document.body.appendChild(script) 
            }else{
                alert('请输入城市名称')
            }
            
        }     
    }
// })(weather)
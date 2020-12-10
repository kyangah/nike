
        var bannerText1 = [
            "Nike Statement on COVID-19", "Free Shipping & 60-Day Free Returns", "Up to 40% Off"
        ]
        
        var bannerText2 = [
            "View Here", "Join Now", "Shop Our Latest Sale Styles"
        ]

        var bannerLink = [ "https://www.nike.com/covid-19-response","https://www.nike.com/membership", "https://www.nike.com/w/sale-3yaep"];

        var bannerBg = ["rgb()"]

        var textOrder = 0;

        var displayRepeat = setInterval(bannerDisplay, 3000);
        // setTimeout(bannerDisplay, 3000)
        
        function bannerDisplay() {
        
        document.getElementById("banner_text_1").innerHTML = bannerText1[textOrder];
        document.getElementById("banner_text_2").innerHTML = bannerText2[textOrder];
        document.getElementById("banner_text_2").href = bannerLink[textOrder];
        document.getElementById("alert_banner").style = "background;" + bannerBg[textOrder];

        textOrder = textOrder + 1;

        if (textOrder == 3) { textOrder = 0;} 
        }

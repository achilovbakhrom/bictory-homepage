$(function () {
  $(".header-menu__link").click(function () {
    var element = $($(this).attr("href"));

    if (!element.length) return false;

    var destination = element.offset().top;

    $("html, body").animate({ scrollTop: destination }, 400);
    return false;
  });
  $(".footer__link").click(function () {
    var element = $($(this).attr("href"));

    if (!element.length) return false;

    var destination = element.offset().top;

    $("html, body").animate({ scrollTop: destination }, 400);
    return false;
  });

  $(".sk-select").each(function () {
    var t = $(this),
      btn = t.find(">div"),
      drp = t.find(">ul"),
      child = drp.find("li"),
      p = t.find('input[type="hidden"]');
    drp.hide();
    btn.html(child.first().html());
    p.val(child.first().html());
    btn.click(function () {
      drp.toggle();
    });
    child.click(function () {
      btn.html($(this).html());
      p.val($(this).html());
      drp.hide();
    });
    $(document).click(function (e) {
      if (t.has(e.target).length === 0) {
        drp.hide();
      }
    });
  });

  $(".product__link").click(function (e) {
    e.preventDefault();
    var selector = $(this).attr("href");
    var $tab = $(selector);
    $(".product__link--active").removeClass("product__link--active");
    $(this).addClass("product__link--active");
    $(".product__content--active").removeClass("product__content--active");
    $tab.addClass("product__content--active");
  });

  var selected__button = false;
  $(".header-button__collapse").on("click", function (e) {
    e.preventDefault();
    if (selected__button) {
      $(".header-menu--mobile")
        .animate({ "margin-right": "-=250" }, { duration: 200 }, 200)
        .delay(500);
      selected__button = false;
    } else {
      $(".header-menu--mobile")
        .animate({ "margin-right": "+=250" }, { duration: 200 }, 200)
        .delay(500);
      selected__button = true;
    }
  });
  $(".header-button__hide").on("click", function (e) {
    e.preventDefault();
    $(".header-menu--mobile")
      .animate({ "margin-right": "-=250" }, { duration: 200 }, 200)
      .delay(500);
    selected__button = false;
  });

  $(".switcher__radio").on("change", function (e) {
    console.log($("#roadmap-image").attr("src"));
    $(".root").toggleClass("light-theme");
    if (
      $("#exchange-interface-3").attr("src") ==
      "images/exchange-interface-3.png"
    ) {
      $("#exchange-interface-3").attr(
        "src",
        "images/exchange-interface-3-light.png"
      );
    } else {
      $("#exchange-interface-3").attr("src", "images/exchange-interface-3.png");
    }
    if (
      $("#partner-investror-2").attr("src") == "images/partner-investror-2-grey.png"
    ) {
      $("#partner-investror-2").attr(
        "onmouseover",
        "this.src='images/partner-investror-2-light.png'"
      );
    } else {
      $("#partner-investror-2").attr("onmouseover", "this.src='images/partner-investror-2.png'");
    }
    if (
      $("#partner-investror-3").attr("src") == "images/partner-investror-3-grey.png"
    ) {
      $("#partner-investror-3").attr(
        "onmouseover",
        "this.src='images/partner-investror-3-light.png'"
      );
    } else {
      $("#partner-investror-3").attr("onmouseover", "this.src='images/partner-investror-3.png'");
    }
    if ($("#roadmap-image").attr("src") == "images/roadmap.svg") {
      $("#roadmap-image").attr("src", "images/raadmap-light.svg");
    } else {
      $("#roadmap-image").attr("src", "images/roadmap.svg");
    }
    if ($("#tokenomics-diagram").attr("src") == "images/piechart.svg") {
      $("#tokenomics-diagram").attr("src", "images/piechart-light.svg");
    } else {
      $("#tokenomics-diagram").attr("src", "images/piechart.svg");
    }
    if ($("#concordium-logo").attr("src") == "images/whiteimg20.svg") {
      $("#concordium-logo").attr("src", "images/img20.svg");
    } else {
      $("#concordium-logo").attr("src", "images/whiteimg20.svg");
    }
    if ($("#banner-image").hasClass("banner-image--light")) {
      $("#banner-image").removeClass("banner-image--light");
    } else {
      $("#banner-image").addClass("banner-image--light");
    }
  });
  

  async function sendEmail(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
        
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data) 
    });
    return await response.json(); 
  }
  $("#subscribeButton").on("click", function handleClick(e) {
    e.preventDefault();
    $('#exampleModalCenter').modal('show')
    const email = $('#subscribeInput').val();
    console.log(email);
    sendEmail('https://deck.bictory.io/home-email', { email: email })
    .then((data) => {
      console.log(data); 
      $('#subscribeInput').val("");
    });
  })
 
});

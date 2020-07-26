/* eslint-disable array-callback-return */
import $ from 'jquery';
import Scrollbar from 'smooth-scrollbar';
import ApexCharts from 'apexcharts';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import flatpickr from "flatpickr";
let WOW;

if (typeof window !== 'undefined') {
  window.jQuery = $;
  window.$ = $;
  WOW = require('wowjs');
  require('owl.carousel');
  require('select2/dist/js/select2.min');


}

const index = () => {
  $(document).unbind();
  loaderInit();
  wowInit();
  countDownInit();
  sideBarToggle();
  copyCode();
  owlCarouselInit();
  scrollbarInit();
  navigationScripts();
  fullScreenInit();
  ticketBookInit();
  preventWithAtag();
  initSelect2();
  inItAccordionScript();
  homeChartOne();
  homeChartTwo();
  homeChartThree();
  homeChartFive();
  homeChartSix();
  todoList();
  todo();
  caleder();
  chartHome1();
  search();
};
const caleder = () => {
  flatpickr(".flatpicker", {
    inline: true,
  });
}
const search = () => {
  $(document).on('click', '.searchbox .search-input', function () {
    $(this).next().next().toggleClass('show-data');
  });

}

const getActiveLink = (item) => {
  let link = (item.link === undefined || item.link === '/') ? '' : item.link;
  let active = false;
  let windowPath = window.location.pathname;
  let windowLength = (windowPath.length - 1)
  let removePreg = windowPath[windowLength]
  if (removePreg === '/') {
    windowPath = windowPath.slice(0, windowLength)
  }

  if (item.children !== undefined) {
    item.children.filter(function (child) {
      let base_path = process.env.PUBLIC_URL + child.link;
      if (base_path === windowPath) {
        active = true;
      }
    });
  } else {
    let base_path = process.env.PUBLIC_URL + link;
    if (base_path === windowPath) {
      active = true
    }
  }
  return active;

};

// Function to prevent with A tag...
const preventWithAtag = () => {
  $(document).on('click', 'a', function (e) {
    e.preventDefault();
  });
};

// Function to Init select2...
const initSelect2 = () => {
  $('.select2jsMultiSelect').select2({
    tags: true
  });
};

// Function for the Loader...
const loaderInit = () => {
  $('#load').fadeOut();
  $('#loading').delay(1000).fadeOut('slow');
};


// Accordion script...
const inItAccordionScript = () => {
  $('.iq-accordion .iq-accordion-block .accordion-details').hide();
  $('.iq-accordion .iq-accordion-block:first').addClass('accordion-active').children().slideDown('slow');
  $(document).on("click", '.iq-accordion .iq-accordion-block', function () {
    if ($(this).children('div.accordion-details').is(':hidden')) {
      $('.iq-accordion .iq-accordion-block').removeClass('accordion-active').children('div.accordion-details ').slideUp('slow');
      $(this).toggleClass('accordion-active').children('div.accordion-details ').slideDown('slow');
    }
  });
};

const scrollbarInit = () => {

  /*---------------------------------------------------------------------
   Header fixed
   -----------------------------------------------------------------------*/
  let element = document.getElementById('sidebar-scrollbar');
  if (element != null) {
    Scrollbar.init(document.querySelector('#sidebar-scrollbar'));
  }
};

const fullScreenInit = () => {
  $(document).on('click', '.iq-full-screen', function () {
    let elem = $(this);
    if (!document.fullscreenElement &&
      !document.mozFullScreenElement && // Mozilla
      !document.webkitFullscreenElement && // Webkit-Browser
      !document.msFullscreenElement) { // MS IE ab version 11

      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    elem.find('i').toggleClass('ri-fullscreen-line').toggleClass('ri-fullscreen-exit-line');
  });
};

const navigationScripts = () => {
  $(document).on('click', function (e) {
    let myTargetElement = e.target;
    let selector, mainElement;
    if ($(myTargetElement).hasClass('search-toggle') || $(myTargetElement).parent().hasClass('search-toggle') || $(myTargetElement).parent().parent().hasClass('search-toggle')) {
      if ($(myTargetElement).hasClass('search-toggle')) {
        selector = $(myTargetElement).parent();
        mainElement = $(myTargetElement);
      } else if ($(myTargetElement).parent().hasClass('search-toggle')) {
        selector = $(myTargetElement).parent().parent();
        mainElement = $(myTargetElement).parent();
      } else if ($(myTargetElement).parent().parent().hasClass('search-toggle')) {
        selector = $(myTargetElement).parent().parent().parent();
        mainElement = $(myTargetElement).parent().parent();
      }
      if (!mainElement.hasClass('active') && $(".navbar-list li").find('.active')) {
        $('.navbar-list li').removeClass('iq-show');
        $('.navbar-list li .search-toggle').removeClass('active');
      }

      selector.toggleClass('iq-show');
      mainElement.toggleClass('active');

      e.preventDefault();
    } else if ($(myTargetElement).is('.search-input')) { } else {
      $('.navbar-list li').removeClass('iq-show');
      $('.navbar-list li .search-toggle').removeClass('active');
    }
  });
};

const wowInit = () => {
  const elementExist = checkElement('class', 'wow');

  if (elementExist) {

    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      live: false
    }).init();
  }
};

const countDownInit = () => {
  const elementExist = checkElement('class', 'countdown');

  if (elementExist) {
    /*$(".countdown").countdown();*/
  }
};

const checkElement = (type, element) => {
  let found = false;
  let elements;
  // eslint-disable-next-line default-case
  switch (type) {
    case 'class':
      elements = document.getElementsByClassName(element);

      if (elements !== undefined && elements !== null && elements.length > 0) {
        found = true;
      }
      break;

    case 'id':
      elements = document.getElementById(element);

      if (elements !== undefined && elements !== null) {
        found = true;
      }
      break;
  }


  return found;
};

const owlCarouselInit = () => {
  $('.owl-carousel').each(function () {
    var jQuerycarousel = $(this);
    jQuerycarousel.owlCarousel({
      items: jQuerycarousel.data("items"),
      loop: jQuerycarousel.data("loop"),
      margin: jQuerycarousel.data("margin"),
      nav: jQuerycarousel.data("nav"),
      dots: jQuerycarousel.data("dots"),
      autoplay: jQuerycarousel.data("autoplay"),
      autoplayTimeout: jQuerycarousel.data("autoplay-timeout"),
      navText: ["<i class='fa fa-angle-left fa-2x' />", "<i class='fa fa-angle-right fa-2x' />"],
      responsiveClass: true,
      responsive: {
        // breakpoint from 0 up
        0: {
          items: jQuerycarousel.data("items-mobile-sm"),
          nav: false,
          dots: true
        },
        // breakpoint from 480 up
        480: {
          items: jQuerycarousel.data("items-mobile"),
          nav: false,
          dots: true
        },
        // breakpoint from 786 up
        786: {
          items: jQuerycarousel.data("items-tab")
        },
        // breakpoint from 1023 up
        1023: {
          items: jQuerycarousel.data("items-laptop")
        },
        1199: {
          items: jQuerycarousel.data("items")
        }
      }
    });
  });
};

const copyCode = () => {
  /*$(document).on('click','[data-copy="true"]',function (e) {
      let _this = $(this);
      let target = _this.attr('data-copy-target');
      /!* Copy the text inside the text field *!/
      let text = document.querySelector(target).innerText;
      let elem = document.createElement("textarea");
      document.body.appendChild(elem);
      elem.value = text;
      /!* Select the text field *!/
      elem.select();
      elem.setSelectionRange(0, 99999); /!*For mobile devices*!/
      /!* Copy the text inside the text field *!/
      document.execCommand("copy");
      document.body.removeChild(elem);
      tooltipUpdate(_this,'Copied');
      _this.tooltip('show');
      setTimeout(() => {
          tooltipUpdate(_this,'Copy')
      },2000)
  })

  function tooltipUpdate(_this,text) {
      _this.attr('title',text);
      _this.tooltip('dispose');
      _this.tooltip()
  }*/
};

const sideBarToggle = () => {
  // $(document).on('click', '.iq-sidebar-menu > ul > li > a', function () {
  //   var checkElement = $(this).next();
  //   $('.iq-sidebar-menu li').removeClass('active show');
  //   $('.iq-sidebar-menu ul').removeClass('show');
  //   $(this).closest('li').addClass('active');
  //   if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
  //     $(this).closest('li').removeClass('active show');
  //     checkElement.slideUp('normal');
  //   }
  //   if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
  //     $('.iq-sidebar-menu ul ul:visible').slideUp('normal');
  //     checkElement.slideDown('normal').addClass('show');
  //   }
  //   let length = $(this).closest('li').find('ul').children().length;
  //   if (length === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  $('.iq-sidebar-menu .active').each(function (ele, index) {
    $(this).find('.iq-submenu').addClass('show');
    $(this).next().attr("aria-expanded", "true");
  })
  $(".iq-waves-effect").click(function (e) {

    // Remove any old one
    $(".ripple").remove();

    // Setup
    let posX = $(this).offset().left,
      posY = $(this).offset().top,
      buttonWidth = $(this).width(),
      buttonHeight = $(this).height();

    // Add the element
    $(this).prepend("<span class='ripple' />");


    // Make it round!
    if (buttonWidth >= buttonHeight) {
      buttonHeight = buttonWidth;
    } else {
      buttonWidth = buttonHeight;
    }

    // Get the center of the element
    var x = e.pageX - posX - buttonWidth / 2;
    var y = e.pageY - posY - buttonHeight / 2;


    // Add the ripples CSS and start the animation
    $(".ripple").css({
      width: buttonWidth,
      height: buttonHeight,
      top: y + 'px',
      left: x + 'px'
    }).addClass("rippleEffect");
  });

  $(document).on('click', '.wrapper-menu', function () {
    $(this).toggleClass('open');
  });

  $(document).on('click', ".wrapper-menu", function () {
    $("body").toggleClass("sidebar-main");
  });
};

const dynamicChart = () => {

  // eslint-disable-next-line no-unused-vars
  var lastDate = 0;
  var data = [];
  var TICKINTERVAL = 86400000;
  let XAXISRANGE = 777600000;

  function getDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    while (i < count) {
      var x = baseval;
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      data.push({
        x,
        y
      });
      lastDate = baseval;
      baseval += TICKINTERVAL;
      i++;
    }
  }

  getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
    min: 10,
    max: 90
  });

  /*function getNewSeries(baseval, yrange) {
      var newDate = baseval + TICKINTERVAL;
      lastDate = newDate;
      for (var i = 0; i < data.length - 10; i++) {
          data[i].x = newDate - XAXISRANGE - TICKINTERVAL;
          data[i].y = 0;
      }
      data.push({
          x: newDate,
          y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
      })

  }

  function resetData() {
      // Alternatively, you can also reset the data at certain intervals to prevent creating a huge series
      data = data.slice(data.length - 10, data.length);
  }*/


  let options = {
    chart: {
      height: 150,
      type: 'area',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000
        }
      },
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
      group: 'sparklines',
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    series: [{
      data: data
    }],
    markers: {
      size: 4
    },
    xaxis: {
      type: 'datetime',
      range: XAXISRANGE,
    },
    yaxis: {
      max: 100
    },
    colors: ['#0084ff'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      },
    },
    legend: {
      show: false
    },
  };

  return options;
};

const ticketBookInit = () => {
  $('.iq-film-block').find('span').text(0);
  $(document).on('click', '.iq-booking-screen .iq-booking-no .list-inline-item .iq-seat ', function (e) {
    e.preventDefault();
    let sheet = 0;
    if (!$(this).hasClass('bg-secondary')) {
      $(this).toggleClass('active');
      sheet = $('.iq-booking-screen').find('.iq-seat.active').length;
      $('.iq-film-block').find('span').text(sheet);
    }
  });
  $(document).on('click', '.ri-close-circle-line', function () {
    $(this).parent().parent().parent().parent().removeClass('film-side');
  });

  $(document).on('click', '.iq-film-block', function () {
    if (parseInt($(this).find('span').text()) > 0) {
      $('.iq-sidebar-right-menu').addClass('film-side');
    }
  });
};
const homeChartOne = () => {
  if ($('#home-chart-01').length) {
    var options = {
      series: [{
        name: "Desktops",
        data: [5, 10, 8, 15]
      }],
      chart: {
        height: 150,
        type: 'line',
        foreColor: '#8c91b6',
        zoom: {
          enabled: false
        }
      },
      colors: ['#827af3'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr'],
      }
    };

    var chart = new ApexCharts(document.querySelector("#home-chart-01"), options);
    chart.render();
  }
}
const homeChartTwo = () => {
  if ($('#home-chart-02').length) {
    var options = {
      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }],
      chart: {
        type: 'bar',
        foreColor: '#8c91b6',
        height: 350
      },
      colors: ['#827af3', '#6ce6f4'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
    };

    var chart = new ApexCharts(document.querySelector("#home-chart-02"), options);
    chart.render();
  }
}
const homeChartFive = () => {
  if ($('#home-chart-05').length) {
    am4core.ready(function () {

      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      var chart = am4core.create("home-chart-05", am4charts.XYChart);
      chart.colors.list = [am4core.color("#827af3"),];
      chart.stroke = am4core.color("#8c91b6");

      var data = [];
      var value = 120;

      var names = ["ra",
        "De",
        "Ca",
        "Ja",
        "Ri",
        "An",
      ];

      for (var i = 0; i < names.length; i++) {
        value += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
        data.push({ category: names[i], value: value });
      }

      chart.data = data;
      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.dataFields.category = "category";
      categoryAxis.renderer.minGridDistance = 15;
      categoryAxis.renderer.grid.template.location = 0.5;
      categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
      categoryAxis.renderer.labels.template.rotation = -90;
      categoryAxis.renderer.labels.template.horizontalCenter = "left";
      categoryAxis.renderer.labels.template.location = 0.5;

      categoryAxis.renderer.labels.template.adapter.add("dx", function (dx, target) {
        return -target.maxRight / 2;
      })

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.ticks.template.disabled = true;
      valueAxis.renderer.axisFills.template.disabled = true;

      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.categoryX = "category";
      series.dataFields.valueY = "value";
      series.tooltipText = "{valueY.value}";
      series.sequencedInterpolation = true;
      series.fillOpacity = 0;
      series.strokeOpacity = 1;
      series.strokeDashArray = "1,3";
      series.columns.template.width = 0.01;
      series.tooltip.pointerOrientation = "horizontal";

      series.bullets.create(am4charts.CircleBullet);

      chart.cursor = new am4charts.XYCursor();




    }); // end am4core.ready()
  }
}

const homeChartThree = () => {
  if ($('#home-chart-03').length) {
    var options = {
      series: [44, 55, 13, 33],
      chart: {
        width: 380,
        height: 180,
        type: 'donut',
        foreColor: '#8c91b6',
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#827af3', '#6ce6f4', '#a09e9e', '#fbc647'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            show: false
          }
        }
      }],
      legend: {
        position: 'right',
        offsetY: 0,
        height: 150,
      }
    };

    var chart = new ApexCharts(document.querySelector("#home-chart-03"), options);
    chart.render();

  }
}
const homeChartSix = () => {
  if ($('#home-chart-06').length) {
    am4core.ready(function () {

      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      var chart = am4core.create("home-chart-06", am4charts.XYChart);
      chart.colors.list = [am4core.color("#827af3"), am4core.color("#6ce6f4")];
      chart.stroke = am4core.color("#8c91b6");

      var data = [];
      var open = 100;
      var close = 120;

      var names = ["Rai",
        "Dem",
        "Caro",
        "Jac",
        "Rich",
        "Ano",
        "Amd",
        "Idal",
        "Joi",
        "Mar",
        "Cur",
        "Shl",
        "Meg",
      ];

      for (var i = 0; i < names.length; i++) {
        open += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
        close = open + Math.round(Math.random() * 10) + 3;
        data.push({ category: names[i], open: open, close: close });
      }

      chart.data = data;
      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.dataFields.category = "category";
      categoryAxis.renderer.minGridDistance = 15;
      categoryAxis.renderer.grid.template.location = 0.5;
      categoryAxis.renderer.grid.template.strokeDasharray = "1,3";
      categoryAxis.renderer.labels.template.rotation = -90;
      categoryAxis.renderer.labels.template.horizontalCenter = "left";
      categoryAxis.renderer.labels.template.location = 0.5;
      categoryAxis.renderer.inside = true;

      categoryAxis.renderer.labels.template.adapter.add("dx", function (dx, target) {
        return -target.maxRight / 2;
      })

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.ticks.template.disabled = true;
      valueAxis.renderer.axisFills.template.disabled = true;

      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.categoryX = "category";
      series.dataFields.openValueY = "open";
      series.dataFields.valueY = "close";
      series.tooltipText = "open: {openValueY.value} close: {valueY.value}";
      series.sequencedInterpolation = true;
      series.fillOpacity = 0;
      series.strokeOpacity = 1;
      series.columns.template.width = 0.01;
      series.tooltip.pointerOrientation = "horizontal";

      var openBullet = series.bullets.create(am4charts.CircleBullet);
      openBullet.locationY = 1;

      var closeBullet = series.bullets.create(am4charts.CircleBullet);

      closeBullet.fill = chart.colors.getIndex(4);
      closeBullet.stroke = closeBullet.fill;

      chart.cursor = new am4charts.XYCursor();
    }); // end am4core.ready()
  }
}
const todoList = () => {
  $(document).ready(function () {
    $().on('click', '.todo-task-lists li', function () {
      if ($(this).find('input:checkbox[name=todo-check]').is(":checked")) {

        $(this).find('input:checkbox[name=todo-check]').attr("checked", false);
        $(this).removeClass('active-task');
      } else {
        $(this).find('input:checkbox[name=todo-check]').attr("checked", true);
        $(this).addClass('active-task');
      }
      // jQuery(this).addClass('active-task');
    });
  });
}

const todo = () => {
  $(document).on('click', '.todo-task-list > li > a', function () {
    $('.todo-task-list li').removeClass('active');
    $('.todo-task-list .sub-task').removeClass('show');
    $(this).parent().toggleClass('active');
    $(this).next().toggleClass('show');
  });
  $(document).on('click', '.todo-task-list > li li > a', function () {
    $('.todo-task-list li li').removeClass('active');
    $(this).parent().toggleClass('active');
  });
}

const chartHome1 = () => {
  if ($('#chartdiv').length) {
    $(document).ready(function () {
      am4core.ready(function () {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Define country data
        var countries = {
          "AD": {
            "country": "Andorra",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["andorraLow", "andorraHigh"]
          },
          "AE": {
            "country": "United Arab Emirates",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["uaeLow", "uaeHigh"]
          },
          "AF": {
            "country": "Afghanistan",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": []
          },
          "AG": {
            "country": "Antigua and Barbuda",
            "continent_code": "NA",
            "continent": "North America",
            "maps": ["antiguaBarbudaLow", "antiguaBarbudaHigh"]
          },
          "AI": {
            "country": "Anguilla",
            "continent_code": "NA",
            "continent": "North America",
            "maps": ["anguillaLow", "anguillaHigh"]
          },
          "AL": {
            "country": "Albania",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["albaniaLow", "albaniaHigh"]
          },
          "AM": {
            "country": "Armenia",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["armeniaLow", "armeniaHigh"]
          },
          "AO": {
            "country": "Angola",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["angolaLow", "angolaHigh"]
          },
          "AQ": {
            "country": "Antarctica",
            "continent_code": "AN",
            "continent": "Antarctica",
            "maps": []
          },
          "AR": {
            "country": "Argentina",
            "continent_code": "SA",
            "continent": "South America",
            "maps": ["argentinaLow", "argentinaHigh"]
          },
          "AS": {
            "country": "American Samoa",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": ["americanSamoaLow", "americanSamoaHigh"]
          },
          "AT": {
            "country": "Austria",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["austriaLow", "austriaHigh"]
          },
          "AU": {
            "country": "Australia",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": ["australiaLow", "australiaHigh"]
          },
          "AW": {
            "country": "Aruba",
            "continent_code": "NA",
            "continent": "North America",
            "maps": ["arubaLow", "arubaHigh"]
          },
          "AX": {
            "country": "Aland Islands",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": []
          },
          "AZ": {
            "country": "Azerbaijan",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["azerbaijanLow", "azerbaijanHigh"]
          },
          "BA": {
            "country": "Bosnia and Herzegovina",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["bosniaHerzegovinaLow", "bosniaHerzegovinaHigh", "bosniaHerzegovinaCantonsLow", "bosniaHerzegovinaCantonsHigh"]
          },
          "BB": {
            "country": "Barbados",
            "continent_code": "NA",
            "continent": "North America",
            "maps": ["barbadosLow", "barbadosHigh"]
          },
          "BD": {
            "country": "Bangladesh",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["bangladeshLow", "bangladeshHigh"]
          },
          "BE": {
            "country": "Belgium",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["belgiumLow", "belgiumHigh"]
          },
          "BF": {
            "country": "Burkina Faso",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["burkinaFasoLow", "burkinaFasoHigh"]
          },
          "BG": {
            "country": "Bulgaria",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["bulgariaLow", "bulgariaHigh"]
          },
          "BH": {
            "country": "Bahrain",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["bahrainLow", "bahrainHigh"]
          },
          "BI": {
            "country": "Burundi",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["burundiLow", "burundiHigh"]
          },
          "BJ": {
            "country": "Benin",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["beninLow", "beninHigh"]
          },
          "BL": {
            "country": "Saint Barthelemy",
            "continent_code": "NA",
            "continent": "North America",
            "maps": []
          },
          "BM": {
            "country": "Bermuda",
            "continent_code": "NA",
            "continent": "North America",
            "maps": ["bermudaLow", "bermudaHigh"]
          },
          "BN": {
            "country": "Brunei Darussalam",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["bruneiDarussalamLow", "bruneiDarussalamHigh"]
          },
          "BO": {
            "country": "Bolivia, Plurinational State of",
            "continent_code": "SA",
            "continent": "South America",
            "maps": ["boliviaLow", "boliviaHigh"]
          },
          "BQ": {
            "country": "Bonaire, Sint Eustatius and Saba",
            "continent_code": "NA",
            "continent": "North America",
            "maps": ["bonaireSintEustatiusSabaLow", "bonaireSintEustatiusSabaHigh"]
          },
          "BR": {
            "country": "Brazil",
            "continent_code": "SA",
            "continent": "South America",
            "maps": ["brazilLow", "brazilHigh"]
          },
          "BS": {
            "country": "Bahamas",
            "continent_code": "NA",
            "continent": "North America",
            "maps": []
          },
          "BT": {
            "country": "Bhutan",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["bhutanLow", "bhutanHigh"]
          },
          "BV": {
            "country": "Bouvet Island",
            "continent_code": "AN",
            "continent": "Antarctica",
            "maps": []
          },
          "BW": {
            "country": "Botswana",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["botswanaLow", "botswanaHigh"]
          },
          "BY": {
            "country": "Belarus",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["belarusLow", "belarusHigh"]
          },
          "BZ": {
            "country": "Belize",
            "continent_code": "NA",
            "continent": "North America",
            "maps": ["belizeLow", "belizeHigh"]
          },
          "CA": {
            "country": "Canada",
            "continent_code": "NA",
            "continent": "North America",
            "maps": ["canadaLow", "canadaHigh"]
          },
          "CC": {
            "country": "Cocos (Keeling) Islands",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": []
          },
          "CD": {
            "country": "Congo, the Democratic Republic of the",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["congoDRLow", "congoDRHigh"]
          },
          "CF": {
            "country": "Central African Republic",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["centralAfricanRepublicLow", "centralAfricanRepublicHigh"]
          },
          "CG": {
            "country": "Congo",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["congoLow", "congoHigh"]
          },
          "CH": {
            "country": "Switzerland",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["switzerlandLow", "switzerlandHigh"]
          },
          "CI": {
            "country": "Cote d'Ivoire",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": []
          },
          "CK": {
            "country": "Cook Islands",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": []
          },
          "CL": {
            "country": "Chile",
            "continent_code": "SA",
            "continent": "South America",
            "maps": ["chileLow", "chileHigh"]
          },
          "CM": {
            "country": "Cameroon",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["cameroonLow", "cameroonHigh"]
          },
          "CN": {
            "country": "China",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["chinaLow", "chinaHigh"]
          },
          "CO": {
            "country": "Colombia",
            "continent_code": "SA",
            "continent": "South America",
            "maps": ["colombiaLow", "colombiaHigh", "colombiaMuniLow", "colombiaMuniHigh"]
          },
          "CR": {
            "country": "Costa Rica",
            "continent_code": "NA",
            "continent": "North America",
            "maps": ["costaRicaLow", "costaRicaHigh"]
          },
          "CU": {
            "country": "Cuba",
            "continent_code": "NA",
            "continent": "North America",
            "maps": []
          },
          "CV": {
            "country": "Cape Verde",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["capeVerdeLow", "capeVerdeHigh"]
          },
          "CW": {
            "country": "Curacao",
            "continent_code": "NA",
            "continent": "North America",
            "maps": ["curacaoLow", "curacaoHigh"]
          },
          "CX": {
            "country": "Christmas Island",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": []
          },
          "CY": {
            "country": "Cyprus",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["cyprusLow", "cyprusHigh", "cyprusNorthCyprusLow", "cyprusNorthCyprusHigh"]
          },
          "CZ": {
            "country": "Czech Republic",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["czechiaLow", "czechiaHigh"]
          },
          "DE": {
            "country": "Germany",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["germanyLow", "germanyHigh"]
          },
          "DJ": {
            "country": "Djibouti",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["djiboutiLow", "djiboutiHigh"]
          },
          "DK": {
            "country": "Denmark",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["denmarkLow", "denmarkHigh"]
          },
          "DM": {
            "country": "Dominica",
            "continent_code": "NA",
            "continent": "North America",
            "maps": ["dominicaLow", "dominicaHigh"]
          },
          "DO": {
            "country": "Dominican Republic",
            "continent_code": "NA",
            "continent": "North America",
            "maps": ["dominicanRepublicLow", "dominicanRepublicHigh", "dominicanRepublicMuniLow", "dominicanRepublicMuniHigh"]
          },
          "DZ": {
            "country": "Algeria",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["algeriaLow", "algeriaHigh"]
          },
          "EC": {
            "country": "Ecuador",
            "continent_code": "SA",
            "continent": "South America",
            "maps": ["ecuadorLow", "ecuadorHigh"]
          },
          "EE": {
            "country": "Estonia",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["estoniaLow", "estoniaHigh"]
          },
          "EG": {
            "country": "Egypt",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["egyptLow", "egyptHigh"]
          },
          "EH": {
            "country": "Western Sahara",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": []
          },
          "ER": {
            "country": "Eritrea",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": []
          },
          "ES": {
            "country": "Spain",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["spainLow", "spainHigh", "spainProvincesLow", "spainProvincesHigh"]
          },
          "ET": {
            "country": "Ethiopia",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": []
          },
          "FI": {
            "country": "Finland",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["finlandLow", "finlandHigh"]
          },
          "FJ": {
            "country": "Fiji",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": ["fijiEastLow", "fijiEastHigh", "fijiWestLow", "fijiWestHigh"]
          },
          "FK": {
            "country": "Falkland Islands (Malvinas)",
            "continent_code": "SA",
            "continent": "South America",
            "maps": []
          },
          "FM": {
            "country": "Micronesia, Federated States of",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": []
          },
          "FO": {
            "country": "Faroe Islands",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["faroeIslandsLow", "faroeIslandsHigh"]
          },
          "FR": {
            "country": "France",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["franceLow", "franceHigh", "franceDepartmentsLow", "franceDepartmentsHigh"]
          },
          "GA": {
            "country": "Gabon",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["gabonLow", "gabonHigh"]
          },
          "GB": {
            "country": "United Kingdom",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["ukLow", "ukHigh", "ukCountiesLow", "ukCountiesHigh"]
          },
          "GB-CHA": {
            "country": "Channel Islands",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["channelIslandsLow", "channelIslandsHigh"]
          },
          "GD": {
            "country": "Grenada",
            "continent_code": "NA",
            "continent": "North America",
            "maps": []
          },
          "GE": {
            "country": "Georgia",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["georgiaLow", "georgiaHigh", "georgiaSouthOssetiaLow", "georgiaSouthOssetiaHigh"]
          },
          "GF": {
            "country": "French Guiana",
            "continent_code": "SA",
            "continent": "South America",
            "maps": ["frenchGuianaLow", "frenchGuianaHigh"]
          },
          "GG": {
            "country": "Guernsey",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": []
          },
          "GH": {
            "country": "Ghana",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": []
          },
          "GI": {
            "country": "Gibraltar",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": []
          },
          "GL": {
            "country": "Greenland",
            "continent_code": "NA",
            "continent": "North America",
            "maps": ["greenlandLow", "greenlandHigh"]
          },
          "GM": {
            "country": "Gambia",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": []
          },
          "GN": {
            "country": "Guinea",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["guineaLow", "guineaHigh"]
          },
          "GP": {
            "country": "Guadeloupe",
            "continent_code": "NA",
            "continent": "North America",
            "maps": []
          },
          "GQ": {
            "country": "Equatorial Guinea",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["equatorialGuineaLow", "equatorialGuineaHigh"]
          },
          "GR": {
            "country": "Greece",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["greeceLow", "greeceHigh"]
          },
          "GS": {
            "country": "South Georgia and the South Sandwich Islands",
            "continent_code": "AN",
            "continent": "Antarctica",
            "maps": []
          },
          "GT": {
            "country": "Guatemala",
            "continent_code": "NA",
            "continent": "North America",
            "maps": []
          },
          "GU": {
            "country": "Guam",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": []
          },
          "GW": {
            "country": "Guinea-Bissau",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": []
          },
          "GY": {
            "country": "Guyana",
            "continent_code": "SA",
            "continent": "South America",
            "maps": []
          },
          "HK": {
            "country": "Hong Kong",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["hongKongLow", "hongKongHigh"]
          },
          "HM": {
            "country": "Heard Island and McDonald Islands",
            "continent_code": "AN",
            "continent": "Antarctica",
            "maps": []
          },
          "HN": {
            "country": "Honduras",
            "continent_code": "NA",
            "continent": "North America",
            "maps": ["hondurasLow", "hondurasHigh"]
          },
          "HR": {
            "country": "Croatia",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["croatiaLow", "croatiaHigh"]
          },
          "HT": {
            "country": "Haiti",
            "continent_code": "NA",
            "continent": "North America",
            "maps": []
          },
          "HU": {
            "country": "Hungary",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["hungaryLow", "hungaryHigh"]
          },
          "ID": {
            "country": "Indonesia",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["indonesiaLow", "indonesiaHigh"]
          },
          "IE": {
            "country": "Ireland",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["irelandLow", "irelandHigh"]
          },
          "IL": {
            "country": "Israel",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["israelLow", "israelHigh", "israelPalestineLow", "israelPalestineHigh"]
          },
          "IM": {
            "country": "Isle of Man",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": []
          },
          "IN": {
            "country": "India",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["indiaLow", "indiaHigh"]
          },
          "IO": {
            "country": "British Indian Ocean Territory",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": []
          },
          "IQ": {
            "country": "Iraq",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": []
          },
          "IR": {
            "country": "Iran, Islamic Republic of",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": []
          },
          "IS": {
            "country": "Iceland",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["icelandLow", "icelandHigh"]
          },
          "IT": {
            "country": "Italy",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["italyLow", "italyHigh"]
          },
          "JE": {
            "country": "Jersey",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": []
          },
          "JM": {
            "country": "Jamaica",
            "continent_code": "NA",
            "continent": "North America",
            "maps": []
          },
          "JO": {
            "country": "Jordan",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": []
          },
          "JP": {
            "country": "Japan",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["japanLow", "japanHigh"]
          },
          "KE": {
            "country": "Kenya",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["kenyaLow", "kenyaHigh"]
          },
          "KG": {
            "country": "Kyrgyzstan",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["kyrgyzstanLow", "kyrgyzstanHigh"]
          },
          "KH": {
            "country": "Cambodia",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["cambodiaLow", "cambodiaHigh"]
          },
          "KI": {
            "country": "Kiribati",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": []
          },
          "KM": {
            "country": "Comoros",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": []
          },
          "KN": {
            "country": "Saint Kitts and Nevis",
            "continent_code": "NA",
            "continent": "North America",
            "maps": []
          },
          "KP": {
            "country": "Korea, Democratic People's Republic of",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["northKoreaLow", "northKoreaHigh"]
          },
          "KR": {
            "country": "Korea, Republic of",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["southKoreaLow", "southKoreaHigh"]
          },
          "KT": {
            "country": "Saint Kitts and Nevis",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["stKittsNevisLow", "stKittsNevisHigh"]
          },
          "KW": {
            "country": "Kuwait",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": []
          },
          "KY": {
            "country": "Cayman Islands",
            "continent_code": "NA",
            "continent": "North America",
            "maps": []
          },
          "KZ": {
            "country": "Kazakhstan",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["kazakhstanLow", "kazakhstanHigh"]
          },
          "LA": {
            "country": "Lao People's Democratic Republic",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": []
          },
          "LB": {
            "country": "Lebanon",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": []
          },
          "LC": {
            "country": "Saint Lucia",
            "continent_code": "NA",
            "continent": "North America",
            "maps": ["saintLuciaLow", "saintLuciaHigh"]
          },
          "LI": {
            "country": "Liechtenstein",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["liechtensteinLow", "liechtensteinHigh"]
          },
          "LK": {
            "country": "Sri Lanka",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["sriLankaLow", "sriLankaHigh"]
          },
          "LR": {
            "country": "Liberia",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": []
          },
          "LS": {
            "country": "Lesotho",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": []
          },
          "LT": {
            "country": "Lithuania",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["lithuaniaLow", "lithuaniaHigh"]
          },
          "LU": {
            "country": "Luxembourg",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": []
          },
          "LV": {
            "country": "Latvia",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["latviaLow", "latviaHigh"]
          },
          "LY": {
            "country": "Libya",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": []
          },
          "MA": {
            "country": "Morocco",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["moroccoLow", "moroccoHigh"]
          },
          "MC": {
            "country": "Monaco",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": []
          },
          "MD": {
            "country": "Moldova, Republic of",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["moldovaLow", "moldovaHigh"]
          },
          "ME": {
            "country": "Montenegro",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": []
          },
          "MF": {
            "country": "Saint Martin (French Part)",
            "continent_code": "NA",
            "continent": "North America",
            "maps": []
          },
          "MG": {
            "country": "Madagascar",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": []
          },
          "MH": {
            "country": "Marshall Islands",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": []
          },
          "MK": {
            "country": "North Macedonia",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": []
          },
          "ML": {
            "country": "Mali",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["maliLow", "maliHigh"]
          },
          "MM": {
            "country": "Myanmar",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": []
          },
          "MN": {
            "country": "Mongolia",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["mongoliaLow", "mongoliaHigh"]
          },
          "MO": {
            "country": "Macao",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": []
          },
          "MP": {
            "country": "Northern Mariana Islands",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": []
          },
          "MQ": {
            "country": "Martinique",
            "continent_code": "NA",
            "continent": "North America",
            "maps": []
          },
          "MR": {
            "country": "Mauritania",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": []
          },
          "MS": {
            "country": "Montserrat",
            "continent_code": "NA",
            "continent": "North America",
            "maps": []
          },
          "MT": {
            "country": "Malta",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["maltaLow", "maltaHigh"]
          },
          "MU": {
            "country": "Mauritius",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": []
          },
          "MV": {
            "country": "Maldives",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["maldivesLow", "maldivesHigh", "maldivesIslandsLow", "maldivesIslandsHigh"]
          },
          "MW": {
            "country": "Malawi",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": []
          },
          "MX": {
            "country": "Mexico",
            "continent_code": "NA",
            "continent": "North America",
            "maps": ["mexicoLow", "mexicoHigh"]
          },
          "MY": {
            "country": "Malaysia",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["malaysiaLow", "malaysiaHigh"]
          },
          "MZ": {
            "country": "Mozambique",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": []
          },
          "NA": {
            "country": "Namibia",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["namibiaLow", "namibiaHigh"]
          },
          "NC": {
            "country": "New Caledonia",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": []
          },
          "NE": {
            "country": "Niger",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": []
          },
          "NF": {
            "country": "Norfolk Island",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": []
          },
          "NG": {
            "country": "Nigeria",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["nigeriaLow", "nigeriaHigh"]
          },
          "NI": {
            "country": "Nicaragua",
            "continent_code": "NA",
            "continent": "North America",
            "maps": ["nicaraguaLow", "nicaraguaHigh"]
          },
          "NL": {
            "country": "Netherlands",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["netherlandsLow", "netherlandsHigh"]
          },
          "NO": {
            "country": "Norway",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["norwayLow", "norwayHigh"]
          },
          "NP": {
            "country": "Nepal",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["nepalLow", "nepalHigh"]
          },
          "NR": {
            "country": "Nauru",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": []
          },
          "NU": {
            "country": "Niue",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": []
          },
          "NZ": {
            "country": "New Zealand",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": ["newZealandLow", "newZealandHigh"]
          },
          "OM": {
            "country": "Oman",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["omanLow", "omanHigh"]
          },
          "PA": {
            "country": "Panama",
            "continent_code": "NA",
            "continent": "North America",
            "maps": ["panamaLow", "panamaHigh"]
          },
          "PE": {
            "country": "Peru",
            "continent_code": "SA",
            "continent": "South America",
            "maps": ["peruLow", "peruHigh"]
          },
          "PF": {
            "country": "French Polynesia",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": []
          },
          "PG": {
            "country": "Papua New Guinea",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": []
          },
          "PH": {
            "country": "Philippines",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["philippinesLow", "philippinesHigh"]
          },
          "PK": {
            "country": "Pakistan",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["pakistanLow", "pakistanHigh"]
          },
          "PL": {
            "country": "Poland",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["polandLow", "polandHigh"]
          },
          "PM": {
            "country": "Saint Pierre and Miquelon",
            "continent_code": "NA",
            "continent": "North America",
            "maps": ["stPierreMiquelonLow", "stPierreMiquelonHigh"]
          },
          "PN": {
            "country": "Pitcairn",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": []
          },
          "PR": {
            "country": "Puerto Rico",
            "continent_code": "NA",
            "continent": "North America",
            "maps": ["puertoRicoLow", "puertoRicoHigh"]
          },
          "PS": {
            "country": "Palestinian, State of",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["palestineLow", "palestineHigh"]
          },
          "PT": {
            "country": "Portugal",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["portugalLow", "portugalHigh", "portugalRegionsLow", "portugalRegionsHigh"]
          },
          "PW": {
            "country": "Palau",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": []
          },
          "PY": {
            "country": "Paraguay",
            "continent_code": "SA",
            "continent": "South America",
            "maps": ["paraguayLow", "paraguayHigh"]
          },
          "QA": {
            "country": "Qatar",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["qatarLow", "qatarHigh"]
          },
          "RE": {
            "country": "Reunion",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": []
          },
          "RO": {
            "country": "Romania",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["romaniaLow", "romaniaHigh"]
          },
          "RS": {
            "country": "Serbia",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["serbiaLow", "serbiaHigh", "serbiaNoKosovoLow", "serbiaNoKosovoHigh"]
          },
          "RU": {
            "country": "Russian Federation",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["russiaLow", "russiaHigh", "russiaCrimeaLow", "russiaCrimeaHigh"]
          },
          "RW": {
            "country": "Rwanda",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": []
          },
          "SA": {
            "country": "Saudi Arabia",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["saudiArabiaLow", "saudiArabiaHigh"]
          },
          "SB": {
            "country": "Solomon Islands",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": ["solomonIslandsLow", "solomonIslandsHigh"]
          },
          "SC": {
            "country": "Seychelles",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["seychellesLow", "seychellesHigh"]
          },
          "SD": {
            "country": "Sudan",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["sudanLow", "sudanHigh"]
          },
          "SE": {
            "country": "Sweden",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["swedenLow", "swedenHigh"]
          },
          "SG": {
            "country": "Singapore",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["singaporeLow", "singaporeHigh"]
          },
          "SH": {
            "country": "Saint Helena, Ascension and Tristan da Cunha",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["saintHelenaLow", "saintHelenaHigh"]
          },
          "SI": {
            "country": "Slovenia",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["sloveniaLow", "sloveniaHigh", "sloveniaRegionsLow", "sloveniaRegionsHigh"]
          },
          "SJ": {
            "country": "Svalbard and Jan Mayen",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["svalbardLow", "svalbardHigh"]
          },
          "SK": {
            "country": "Slovakia",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["slovakiaLow", "slovakiaHigh"]
          },
          "SL": {
            "country": "Sierra Leone",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": []
          },
          "SM": {
            "country": "San Marino",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["sanMarinoLow", "sanMarinoHigh"]
          },
          "SN": {
            "country": "Senegal",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["senegalLow", "senegalHigh"]
          },
          "SO": {
            "country": "Somalia",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["somaliaLow", "somaliaHigh"]
          },
          "SR": {
            "country": "Suriname",
            "continent_code": "SA",
            "continent": "South America",
            "maps": []
          },
          "SS": {
            "country": "South Sudan",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": []
          },
          "ST": {
            "country": "Sao Tome and Principe",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["saoTomePrincipeLow", "saoTomePrincipeHigh"]
          },
          "SV": {
            "country": "El Salvador",
            "continent_code": "NA",
            "continent": "North America",
            "maps": ["elSalvadorLow", "elSalvadorHigh"]
          },
          "SX": {
            "country": "Sint Maarten (Dutch Part)",
            "continent_code": "NA",
            "continent": "North America",
            "maps": []
          },
          "SY": {
            "country": "Syrian Arab Republic",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["syriaLow", "syriaHigh"]
          },
          "SZ": {
            "country": "Swaziland",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["eswatiniLow", "eswatiniHigh"]
          },
          "TC": {
            "country": "Turks and Caicos Islands",
            "continent_code": "NA",
            "continent": "North America",
            "maps": []
          },
          "TD": {
            "country": "Chad",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["chadLow", "chadHigh"]
          },
          "TF": {
            "country": "French Southern Territories",
            "continent_code": "AN",
            "continent": "Antarctica",
            "maps": []
          },
          "TG": {
            "country": "Togo",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": []
          },
          "TH": {
            "country": "Thailand",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["thailandLow", "thailandHigh"]
          },
          "TJ": {
            "country": "Tajikistan",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["tajikistanLow", "tajikistanHigh"]
          },
          "TK": {
            "country": "Tokelau",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": []
          },
          "TL": {
            "country": "Timor-Leste",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": []
          },
          "TM": {
            "country": "Turkmenistan",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": []
          },
          "TN": {
            "country": "Tunisia",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["tunisiaLow", "tunisiaHigh"]
          },
          "TO": {
            "country": "Tonga",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": []
          },
          "TR": {
            "country": "Turkey",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["turkeyLow", "turkeyHigh"]
          },
          "TT": {
            "country": "Trinidad and Tobago",
            "continent_code": "NA",
            "continent": "North America",
            "maps": []
          },
          "TV": {
            "country": "Tuvalu",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": []
          },
          "TW": {
            "country": "Taiwan, Province of China",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": []
          },
          "TZ": {
            "country": "Tanzania, United Republic of",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["tanzaniaLow", "tanzaniaHigh"]
          },
          "UA": {
            "country": "Ukraine",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["ukraineLow", "ukraineHigh"]
          },
          "UG": {
            "country": "Uganda",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": []
          },
          "UM": {
            "country": "United States Minor Outlying Islands",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": []
          },
          "US": {
            "country": "United States",
            "continent_code": "NA",
            "continent": "North America",
            "maps": ["usaLow", "usaHigh", "usaTerritoriesLow", "usaTerritoriesHigh", "usaTerritories2Low", "usaTerritories2High"]
          },
          "UY": {
            "country": "Uruguay",
            "continent_code": "SA",
            "continent": "South America",
            "maps": []
          },
          "UZ": {
            "country": "Uzbekistan",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["uzbekinstanLow", "uzbekinstanHigh"]
          },
          "VA": {
            "country": "Holy See (Vatican City State)",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["vaticanLow", "vaticanHigh"]
          },
          "VC": {
            "country": "Saint Vincent and the Grenadines",
            "continent_code": "NA",
            "continent": "North America",
            "maps": ["saintVincentLow", "saintVincentHigh"]
          },
          "VE": {
            "country": "Venezuela, Bolivarian Republic of",
            "continent_code": "SA",
            "continent": "South America",
            "maps": ["venezuelaLow", "venezuelaHigh"]
          },
          "VG": {
            "country": "Virgin Islands, British",
            "continent_code": "NA",
            "continent": "North America",
            "maps": []
          },
          "VI": {
            "country": "Virgin Islands, U.S.",
            "continent_code": "NA",
            "continent": "North America",
            "maps": []
          },
          "VN": {
            "country": "Viet Nam",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["vietnamLow", "vietnamHigh"]
          },
          "VU": {
            "country": "Vanuatu",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": []
          },
          "WF": {
            "country": "Wallis and Futuna",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": []
          },
          "WS": {
            "country": "Samoa",
            "continent_code": "OC",
            "continent": "Oceania",
            "maps": ["samoaLow", "samoaHigh"]
          },
          "YE": {
            "country": "Yemen",
            "continent_code": "AS",
            "continent": "Asia",
            "maps": ["yemenLow", "yemenHigh"]
          },
          "YT": {
            "country": "Mayotte",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": []
          },
          "ZA": {
            "country": "South Africa",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["southAfricaLow", "southAfricaHigh"]
          },
          "ZM": {
            "country": "Zambia",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["zambiaLow", "zambiaHigh"]
          },
          "ZW": {
            "country": "Zimbabwe",
            "continent_code": "AF",
            "continent": "Africa",
            "maps": ["zimbabweLow", "zimbabweHigh"]
          },
          "XK": {
            "country": "Kosovo",
            "continent_code": "EU",
            "continent": "Europe",
            "maps": ["kosovoLow", "kosovoHigh"]
          }
        };


        var continents = {
          "AF": 0,
          "AN": 1,
          "AS": 2,
          "EU": 3,
          "NA": 4,
          "OC": 5,
          "SA": 6
        }

        // Create map instance
        var chart = am4core.create("chartdiv", am4maps.MapChart);
        chart.projection = new am4maps.projections.Miller();

        // Create map polygon series for world map
        var worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
        worldSeries.useGeodata = true;
        worldSeries.geodata = am4geodata_worldLow;
        worldSeries.exclude = ["AQ"];

        var worldPolygon = worldSeries.mapPolygons.template;
        worldPolygon.tooltipText = "{name}";
        worldPolygon.nonScalingStroke = true;
        worldPolygon.strokeOpacity = 0.5;
        worldPolygon.fill = am4core.color("#eee");
        worldPolygon.propertyFields.fill = "color";

        var hs = worldPolygon.states.create("hover");
        hs.properties.fill = chart.colors.getIndex(9);


        // Create country specific series (but hide it for now)
        var countrySeries = chart.series.push(new am4maps.MapPolygonSeries());
        countrySeries.useGeodata = true;
        countrySeries.hide();
        countrySeries.geodataSource.events.on("done", function (ev) {
          worldSeries.hide();
          countrySeries.show();
        });

        var countryPolygon = countrySeries.mapPolygons.template;
        countryPolygon.tooltipText = "{name}";
        countryPolygon.nonScalingStroke = true;
        countryPolygon.strokeOpacity = 0.5;
        countryPolygon.fill = am4core.color("#eee");

        hs = countryPolygon.states.create("hover");
        hs.properties.fill = chart.colors.getIndex(9);

        // Set up click events
        worldPolygon.events.on("hit", function (ev) {
          ev.target.series.chart.zoomToMapObject(ev.target);
          var map = ev.target.dataItem.dataContext.map;
          if (map) {
            ev.target.isHover = false;
            countrySeries.geodataSource.url = "https://www.amcharts.com/lib/4/geodata/json/" + map + ".json";
            countrySeries.geodataSource.load();
          }
        });

        // Set up data for countries
        var data = [];
        for (var id in countries) {
          if (countries.hasOwnProperty(id)) {
            var country = countries[id];
            if (country.maps.length) {
              data.push({
                id: id,
                color: chart.colors.getIndex(continents[country.continent_code]),
                map: country.maps[0]
              });
            }
          }
        }
        worldSeries.data = data;

        // Zoom control
        chart.zoomControl = new am4maps.ZoomControl();

        var homeButton = new am4core.Button();
        homeButton.events.on("hit", function () {
          worldSeries.show();
          countrySeries.hide();
          chart.goHome();
        });

        homeButton.icon = new am4core.Sprite();
        homeButton.padding(7, 5, 7, 5);
        homeButton.width = 30;
        homeButton.icon.path = "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
        homeButton.marginBottom = 10;
        homeButton.parent = chart.zoomControl;
        homeButton.insertBefore(chart.zoomControl.plusButton);

      });
    });
  }
}
export { index, dynamicChart, initSelect2, getActiveLink }


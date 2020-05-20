<template>
  <div>
    <div class="topbar">
      <div class="left">
        left
      </div>
      <div class="center">
        Salah App
      </div>
      <div class="right">
        right
      </div>
    </div>
    
    <hooper :settings="hooperSettings" pagination="no" ref="carousel" @slide="updateCarousel">
      <slide v-bind:key="item.id" v-for="(item) in calendar">
        <b-alert variant="primary" show>{{ item.date.gregorian.weekday.en }}, {{ item.date.readable }}</b-alert>
        <b-list-group class="padding">
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            {{ item.timings.Imsak }}
            <b-badge variant="light" pill>Imsak</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            {{ item.timings.Fajr }}
            <b-badge variant="primary" pill>Fajr</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            {{ item.timings.Sunrise }}
            <b-badge variant="light" pill>Sunrise</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            {{ item.timings.Dhuhr }}
            <b-badge variant="primary" pill>Dhuhr</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            {{ item.timings.Asr }}
            <b-badge variant="primary" pill>Asr</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            {{ item.timings.Sunset }}
            <b-badge variant="light" pill>Sunset</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            {{ item.timings.Maghrib }}
            <b-badge variant="primary" pill>Maghrib</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            {{ item.timings.Isha }}
            <b-badge variant="primary" pill>Isha</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            {{ item.timings.Midnight }}
            <b-badge variant="light" pill>Midnight</b-badge>
          </b-list-group-item>
        </b-list-group>
      </slide>
    </hooper>
  </div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'

import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: 'Home',
  metaInfo: {
    title: 'Salah App',
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Salah App' }
    ]
  },
  components: {
    Hooper,
    Slide
  },
	data() {
		return {
      calendar: [],
      latitude: 25.280872,
      longitude: 55.372453,
      today: new Date(),
      todayDate: moment(this.today).format('D'),
      todayMonth: moment(this.today).format('M'),
      todayYear: moment(this.today).format('Y'),
      hooperSettings: {
        itemsToShow: 1,
        itemsToSlide: 1,
        initialSlide: moment(this.today).format('D') - 1,
        wheelControl: true,
        infiniteScroll: true,
        centerMode: false,
        progress: true
      }
    }
	},
  methods: {
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide;
    }
  },
	mounted () {
		var url = 'http://api.aladhan.com/v1/calendar?latitude='+this.latitude+'&longitude=-'+this.longitude+'&method=2&month='+this.todayMonth+'&year='+this.todayYear
    console.log(url)
    axios.get(url).then(response => {
			this.calendar = response.data.data
		});
	}
}
</script>

<style scoped>
.list-group {
  margin-bottom: 2rem;
}
h1 {
  text-align:center;
}
.hooper {
  margin: 0 auto;
  width: 90%;
  max-width: 420px;
  height: auto;
}
</style>

<template>
  <div>
    <h1>Home</h1>
    <h2>{{ todayDate | moment('D') }}</h2>
    <hr />
    <b-container>
      <b-row>
        <b-col cols="4" md="4" sides="t" v-bind:key="item.id" v-for="(item) in calendar">
          <b-alert variant="primary" show>{{ item.date.gregorian.weekday.en }}, {{ item.date.readable }}</b-alert>
          <b-alert variant="warning" class="text-lg-right" show>
            <span>{{ item.date.hijri.day }}</span>
            <span>{{ item.date.hijri.month.ar }}</span>
            <span>{{ item.date.hijri.year }}</span>
          </b-alert>
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
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueMoment from 'vue-moment'
Vue.use(VueMoment)

export default {
  name: 'Home',
  metaInfo: {
    title: 'Prayer Timings',
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Prayer Timings' }
    ]
  },
	data() {
		return {
      calendar: [],
      todayDate: new Date().toLocaleString()
		}
	},
	mounted () {
		var url = 'http://api.aladhan.com/v1/calendar?latitude=25.280872&longitude=-55.372453&method=2&month=5&year=2020'
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
.alert {
  margin-bottom: 0rem;
}
</style>

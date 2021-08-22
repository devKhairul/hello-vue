<template>
  <div class="events">
    <h1>Events For Good</h1>
    <EventCard v-for="event in events" :event="event" :key="event.id" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import axios from 'axios';

export default {
  name: "EventsList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: null
    }
  },
  created() {
    axios
    .get('https://my-json-server.typicode.com/devKhairul/hello-vue/events')
    .then( response => {
      this.events = response.data
    })
    .catch(error => {
      console.log(error)
    })
          
  }
};
</script>


<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
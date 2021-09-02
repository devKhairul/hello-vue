<template>
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold pb-4">Events For Good</h1>
    
    <div class="grid grid-cols-3">
      <EventCard v-for="event in events" :event="event" :key="event.id" />
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventServices from "@/services/EventServices.js";

export default {
  name: "EventsList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    }
  },
  created() {
    EventServices.getEvents()
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
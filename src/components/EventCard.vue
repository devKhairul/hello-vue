<template>
  <router-link :to="{ name: 'EventDetails', params: { id: event.id } }">
    
      <div class="hover:bg-green-100 border border-green-500 p-4 m-2">
        <span>@ {{ event.time }} on {{ event.date }} </span>
        <h4 class="font-bold text-green-500">{{ event.title }} </h4>
      </div>
    
  </router-link>

  
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  },
};
</script>


<style scoped>

</style>

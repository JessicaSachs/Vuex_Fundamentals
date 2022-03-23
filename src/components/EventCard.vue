<template>
  <div class="event-card" data-testid="event">
    <span>{{ eventDateTime }}</span>
    <h4>{{ event.title }}</h4>
  </div>
</template>

<script>
export default {
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  computed: {
    eventDateTime() {
      let eventDateTime = []
      if (this.event.time) {
        eventDateTime.push(`@${this.event.time}`)
      }

      if (this.event.date) {
        eventDateTime.push(`on ${this.event.date}`)
      }

      return eventDateTime.join(' ')
    }
  }
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>

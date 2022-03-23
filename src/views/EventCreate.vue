<template>
  <h1>Create an event</h1>

  <div class="form-container">
    <form @submit.prevent="onSubmit" name="create-event">
      <label for="category">Select a category: </label>
      <select v-model="event.category" id="category">
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === event.category"
          >{{ option }}</option
        >
      </select>

      <h3>Name & describe your event</h3>

      <label for="title">Title</label>
      <input v-model="event.title" type="text" placeholder="Title" id="title" />

      <label for="description">Description</label>
      <input
        v-model="event.description"
        type="text"
        placeholder="Description"
        id="description"
      />

      <h3>Where is your event?</h3>

      <label for="location">Location</label>
      <input v-model="event.location" type="text" placeholder="Location" id="location"/>

      <h3>When is your event?</h3>
      <label for="date">Date</label>
      <input v-model="event.date" type="text" placeholder="Date" id="date"/>

      <label for="time">Time</label>
      <input v-model="event.time" type="text" placeholder="Time" id="time"/>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import { eventCategories } from '../constants'

export default {
  data() {
    return {
      categories: eventCategories,
      event: {
        id: '',
        category: '',
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        organizer: ''
      }
    }
  },
  methods: {
    onSubmit() {
      const event = {
        ...this.event,
        id: uuidv4(),
        organizer: this.$store.state.user
      }
      this.$store
        .dispatch('createEvent', event)
        .then(() => {
          this.$router.push({
            name: 'EventDetails',
            params: { id: event.id }
          })
        })
        .catch(error => {
          this.$router.push({
            name: 'ErrorDisplay',
            params: { error: error }
          })
        })
    }
  }
}
</script>

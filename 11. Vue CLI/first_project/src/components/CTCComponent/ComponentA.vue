<template>
  <div>
    <h2>Component A</h2>
    <p>{{ aname }}</p>
    <button @click="sendMessage">Send Message to Component B</button>
  </div>
</template>

<script>
import { EventBus } from '../../eventBus.js'; // Import the event bus

export default {
  props: {
    aname: String,
  },
  methods: {
    sendMessage() {
      // Emit an event with a message using the event bus
      EventBus.emit('messageToB', 'Hello from Component A');
    }
  }
};
</script>

<style scoped>
/* Your styles here */
</style>

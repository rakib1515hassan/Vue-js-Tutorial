<template>
  <div>
    <h2>Component B</h2>
    <p>{{ bname }}</p>
    <span class="message-display" v-if="messageData">{{ messageData }}</span>
  </div>
</template>



<script>
  import { EventBus } from '../../eventBus.js'; // Import the event bus

  export default {
    props: {
      bname: String,
      message: String,
    },
    data() {
      return {
        messageData: this.message // Use a data property to handle the message
      };
    },
    created() {
      // Listen for the event from Component A using the event bus
      EventBus.on('messageToB', (msg) => {
        this.messageData = msg; // Update the data property
      });
    }
  };
</script>




<style scoped>
  /* Your styles here */
  .message-display{
    background: green;
    color: white;
    padding: 5px;
    border-radius: 5px;
  }
</style>

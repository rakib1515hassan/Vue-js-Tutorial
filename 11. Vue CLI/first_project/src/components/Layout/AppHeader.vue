<template>
  <header class="header-container">
    <div class="header-content">
      <!-- Company Logo -->
      <div class="logo">
        <img src="https://via.placeholder.com/150x50.png?text=Logo" alt="Company Logo" />
        <h2>{{ companyName }}</h2>
      </div>

      <!-- Navigation Menu -->
      <nav class="nav-menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <!-- Call to Action Button -->
      <div class="cta">
        <button class="cta-button">Get Started</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: ['companyName'],
}
</script>

<style scoped>
.header-container {
  background-color: #1a1a1a;
  color: white;
  padding: 15px 0;
  font-family: 'Roboto', sans-serif;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 50px;
  margin-right: 10px;
}

.logo h2 {
  font-size: 20px;
  margin: 0;
  color: #ffffff;
}

.nav-menu ul {
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
  margin: 0;
}

.nav-menu a {
  text-decoration: none;
  color: white;
  font-size: 16px;
  transition: color 0.3s;
}

.nav-menu a:hover {
  color: #f0f0f0;
}

.cta-button {
  background-color: #ff6600;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #e65c00;
}
</style>

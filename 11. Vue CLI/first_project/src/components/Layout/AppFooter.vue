<template>
  <footer class="footer-container">
    <div class="footer-content">
      <!-- Company Information -->
      <div class="footer-section">
        <h2>About Us</h2>
        <p>
          We are committed to providing the best services and products to our customers. Learn more about our company values and team.
        </p>
      </div>

      <!-- Quick Links -->
      <div class="footer-section">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <!-- Contact Information -->
      <div class="footer-section">
        <h2>Contact Us</h2>
        <p>123 Main St, Somewhere City, Country</p>
        <p>Email: info@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>

      <!-- Social Media Links -->
      <div class="footer-section social-media">
        <h2>Follow Us</h2>
        <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
        <a href="#" class="social-icon"><i class="fab fa-linkedin"></i></a>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <p>&copy; 2024 Texon Limited. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  font-family: 'Roboto', sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  margin: 10px;
}

.footer-section h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.footer-section p,
.footer-section ul {
  font-size: 14px;
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 8px;
}

.footer-section ul li a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #ddd;
}

.social-media {
  display: flex;
  align-items: center;
}

.social-media a {
  color: #fff;
  font-size: 20px;
  margin-right: 10px;
  transition: color 0.3s;
}

.social-media a:hover {
  color: #ddd;
}

.footer-bottom {
  text-align: center;
  padding: 10px;
  background-color: #222;
  margin-top: 20px;
}
</style>

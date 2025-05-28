
// import "./Home.scss"
// const Home = () => {
//   return (
//     <div className="home">
//       {/* Hero Section */}
//       <div className="hero">
//         <h1>Discover & Buy Local Art</h1>
//         <p>Connecting artists with art lovers worldwide.</p>
//         <button className="explore-btn">Explore Art</button>
//       </div>

//       {/* Categories */}
//       <section className="categories">
//         <h2>Art Categories</h2>
//         <div className="category-list">
//           <div className="category">Paintings</div>
//           <div className="category">Sculptures</div>
//           <div className="category">Digital Art</div>
//           <div className="category">Handicrafts</div>
//         </div>
//       </section>

//       {/* Featured Artists */}
//       <section className="featured-artists">
//         <h2>Top Artists</h2>
//         <div className="artist-list">
//           <div className="artist-card">🎨 Ramesh Kumar</div>
//           <div className="artist-card">🖌️ Sneha Kapoor</div>
//           <div className="artist-card">🖼️ Aarav Sharma</div>
//         </div>
//       </section>

//       {/* Popular Artworks */}
//       <section className="popular-artworks">
//         <h2>Popular Artworks</h2>
//         <div className="art-grid">
//           <div className="art-card">🌟 Art 1</div>
//           <div className="art-card">🌟 Art 2</div>
//           <div className="art-card">🌟 Art 3</div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;



import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="content">
          <h1>Discover & Support Local Artists</h1>
          <p>Explore unique, handcrafted art from talented artists around you.</p>
          <Link to="/marketplace" className="btn">Explore Marketplace</Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Explore Art Categories</h2>
        <div className="category-list">
          <div className="category">
            <img src="/images/paintings.jpg" alt="Paintings" />
            <h3>Paintings</h3>
          </div>
          <div className="category">
            <img src="/images/jewelry.jpg" alt="Handmade Jewelry" />
            <h3>Jewelry</h3>
          </div>
          <div className="category">
            <img src="/images/sculptures.jpg" alt="Sculptures" />
            <h3>Sculptures</h3>
          </div>
          <div className="category">
            <img src="/images/digital-art.jpg" alt="Digital Art" />
            <h3>Digital Art</h3>
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="featured">
        <h2>Featured Artists</h2>
        <div className="artists">
          <div className="artist">
            <img src="/images/artist1.jpg" alt="Artist 1" />
            <h3>Riya Sharma</h3>
            <p>Specializes in Abstract Paintings</p>
          </div>
          <div className="artist">
            <img src="/images/artist2.jpg" alt="Artist 2" />
            <h3>Aarav Verma</h3>
            <p>Creates Beautiful Handcrafted Jewelry</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;



































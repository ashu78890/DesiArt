import "../styles/explore.scss";

const Explore = () => {
  return (
    <div className="explore">
      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search for art..." />
        <button>Search</button>
      </div>

      {/* Filters */}
      <div className="filters">
        <button>Category</button>
        <button>Price</button>
        <button>Popularity</button>
      </div>

      {/* Art Grid */}
      <div className="art-grid">
        <div className="art-card">🎨 Art 1</div>
        <div className="art-card">🖼️ Art 2</div>
        <div className="art-card">🖌️ Art 3</div>
      </div>
    </div>
  );
};

export default Explore;

import './About.css';

export const About = () => {
  return (
    <div className="about-page">
      <div className="about-page__hero">
        <div className="container">
          <h1 className="about-page__title">About SAYAA</h1>
          <p className="about-page__subtitle">Your Destination for Premium Crop Tops</p>
        </div>
      </div>

      <div className="container">
        <section className="about-section">
          <div className="about-section__content">
            <h2 className="about-section__title">Our Story</h2>
            <p className="about-section__text">
              SAYAA was born from a passion for fashion and a commitment to quality. 
              We believe that every wardrobe deserves versatile, stylish, and comfortable 
              crop tops that can elevate any outfit.
            </p>
            <p className="about-section__text">
              Our curated collection features only the finest crop tops, carefully selected 
              to meet the highest standards of quality and style. From classic basics to 
              statement pieces, we offer something for every fashion enthusiast.
            </p>
          </div>
          <div className="about-section__image">
            <img
              src="https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&h=600&fit=crop"
              alt="Fashion"
            />
          </div>
        </section>

        <section className="about-section about-section--reverse">
          <div className="about-section__content">
            <h2 className="about-section__title">Our Vision</h2>
            <p className="about-section__text">
              We envision a world where fashion is accessible, sustainable, and empowering. 
              Our mission is to provide premium crop tops that not only look great but 
              also make you feel confident and stylish.
            </p>
            <p className="about-section__text">
              With our signature teal color and modern designs, we're redefining what it 
              means to shop for crop tops. Every piece in our collection is thoughtfully 
              designed to be a wardrobe staple.
            </p>
          </div>
          <div className="about-section__image">
            <img
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&h=600&fit=crop"
              alt="Style"
            />
          </div>
        </section>

        <section className="about-values">
          <h2 className="about-values__title">Our Values</h2>
          <div className="about-values__grid">
            <div className="about-value">
              <div className="about-value__icon">✨</div>
              <h3 className="about-value__title">Quality First</h3>
              <p className="about-value__text">
                We source only the finest materials and work with trusted manufacturers 
                to ensure every product meets our high standards.
              </p>
            </div>
            <div className="about-value">
              <div className="about-value__icon">🎨</div>
              <h3 className="about-value__title">Modern Design</h3>
              <p className="about-value__text">
                Our designs are contemporary, versatile, and always on-trend. We stay 
                ahead of fashion while maintaining timeless appeal.
              </p>
            </div>
            <div className="about-value">
              <div className="about-value__icon">❤️</div>
              <h3 className="about-value__title">Customer Focus</h3>
              <p className="about-value__text">
                Your satisfaction is our priority. We're committed to providing excellent 
                service and a seamless shopping experience.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};


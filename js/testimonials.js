// Superclass
class Testimonial {
    #quote = "";
    #image = "";
    // # = private
  
    constructor(quote, image) {
      this.#quote = quote;
      this.#image = image;
    }
  
    get quote() {
      return this.#quote;
    }
  
    get image() {
      return this.#image;
    }
  
    get author() {
      throw new Error("getAuthor() method must be implemented");
    }
  
    get testimonialHTML() {
      return `<div class="testimonial">
                  <img
                      src="${this.image}"
                      class="profile-testimonial"
                  />
                  <p class="quote">${this.quote}</p>
                  <p class="author">- ${this.author}</p>
              </div>
          `;
    }
  }
  
  // Subclass
  class AuthorTestimonials extends Testimonial {
    #author = "";
  
    constructor(author, quote, image) {
      super(quote, image);
      this.#author = author;
    }
  
    get author() {
      return this.#author;
    }
  }
  
  // Subclass
  class CompanyTestimonials extends Testimonial {
    #company = "";
  
    constructor(company, quote, image) {
      super(quote, image);
      this.#company = company;
    }
  
    get author() {
      return this.#company + " (Mugiwara Crew)";
    }
  }
  // Subclass
  class AnotherCompanyTestimonials extends Testimonial {
    #anothercompany = "";
  
    constructor(anothercompany, quote, image) {
      super(quote, image);
      this.#anothercompany = anothercompany;
    }
  
    get author() {
      return this.#anothercompany + " (Akagami Crew)";
    }
  }
  
  const testimonial1 = new CompanyTestimonials(
    "Luffy",
    "Keren!🔥🔥🔥",
    "assets/images/png/profile1.png"
  );
  const testimonial2 = new CompanyTestimonials(
    "Sanji",
    "Mantap!🔥🔥🔥",
    "assets/images/png/profile2.png"
  );
  const testimonial3 = new CompanyTestimonials(
    "Zoro",
    "Gokil!🔥🔥🔥",
    "assets/images/png/profile3.png"
  );
  const testimonial4 = new AuthorTestimonials(
    "X Drake",
    "Gila!🔥🔥🔥",
    "assets/images/png/profile7.png"
  );
  const testimonial5 = new AuthorTestimonials(
    "Ace",
    "Cool!🔥🔥🔥",
    "assets/images/png/profile5.png"
  );
  const testimonial6 = new AuthorTestimonials(
    "Trafalgar Law",
    "Perfect!🔥🔥🔥",
    "assets/images/png/profile6.png"
  );
  const testimonial7 = new AnotherCompanyTestimonials(
    "Ben Beckman",
    "Amazing!🔥🔥🔥",
    "assets/images/png/profile4.png"
  );
  const testimonial8 = new AnotherCompanyTestimonials(
    "Yasop",
    "Good!🔥🔥🔥",
    "assets/images/png/profile8.png"
  );
  const testimonial9 = new AnotherCompanyTestimonials(
    "Lucky roo",
    "Wow!🔥🔥🔥",
    "assets/images/png/profile9.png"
  );
  
  let testimonialData = [testimonial1, testimonial2, testimonial3, testimonial4, testimonial5, testimonial6, testimonial7, testimonial8, testimonial9];
  let testimonialHTML = "";
  
  for (let i = 0; i < testimonialData.length; i++) {
    testimonialHTML += testimonialData[i].testimonialHTML;
  }
  
  document.getElementById("testimonials").innerHTML = testimonialHTML;
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperDirective } from '../../directive/swiper.directive';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-testimonial',
  imports: [SwiperDirective],
  templateUrl: './testimonial.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestimonialComponent {

  testimonial = [
    {
      "name": "Robert Beck",
      "role": "Product Designer",
      "image": "assets/images/client/img-1.jpg",
      "testimonial": "I highly recommend hiring developers for your team. As a company that recently brought on several developers, I can attest to the incredible value they bring to our projects."
    },
    {
      "name": "William Appel",
      "role": "Founder & CEO",
      "image": "assets/images/client/img-2.jpg",
      "testimonial": "I recently worked with the best designer in the industry to create a custom design for my business, and I couldn't be happier with the results. The attention to detail and creativity that went into the design was truly outstanding."
    },
    {
      "name": "Earlene Mart",
      "role": "Digital Marketer",
      "image": "assets/images/client/img-3.jpg",
      "testimonial": "Thank to you this software's marketing tools, they consistently offered valuable guidance, suggesting effective strategies to enhance our marketing setup, and ensuring clarity and conciseness in every aspect."
    },
    {
      "name": "Timothy Green",
      "role": "Marketing Officer",
      "image": "assets/images/client/img-4.jpg",
      "testimonial": "This template is exquisitely designed and offers fantastic new features. It receives regular updates, ensuring top-notch quality. The support team is unparalleled, providing prompt, courteous, premium, and exceptionally helpful assistance."
    }
  ]
  swiperConfig: SwiperOptions = {
    centeredSlides: true,
    spaceBetween: 24,
    loop: true,
    navigation: {
      nextEl: '.slider-next',
      prevEl: '.slider-prev',
    }
  }
}

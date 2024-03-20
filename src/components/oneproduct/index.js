import React from "react";
import "./index.css";
import { useState, useEffect } from "react";
import Card from "../card";

export default function Product() {

  return (
    <section id="portfolio-details" class="portfolio-details">
    <div class="container">

      <div class="row gy-4">

        <div class="col-lg-8">
          <div class="portfolio-details-slider swiper">
            <div class="swiper-wrapper align-items-center">

              <div class="swiper-slide">
                <img src={'https://cdn.dummyjson.com/product-images/1/thumbnail.jpg'} alt="" />
              </div>

              <div class="swiper-slide">
                <img src="assets/img/portfolio-details-2.jpg" alt="" />
              </div>

              <div class="swiper-slide">
                <img src="assets/img/portfolio-details-3.jpg" alt="" />
              </div>

            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="portfolio-info">
            <h3>Project information</h3>
            <ul>
              <li><strong>Title</strong>: Web design</li>
              <li><strong>Category</strong>: ASU Company</li>
            </ul>
          </div>
          <div class="portfolio-description">
            <h2>This is an example of portfolio detail</h2>
            <p>
              Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi lt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
  );
}
